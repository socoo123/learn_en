export default function Grammar({ grammar, sentences }) {
  return (
    <>
      {grammar && grammar.length > 0 && (
        <section className="section">
          <div className="sec-head"><h2>语法详解</h2><span className="sec-en">GRAMMAR</span></div>
          <hr className="sec-rule" />
          {grammar.map((g, i) => (
            <div className="gcard" key={i}>
              <h3>{g.t}</h3>
              {g.pattern && <div className="pattern">{g.pattern}</div>}
              <p className="rule">{g.rule}</p>
              {g.examples && g.examples.length > 0 && (
                <ul className="ex-list">
                  {g.examples.map((e, j) => (
                    <li key={j}>{e.en}<span className="z">{e.zh}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {sentences && sentences.length > 0 && (
        <section className="section">
          <div className="sec-head"><h2>难句分析</h2><span className="sec-en">SENTENCE BREAKDOWN</span></div>
          <hr className="sec-rule" />
          {sentences.map((s, i) => (
            <div className="scard" key={i}>
              <p className="sen-en">{s.en}</p>
              {s.zh && <p className="sen-zh">{s.zh}</p>}
              <div className="analysis">{s.analysis}</div>
            </div>
          ))}
        </section>
      )}
    </>
  )
}
