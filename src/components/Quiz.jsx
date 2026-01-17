import { useState } from 'react'

export function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const question = questions[currentQuestion]

  const handleSelect = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    setShowResult(true)
    if (selectedAnswer === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
      if (onComplete) {
        onComplete(score + (selectedAnswer === question.correct ? 1 : 0), questions.length)
      }
    }
  }

  if (completed) {
    const finalScore = score + (selectedAnswer === question.correct ? 1 : 0)
    const percentage = Math.round((finalScore / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 text-center">
        <div className="text-6xl mb-4">
          {passed ? '🎉' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {passed ? 'Great Job!' : 'Keep Learning!'}
        </h3>
        <p className="text-slate-400 mb-6">
          You got {finalScore} out of {questions.length} questions correct ({percentage}%)
        </p>
        
        <div className="w-full bg-dark-700 rounded-full h-3 mb-6">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              passed ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-yellow-500 to-orange-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {passed ? (
          <p className="text-green-400 text-sm">
            ✓ You've mastered this section! Continue to the next lesson.
          </p>
        ) : (
          <p className="text-yellow-400 text-sm">
            Review the lesson content and try again. You've got this!
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-slate-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < currentQuestion ? 'bg-cyan-500' :
                i === currentQuestion ? 'bg-cyan-400' : 'bg-dark-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-white mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let className = 'w-full p-4 rounded-xl text-left transition-all duration-200 border '
          
          if (showResult) {
            if (index === question.correct) {
              className += 'bg-green-500/20 border-green-500 text-green-400'
            } else if (index === selectedAnswer && index !== question.correct) {
              className += 'bg-red-500/20 border-red-500 text-red-400'
            } else {
              className += 'bg-dark-700 border-dark-600 text-slate-400'
            }
          } else {
            if (index === selectedAnswer) {
              className += 'bg-cyan-500/20 border-cyan-500 text-white'
            } else {
              className += 'bg-dark-700 border-dark-600 text-slate-300 hover:border-slate-500 hover:bg-dark-600'
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={className}
              disabled={showResult}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                  showResult && index === question.correct ? 'border-green-500 bg-green-500 text-white' :
                  showResult && index === selectedAnswer ? 'border-red-500 bg-red-500 text-white' :
                  index === selectedAnswer ? 'border-cyan-500 bg-cyan-500 text-white' :
                  'border-current'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div className={`p-4 rounded-xl mb-6 ${
          selectedAnswer === question.correct 
            ? 'bg-green-500/10 border border-green-500/30' 
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <p className={`font-medium ${
            selectedAnswer === question.correct ? 'text-green-400' : 'text-red-400'
          }`}>
            {selectedAnswer === question.correct 
              ? '✓ Correct!' 
              : `✗ Not quite. The correct answer is: ${question.options[question.correct]}`
            }
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              selectedAnswer === null
                ? 'bg-dark-600 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition-all"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  )
}


