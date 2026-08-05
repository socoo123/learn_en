import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F']

function norm(s) {
  return String(s || '').trim().toLowerCase().replace(/[.,!?;:'"]+$/, '').replace(/\s+/g, ' ')
}
function fillCorrect(value, q) {
  const ans = Array.isArray(q.answer) ? q.answer : [q.answer]
  const n = norm(value)
  return n.length > 0 && ans.some(a => norm(a) === n)
}
const answerText = q => (Array.isArray(q.answer) ? q.answer[0] : q.answer)

/** Choice answers may be option index (0-based) or the option string itself. */
function choiceAnswerIndex(q) {
  if (typeof q.answer === 'number' && Number.isFinite(q.answer)) return q.answer
  if (Array.isArray(q.answer) && typeof q.answer[0] === 'number') return q.answer[0]
  const text = Array.isArray(q.answer) ? q.answer[0] : q.answer
  const idx = (q.options || []).findIndex((opt) => opt === text || norm(opt) === norm(text))
  return idx
}

function FillQuestion({ q, revealed, answered, onAnswer }) {
  const [val, setVal] = useState('')
  const parts = q.q.split(/_{2,}/)

  // 重置练习时清空输入；一键显示答案时不锁死编辑态以外的本地值
  useEffect(() => {
    if (!answered && !revealed) setVal('')
  }, [answered, revealed])

  const submit = () => {
    if (revealed) return
    onAnswer(val)
  }

  return (
    <>
      <div className="qtext">
        {parts[0]}
        <input
          className="fill-input"
          placeholder="?"
          disabled={revealed}
          value={revealed && !answered ? answerText(q) : val}
          onChange={e => { if (!revealed) setVal(e.target.value) }}
          onKeyDown={e => { if (e.key === 'Enter') submit() }}
        />
        {parts.slice(1).join(' ')}
      </div>
      {!revealed && (
        <div className="actions">
          <button className="btn" onClick={submit}>
            {answered ? '重新提交' : '提交答案'}
          </button>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>
            回车也可提交 · 提交后仍可修改
          </span>
        </div>
      )}
    </>
  )
}

export default function Quiz({ quiz }) {
  const [answers, setAnswers] = useState({})
  const [showAnswers, setShowAnswers] = useState(false)

  if (!quiz || quiz.length === 0) return null

  const revealed = showAnswers
  const answer = (i, q, chosen) => {
    if (revealed) return
    // 选择题提交后锁定；填空题允许改完再交
    if (q.type !== 'fill' && answers[i]) return
    let correct
    if (q.type === 'fill') {
      correct = fillCorrect(chosen, q)
    } else {
      const right = choiceAnswerIndex(q)
      correct = right >= 0 && chosen === right
    }
    setAnswers(a => ({ ...a, [i]: { chosen, correct } }))
  }

  const stats = useMemo(() => {
    const done = Object.values(answers)
    return { done: done.length, right: done.filter(d => d.correct).length, total: quiz.length }
  }, [answers, quiz.length])

  const anyAnswered = Object.keys(answers).length > 0
  const reset = () => { setAnswers({}); setShowAnswers(false) }

  return (
    <section className="section">
      <div className="sec-head"><h2>课后练习</h2><span className="sec-en">PRACTICE</span></div>
      <hr className="sec-rule" />

      <div className="quiz-bar">
        <div className="quiz-score">
          已答 <span className="num">{stats.done}</span>/{stats.total}
          {stats.done > 0 && <> · 正确 <span className="num">{stats.right}</span></>}
        </div>
        <button className={'btn' + (revealed ? ' on' : '')} onClick={() => setShowAnswers(s => !s)}>
          {showAnswers ? '隐藏答案' : '👁 一键显示答案'}
        </button>
        {anyAnswered && <button className="btn ghost" onClick={reset}>重置</button>}
      </div>

      <div className="quiz">
        {quiz.map((q, i) => {
          const ans = answers[i]
          const answered = !!ans
          const showFb = answered || revealed
          return (
            <div className="qcard" key={i}>
              <span className="qtag">{q.tag || (q.type === 'fill' ? '填空' : '选择')}</span>

              {q.type === 'fill' ? (
                <FillQuestion q={q} revealed={revealed} answered={answered} onAnswer={v => answer(i, q, v)} />
              ) : (
                <>
                  <div className="qtext">{q.q}</div>
                  <div className="opts">
                    {q.options.map((opt, oi) => {
                      const right = choiceAnswerIndex(q)
                      let cls = 'opt'
                      if (answered) {
                        if (oi === right) cls += ' correct'
                        else if (oi === ans.chosen) cls += ' wrong'
                      } else if (revealed && oi === right) cls += ' correct'
                      return (
                        <button key={oi} className={cls} disabled={answered || revealed} onClick={() => answer(i, q, oi)}>
                          <span className="key">{KEYS[oi]}</span>
                          <span>{opt}</span>
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              <AnimatePresence>
                {showFb && (
                  <motion.div
                    className={'qfb ' + (answered ? (ans.correct ? 'ok' : 'no') : 'info')}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 11 }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {answered && <div>{ans.correct ? '✓ 正确' : '✗ 再想想'}</div>}
                    {(!answered || !ans.correct) && (
                      <div>
                        参考答案：
                        <span className="ans">
                          {q.type === 'fill'
                            ? answerText(q)
                            : (() => {
                                const right = choiceAnswerIndex(q)
                                if (right < 0) return String(answerText(q))
                                return `${KEYS[right]}. ${q.options[right]}`
                              })()}
                        </span>
                      </div>
                    )}
                    {q.explain && <div className="explain">💡 {q.explain}</div>}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
