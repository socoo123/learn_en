const KEYS = ['A', 'B', 'C', 'D', 'E', 'F']
const ansText = q => (Array.isArray(q.answer) ? q.answer[0] : q.answer)

function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

// 与网页 Passage.jsx 相同的核心词高亮逻辑（静态版，无闪烁/点击）
function buildHighlighter(coreWords) {
  const phrases = [...new Set((coreWords || []).map(w => w.w).filter(Boolean))].sort((a, b) => b.length - a.length)
  if (!phrases.length) return null
  return new RegExp('\\b(' + phrases.map(escapeReg).join('|') + ')\\b', 'gi')
}

function renderEn(text, regex) {
  if (!regex) return text
  regex.lastIndex = 0
  const out = []
  let last = 0
  let m
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) out.push(<span key={'t' + last}>{text.slice(last, m.index)}</span>)
    out.push(<mark className="ex-hl" key={'m' + m.index}>{m[0]}</mark>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(<span key={'t' + last}>{text.slice(last)}</span>)
  return out
}

// 与网页 .section > .sec-head + .sec-rule 一致的小节标题
function Section({ title, en, children }) {
  return (
    <section className="ex-section">
      <div className="ex-sechead">
        <h2>{title}</h2>
        <span className="ex-secen">{en}</span>
      </div>
      <div className="ex-rule"><span /></div>
      {children}
    </section>
  )
}

// 右侧栏：镜像网页 Annotations.jsx（本课核心词 + 核心语法）
function ExportAnnotations({ core }) {
  const words = core.words || []
  const grammar = core.grammar || []
  return (
    <aside className="ex-side">
      <h3 className="ex-side-h">本课核心词 · CORE</h3>
      {words.length ? words.map((w, i) => (
        <div className="ex-cw" key={i}>
          <div className="ex-cw-head">
            <span className="ex-cw-w">{w.w}</span>
            {w.pos && <span className="ex-pos">{w.pos}</span>}
            {w.phon && <span className="ex-phon">{w.phon}</span>}
          </div>
          <div className="ex-cw-def">{w.def}</div>
          {w.ex_en && (
            <div className="ex-cw-ex">
              {w.ex_en}
              {w.ex_zh && <span className="ex-cw-exzh">{w.ex_zh}</span>}
            </div>
          )}
        </div>
      )) : <div className="ex-side-empty">无</div>}

      <h3 className="ex-side-h">核心语法 · GRAMMAR</h3>
      {grammar.length ? grammar.map((g, i) => (
        <div className="ex-cg" key={i}>
          <div className="ex-cg-t">{g.t}</div>
          <div className="ex-cg-d">{g.d}</div>
        </div>
      )) : <div className="ex-side-empty">无</div>}
    </aside>
  )
}

export default function ExportView({ lesson }) {
  if (!lesson) return null
  const core = lesson.core || {}
  const hlRegex = buildHighlighter(core.words)

  return (
    <div className="ex-root">
      <div className="ex-bg" />
      <div className="ex-bg-b" />
      <div className="ex-content">
        <header className="ex-header">
          <div className="ex-kicker">ENGLISH READER · 学习档案</div>
          <h1 className="ex-title"><span className="ex-ldate">{lesson.date}</span>　{lesson.title}</h1>
          <div className="ex-meta">
            {lesson.source && <span>来源：{lesson.source}</span>}
            {lesson.source && lesson.tags && lesson.tags.length > 0 && <span className="ex-dot">·</span>}
            {lesson.tags && lesson.tags.map((t, i) => <span className="ex-tag" key={i}>{t}</span>)}
          </div>
          <div className="ex-headrule"><span /></div>
        </header>

        <div className="ex-layout">
          <div className="ex-main">
            <div className="ex-passage">
              {lesson.passage.map((p, i) => (
                <div className="ex-para" key={i}>
                  <div className="ex-en">{renderEn(p.en, hlRegex)}</div>
                  <div className="ex-zh">{p.zh}</div>
                </div>
              ))}
            </div>

            {lesson.vocab?.length > 0 && (
              <Section title="生词表" en="VOCABULARY">
                <div className="ex-vocab">
                  {lesson.vocab.map((v, i) => (
                    <div className="ex-vrow" key={i}>
                      <div className="ex-vword">
                        <span className="ex-vw">{v.w}</span>
                        {v.phon && <span className="ex-phon">{v.phon}</span>}
                        {v.pos && <span className="ex-pos">{v.pos}</span>}
                      </div>
                      <div className="ex-vd">
                        {v.def}
                        {v.ex_en && (
                          <div className="ex-vex">
                            {v.ex_en}
                            {v.ex_zh && <span className="ex-vex-zh">{v.ex_zh}</span>}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {lesson.grammar?.length > 0 && (
              <Section title="语法详解" en="GRAMMAR">
                {lesson.grammar.map((g, i) => (
                  <div className="ex-gcard" key={i}>
                    <h3>{g.t}</h3>
                    {g.pattern && <div className="ex-gpat">{g.pattern}</div>}
                    <p className="ex-grule">{g.rule}</p>
                    {g.examples && g.examples.length > 0 && (
                      <ul className="ex-gexlist">
                        {g.examples.map((e, j) => (
                          <li key={j}>{e.en}<span className="z">{e.zh}</span></li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Section>
            )}

            {lesson.sentences?.length > 0 && (
              <Section title="难句分析" en="SENTENCE BREAKDOWN">
                {lesson.sentences.map((s, i) => (
                  <div className="ex-scard" key={i}>
                    <p className="ex-sen">{s.en}</p>
                    {s.zh && <p className="ex-senzh">{s.zh}</p>}
                    <div className="ex-analysis">{s.analysis}</div>
                  </div>
                ))}
              </Section>
            )}

            {lesson.quiz?.length > 0 && (
              <Section title="课后练习" en="PRACTICE">
                {lesson.quiz.map((q, i) => (
                  <div className="ex-qcard" key={i}>
                    <span className="ex-qtag">{q.tag || (q.type === 'fill' ? '填空' : '选择')}</span>
                    <div className="ex-qtext">
                      {q.type === 'fill'
                        ? q.q.replace(/_{2,}/, () => `【${ansText(q)}】`)
                        : q.q}
                    </div>
                    {q.type !== 'fill' && (
                      <div className="ex-opts">
                        {q.options.map((o, oi) => (
                          <div className={'ex-opt' + (oi === q.answer ? ' correct' : '')} key={oi}>
                            <span className="ex-key">{KEYS[oi]}</span>
                            <span>{o}</span>
                            {oi === q.answer && <span className="ex-check">✓ 正确答案</span>}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="ex-qfb">
                      <div>
                        参考答案：
                        <span className="ex-ans">
                          {q.type === 'fill' ? ansText(q) : `${KEYS[q.answer]}. ${q.options[q.answer]}`}
                        </span>
                      </div>
                      {q.explain && <div className="ex-qexplain">💡 {q.explain}</div>}
                    </div>
                  </div>
                ))}
              </Section>
            )}
          </div>

          <ExportAnnotations core={core} />
        </div>

        <footer className="ex-foot">英语笔记本 · ENGLISH READER · {lesson.date}</footer>
      </div>
    </div>
  )
}
