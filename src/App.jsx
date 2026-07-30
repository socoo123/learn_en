import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './components/Home.jsx'
import LessonView from './components/LessonView.jsx'
import Annotations from './components/Annotations.jsx'
import ExportView from './components/ExportView.jsx'
import { ProgressProvider } from './hooks/useProgress.jsx'
import { LESSONS } from './data/lessons.js'

const LS_KEY = 'en_reader_v2'
const load = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {}
  } catch {
    return {}
  }
}

function AppInner() {
  const sorted = useMemo(
    () => [...LESSONS].sort((a, b) => (b.date || '').localeCompare(a.date || '')),
    [],
  )
  const saved = useMemo(load, [])
  const [view, setView] = useState(saved.view === 'lesson' ? 'lesson' : 'home')
  const [currentId, setCurrentId] = useState(saved.currentId || (sorted[0] && sorted[0].id))
  const [theme, setTheme] = useState(saved.theme || 'light')
  const [zhMode, setZhMode] = useState(saved.zhMode || 'collapsed')
  const [exporting, setExporting] = useState(false)
  const [passageFlash, setPassageFlash] = useState({ word: null, n: 0 })
  const [cardFlash, setCardFlash] = useState({ word: null, n: 0 })

  useEffect(() => {
    if (!sorted.find((l) => l.id === currentId) && sorted[0]) setCurrentId(sorted[0].id)
  }, [sorted, currentId])

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ currentId, theme, zhMode, view }))
    } catch {}
  }, [currentId, theme, zhMode, view])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const idx = sorted.findIndex((l) => l.id === currentId)
  const lesson = sorted[idx]
  const go = (d) => {
    const n = sorted[idx + d]
    if (n) setCurrentId(n.id)
  }

  const openLesson = (id) => {
    setCurrentId(id)
    setView('lesson')
  }

  useEffect(() => {
    if (view !== 'lesson') return
    const h = (e) => {
      const tag = (e.target.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'Escape') setView('home')
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [idx, view]) // eslint-disable-line

  useEffect(() => {
    if (!exporting) return
    let cancelled = false
    ;(async () => {
      try {
        if (document.fonts && document.fonts.ready) await document.fonts.ready
        await new Promise((r) => setTimeout(r, 80))
        const node = document.querySelector('.ex-root')
        if (!node) throw new Error('export node not found')
        const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
          import('html2canvas'),
          import('jspdf'),
        ])
        const canvas = await html2canvas(node, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
          logging: false,
          width: node.scrollWidth,
          height: node.scrollHeight,
          windowWidth: node.scrollWidth,
        })
        if (cancelled) return
        const imgData = canvas.toDataURL('image/jpeg', 0.92)
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' })
        const pageW = 210
        const pageH = 297
        const imgH = (canvas.height * pageW) / canvas.width
        let heightLeft = imgH
        let position = 0
        pdf.addImage(imgData, 'JPEG', 0, position, pageW, imgH)
        heightLeft -= pageH
        while (heightLeft > 0) {
          position -= pageH
          pdf.addPage()
          pdf.addImage(imgData, 'JPEG', 0, position, pageW, imgH)
          heightLeft -= pageH
        }
        const safe = (lesson.title || 'lesson').replace(/[\\/:*?"<>|]+/g, '_').slice(0, 40)
        pdf.save(`${lesson.date}-${safe}.pdf`)
      } catch (err) {
        console.error('PDF 导出失败，回退到浏览器打印', err)
        window.print()
      } finally {
        if (!cancelled) setExporting(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [exporting]) // eslint-disable-line

  if (view === 'home') {
    return (
      <div className="app home-app">
        <Home
          lessons={sorted}
          onOpenLesson={openLesson}
          theme={theme}
          toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        />
      </div>
    )
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentId}
          className="reader-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <LessonView
            lesson={lesson}
            zhMode={zhMode}
            setZhMode={setZhMode}
            theme={theme}
            toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            onBackHome={() => setView('home')}
            onExport={() => setExporting(true)}
            exporting={exporting}
            passageFlash={passageFlash}
            cardFlash={cardFlash}
            setCardFlash={setCardFlash}
            hasPrev={idx > 0}
            hasNext={idx < sorted.length - 1}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        </motion.div>
      </AnimatePresence>

      {lesson && (
        <Annotations
          lesson={lesson}
          cardFlash={cardFlash}
          onWordClick={(w) => setPassageFlash((p) => ({ word: w, n: (p.n || 0) + 1 }))}
        />
      )}

      {exporting && lesson && (
        <div className="export-stage">
          <ExportView lesson={lesson} />
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <ProgressProvider>
      <AppInner />
    </ProgressProvider>
  )
}
