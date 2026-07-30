import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function VocabTable({ vocab }) {
  const [open, setOpen] = useState(() => new Set())
  if (!vocab || !vocab.length) return null

  const toggle = i => {
    const next = new Set(open)
    next.has(i) ? next.delete(i) : next.add(i)
    setOpen(next)
  }

  return (
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
                <span className="v-toggle" onClick={() => toggle(i)}>{expanded ? '收起例句' : '例句'}</span>
              )}
              <AnimatePresence initial={false}>
                {expanded && v.ex_en && (
                  <motion.div
                    className="v-ex" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <div style={{ paddingTop: 6 }}>
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
  )
}
