import { useEffect, useState } from 'react'
import { useProgress } from '../hooks/useProgress.jsx'

const OPTIONS = [
  { value: 'easy', label: '好读' },
  { value: 'ok', label: '刚好' },
  { value: 'hard', label: '难读' },
]

export default function DifficultySurvey({ lessonId }) {
  const { getDifficulty, getNote, submitReadingFeedback } = useProgress()
  const savedDiff = getDifficulty(lessonId)
  const savedNote = getNote(lessonId)

  const [difficulty, setDifficulty] = useState(savedDiff)
  const [note, setNote] = useState(savedNote)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    setDifficulty(savedDiff)
    setNote(savedNote)
  }, [lessonId, savedDiff, savedNote])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!difficulty) {
      alert('请先选择：好读 / 刚好 / 难读')
      return
    }
    submitReadingFeedback(lessonId, { difficulty, note })
    setSavedFlash(true)
    window.setTimeout(() => setSavedFlash(false), 2200)
  }

  return (
    <section className="section difficulty-survey">
      <div className="sec-head">
        <h2>难度反馈</h2>
        <span className="sec-en">FEEDBACK</span>
      </div>
      <hr className="sec-rule" />
      <form className="difficulty-form" onSubmit={onSubmit}>
        <p className="difficulty-prompt">这篇对我来说：</p>
        <div className="difficulty-options" role="group" aria-label="阅读难度">
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={'btn difficulty-btn' + (difficulty === opt.value ? ' on' : '')}
              onClick={() => setDifficulty(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <label className="difficulty-note-label" htmlFor={`fb-note-${lessonId}`}>
          补充说明（可选）
        </label>
        <textarea
          id={`fb-note-${lessonId}`}
          className="difficulty-note"
          rows={3}
          placeholder="例如：生词多在商务套话 / 句子不长但短语动词卡壳 / 想多看点 IT 新闻…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className="difficulty-actions">
          <button type="submit" className="btn difficulty-submit">
            提交反馈
          </button>
          {savedFlash && <span className="difficulty-saved">已保存到本地</span>}
          {savedDiff && !savedFlash && (
            <span className="difficulty-hint-inline">
              上次：{OPTIONS.find((o) => o.value === savedDiff)?.label}
              {savedNote ? ' · 有备注' : ''}
            </span>
          )}
        </div>
        <p className="difficulty-hint">
          提交后可回首页点「复制近期反馈」，对我说「今天的反馈你看看」，我会据此调选材并更新水平评估。
        </p>
      </form>
    </section>
  )
}
