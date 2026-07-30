import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  downloadProgress,
  loadProgress,
  mergeProgress,
  parseImportedProgress,
  saveProgress,
} from '../lib/progress-store.js'
import { LESSONS } from '../data/lessons.js'

const ProgressContext = createContext(null)

function upsert(file, lessonId, done) {
  const lessons = { ...file.lessons }
  const updatedAt = new Date().toISOString()
  if (done) {
    lessons[lessonId] = { done: true, updatedAt }
  } else {
    delete lessons[lessonId]
  }
  return { version: 1, updatedAt, lessons }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => loadProgress())
  const progressRef = useRef(progress)
  progressRef.current = progress

  const commit = useCallback((next) => {
    setProgress(next)
    progressRef.current = next
    saveProgress(next)
  }, [])

  const isDone = useCallback(
    (lessonId) => Boolean(progress.lessons[lessonId]?.done),
    [progress],
  )

  const setDone = useCallback(
    (lessonId, checked) => {
      commit(upsert(progressRef.current, lessonId, checked))
    },
    [commit],
  )

  const importProgress = useCallback(
    (file) => {
      commit(mergeProgress(progressRef.current, file))
    },
    [commit],
  )

  const exportProgress = useCallback(() => {
    downloadProgress(progressRef.current)
  }, [])

  const importFromFile = useCallback(
    async (file) => {
      const text = await file.text()
      const parsed = parseImportedProgress(text)
      importProgress(parsed)
    },
    [importProgress],
  )

  const monthStats = useMemo(() => {
    const map = {}
    for (const l of LESSONS) {
      const key = (l.date || '').slice(0, 7)
      if (!key) continue
      if (!map[key]) map[key] = { done: 0, total: 0, complete: false }
      map[key].total += 1
      if (progress.lessons[l.id]?.done) map[key].done += 1
    }
    for (const key of Object.keys(map)) {
      const s = map[key]
      s.complete = s.total > 0 && s.done === s.total
    }
    return map
  }, [progress])

  const totalStats = useMemo(() => {
    let done = 0
    const total = LESSONS.length
    for (const l of LESSONS) {
      if (progress.lessons[l.id]?.done) done += 1
    }
    return { done, total, complete: total > 0 && done === total }
  }, [progress])

  const value = useMemo(
    () => ({
      progress,
      isDone,
      setDone,
      monthStats,
      totalStats,
      exportProgress,
      importFromFile,
      importProgress,
    }),
    [progress, isDone, setDone, monthStats, totalStats, exportProgress, importFromFile, importProgress],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
