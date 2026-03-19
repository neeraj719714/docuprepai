import React, { useState, useCallback, useEffect, createContext, useContext } from 'react'
import { X, Sparkles } from 'lucide-react'

const ToastContext = createContext(null)

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const [visible, setVisible] = useState(false)

  const showToast = useCallback((message) => {
    setToast(message)
    setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [visible, toast])

  const dismiss = () => setVisible(false)

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {visible && toast && (
        <div className="toast-container" role="alert" aria-live="polite">
          <div className="toast">
            <Sparkles size={16} className="toast-icon" aria-hidden="true" />
            <span className="toast-message">{toast}</span>
            <a href="#beta" className="toast-cta" onClick={dismiss}>
              Join Beta
            </a>
            <button className="toast-close" onClick={dismiss} aria-label="Dismiss">
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}
