import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'cursor-course-user'

export function useUser() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : { name: '', completedAt: null }
    } catch {
      return { name: '', completedAt: null }
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } catch (e) {
      console.error('Failed to save user:', e)
    }
  }, [user])

  const setName = useCallback((name) => {
    setUser(prev => ({ ...prev, name }))
  }, [])

  const markCourseCompleted = useCallback(() => {
    setUser(prev => ({ ...prev, completedAt: new Date().toISOString() }))
  }, [])

  const resetUser = useCallback(() => {
    setUser({ name: '', completedAt: null })
  }, [])

  return {
    name: user.name,
    completedAt: user.completedAt,
    hasName: user.name.trim().length > 0,
    setName,
    markCourseCompleted,
    resetUser
  }
}

