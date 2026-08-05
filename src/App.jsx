import { useEffect, useMemo, useState, createContext, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom'
import Home from './components/Home.jsx'
import LessonView from './components/LessonView.jsx'
import Annotations from './components/Annotations.jsx'
import ExportView from './components/ExportView.jsx'
import SeriesAnalysisView from './components/SeriesAnalysisView.jsx'
import AssessmentView from './components/AssessmentView.jsx'
import { ProgressProvider } from './hooks/useProgress.jsx'
import { LESSONS } from './data/lessons.js'
import { SERIES } from './data/series.js'

const LS_KEY = 'en_reader_v2'
const load = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {}
  } catch {
    return {}
  }
}

const UiPrefsContext = createContext(null)
function useUiPrefs() {
  const ctx = useContext(UiPrefsContext)
  if (!ctx) throw new Error('useUiPrefs outside provider')
  return ctx
}

function UiPrefsProvider({ children }) {
  const saved = useMemo(load, [])
  const [theme, setTheme] = useState(saved.theme || 'light')
  const [zhMode, setZhMode] = useState(saved.zhMode || 'collapsed')

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ theme, zhMode }))
    } catch {}
  }, [theme, zhMode])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      zhMode,
      setZhMode,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }),
    [theme, zhMode],
  )

  return <UiPrefsContext.Provider value={value}>{children}</UiPrefsContext.Provider>
}

function sortLessons(list) {
  return [...list].sort((a, b) => {
    const kindOrder = (k) => (k === 'shadow' ? 0 : 1)
    const kc = kindOrder(a.kind) - kindOrder(b.kind)
    if (kc) return kc
    if (a.kind === 'shadow') {
      const sc = (a.seriesId || '').localeCompare(b.seriesId || '')
      if (sc) return sc
      return String(a.part || '').localeCompare(String(b.part || ''))
    }
    return (b.date || '').localeCompare(a.date || '')
  })
}

function HomePage({ sorted }) {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useUiPrefs()
  return (
    <div className="app home-app">
      <Home
        lessons={sorted}
        onOpenLesson={(id) => navigate(`/lesson/${encodeURIComponent(id)}`)}
        onOpenSeries={(id) => navigate(`/series/${encodeURIComponent(id)}`)}
        onOpenAssessment={() => navigate('/assessment')}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  )
}

function AssessmentPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [navigate])
  return (
    <div className="app home-app">
      <AssessmentView onBack={() => navigate('/')} />
    </div>
  )
}

function SeriesPage() {
  const navigate = useNavigate()
  const { seriesId } = useParams()
  const id = decodeURIComponent(seriesId || '')
  const series = SERIES.find((s) => s.id === id) || null
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [navigate])
  return (
    <div className="app home-app">
      <SeriesAnalysisView series={series} onBack={() => navigate('/')} />
    </div>
  )
}

function LessonPage({ sorted }) {
  const navigate = useNavigate()
  const { lessonId } = useParams()
  const id = decodeURIComponent(lessonId || '')
  const { theme, toggleTheme, zhMode, setZhMode } = useUiPrefs()
  const [exporting, setExporting] = useState(false)
  const [passageFlash, setPassageFlash] = useState({ word: null, n: 0 })
  const [cardFlash, setCardFlash] = useState({ word: null, n: 0 })

  const lesson = sorted.find((l) => l.id === id)
  const kindList = useMemo(() => {
    const kind = lesson?.kind || 'reading'
    return sorted.filter((l) => (l.kind || 'reading') === kind)
  }, [sorted, lesson?.kind])
  const kindIdx = kindList.findIndex((l) => l.id === id)

  const go = (d) => {
    const n = kindList[kindIdx + d]
    if (n) navigate(`/lesson/${encodeURIComponent(n.id)}`)
  }

  useEffect(() => {
    const h = (e) => {
      const tag = (e.target.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [kindIdx, kindList, navigate]) // eslint-disable-line

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
        const safe = (lesson?.title || 'lesson').replace(/[\\/:*?"<>|]+/g, '_').slice(0, 40)
        pdf.save(`${lesson?.date || 'lesson'}-${safe}.pdf`)
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

  if (!lesson) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
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
            toggleTheme={toggleTheme}
            onBackHome={() => navigate('/')}
            onExport={() => setExporting(true)}
            exporting={exporting}
            passageFlash={passageFlash}
            cardFlash={cardFlash}
            setCardFlash={setCardFlash}
            hasPrev={kindIdx > 0}
            hasNext={kindIdx >= 0 && kindIdx < kindList.length - 1}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        </motion.div>
      </AnimatePresence>

      <Annotations
        lesson={lesson}
        cardFlash={cardFlash}
        onWordClick={(w) => setPassageFlash((p) => ({ word: w, n: (p.n || 0) + 1 }))}
      />

      {exporting && (
        <div className="export-stage">
          <ExportView lesson={lesson} />
        </div>
      )}
    </div>
  )
}

function AppRoutes() {
  const sorted = useMemo(() => sortLessons(LESSONS), [])
  return (
    <Routes>
      <Route path="/" element={<HomePage sorted={sorted} />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/series/:seriesId" element={<SeriesPage />} />
      <Route path="/lesson/:lessonId" element={<LessonPage sorted={sorted} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <UiPrefsProvider>
          <AppRoutes />
        </UiPrefsProvider>
      </ProgressProvider>
    </BrowserRouter>
  )
}
