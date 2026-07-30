const KEYS = ['A', 'B', 'C', 'D', 'E', 'F']
const ansText = q => (Array.isArray(q.answer) ? q.answer[0] : q.answer)

function Section({ title, en, children }) {
  return (
    <section className="ex-section">
      <div className="ex-sechead">
        <span className="ex-secnum" />
        <h2>{title}</h2>
        <span className="ex-secen">{en}</span>
      </div>
      {children}
    </section>
  )
}

export default function ExportView({ lesson }) {
  if (!lesson) return null
  const core = lesson.core || {}

  return (
    <div className="ex-root">
      <div className="ex-bg" />
      <div className="ex-content">
        <header className="ex-header">
          <div className="ex-kicker">ENGLISH READER · 学习档案</div>
          <div className="ex-date">{lesson.date}</div>
          <h1 className="ex-title">{lesson.title}</h1>
          <div className="ex-meta">
            {lesson.source && <span className="ex-source">{lesson.source}</span>}
            {lesson.tags && lesson.tags.map((t, i) => <span className="ex-tag" key={i}>{t}</span>)}
          </div>
        </header>

        <Section title="正文" en="PASSAGE">
          <div className="ex-passage">
            {lesson.passage.map((p, i) => (
              <div className="ex-para" key={i}>
                <div className="ex-en">{p.en}</div>
                <div className="ex-zh">{p.zh}</div>
              </div>
            ))}
          </div>
        </Section>

        {(core.words?.length > 0 || core.grammar?.length > 0) && (
          <Section title="核心词 / 核心语法" en="CORE">
            <div className="ex-coregrid">
              {core.words?.map((w, i) => (
                <div className="ex-cw" key={i}>
                  <div className="ex-cw-w">{w.w} <span className="ex-pos">{w.pos}</span></div>
                  <div className="ex-phon">{w.phon}</div>
                  <div className="ex-cw-def">{w.def}</div>
                  {w.ex_en && <div className="ex-cw-ex">{w.ex_en}<br />{w.ex_zh}</div>}
                </div>
              ))}
            </div>
            {core.grammar?.map((g, i) => (
              <div className="ex-cg" key={i}><b>{g.t}</b>　{g.d}</div>
            ))}
          </Section>
        )}

        {lesson.vocab?.length > 0 && (
          <Section title="生词表" en="VOCABULARY">
            <div className="ex-vocab">
              {lesson.vocab.map((v, i) => (
                <div className="ex-vrow" key={i}>
                  <div className="ex-vw">{v.w} <span className="ex-phon">{v.phon}</span> <span className="ex-pos">{v.pos}</span></div>
                  <div className="ex-vd">{v.def}{v.ex_en && <span className="ex-vex">　·　{v.ex_en} —— {v.ex_zh}</span>}</div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {(lesson.grammar?.length > 0 || lesson.sentences?.length > 0) && (
          <Section title="语法详解 / 难句分析" en="GRAMMAR">
            {lesson.grammar?.map((g, i) => (
              <div className="ex-gcard" key={i}>
                <div className="ex-gt">{g.t}</div>
                {g.pattern && <div className="ex-gpat">{g.pattern}</div>}
                <div className="ex-grule">{g.rule}</div>
                {g.examples?.map((e, j) => (
                  <div className="ex-gex" key={j}>• {e.en}<br /><span>{e.zh}</span></div>
                ))}
              </div>
            ))}
            {lesson.sentences?.map((s, i) => (
              <div className="ex-gcard" key={'s' + i}>
                <div className="ex-sen">{s.en}</div>
                {s.zh && <div className="ex-senzh">{s.zh}</div>}
                <div className="ex-analysis">{s.analysis}</div>
              </div>
            ))}
          </Section>
        )}

        {lesson.quiz?.length > 0 && (
          <Section title="课后练习（附答案）" en="PRACTICE">
            {lesson.quiz.map((q, i) => (
              <div className="ex-q" key={i}>
                <div className="ex-qtag">{q.tag || (q.type === 'fill' ? '填空' : '选择')}</div>
                <div className="ex-qtext">
                  {q.type === 'fill'
                    ? q.q.replace(/_{2,}/, m => `【${ansText(q)}】`)
                    : q.q}
                </div>
                {q.type !== 'fill' && (
                  <div className="ex-opts">
                    {q.options.map((o, oi) => (
                      <div className={'ex-opt' + (oi === q.answer ? ' on' : '')} key={oi}>
                        <span className="ex-key">{KEYS[oi]}</span>
                        <span>{o}</span>
                        {oi === q.answer && <span className="ex-check">✓ 正确答案</span>}
                      </div>
                    ))}
                  </div>
                )}
                {q.explain && <div className="ex-qexplain">💡 {q.explain}</div>}
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  )
}
