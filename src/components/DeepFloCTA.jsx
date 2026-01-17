export function DeepFloCTA({ variant = 'default' }) {
  const isCompact = variant === 'compact'

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-dark-600 ${
      isCompact ? 'p-6' : 'p-8 md:p-10'
    }`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-dark-800 to-cyan-600/20" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-xs font-medium mb-4">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
          </svg>
          Pro Tip
        </div>

        <div className={`${isCompact ? '' : 'md:flex md:items-center md:gap-8'}`}>
          {/* Content */}
          <div className={`${isCompact ? '' : 'md:flex-1'}`}>
            <h3 className={`font-bold text-white mb-3 ${isCompact ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">4-5x Faster</span> with Your Voice
            </h3>
            
            <p className={`text-slate-400 mb-4 ${isCompact ? 'text-sm' : ''}`}>
              Stop typing prompts. <strong className="text-white">DeepFlo.App</strong> lets you speak naturally and builds faster, more detailed prompts automatically.
            </p>

            {!isCompact && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: '⚡', text: '4-5x faster than typing' },
                  { icon: '🎯', text: 'More detailed prompts' },
                  { icon: '💬', text: 'Natural conversation' },
                  { icon: '🚀', text: '60-second setup' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span>{item.icon}</span>
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <a
              href="https://deepflo.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform ${
                isCompact ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'
              }`}
            >
              Try DeepFlo.App Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Speed comparison visual */}
          {!isCompact && (
            <div className="mt-6 md:mt-0 md:w-72 flex-shrink-0">
              <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-600">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-3 text-center">Speed Comparison</p>
                
                {/* Typing bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">⌨️ Typing</span>
                    <span className="text-slate-500">~2 min</span>
                  </div>
                  <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-slate-600 rounded-full" />
                  </div>
                </div>

                {/* Voice bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-cyan-400">🎤 DeepFlo.App</span>
                    <span className="text-cyan-400">~25 sec</span>
                  </div>
                  <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <p className="text-xs text-slate-500 text-center mt-3">
                  Same prompt, fraction of the time
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


