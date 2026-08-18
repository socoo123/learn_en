/** Escape a string for use inside a RegExp. */
export function escapeReg(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isToken(w) {
  return /^[A-Za-z][A-Za-z'-]*$/.test(w)
}

/** Exact form + simple plural so "constraint" also hits "constraints". */
function formVariants(phrase) {
  const w = phrase.toLowerCase()
  const out = [w]
  const parts = w.split(/\s+/)
  const last = parts[parts.length - 1]
  if (!isToken(last) || /s$/i.test(last)) return out
  parts[parts.length - 1] = /(?:s|x|z|ch|sh)$/i.test(last) ? last + 'es' : last + 's'
  const plural = parts.join(' ')
  if (plural !== w) out.push(plural)
  return out
}

/**
 * Build one regex for core (yellow) + vocab (red) marks.
 * Longer phrases win; if a span is both, core wins.
 */
export function buildMarkIndex(coreWords = [], vocabWords = []) {
  const lookup = Object.create(null)
  const phrases = new Set()

  const add = (list, kind) => {
    for (const entry of list) {
      const raw = entry?.w
      if (!raw) continue
      const canonical = String(raw).toLowerCase()
      for (const variant of formVariants(canonical)) {
        phrases.add(variant)
        const prev = lookup[variant]
        if (!prev || (kind === 'core' && prev.kind === 'vocab')) {
          lookup[variant] = { kind, entry, canonical }
        }
      }
    }
  }

  add(vocabWords, 'vocab')
  add(coreWords, 'core')

  const sorted = [...phrases].sort((a, b) => b.length - a.length)
  const regex = sorted.length
    ? new RegExp('\\b(' + sorted.map(escapeReg).join('|') + ')\\b', 'gi')
    : null

  return { regex, lookup }
}
