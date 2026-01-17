import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Lesson } from './pages/Lesson'
import { NameModal } from './components/NameModal'
import { Certificate } from './components/Certificate'
import { useUser } from './hooks/useUser'
import { useProgress } from './hooks/useProgress'
import { getAllLessons } from './data/lessons'

function App() {
  const { name, hasName, setName, completedAt, markCourseCompleted } = useUser()
  const { completedCount } = useProgress()
  const [showNameModal, setShowNameModal] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  
  const totalLessons = getAllLessons().length
  const courseComplete = completedCount >= totalLessons

  // Show name modal on first visit (after a short delay for smooth UX)
  useEffect(() => {
    if (!hasName) {
      const timer = setTimeout(() => {
        setShowNameModal(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [hasName])

  // Mark course as completed and show certificate
  useEffect(() => {
    if (courseComplete && !completedAt) {
      markCourseCompleted()
      // Small delay before showing certificate for better UX
      setTimeout(() => {
        setShowCertificate(true)
      }, 1000)
    }
  }, [courseComplete, completedAt, markCourseCompleted])

  const handleNameSubmit = (submittedName) => {
    setName(submittedName)
    setShowNameModal(false)
  }

  const handleNameSkip = () => {
    setShowNameModal(false)
  }

  return (
    <>
      <Layout userName={name}>
        <Routes>
          <Route path="/" element={<Home userName={name} onShowCertificate={() => setShowCertificate(true)} />} />
          <Route path="/lesson/:lessonId" element={<Lesson userName={name} />} />
        </Routes>
      </Layout>

      {/* Name Modal */}
      {showNameModal && (
        <NameModal 
          onSubmit={handleNameSubmit} 
          onSkip={handleNameSkip} 
        />
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <Certificate
          name={name}
          completedAt={completedAt}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </>
  )
}

export default App
