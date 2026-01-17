import { useState } from 'react'

export function NameModal({ onSubmit, onSkip }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-2xl border border-dark-600 max-w-md w-full p-8 animate-scale-in">
        {/* Welcome icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
            <span className="text-3xl">👋</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome!</h2>
          <p className="text-slate-400">
            Let's personalize your learning experience.
          </p>
        </div>

        {/* Name form */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-slate-300">
            What should we call you?
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition mb-4"
            autoFocus
          />
          
          <button
            type="submit"
            disabled={!name.trim()}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              name.trim()
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-[1.02]'
                : 'bg-dark-600 text-slate-500 cursor-not-allowed'
            }`}
          >
            Start Learning
          </button>
        </form>

        {/* Skip option */}
        <button
          onClick={onSkip}
          className="w-full mt-3 py-2 text-slate-500 hover:text-slate-300 text-sm transition"
        >
          Skip for now
        </button>

        {/* Privacy note */}
        <p className="text-xs text-slate-600 text-center mt-4">
          Your name is stored locally and never sent to any server.
        </p>
      </div>
    </div>
  )
}


