import { useState, useCallback } from 'react'

import { ActiveToast, Id, AddToastOptions, UpdateToastOptions } from './types'
import { getId } from './utils'

const checkForId = (id: string) => (t: ActiveToast) => t.id === id

export const useActiveToasts = (maxToasts: number | undefined) => {
  const [toasts, setToasts] = useState<ActiveToast[]>([])
  const hasToasts = !!toasts.length

  const exists = useCallback((id: Id) => toasts.some(checkForId(id)), [toasts])

  const removeToast = useCallback(
    (id: Id) => {
      if (exists(id)) {
        setToasts((t) => t.filter((toast) => toast.id !== id))
      }
    },
    [exists]
  )

  const removeAllToasts = useCallback(() => {
    setToasts([])
  }, [])

  const updateToast = useCallback(
    (id: Id, options: UpdateToastOptions = {}) => {
      if (exists(id)) {
        setToasts((t) => {
          const index = t.findIndex(checkForId(id))
          const updatedToast = { ...t[index], ...options }
          t.splice(index, 1, updatedToast)
          return t
        })
      }
    },
    [exists]
  )

  /**
   * @todo It's very convenient to guarantee a string return,
   * but we should configure this to gracefully fail creation
   * when a duplicate custom `id` is set in options
   */
  const addToast = useCallback(
    (content: React.ReactNode, options: AddToastOptions = {}): string => {
      const id = options.id
      if (id && !exists(id)) {
        const { type = 'info', ...rest } = options
        const newToast = { content, id, type, ...rest }
        setToasts((t) => {
          if (maxToasts && maxToasts < t.length + 1) {
            return [...t.slice(1), newToast]
          } else {
            return [...t, newToast]
          }
        })
        return id
      } else {
        const i = getId()
        return addToast(content, { ...options, id: i })
      }
    },
    [exists, maxToasts]
  )

  return {
    addToast,
    hasToasts,
    removeAllToasts,
    removeToast,
    toasts,
    updateToast,
  }
}
