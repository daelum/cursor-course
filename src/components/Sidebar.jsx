import { NavLink, useLocation } from 'react-router-dom'
import { modules } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import { ProgressBar } from './ProgressBar'

export function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const { isComplete, completedCount } = useProgress()
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)

  return (
    <aside className={`
      fixed left-0 top-0 h-screen w-72 bg-dark-800 border-r border-dark-600 flex flex-col overflow-hidden
      z-50 transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Logo */}
      <div className="p-6 border-b border-dark-600">
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Cursor Course</h1>
            <p className="text-xs text-slate-400">Master AI-powered coding</p>
          </div>
        </NavLink>
      </div>

      {/* Progress */}
      <div className="px-6 py-4 border-b border-dark-600">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-400">Progress</span>
          <span className="text-cyan-400 font-medium">{completedCount}/{totalLessons}</span>
        </div>
        <ProgressBar value={completedCount} max={totalLessons} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {modules.map((module) => (
          <div key={module.id} className="mb-6">
            <div className="flex items-center gap-2 px-3 mb-2">
              <span className="text-xl">{module.icon}</span>
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                {module.title}
              </h2>
            </div>
            <ul className="space-y-1">
              {module.lessons.map((lesson) => {
                const isActive = location.pathname === `/lesson/${lesson.id}`
                const completed = isComplete(lesson.id)
                
                return (
                  <li key={lesson.id}>
                    <NavLink
                      to={`/lesson/${lesson.id}`}
                      onClick={onClose}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                        ${isActive 
                          ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                          : 'text-slate-400 hover:text-white hover:bg-dark-700'
                        }
                      `}
                    >
                      <span className={`
                        w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                        ${completed 
                          ? 'bg-green-500 border-green-500' 
                          : isActive 
                            ? 'border-cyan-400' 
                            : 'border-slate-600'
                        }
                      `}>
                        {completed && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="truncate">{lesson.title}</span>
                      <span className="ml-auto text-xs text-slate-500">{lesson.duration}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Shortcuts */}
      <div className="p-4 border-t border-dark-600 bg-dark-900/50">
        <p className="text-xs text-slate-500 mb-2">Quick Reference</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded text-[10px]">⌘L</kbd>
            <span>Chat</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded text-[10px]">⌘K</kbd>
            <span>Composer</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

