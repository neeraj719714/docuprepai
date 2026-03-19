import React, { useState, useEffect, useRef, createContext, useContext, useCallback } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'

const BetaModalContext = createContext()

export function useBetaModal() {
  return useContext(BetaModalContext)
}

export function BetaModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <BetaModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <BetaModal />
    </BetaModalContext.Provider>
  )
}

function BetaModal() {
  const { open, closeModal } = useBetaModal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const overlayRef = useRef(null)
  const inputRef = useRef(null)

  // Focus input when modal opens
  useEffect(() => {
    if (open && !submitted) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, submitted])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape + trap focus
  const modalRef = useRef(null)
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        return
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, closeModal])

  // Prevent scroll on the overlay from reaching the page beneath
  useEffect(() => {
    if (!open) return
    const overlay = overlayRef.current
    if (!overlay) return
    const preventScroll = (e) => e.preventDefault()
    overlay.addEventListener('wheel', preventScroll, { passive: false })
    overlay.addEventListener('touchmove', preventScroll, { passive: false })
    return () => {
      overlay.removeEventListener('wheel', preventScroll)
      overlay.removeEventListener('touchmove', preventScroll)
    }
  }, [open])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeModal()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (!open) return null

  return (
    <div
      className="beta-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Join beta signup"
    >
      <div className="beta-modal" ref={modalRef}>
        <button className="beta-modal-close" onClick={closeModal} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="beta-modal-success">
            <div className="beta-modal-success-icon">
              <CheckCircle2 size={40} />
            </div>
            <h3>You're on the list!</h3>
            <p>We'll reach out soon with your beta access details. Welcome aboard.</p>
            <button className="btn-primary" onClick={closeModal} style={{ marginTop: '1rem' }}>
              Got it
            </button>
          </div>
        ) : (
          <>
            <h3 className="beta-modal-title">
              Join the <span className="text-gradient">Free Beta</span>
            </h3>
            <p className="beta-modal-desc">
              Get permanent free access to all core features. Only 500 spots available.
            </p>
            <form onSubmit={handleSubmit} noValidate className="beta-modal-form">
              <label htmlFor="modal-beta-email" className="sr-only">Email address</label>
              <input
                ref={inputRef}
                id="modal-beta-email"
                type="email"
                className="beta-modal-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                autoComplete="email"
                aria-required="true"
                aria-describedby={error ? 'modal-beta-error' : undefined}
              />
              {error && (
                <p id="modal-beta-error" className="beta-modal-error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn-primary beta-modal-submit">
                Get Beta Access
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </form>
            <p className="beta-modal-privacy">
              No spam. Unsubscribe anytime. Your files never leave your browser.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
