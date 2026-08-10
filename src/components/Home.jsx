import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DoneCheckbox, MiniBar } from './ProgressBits.jsx'
import { useProgress } from '../hooks/useProgress.jsx'
import { SERIES } from '../data/series.js'

const MONTH_EN = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const SHADOW_GOAL = '把长材料拆成约 1 分钟，反复精听精读，练出能用的语感。'
const READING_GOAL = '每天一篇短文，积累真实词汇；根据「好读/难读」反馈调难度。'

function Chevron({ open }) {
  return (
    <svg
      className={'chev' + (open ? ' open' : '')}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

function estimateLabel(days) {
  if (!days) return ''
  if (days <= 35) return '预计一个月学完'
  if (days <= 70) return '预计两个月学完'
  return `预计约 ${days} 天学完`
}

/** Last N calendar months as "YYYY-MM" including current. */
export function recentMonthKeys(n = 3, now = new Date()) {
  const keys = []
  const y = now.getFullYear()
  const m = now.getMonth() // 0-based
  for (let i = 0; i < n; i++) {
    const d = new Date(y, m - i, 1)
    const yy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    keys.push(`${yy}-${mm}`)
  }
  return keys
}

function buildMonthTree(lessons) {
  const years = {}
  for (const l of lessons) {
    const y = l.date.slice(0, 4)
    const m = l.date.slice(5, 7)
    if (!years[y]) years[y] = {}
    if (!years[y][m]) years[y][m] = []
    years[y][m].push(l)
  }
  return years
}

function matchesQuery(l, q) {
  if (!q) return true
  const hay = [
    l.title,
    l.date,
    l.source,
    l.kind,
    l.seriesId,
    l.part,
    (l.tags || []).join(' '),
    (l.core?.words || []).map((w) => w.w).join(' '),
    (l.vocab || []).map((v) => v.w).join(' '),
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}

function readingMeta(l) {
  const s = l.stats
  if (!s) {
    const min = l.durationMin
    return min ? `预计${min}分钟读完` : ''
  }
  const parts = []
  if (s.words != null) parts.push(`词汇${s.words}`)
  if (s.newWords != null) parts.push(`生词${s.newWords}`)
  if (s.minutes != null) parts.push(`预计${s.minutes}分钟读完`)
  return parts.join('，')
}

export default function Home({
  lessons,
  onOpenLesson,
  onOpenSeries,
  onOpenAssessment,
  theme,
  toggleTheme,
}) {
  const {
    isDone,
    setDone,
    monthStats,
    seriesStats,
    exportProgress,
    importFromFile,
    fileSync,
  } = useProgress()
  const [query, setQuery] = useState('')
  const fileRef = useRef(null)
  const [manualOpen, setManualOpen] = useState({})

  const q = query.trim().toLowerCase()
  const searching = Boolean(q)

  const shadowLessons = useMemo(
    () =>
      lessons
        .filter((l) => l.kind === 'shadow')
        .filter((l) => matchesQuery(l, q))
        .sort((a, b) => {
          const c = (a.seriesId || '').localeCompare(b.seriesId || '')
          if (c) return c
          return String(a.part || '').localeCompare(String(b.part || ''))
        }),
    [lessons, q],
  )

  const allowedMonths = useMemo(() => new Set(recentMonthKeys(3)), [])

  const readingOnly = useMemo(
    () =>
      lessons
        .filter((l) => l.kind === 'reading')
        .filter((l) => {
          const ym = (l.date || '').slice(0, 7)
          return searching || allowedMonths.has(ym)
        })
        .filter((l) => matchesQuery(l, q))
        .sort((a, b) => (b.date || '').localeCompare(a.date || '')),
    [lessons, q, searching, allowedMonths],
  )

  const seriesMetaById = useMemo(() => {
    const map = Object.fromEntries(SERIES.map((s) => [s.id, s]))
    // Infer meta from lessons if series.js entry missing
    for (const l of shadowLessons) {
      if (!l.seriesId || map[l.seriesId]) continue
      map[l.seriesId] = {
        id: l.seriesId,
        title: (l.title || '').replace(/\s*\d+\s*$/, '').trim() || l.seriesId,
        date: l.date,
        totalMin: null,
        estimateDays: 30,
      }
    }
    return map
  }, [shadowLessons])

  const seriesGroups = useMemo(() => {
    const order = []
    const groups = {}
    for (const l of shadowLessons) {
      const sid = l.seriesId || '_unknown'
      if (!groups[sid]) {
        groups[sid] = []
        order.push(sid)
      }
      groups[sid].push(l)
    }
    // Prefer SERIES order (newest date first), then leftover
    const seriesOrder = [...SERIES]
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      .map((s) => s.id)
    const sortedIds = [
      ...seriesOrder.filter((id) => groups[id]),
      ...order.filter((id) => !seriesOrder.includes(id)),
    ]
    return sortedIds.map((id) => ({
      meta: seriesMetaById[id] || { id, title: id, date: '' },
      items: groups[id] || [],
    }))
  }, [shadowLessons, seriesMetaById])

  const readingTree = useMemo(() => buildMonthTree(readingOnly), [readingOnly])

  const isBlockOpen = (key, complete) => {
    if (manualOpen[key] !== undefined) return manualOpen[key]
    if (searching) return true
    return !complete
  }

  const toggleBlock = (key, complete) => {
    setManualOpen((prev) => ({ ...prev, [key]: !isBlockOpen(key, complete) }))
  }

  const onImportClick = () => fileRef.current?.click()
  const onFileChange = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    try {
      await importFromFile(file)
    } catch (err) {
      alert('导入失败：文件格式不正确')
      console.error(err)
    }
  }

  const yearKeys = Object.keys(readingTree).sort((a, b) => b.localeCompare(a))
  const hasShadow = seriesGroups.length > 0
  const hasReading = yearKeys.length > 0
  const emptyAll = !hasShadow && !hasReading

  return (
    <main className="home">
      <div className="home-inner">
        <header className="home-head">
          <div className="home-brand">
            <span className="home-logo">EN</span>
            <div>
              <h1>英语笔记本</h1>
              <p className="home-sub">SHADOW + DAILY READ</p>
            </div>
          </div>
          <div className="home-actions">
            <button
              type="button"
              className="btn btn-link-assess"
              onClick={onOpenAssessment}
              title="查看个人水平评估与等级说明"
            >
              个人评估
            </button>
            <button className="btn" onClick={toggleTheme} title="切换深浅色">
              {theme === 'dark' ? '🌙 深色' : '☀️ 浅色'}
            </button>
            <button className="btn" onClick={exportProgress} title="导出进度 JSON">
              导出进度
            </button>
            <button className="btn" onClick={onImportClick} title="导入进度 JSON">
              导入进度
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={onFileChange}
            />
          </div>
        </header>

        <input
          className="search home-search"
          placeholder="搜索 标题 / 单词 / 日期…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {emptyAll ? (
          <div className="empty">
            <h2>{searching ? '没有匹配的课程' : '还没有课程'}</h2>
            <p>
              {searching
                ? '换个关键词试试'
                : '把 YouTube 文稿发给我拆成精听片段，或让我「生成今日阅读」。'}
            </p>
          </div>
        ) : (
          <div className="home-zones">
            {/* —— 尚雯婕学习法 —— */}
            <section className="home-zone">
              <header className="zone-head">
                <h2 className="zone-title">尚雯婕学习法</h2>
                <p className="zone-goal">{SHADOW_GOAL}</p>
              </header>

              {!hasShadow ? (
                <div className="zone-empty">
                  暂无精听系列。把约 10–20 分钟的文稿/字幕发给我，按约 1 分钟拆成多份。
                </div>
              ) : (
                <div className="month-stack">
                  {seriesGroups.map(({ meta, items }) => {
                    const key = `series:${meta.id}`
                    const stats = seriesStats[meta.id] || {
                      done: 0,
                      total: items.length,
                      complete: false,
                    }
                    const open = isBlockOpen(key, stats.complete)
                    const est = estimateLabel(meta.estimateDays)
                    const sub =
                      meta.totalMin != null
                        ? `${meta.totalMin}分${est ? `，${est}` : ''}`
                        : est || `${items.length} 份`
                    const analysis = meta.analysis
                    return (
                      <div key={meta.id} className="series-row">
                        <div
                          className={
                            'month-block series-main' + (stats.complete ? ' complete' : '')
                          }
                        >
                          <button
                            type="button"
                            className="month-head"
                            onClick={() => toggleBlock(key, stats.complete)}
                          >
                            <Chevron open={open} />
                            <span className="month-name series-name">
                              {meta.date ? `${meta.date} ` : ''}
                              {meta.title}
                              <span className="month-en">（{sub}）</span>
                            </span>
                            {stats.complete && <span className="month-badge">✓ 完成</span>}
                            <span className="month-count">
                              {stats.done}/{stats.total}
                            </span>
                            <div className="month-bar-wrap">
                              <MiniBar value={stats.done} max={stats.total} />
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                key="list"
                                className="day-stack"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: 'easeInOut' }}
                              >
                                {items.map((l) => {
                                  const done = isDone(l.id)
                                  const label =
                                    l.part != null
                                      ? `${l.date} ${meta.title} ${String(l.part).padStart(2, '0')}`
                                      : `${l.date} ${l.title}`
                                  return (
                                    <div
                                      key={l.id}
                                      className={'day-row' + (done ? ' done' : '')}
                                      onClick={() => onOpenLesson(l.id)}
                                    >
                                      <DoneCheckbox
                                        checked={done}
                                        onChange={(v) => setDone(l.id, v)}
                                      />
                                      <div className="day-body">
                                        <div className="day-ttl">{label}</div>
                                        <div className="day-meta">
                                          {l.timeRange && (
                                            <span className="day-time">视频 {l.timeRange}</span>
                                          )}
                                          {l.durationMin != null && !l.timeRange && (
                                            <span>约 {l.durationMin} 分钟</span>
                                          )}
                                          {l.tags &&
                                            l.tags.map((t) => (
                                              <span className="tag" key={t}>
                                                {t}
                                              </span>
                                            ))}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <aside className="series-side">
                          <div className="series-side-label">材料分析</div>
                          {analysis ? (
                            <>
                              <p className="series-side-summary">
                                {analysis.summary || analysis.suitableFor || '查看详情了解适听水平与收益'}
                              </p>
                              <div className="series-side-meta">
                                {analysis.totalWords != null && (
                                  <span>词汇约 {analysis.totalWords}</span>
                                )}
                                {analysis.newWordsEst != null && (
                                  <span>生词约 {analysis.newWordsEst}</span>
                                )}
                              </div>
                              <button
                                type="button"
                                className="btn series-side-btn"
                                onClick={() => onOpenSeries?.(meta.id)}
                              >
                                查看分析详情
                              </button>
                            </>
                          ) : (
                            <p className="series-side-summary muted">
                              导入文稿后会生成适听水平、词汇量与学完收益分析。
                            </p>
                          )}
                        </aside>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>

            {/* —— 每日英语阅读 —— */}
            <section className="home-zone">
              <header className="zone-head">
                <h2 className="zone-title">每日英语阅读</h2>
                <p className="zone-goal">{READING_GOAL}</p>
              </header>

              {!hasReading ? (
                <div className="zone-empty">
                  {searching
                    ? '没有匹配的阅读课'
                    : '近三个月暂无阅读。对我说「生成今日阅读」即可追加一篇。'}
                </div>
              ) : (
                <div className="home-years">
                  {yearKeys.map((y) => {
                    const months = readingTree[y]
                    const monthKeys = Object.keys(months).sort((a, b) => b.localeCompare(a))
                    return (
                      <div className="home-year" key={y}>
                        <h3 className="home-year-title reading-year">{y}</h3>
                        <div className="month-stack">
                          {monthKeys.map((m) => {
                            const ym = `${y}-${m}`
                            const items = months[m]
                            const stats = monthStats[ym] || {
                              done: 0,
                              total: items.length,
                              complete: false,
                            }
                            const open = isBlockOpen(ym, stats.complete)
                            const mi = Number(m)
                            return (
                              <div
                                key={ym}
                                className={'month-block' + (stats.complete ? ' complete' : '')}
                              >
                                <button
                                  type="button"
                                  className="month-head"
                                  onClick={() => toggleBlock(ym, stats.complete)}
                                >
                                  <Chevron open={open} />
                                  <span className="month-name">
                                    {y}-{m}
                                    <span className="month-en"> · {MONTH_EN[mi]}</span>
                                  </span>
                                  {stats.complete && (
                                    <span className="month-badge">✓ 完成</span>
                                  )}
                                  <span className="month-count">
                                    {stats.done}/{stats.total}
                                  </span>
                                  <div className="month-bar-wrap">
                                    <MiniBar value={stats.done} max={stats.total} />
                                  </div>
                                </button>

                                <AnimatePresence initial={false}>
                                  {open && (
                                    <motion.div
                                      key="list"
                                      className="day-stack"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                                    >
                                      {items.map((l) => {
                                        const done = isDone(l.id)
                                        const meta = readingMeta(l)
                                        return (
                                          <div
                                            key={l.id}
                                            className={'day-row' + (done ? ' done' : '')}
                                            onClick={() => onOpenLesson(l.id)}
                                          >
                                            <DoneCheckbox
                                              checked={done}
                                              onChange={(v) => setDone(l.id, v)}
                                            />
                                            <div className="day-body">
                                              <div className="day-ttl">
                                                {l.date} {l.title}
                                                {meta ? (
                                                  <span className="day-stats">（{meta}）</span>
                                                ) : null}
                                              </div>
                                              <div className="day-meta">
                                                {l.source && <span>{l.source}</span>}
                                                {l.tags &&
                                                  l.tags.map((t) => (
                                                    <span className="tag" key={t}>
                                                      {t}
                                                    </span>
                                                  ))}
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          </div>
        )}

        <footer className="home-foot">
          精听 {shadowLessons.length} 份 · 阅读 {readingOnly.length} 篇（近三月）
          {fileSync.saving
            ? ' · 进度写入中…'
            : fileSync.ok === true
              ? ' · 已同步到 data/learner-progress.json'
              : fileSync.ok === false
                ? ' · 进度仅本地缓存（请用 npm run dev）'
                : ''}
        </footer>
      </div>
    </main>
  )
}
