import Passage from './Passage.jsx'
import VocabTable from './VocabTable.jsx'
import Grammar from './Grammar.jsx'
import Quiz from './Quiz.jsx'
import { useProgress } from '../hooks/useProgress.jsx'

export default function LessonView({
  lesson, zhMode, setZhMode, theme, toggleTheme,
  onBackHome, onExport, exporting,
  passageFlash, cardFlash, setCardFlash,
  hasPrev, hasNext, onPrev, onNext,
}) {
  const { isDone, setDone } = useProgress()

  if (!lesson) {
    return (
      <main className="reader">
        <div className="reader-inner">
          <div className="empty">
            <h2>还没有课程</h2>
            <p>把一段英文发给我，我来帮你分析并存档。</p>
            <button className="btn" style={{ marginTop: 16 }} onClick={onBackHome}>
              ← 返回首页
            </button>
          </div>
        </div>
      </main>
    )
  }

  const done = isDone(lesson.id)

  return (
    <main className="reader">
      <div className="reader-inner">
        <div className="toolbar">
          <button className="btn" onClick={onBackHome} title="返回首页">
            ← 首页
          </button>
          <button
            className={'btn' + (done ? ' on' : '')}
            onClick={() => setDone(lesson.id, !done)}
            title={done ? '取消完成标记' : '标记本课已学完'}
          >
            {done ? '✓ 已完成' : '□ 完成本课'}
          </button>
          <button
            className={'btn' + (zhMode === 'expanded' ? ' on' : '')}
            onClick={() => setZhMode(zhMode === 'expanded' ? 'collapsed' : 'expanded')}
          >
            {zhMode === 'expanded' ? '隐藏中文' : '中文翻译'}
          </button>
          <button className="btn" onClick={toggleTheme} title="切换深浅色">
            {theme === 'dark' ? '🌙 深色' : '☀️ 浅色'}
          </button>
          <button className="btn" onClick={onExport} disabled={exporting} title="导出为 PDF">
            {exporting ? '⏳ 生成中…' : '⤓ 下载 PDF'}
          </button>
          <div className="spacer" />
          <button className="btn ghost" disabled={!hasPrev} onClick={onPrev}>‹ 上一课</button>
          <button className="btn ghost" disabled={!hasNext} onClick={onNext}>下一课 ›</button>
        </div>

        <div className="lesson-head">
          <h1>
            <span className="ldate">{lesson.date}</span>　{lesson.title}
          </h1>
          <div className="meta">
            {lesson.source && <span>来源：{lesson.source}</span>}
            {lesson.source && lesson.tags && lesson.tags.length > 0 && <span className="dot">·</span>}
            {lesson.tags && lesson.tags.map((t, i) => (
              <span className="tag" key={i}>{t}</span>
            ))}
          </div>
        </div>

        <Passage
          lesson={lesson}
          zhMode={zhMode}
          passageFlash={passageFlash}
          onMarkClick={(w) => setCardFlash({ word: w, n: (cardFlash.n || 0) + 1 })}
        />

        {lesson.vocab && lesson.vocab.length > 0 && (
          <section className="section">
            <div className="sec-head">
              <h2>生词表</h2>
              <span className="sec-en">VOCABULARY</span>
            </div>
            <hr className="sec-rule" />
            <VocabTable vocab={lesson.vocab} />
          </section>
        )}

        <Grammar grammar={lesson.grammar} sentences={lesson.sentences} />

        <Quiz quiz={lesson.quiz} />
      </div>
    </main>
  )
}
