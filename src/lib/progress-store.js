export const STORAGE_KEY = 'en_reader_progress'
export const PROGRESS_VERSION = 2

const EMPTY_READING_FEEDBACK = () => ({
  easy: 0,
  ok: 0,
  hard: 0,
  recent: [],
})

export function emptyProgressFile() {
  return {
    version: PROGRESS_VERSION,
    updatedAt: new Date().toISOString(),
    lessons: {},
    feedback: { reading: EMPTY_READING_FEEDBACK() },
    assessment: null,
  }
}

/** Normalize v1 → v2 (and fill missing feedback / assessment). */
export function migrateProgress(data) {
  if (!data || typeof data !== 'object') return emptyProgressFile()
  const lessons =
    data.lessons && typeof data.lessons === 'object' ? { ...data.lessons } : {}
  const reading = data.feedback?.reading
  const feedback = {
    reading: {
      easy: Number(reading?.easy) || 0,
      ok: Number(reading?.ok) || 0,
      hard: Number(reading?.hard) || 0,
      recent: Array.isArray(reading?.recent) ? reading.recent.slice(0, 30) : [],
    },
  }
  const assessment =
    data.assessment && typeof data.assessment === 'object' ? data.assessment : null
  return {
    version: PROGRESS_VERSION,
    updatedAt: data.updatedAt || new Date().toISOString(),
    lessons,
    feedback,
    assessment,
  }
}

function mergeLessonEntry(pa, pb) {
  const ta = Date.parse(pa?.updatedAt) || 0
  const tb = Date.parse(pb?.updatedAt) || 0
  if (tb >= ta) return { ...pa, ...pb }
  return { ...pb, ...pa }
}

function mergeReadingFeedback(a, b) {
  const byId = new Map()
  for (const item of [...(a?.recent || []), ...(b?.recent || [])]) {
    if (!item?.id) continue
    const prev = byId.get(item.id)
    const tPrev = Date.parse(prev?.at) || 0
    const tCur = Date.parse(item.at) || 0
    if (!prev || tCur >= tPrev) byId.set(item.id, item)
  }
  const recent = [...byId.values()]
    .sort((x, y) => (Date.parse(y.at) || 0) - (Date.parse(x.at) || 0))
    .slice(0, 30)
  const counts = { easy: 0, ok: 0, hard: 0 }
  for (const r of recent) {
    if (r.difficulty === 'easy' || r.difficulty === 'ok' || r.difficulty === 'hard') {
      counts[r.difficulty] += 1
    }
  }
  if (recent.length === 0) {
    return {
      easy: (a?.easy || 0) + (b?.easy || 0),
      ok: (a?.ok || 0) + (b?.ok || 0),
      hard: (a?.hard || 0) + (b?.hard || 0),
      recent: [],
    }
  }
  return { ...counts, recent }
}

function mergeAssessment(a, b) {
  if (!a) return b || null
  if (!b) return a
  const ta = Date.parse(a.updatedAt) || 0
  const tb = Date.parse(b.updatedAt) || 0
  return tb >= ta ? b : a
}

export function mergeProgress(a, b) {
  const aa = migrateProgress(a)
  const bb = migrateProgress(b)
  const lessons = { ...aa.lessons }
  for (const [key, pb] of Object.entries(bb.lessons || {})) {
    const pa = lessons[key]
    lessons[key] = pa ? mergeLessonEntry(pa, pb) : pb
  }
  const updatedAt = Object.values(lessons).reduce(
    (max, p) => Math.max(max, Date.parse(p.updatedAt) || 0),
    Math.max(Date.parse(aa.updatedAt) || 0, Date.parse(bb.updatedAt) || 0),
  )
  return {
    version: PROGRESS_VERSION,
    updatedAt:
      Number.isFinite(updatedAt) && updatedAt > 0
        ? new Date(updatedAt).toISOString()
        : new Date().toISOString(),
    lessons,
    feedback: {
      reading: mergeReadingFeedback(aa.feedback.reading, bb.feedback.reading),
    },
    assessment: mergeAssessment(aa.assessment, bb.assessment),
  }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgressFile()
    const data = JSON.parse(raw)
    if (
      (data.version !== 1 && data.version !== 2) ||
      typeof data.lessons !== 'object' ||
      !data.lessons
    ) {
      return emptyProgressFile()
    }
    return migrateProgress(data)
  } catch {
    return emptyProgressFile()
  }
}

export function saveProgress(file) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(migrateProgress(file)))
  } catch {
    // quota / private mode — ignore
  }
}

export function downloadProgress(file) {
  const blob = new Blob([JSON.stringify(migrateProgress(file), null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'en-progress.json'
  a.click()
  URL.revokeObjectURL(url)
}

export function parseImportedProgress(raw) {
  const data = JSON.parse(raw)
  if (
    (data.version !== 1 && data.version !== 2) ||
    typeof data.lessons !== 'object' ||
    !data.lessons
  ) {
    throw new Error('invalid progress file')
  }
  return migrateProgress(data)
}

/**
 * Submit reading feedback: difficulty required; note optional.
 * difficulty: "easy" | "ok" | "hard" | null (clear feedback for this lesson)
 */
export function applyReadingFeedback(file, lessonId, { difficulty, note } = {}) {
  const next = migrateProgress(file)
  const updatedAt = new Date().toISOString()
  const prev = next.lessons[lessonId] || {}
  const lessons = { ...next.lessons }
  const noteText = typeof note === 'string' ? note.trim() : ''

  if (!difficulty) {
    const kept = { ...prev }
    delete kept.difficulty
    delete kept.note
    if (kept.done) {
      lessons[lessonId] = { done: true, updatedAt }
    } else {
      delete lessons[lessonId]
    }
  } else {
    const entry = { ...prev, difficulty, updatedAt }
    if (noteText) entry.note = noteText
    else if (note === '') delete entry.note
    lessons[lessonId] = entry
  }

  const reading = { ...next.feedback.reading }
  let recent = (reading.recent || []).filter((r) => r.id !== lessonId)
  if (difficulty) {
    recent = [
      {
        id: lessonId,
        difficulty,
        ...(noteText ? { note: noteText } : {}),
        at: updatedAt,
      },
      ...recent,
    ].slice(0, 30)
  }
  const counts = { easy: 0, ok: 0, hard: 0 }
  for (const r of recent) {
    if (r.difficulty === 'easy' || r.difficulty === 'ok' || r.difficulty === 'hard') {
      counts[r.difficulty] += 1
    }
  }

  return {
    version: PROGRESS_VERSION,
    updatedAt,
    lessons,
    feedback: { reading: { ...counts, recent } },
    assessment: next.assessment,
  }
}

/** @deprecated use applyReadingFeedback — kept for callers that only flip difficulty */
export function applyDifficulty(file, lessonId, difficulty) {
  const prev = migrateProgress(file).lessons[lessonId]
  return applyReadingFeedback(file, lessonId, {
    difficulty,
    note: difficulty ? prev?.note || '' : '',
  })
}

export function applyAssessment(file, assessment) {
  const next = migrateProgress(file)
  const updatedAt = new Date().toISOString()
  return {
    ...next,
    updatedAt,
    assessment: assessment
      ? { ...assessment, updatedAt: assessment.updatedAt || updatedAt }
      : null,
  }
}

/** Plain-text dump for pasting to Claude. */
export function formatFeedbackForCopy(file, lessonTitleById = {}) {
  const data = migrateProgress(file)
  const lines = ['# 近期阅读反馈', '']
  const recent = data.feedback?.reading?.recent || []
  if (recent.length === 0) {
    lines.push('（暂无反馈）')
  } else {
    const label = { easy: '好读', ok: '刚好', hard: '难读' }
    for (const r of recent.slice(0, 15)) {
      const title = lessonTitleById[r.id] || r.id
      const d = label[r.difficulty] || r.difficulty
      const day = (r.at || '').slice(0, 10)
      lines.push(`- ${day} | ${title} | ${d}`)
      if (r.note) lines.push(`  备注：${r.note}`)
    }
  }
  lines.push('')
  lines.push('请根据以上反馈更新我的水平评估，并调整后续阅读选材。')
  return lines.join('\n')
}
