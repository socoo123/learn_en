export function DoneCheckbox({ checked, onChange, title }) {
  return (
    <label
      className="done-check"
      title={title || (checked ? '标记为未完成' : '标记为已完成')}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className={'done-box' + (checked ? ' on' : '')} aria-hidden>
        ✓
      </span>
    </label>
  )
}

export function MiniBar({ value, max }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="mini-bar" title={`${value}/${max}`}>
      <div className="mini-bar-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}
