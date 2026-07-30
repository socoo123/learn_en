export const STORAGE_KEY = 'en_reader_progress'

export function emptyProgressFile() {
  return { version: 1, updatedAt: new Date().toISOString(), lessons: {} }
}

export function mergeProgress(a, b) {
  const lessons = { ...a.lessons }
  for (const [key, pb] of Object.entries(b.lessons || {})) {
    const pa = lessons[key]
    if (!pa) {
      lessons[key] = pb
      continue
    }
    const ta = Date.parse(pa.updatedAt)
    const tb = Date.parse(pb.updatedAt)
    lessons[key] = tb >= ta ? pb : pa
  }
  const updatedAt = Object.values(lessons).reduce(
    (max, p) => Math.max(max, Date.parse(p.updatedAt) || 0),
    Math.max(Date.parse(a.updatedAt) || 0, Date.parse(b.updatedAt) || 0),
  )
  return {
    version: 1,
    updatedAt: Number.isFinite(updatedAt) && updatedAt > 0
      ? new Date(updatedAt).toISOString()
      : new Date().toISOString(),
    lessons,
  }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgressFile()
    const data = JSON.parse(raw)
    if (data.version !== 1 || typeof data.lessons !== 'object' || !data.lessons) {
      return emptyProgressFile()
    }
    return data
  } catch {
    return emptyProgressFile()
  }
}

export function saveProgress(file) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(file))
  } catch {
    // quota / private mode — ignore
  }
}

export function downloadProgress(file) {
  const blob = new Blob([JSON.stringify(file, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'en-progress.json'
  a.click()
  URL.revokeObjectURL(url)
}

export function parseImportedProgress(raw) {
  const data = JSON.parse(raw)
  if (data.version !== 1 || typeof data.lessons !== 'object' || !data.lessons) {
    throw new Error('invalid progress file')
  }
  return data
}
