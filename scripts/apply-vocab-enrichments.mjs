#!/usr/bin/env node
/**
 * Insert def_en + syn after each vocab/core word's def field.
 * Idempotent: skips entries that already have def_en.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const enrichments = JSON.parse(
  fs.readFileSync(path.join(root, 'scripts/vocab-en-enrichments.json'), 'utf8'),
)

const files = [
  { file: 'src/data/lessons.js', quote: '"' },
  { file: 'src/data/shadow/cook-stanford-2019.js', quote: "'" },
]

function esc(q, s) {
  if (q === "'") return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function synLiteral(q, syn) {
  return `[${syn.map((s) => `${q}${esc(q, s)}${q}`).join(', ')}]`
}

let missing = new Set()
let patched = 0
let skipped = 0

for (const { file, quote: q } of files) {
  const full = path.join(root, file)
  let src = fs.readFileSync(full, 'utf8')
  // Match { w: '...', ... def: '...'  optionally already followed by def_en
  const re = new RegExp(
    `(\\{ w: ${q}([^${q}\\\\]*(?:\\\\.[^${q}\\\\]*)*)${q},[\\s\\S]*?\\bdef: ${q}([^${q}\\\\]*(?:\\\\.[^${q}\\\\]*)*)${q})(\\s*,\\s*def_en:)?`,
    'g',
  )

  src = src.replace(re, (fullMatch, before, w, _def, already) => {
    if (already) {
      skipped++
      return fullMatch
    }
    const e = enrichments[w]
    if (!e) {
      missing.add(w)
      return fullMatch
    }
    patched++
    return `${before}, def_en: ${q}${esc(q, e.def_en)}${q}, syn: ${synLiteral(q, e.syn)}`
  })

  fs.writeFileSync(full, src)
  console.log(`updated ${file}`)
}

console.log(`patched=${patched} skipped=${skipped} missing=${missing.size}`)
if (missing.size) {
  console.error('Missing enrichments for:', [...missing].sort().join(', '))
  process.exit(1)
}
