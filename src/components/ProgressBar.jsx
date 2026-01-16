export function ProgressBar({ value, max, className = '' }) {
  const percentage = max > 0 ? (value / max) * 100 : 0

  return (
    <div className={`h-2 bg-dark-700 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

