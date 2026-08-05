import { useState } from 'react'
import { useProgress } from '../hooks/useProgress.jsx'
import { CEFR_LEVELS, resolveCefrId } from '../data/cefr-levels.js'

export default function AssessmentView({ onBack }) {
  const { assessment, readingFeedback, copyRecentFeedback } = useProgress()
  const [copied, setCopied] = useState(false)
  const currentId = resolveCefrId(assessment)

  const onCopy = async () => {
    const ok = await copyRecentFeedback()
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } else {
      alert('复制失败，请检查浏览器剪贴板权限')
    }
  }

  const fb = readingFeedback
  const fbTotal = (fb.easy || 0) + (fb.ok || 0) + (fb.hard || 0)

  return (
    <main className="home assessment-page">
      <div className="home-inner">
        <div className="series-detail-bar assessment-bar">
          <button type="button" className="btn" onClick={onBack}>
            ← 返回首页
          </button>
          <button type="button" className="btn" onClick={onCopy}>
            {copied ? '已复制' : '复制近期反馈'}
          </button>
        </div>

        <header className="series-detail-head">
          <p className="series-detail-kicker">YOUR LEVEL</p>
          <h1>个人水平评估</h1>
          <p className="series-detail-meta">
            基于 CEFR（欧洲语言共同参考框架），对照外企听会 / 读写场景自评。
          </p>
        </header>

        <section className="level-card assessment-current">
          <div className="level-card-label">当前评估</div>
          <h2 className="level-card-level">{assessment.level}</h2>
          {assessment.range && <p className="level-card-range">{assessment.range}</p>}
          {assessment.summary && <p className="level-card-summary">{assessment.summary}</p>}

          {(assessment.strengths?.length > 0 || assessment.focus?.length > 0) && (
            <div className="level-card-cols">
              {assessment.strengths?.length > 0 && (
                <div>
                  <div className="level-card-mini">强项</div>
                  <ul>
                    {assessment.strengths.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {assessment.focus?.length > 0 && (
                <div>
                  <div className="level-card-mini">下一步</div>
                  <ul>
                    {assessment.focus.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="level-card-foot">
            <span>{assessment.basedOn || '依据学习反馈持续更新'}</span>
            {fbTotal > 0 && (
              <span className="level-card-fb">
                反馈 {fbTotal}：好读 {fb.easy} · 刚好 {fb.ok} · 难读 {fb.hard}
              </span>
            )}
          </div>
        </section>

        <section className="cefr-guide">
          <h2 className="cefr-guide-title">等级一览 · 对照自评</h2>
          <p className="cefr-guide-intro">
            从低到高浏览。若多数描述符合你现在的状态，就大致落在该档；高一档只有少数能做到，则还在过渡区（如 B1～B1+）。
          </p>

          <div className="cefr-list">
            {CEFR_LEVELS.map((lv) => {
              const active = currentId === lv.id
              return (
                <article
                  key={lv.id}
                  className={'cefr-card' + (active ? ' current' : '')}
                  id={`cefr-${lv.id}`}
                >
                  <div className="cefr-card-head">
                    <span className="cefr-id">{lv.id}</span>
                    <h3>{lv.title}</h3>
                    {active && <span className="cefr-badge">你大致在这</span>}
                  </div>
                  <div className="cefr-card-mini">大致能做到</div>
                  <ul>
                    {lv.canDo.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="cefr-work">
                    <strong>外企场景：</strong>
                    {lv.workScene}
                  </p>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
