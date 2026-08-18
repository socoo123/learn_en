import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { buildMarkIndex } from '../lib/word-marks.js'

function VocabTip({ tip }) {
  if (!tip) return null
  const { entry, x, y, below } = tip
  return (
    <div
      className={'vw-tip' + (below ? ' below' : '')}
      role="tooltip"
      style={{ left: x, top: y }}
    >
      <div className="vw-tip-head">
        <span className="vw-tip-w">{entry.w}</span>
        {entry.pos && <span className="vw-tip-pos">{entry.pos}</span>}
        {entry.phon && <span className="vw-tip-phon">{entry.phon}</span>}
      </div>
      {entry.def && <div className="vw-tip-def">{entry.def}</div>}
      {entry.def_en && <div className="vw-tip-en">{entry.def_en}</div>}
      {entry.syn?.length > 0 && (
        <div className="vw-tip-syn">
          <span>≈</span>
          {entry.syn.join(' · ')}
        </div>
      )}
    </div>
  )
}

export default function Passage({ lesson, zhMode, passageFlash, onMarkClick, onVocabClick }) {
  const [flashing, setFlashing] = useState(null)
  const [tip, setTip] = useState(null)
  const ref = useRef(null)

  const index = useMemo(
    () => buildMarkIndex(lesson.core?.words, lesson.vocab),
    [lesson],
  )

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

  useEffect(() => {
    if (!tip) return
    const hide = () => setTip(null)
    const reader = ref.current?.closest('.reader')
    reader?.addEventListener('scroll', hide, { passive: true })
    window.addEventListener('resize', hide)
    return () => {
      reader?.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
    }
  }, [tip])

  const showVocabTip = (el, entry) => {
    const r = el.getBoundingClientRect()
    const below = r.top < 150
    const pad = 16
    const half = 148
    const x = Math.min(
      window.innerWidth - half - pad,
      Math.max(half + pad, r.left + r.width / 2),
    )
    setTip({
      entry,
      x,
      y: below ? r.bottom + 8 : r.top - 8,
      below,
    })
  }

  const renderEn = (text) => {
    const regex = index.regex
    if (!regex) return text
    regex.lastIndex = 0
    const out = []
    let last = 0
    let m
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) out.push(<span key={'t' + last}>{text.slice(last, m.index)}</span>)
      const w = m[0]
      const wl = w.toLowerCase()
      const info = index.lookup[wl]
      if (info?.kind === 'vocab') {
        const entry = info.entry
        out.push(
          <mark
            className={'vw' + (flashing === info.canonical ? ' flash' : '')}
            data-word={info.canonical}
            key={'m' + m.index}
            onMouseEnter={(e) => showVocabTip(e.currentTarget, entry)}
            onMouseLeave={() => setTip(null)}
            onClick={() => onVocabClick && onVocabClick(info.canonical)}
          >{w}</mark>
        )
      } else {
        const def = info?.entry
        out.push(
          <mark
            className={'hl' + (flashing === (info?.canonical || wl) ? ' flash' : '')}
            data-word={info?.canonical || wl}
            key={'m' + m.index}
            title={def ? `${def.def || ''}${def.ex_zh ? ' ｜ ' + def.ex_zh : ''}` : ''}
            onClick={() => onMarkClick(info?.canonical || wl)}
          >{w}</mark>
        )
      }
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
      <VocabTip tip={tip} />
    </div>
  )
}
