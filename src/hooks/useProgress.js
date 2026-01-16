import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'cursor-course-progress'

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons))
    } catch (e) {
      console.error('Failed to save progress:', e)
    }
  }, [completedLessons])

  const markComplete = useCallback((lessonId) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) return prev
      return [...prev, lessonId]
    })
  }, [])

  const markIncomplete = useCallback((lessonId) => {
    setCompletedLessons(prev => prev.filter(id => id !== lessonId))
  }, [])

  const isComplete = useCallback((lessonId) => {
    return completedLessons.includes(lessonId)
  }, [completedLessons])

  const toggleComplete = useCallback((lessonId) => {
    if (completedLessons.includes(lessonId)) {
      markIncomplete(lessonId)
    } else {
      markComplete(lessonId)
    }
  }, [completedLessons, markComplete, markIncomplete])

  const resetProgress = useCallback(() => {
    setCompletedLessons([])
  }, [])

  const getProgress = useCallback((totalLessons) => {
    return totalLessons > 0 ? (completedLessons.length / totalLessons) * 100 : 0
  }, [completedLessons])

  return {
    completedLessons,
    completedCount: completedLessons.length,
    markComplete,
    markIncomplete,
    isComplete,
    toggleComplete,
    resetProgress,
    getProgress
  }
}

