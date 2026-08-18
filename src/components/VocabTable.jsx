import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function VocabTable({ vocab, vocabFlash }) {
  const [open, setOpen] = useState(() => new Set())
  const [flashing, setFlashing] = useState(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const word = vocabFlash && vocabFlash.word
    if (!word) return
    const row = wrapRef.current?.querySelector('[data-vocab="' + word.replace(/"/g, '') + '"]')
    if (!row) return
    const idx = Number(row.getAttribute('data-idx'))
    if (vocab?.[idx]?.ex_en) {
      setOpen((prev) => {
        const next = new Set(prev)
        next.add(idx)
        return next
      })
    }
    row.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setFlashing(word)
    const t = setTimeout(() => setFlashing(null), 950)
    return () => clearTimeout(t)
  }, [vocabFlash && vocabFlash.n]) // eslint-disable-line

  const withEx = useMemo(
    () => (vocab || []).map((v, i) => (v.ex_en ? i : -1)).filter((i) => i >= 0),
    [vocab],
  )

  if (!vocab || !vocab.length) return null
  const allOpen = withEx.length > 0 && withEx.every((i) => open.has(i))

  const toggle = (i) => {
    const next = new Set(open)
    next.has(i) ? next.delete(i) : next.add(i)
    setOpen(next)
  }

  const toggleAll = () => {
    if (allOpen) setOpen(new Set())
    else setOpen(new Set(withEx))
  }

  return (
    <div className="vocab-wrap" ref={wrapRef}>
      {withEx.length > 0 && (
        <div className="vocab-toolbar">
          <button type="button" className={'btn' + (allOpen ? ' on' : '')} onClick={toggleAll}>
            {allOpen ? '收起全部例句' : '展开全部例句'}
          </button>
          <span className="vocab-toolbar-hint">
            {allOpen ? '学词表模式 · 例句全开' : '默认可逐条点开'}
          </span>
        </div>
      )}

      <div className="vocab">
        {vocab.map((v, i) => {
          const expanded = open.has(i)
          return (
            <div
              key={i}
              data-idx={i}
              data-vocab={(v.w || '').toLowerCase()}
              className={'vocab-row' + (expanded ? ' expanded' : '') + (flashing === (v.w || '').toLowerCase() ? ' flash' : '')}
            >
              <div className="v-word">
                <span className="w">{v.w}</span>
                {v.phon && <span className="phon">{v.phon}</span>}
                {v.pos && <span className="pos">{v.pos}</span>}
              </div>
              <div className="v-def">
                {v.def}
                {v.def_en && <div className="v-def-en">{v.def_en}</div>}
                {v.syn?.length > 0 && (
                  <div className="v-syn">
                    <span className="v-syn-label">≈</span>
                    {v.syn.join(' · ')}
                  </div>
                )}
                {v.ex_en && (
                  <span className="v-toggle" onClick={() => toggle(i)}>
                    {expanded ? '收起例句' : '例句'}
                  </span>
                )}
                <AnimatePresence initial={false}>
                  {expanded && v.ex_en && (
                    <motion.div
                      className="v-ex"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="v-ex-inner">
                        {v.ex_en}
                        {v.ex_zh && <span className="v-ex-zh">{v.ex_zh}</span>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
