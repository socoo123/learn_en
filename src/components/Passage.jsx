import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

export default function Passage({ lesson, zhMode, passageFlash, onMarkClick }) {
  const coreWords = (lesson.core && lesson.core.words) || []
  const [flashing, setFlashing] = useState(null)
  const ref = useRef(null)

  const phrases = useMemo(
    () => [...new Set(coreWords.map(w => w.w).filter(Boolean))].sort((a, b) => b.length - a.length),
    [coreWords]
  )
  const regex = useMemo(
    () => phrases.length ? new RegExp('\\b(' + phrases.map(escapeReg).join('|') + ')\\b', 'gi') : null,
    [phrases]
  )
  const titleMap = useMemo(() => {
    const m = {}
    coreWords.forEach(w => { if (w.w) m[w.w.toLowerCase()] = w })
    return m
  }, [coreWords])

  // 收到右侧传来的「在正文中闪烁」信号
  useEffect(() => {
    const word = passageFlash && passageFlash.word
    if (!word) return
    const container = ref.current
    if (!container) return
    const mark = container.querySelector('mark[data-word="' + word.replace(/"/g, '') + '"]')
    if (mark) {
      mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setFlashing(word)
      const t = setTimeout(() => setFlashing(null), 950)
      return () => clearTimeout(t)
    }
  }, [passageFlash && passageFlash.n]) // eslint-disable-line

  const renderEn = (text) => {
    if (!regex) return text
    regex.lastIndex = 0
    const out = []
    let last = 0
    let m
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) out.push(<span key={'t' + last}>{text.slice(last, m.index)}</span>)
      const w = m[0]
      const wl = w.toLowerCase()
      const def = titleMap[wl]
      out.push(
        <mark
          className={'hl' + (flashing === wl ? ' flash' : '')}
          data-word={wl}
          key={'m' + m.index}
          title={def ? `${def.def || ''}${def.ex_zh ? ' ｜ ' + def.ex_zh : ''}` : ''}
          onClick={() => onMarkClick(wl)}
        >{w}</mark>
      )
      last = m.index + w.length
    }
    if (last < text.length) out.push(<span key={'t' + last}>{text.slice(last)}</span>)
    return out
  }

  const showZh = zhMode === 'expanded'

  return (
    <div className="passage" ref={ref}>
      {lesson.passage.map((p, i) => (
        <div className="para" key={i}>
          <div className="en">{renderEn(p.en)}</div>
          <AnimatePresence initial={false}>
            {showZh && (
              <motion.div
                className="zh-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24, ease: 'easeInOut' }}
              >
                <div className="zh">{p.zh}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
