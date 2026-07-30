import { useEffect, useState } from 'react'

export default function Annotations({ lesson, cardFlash, onWordClick }) {
  const words = (lesson.core && lesson.core.words) || []
  const grammar = (lesson.core && lesson.core.grammar) || []
  const [flashing, setFlashing] = useState(null)

  useEffect(() => {
    const word = cardFlash && cardFlash.word
    if (!word) return
    setFlashing(word)
    const t = setTimeout(() => setFlashing(null), 950)
    return () => clearTimeout(t)
  }, [cardFlash && cardFlash.n]) // eslint-disable-line

  return (
    <aside className="annot">
      <h3>本课核心词 · CORE</h3>
      {words.length ? words.map((w, i) => (
        <div
          key={i} className={'core-word' + (flashing === w.w.toLowerCase() ? ' flash' : '')}
          onClick={() => onWordClick(w.w.toLowerCase())}
        >
          <div className="cw-head">
            <span className="cw-w">{w.w}</span>
            {w.pos && <span className="cw-pos">{w.pos}</span>}
            {w.phon && <span className="cw-phon">{w.phon}</span>}
          </div>
          <div className="cw-def">{w.def}</div>
          {w.ex_en && <div className="cw-ex">{w.ex_en}<br />{w.ex_zh}</div>}
        </div>
      )) : <div style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>无</div>}

      <h3>核心语法 · GRAMMAR</h3>
      {grammar.length ? grammar.map((g, i) => (
        <div key={i} className="core-gram">
          <div className="cg-t">{g.t}</div>
          <div className="cg-d">{g.d}</div>
        </div>
      )) : <div style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>无</div>}
    </aside>
  )
}
