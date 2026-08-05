import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  applyAssessment,
  applyReadingFeedback,
  downloadProgress,
  formatFeedbackForCopy,
  loadProgress,
  mergeProgress,
  parseImportedProgress,
  PROGRESS_VERSION,
  saveProgress,
} from '../lib/progress-store.js'
import { LESSONS } from '../data/lessons.js'
import { ASSESSMENT as DEFAULT_ASSESSMENT } from '../data/assessment.js'

const ProgressContext = createContext(null)

function upsert(file, lessonId, done) {
  const lessons = { ...file.lessons }
  const updatedAt = new Date().toISOString()
  const prev = lessons[lessonId] || {}
  if (done) {
    lessons[lessonId] = { ...prev, done: true, updatedAt }
  } else if (prev.difficulty || prev.note) {
    const next = { ...prev, updatedAt }
    delete next.done
    lessons[lessonId] = next
  } else {
    delete lessons[lessonId]
  }
  return {
    version: PROGRESS_VERSION,
    updatedAt,
    lessons,
    feedback: file.feedback || { reading: { easy: 0, ok: 0, hard: 0, recent: [] } },
    assessment: file.assessment ?? null,
  }
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

  const getDifficulty = useCallback(
    (lessonId) => progress.lessons[lessonId]?.difficulty || null,
    [progress],
  )

  const getNote = useCallback(
    (lessonId) => progress.lessons[lessonId]?.note || '',
    [progress],
  )

  const setDone = useCallback(
    (lessonId, checked) => {
      commit(upsert(progressRef.current, lessonId, checked))
    },
    [commit],
  )

  const submitReadingFeedback = useCallback(
    (lessonId, { difficulty, note }) => {
      commit(applyReadingFeedback(progressRef.current, lessonId, { difficulty, note }))
    },
    [commit],
  )

  /** Flip difficulty only (keeps existing note). */
  const setDifficulty = useCallback(
    (lessonId, difficulty) => {
      const prev = progressRef.current.lessons[lessonId]
      commit(
        applyReadingFeedback(progressRef.current, lessonId, {
          difficulty,
          note: difficulty ? prev?.note || '' : '',
        }),
      )
    },
    [commit],
  )

  const setAssessment = useCallback(
    (assessment) => {
      commit(applyAssessment(progressRef.current, assessment))
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

  const copyRecentFeedback = useCallback(async () => {
    const titleById = Object.fromEntries(
      LESSONS.map((l) => [l.id, `${l.date} ${l.title}`]),
    )
    const text = formatFeedbackForCopy(progressRef.current, titleById)
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
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
      if (l.kind && l.kind !== 'reading') continue
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

  const seriesStats = useMemo(() => {
    const map = {}
    for (const l of LESSONS) {
      if (l.kind !== 'shadow' || !l.seriesId) continue
      if (!map[l.seriesId]) map[l.seriesId] = { done: 0, total: 0, complete: false }
      map[l.seriesId].total += 1
      if (progress.lessons[l.id]?.done) map[l.seriesId].done += 1
    }
    for (const key of Object.keys(map)) {
      const s = map[key]
      s.complete = s.total > 0 && s.done === s.total
    }
    return map
  }, [progress])

  const readingFeedback = progress.feedback?.reading || {
    easy: 0,
    ok: 0,
    hard: 0,
    recent: [],
  }

  // localStorage assessment wins if newer; else default from assessment.js
  const assessment = useMemo(() => {
    const local = progress.assessment
    if (!local) return DEFAULT_ASSESSMENT
    const tLocal = Date.parse(local.updatedAt) || 0
    const tDefault = Date.parse(DEFAULT_ASSESSMENT.updatedAt) || 0
    return tLocal >= tDefault ? local : DEFAULT_ASSESSMENT
  }, [progress.assessment])

  const value = useMemo(
    () => ({
      progress,
      isDone,
      setDone,
      getDifficulty,
      getNote,
      setDifficulty,
      submitReadingFeedback,
      setAssessment,
      assessment,
      monthStats,
      seriesStats,
      readingFeedback,
      exportProgress,
      importFromFile,
      importProgress,
      copyRecentFeedback,
    }),
    [
      progress,
      isDone,
      setDone,
      getDifficulty,
      getNote,
      setDifficulty,
      submitReadingFeedback,
      setAssessment,
      assessment,
      monthStats,
      seriesStats,
      readingFeedback,
      exportProgress,
      importFromFile,
      importProgress,
      copyRecentFeedback,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
