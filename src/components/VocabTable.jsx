import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function VocabTable({ vocab }) {
  const [open, setOpen] = useState(() => new Set())
  if (!vocab || !vocab.length) return null

  const withEx = useMemo(
    () => vocab.map((v, i) => (v.ex_en ? i : -1)).filter((i) => i >= 0),
    [vocab],
  )
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
    <div className="vocab-wrap">
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
            <div key={i} className={'vocab-row' + (expanded ? ' expanded' : '')}>
              <div className="v-word">
                <span className="w">{v.w}</span>
                {v.phon && <span className="phon">{v.phon}</span>}
                {v.pos && <span className="pos">{v.pos}</span>}
              </div>
              <div className="v-def">
                {v.def}
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
