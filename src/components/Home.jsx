import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DoneCheckbox, MiniBar } from './ProgressBits.jsx'
import { useProgress } from '../hooks/useProgress.jsx'

const MONTH_EN = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

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

function buildTree(lessons) {
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

export default function Home({ lessons, onOpenLesson, theme, toggleTheme }) {
  const { isDone, setDone, monthStats, totalStats, exportProgress, importFromFile } = useProgress()
  const [query, setQuery] = useState('')
  const fileRef = useRef(null)

  // 手动展开/收起覆盖（会话内）：key = "YYYY-MM" → boolean
  const [manualOpen, setManualOpen] = useState({})

  const sorted = useMemo(
    () => [...lessons].sort((a, b) => (b.date || '').localeCompare(a.date || '')),
    [lessons],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sorted
    return sorted.filter((l) => {
      const hay = [
        l.title,
        l.date,
        l.source,
        (l.tags || []).join(' '),
        (l.core?.words || []).map((w) => w.w).join(' '),
        (l.vocab || []).map((v) => v.w).join(' '),
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
  }, [query, sorted])

  const tree = useMemo(() => buildTree(filtered), [filtered])
  const searching = Boolean(query.trim())

  // 默认展开规则：未完成月展开；已完成月收起；搜索时命中月全部展开
  const isMonthOpen = (ym) => {
    if (manualOpen[ym] !== undefined) return manualOpen[ym]
    if (searching) return true
    const s = monthStats[ym]
    if (!s) return true
    return !s.complete
  }

  const toggleMonth = (ym) => {
    setManualOpen((prev) => ({ ...prev, [ym]: !isMonthOpen(ym) }))
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

  const yearKeys = Object.keys(tree).sort((a, b) => b.localeCompare(a))

  return (
    <main className="home">
      <div className="home-inner">
        <header className="home-head">
          <div className="home-brand">
            <span className="home-logo">EN</span>
            <div>
              <h1>英语笔记本</h1>
              <p className="home-sub">ENGLISH READER · 按月打卡</p>
            </div>
          </div>
          <div className="home-actions">
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

        <div className="home-progress">
          <div className="home-progress-meta">
            <span className="home-progress-label">总进度</span>
            <span className="home-progress-num">
              {totalStats.done}/{totalStats.total}
            </span>
          </div>
          <MiniBar value={totalStats.done} max={totalStats.total} />
          {totalStats.complete && (
            <div className="home-all-done">🎉 全部学完了，真棒</div>
          )}
        </div>

        <input
          className="search home-search"
          placeholder="搜索 标题 / 单词 / 日期…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {yearKeys.length === 0 ? (
          <div className="empty">
            <h2>{searching ? '没有匹配的课程' : '还没有课程'}</h2>
            <p>{searching ? '换个关键词试试' : '把一段英文发给我，我来帮你分析并存档。'}</p>
          </div>
        ) : (
          <div className="home-years">
            {yearKeys.map((y) => {
              const months = tree[y]
              const monthKeys = Object.keys(months).sort((a, b) => b.localeCompare(a))
              return (
                <section className="home-year" key={y}>
                  <h2 className="home-year-title">{y}</h2>
                  <div className="month-stack">
                    {monthKeys.map((m) => {
                      const ym = `${y}-${m}`
                      const items = months[m]
                      const stats = monthStats[ym] || { done: 0, total: items.length, complete: false }
                      // 搜索时只算可见条目的进度展示（但完成态仍看全局 stats）
                      const open = isMonthOpen(ym)
                      const mi = Number(m)
                      return (
                        <div
                          key={ym}
                          className={'month-block' + (stats.complete ? ' complete' : '')}
                        >
                          <button
                            type="button"
                            className="month-head"
                            onClick={() => toggleMonth(ym)}
                          >
                            <Chevron open={open} />
                            <span className="month-name">
                              {mi}月
                              <span className="month-en"> · {MONTH_EN[mi]}</span>
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
                                      <span className="day-date">{l.date.slice(5)}</span>
                                      <div className="day-body">
                                        <div className="day-ttl">{l.title}</div>
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
                </section>
              )
            })}
          </div>
        )}

        <footer className="home-foot">共 {sorted.length} 篇 · 最新在上</footer>
      </div>
    </main>
  )
}
