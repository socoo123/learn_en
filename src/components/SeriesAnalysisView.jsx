export default function SeriesAnalysisView({ series, onBack }) {
  if (!series) {
    return (
      <main className="home series-detail">
        <div className="home-inner">
          <button type="button" className="btn" onClick={onBack}>
            ← 返回首页
          </button>
          <div className="empty" style={{ marginTop: 24 }}>
            <h2>未找到该系列</h2>
          </div>
        </div>
      </main>
    )
  }

  const a = series.analysis || {}
  const sections =
    a.sections?.length > 0
      ? a.sections
      : [
          a.suitableFor && { heading: '适合谁', body: a.suitableFor },
          (a.totalWords != null || a.newWordsEst != null) && {
            heading: '词汇与生词',
            body: [
              a.totalWords != null ? `全篇约 ${a.totalWords} 词。` : '',
              a.newWordsEst != null ? `对你预计生词约 ${a.newWordsEst} 个。` : '',
            ]
              .filter(Boolean)
              .join(' '),
          },
          a.gains?.length > 0 && {
            heading: '学完能做什么',
            body: a.gains.map((g) => `· ${g}`).join('\n'),
          },
        ].filter(Boolean)

  return (
    <main className="home series-detail">
      <div className="home-inner">
        <div className="series-detail-bar">
          <button type="button" className="btn" onClick={onBack}>
            ← 返回首页
          </button>
        </div>

        <header className="series-detail-head">
          <p className="series-detail-kicker">SERIES ANALYSIS</p>
          <h1>
            {series.date ? `${series.date} ` : ''}
            {series.title}
          </h1>
          {series.totalMin != null && (
            <p className="series-detail-meta">
              共约 {series.totalMin} 分钟
              {series.estimateDays ? ` · 建议 ${series.estimateDays} 天学完` : ''}
            </p>
          )}
        </header>

        {(a.totalWords != null || a.newWordsEst != null || a.suitableFor) && (
          <div className="series-detail-stats">
            {a.suitableFor && (
              <div className="series-stat">
                <div className="series-stat-label">适合水平</div>
                <div className="series-stat-val">{a.suitableFor}</div>
              </div>
            )}
            {a.totalWords != null && (
              <div className="series-stat">
                <div className="series-stat-label">总词汇</div>
                <div className="series-stat-val">约 {a.totalWords}</div>
              </div>
            )}
            {a.newWordsEst != null && (
              <div className="series-stat">
                <div className="series-stat-label">对你生词</div>
                <div className="series-stat-val">约 {a.newWordsEst}</div>
              </div>
            )}
          </div>
        )}

        {a.gains?.length > 0 && (
          <section className="series-detail-gains">
            <h2>全学会，你可以</h2>
            <ul>
              {a.gains.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="series-detail-sections">
          {sections.map((sec) => (
            <section key={sec.heading} className="series-detail-sec">
              <h2>{sec.heading}</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>{sec.body}</p>
            </section>
          ))}
          {sections.length === 0 && (
            <p className="zone-empty">本系列尚未写入详细分析。</p>
          )}
        </div>
      </div>
    </main>
  )
}
