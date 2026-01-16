import { useParams, Link } from 'react-router-dom'
import { getLessonById, getAdjacentLessons, isLastLessonInModule, getModuleForLesson } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import { LessonContent } from '../components/LessonContent'
import { Quiz } from '../components/Quiz'
import { useEffect, useState } from 'react'

export function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLessonById(lessonId)
  const { prev, next } = getAdjacentLessons(lessonId)
  const { isComplete, toggleComplete, markComplete } = useProgress()
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setShowQuiz(false)
  }, [lessonId])

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-white mb-4">Lesson not found</h1>
        <Link to="/" className="text-cyan-400 hover:underline">
          Return to home
        </Link>
      </div>
    )
  }

  const completed = isComplete(lessonId)
  const hasQuiz = lesson.quiz && lesson.quiz.length > 0
  const isModuleEnd = isLastLessonInModule(lessonId)
  const module = getModuleForLesson(lessonId)

  const handleQuizComplete = (score, total) => {
    if (score >= Math.ceil(total * 0.7)) {
      markComplete(lessonId)
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-slate-500">{lesson.moduleTitle}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-white">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            {lesson.moduleTitle}
          </span>
          <span className="text-slate-500 text-sm">{lesson.duration}</span>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="mb-12">
        <LessonContent content={lesson.content} />
      </div>

      {/* Quiz Section */}
      {hasQuiz && (
        <div className="mb-12">
          {!showQuiz ? (
            <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isModuleEnd ? `${module?.title} Quiz` : 'Knowledge Check'}
              </h3>
              <p className="text-slate-400 mb-6">
                {isModuleEnd 
                  ? `Test your understanding of ${module?.title.toLowerCase()}. ${lesson.quiz.length} questions.`
                  : `Quick check to make sure you've got the key concepts. ${lesson.quiz.length} questions.`
                }
              </p>
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium hover:scale-105 transition-transform"
              >
                Start Quiz
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ) : (
            <Quiz 
              questions={lesson.quiz} 
              onComplete={handleQuizComplete}
            />
          )}
        </div>
      )}

      {/* Completion Button */}
      {!hasQuiz && (
        <div className="flex justify-center mb-12">
          <button
            onClick={() => toggleComplete(lessonId)}
            className={`
              flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
              ${completed 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30' 
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105'
              }
            `}
          >
            {completed ? (
              <>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Completed!
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mark as Complete
              </>
            )}
          </button>
        </div>
      )}

      {/* For lessons with quiz, show a simpler complete indicator */}
      {hasQuiz && completed && (
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Lesson Completed
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="border-t border-dark-600 pt-8">
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              to={`/lesson/${prev.id}`}
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Previous</p>
                <p className="font-medium">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {next ? (
            <Link
              to={`/lesson/${next.id}`}
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-right"
            >
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Next</p>
                <p className="font-medium">{next.title}</p>
              </div>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              to="/"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium hover:scale-105 transition-transform"
            >
              Finish Course
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
