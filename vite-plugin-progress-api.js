import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROGRESS_PATH = path.resolve(__dirname, 'data/learner-progress.json')

const EMPTY = {
  version: 2,
  updatedAt: new Date().toISOString(),
  lessons: {},
  feedback: { reading: { easy: 0, ok: 0, hard: 0, recent: [] } },
  assessment: null,
}

function readProgressFile() {
  try {
    if (!fs.existsSync(PROGRESS_PATH)) {
      fs.mkdirSync(path.dirname(PROGRESS_PATH), { recursive: true })
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify(EMPTY, null, 2) + '\n', 'utf8')
      return EMPTY
    }
    const raw = fs.readFileSync(PROGRESS_PATH, 'utf8')
    return JSON.parse(raw)
  } catch (err) {
    console.error('[progress-api] read failed', err)
    return EMPTY
  }
}

function writeProgressFile(data) {
  fs.mkdirSync(path.dirname(PROGRESS_PATH), { recursive: true })
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function attachProgressApi(server) {
  server.middlewares.use('/api/progress', (req, res, next) => {
    if (req.method === 'GET') {
      const data = readProgressFile()
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.setHeader('Cache-Control', 'no-store')
      res.end(JSON.stringify(data))
      return
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}')
          if (typeof data !== 'object' || !data || typeof data.lessons !== 'object') {
            res.statusCode = 400
            res.end(JSON.stringify({ ok: false, error: 'invalid progress payload' }))
            return
          }
          writeProgressFile(data)
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify({ ok: true, path: 'data/learner-progress.json' }))
        } catch (err) {
          console.error('[progress-api] write failed', err)
          res.statusCode = 500
          res.end(JSON.stringify({ ok: false, error: String(err?.message || err) }))
        }
      })
      return
    }

    if (req.method === 'OPTIONS') {
      res.statusCode = 204
      res.end()
      return
    }

    next()
  })
}

/** Vite plugin: GET/PUT /api/progress ↔ data/learner-progress.json */
export function progressApiPlugin() {
  return {
    name: 'learner-progress-api',
    configureServer(server) {
      attachProgressApi(server)
    },
    configurePreviewServer(server) {
      attachProgressApi(server)
    },
  }
}
