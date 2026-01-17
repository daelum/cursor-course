import { Link } from 'react-router-dom'
import { modules, getAllLessons } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import { DeepFloCTA } from '../components/DeepFloCTA'

export function Home({ userName, onShowCertificate }) {
  const { completedCount, getProgress, isComplete } = useProgress()
  const allLessons = getAllLessons()
  const totalLessons = allLessons.length
  const progress = getProgress(totalLessons)
  const courseComplete = completedCount >= totalLessons

  // Find the next incomplete lesson
  const nextLesson = allLessons.find(lesson => !isComplete(lesson.id)) || allLessons[0]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          No Coding Required
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-4">
          {userName ? (
            <>
              {completedCount === 0 ? (
                <>Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{userName}</span>!</>
              ) : courseComplete ? (
                <>Congratulations, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{userName}</span>! 🎉</>
              ) : (
                <>Keep going, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{userName}</span>!</>
              )}
            </>
          ) : (
            <>
              Build Anything with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI
              </span>
            </>
          )}
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          {courseComplete 
            ? "You've completed the entire course! You now have the skills to build anything with AI."
            : "Learn to create websites and apps using just your words. No code, no technical skills, no experience needed."
          }
        </p>

        {courseComplete ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onShowCertificate}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              View Certificate
            </button>
            <Link
              to={`/lesson/${allLessons[0].id}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-700 border border-dark-600 rounded-xl font-semibold text-lg hover:bg-dark-600 transition"
            >
              Review Course
            </Link>
          </div>
        ) : (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
          >
            {completedCount === 0 ? 'Start Learning Free' : 'Continue Learning'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        )}
      </div>

      {/* Progress Card */}
      {completedCount > 0 && (
        <div className="bg-dark-800 rounded-2xl p-6 mb-12 border border-dark-600">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {courseComplete ? '🎉 Course Complete!' : 'Your Progress'}
              </h3>
              <p className="text-slate-400 text-sm">
                {completedCount} of {totalLessons} lessons completed
              </p>
            </div>
            <div className="text-3xl font-bold text-cyan-400">
              {Math.round(progress)}%
            </div>
          </div>
          <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                courseComplete 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* What You'll Learn */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What You'll Master</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '💬', title: 'Ask the Right Questions', desc: 'Learn exactly how to describe what you want so the AI builds it perfectly' },
            { icon: '📸', title: 'Show, Don\'t Just Tell', desc: 'Use screenshots to guide the AI and get exactly the design you want' },
            { icon: '🔧', title: 'Fix Any Problem', desc: 'Turn confusing errors into quick fixes by simply pasting them' },
          ].map((item, i) => (
            <div 
              key={i}
              className="p-6 rounded-xl bg-dark-800/50 border border-dark-600 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white">Course Lessons</h2>
        
        {modules.map((module, moduleIndex) => {
          const moduleCompleted = module.lessons.every(lesson => isComplete(lesson.id))
          const moduleLessonsDone = module.lessons.filter(lesson => isComplete(lesson.id)).length
          
          return (
            <div key={module.id}>
              <div 
                className="bg-dark-800 rounded-2xl border border-dark-600 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${moduleIndex * 100}ms` }}
              >
                {/* Module Header */}
                <div className="p-6 border-b border-dark-600 bg-dark-700/50">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{module.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                        {moduleCompleted && (
                          <span className="text-green-400">✓</span>
                        )}
                      </div>
                      <p className="text-slate-400">{module.description}</p>
                    </div>
                    <div className="text-sm text-slate-400">
                      {moduleLessonsDone}/{module.lessons.length} lessons
                    </div>
                  </div>
                </div>
                
                {/* Lessons List */}
                <div className="divide-y divide-dark-600">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const lessonComplete = isComplete(lesson.id)
                    
                    return (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${lesson.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-dark-700/50 transition-colors group"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          lessonComplete 
                            ? 'bg-green-500 text-white'
                            : 'bg-dark-600 text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400'
                        }`}>
                          {lessonComplete ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            lessonIndex + 1
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium transition-colors ${
                            lessonComplete ? 'text-slate-400' : 'text-white group-hover:text-cyan-400'
                          }`}>
                            {lesson.title}
                          </h4>
                        </div>
                        <span className="text-sm text-slate-500">{lesson.duration}</span>
                        <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* DeepFlo CTA after first module */}
              {moduleIndex === 0 && !courseComplete && (
                <div className="my-8">
                  <DeepFloCTA />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      {!courseComplete && (
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600">
            <h2 className="text-2xl font-bold text-white mb-3">
              {userName ? `Ready to continue, ${userName}?` : 'Ready to Start Building?'}
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Join thousands of people who are creating websites and apps without writing a single line of code.
            </p>
            <Link
              to={`/lesson/${nextLesson.id}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              {completedCount === 0 ? 'Begin Your Journey' : 'Continue Learning'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
