import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Lock, Loader2 } from 'lucide-react'
import { sendBetaSignupEmail } from '../utils/emailService'

export default function BetaCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
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
    setLoading(true)
    try {
      await sendBetaSignupEmail(trimmed, 'Beta CTA Section')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="beta" className="beta-cta">
      <div className="beta-cta-orb-1" aria-hidden="true" />
      <div className="beta-cta-orb-2" aria-hidden="true" />

      <div className="container">
        <div className="beta-inner">
          <div className="beta-badge" aria-label="Free beta access available">
            <Lock size={13} aria-hidden="true" />
            Free Beta Access
          </div>

          <h2 className="beta-title">
            Be Among the First to<br />
            <span className="text-gradient">Experience DocuPrepAI</span>
          </h2>

          <p className="beta-desc">
            Join our beta program. Free access for the first 500 users, forever.
          </p>

          {/* Stats */}
          <div className="beta-stats" aria-label="Beta program stats">
            <div className="beta-stat">
              <span className="beta-stat-number green">500</span>
              <span className="beta-stat-label">Beta slots available</span>
            </div>
            <div className="beta-stat">
              <span className="beta-stat-number blue">&lt; 2s</span>
              <span className="beta-stat-label">Avg. processing time</span>
            </div>
            <div className="beta-stat">
              <span className="beta-stat-number purple">99.9%</span>
              <span className="beta-stat-label">Uptime SLA</span>
            </div>
          </div>

          {/* Form or success */}
          {submitted ? (
            <div className="beta-success" role="status" aria-live="polite">
              <div className="beta-success-icon" aria-hidden="true">
                <CheckCircle2 size={32} />
              </div>
              <h3>You're on the list!</h3>
              <p>We'll reach out soon with your beta access details. Welcome aboard.</p>
            </div>
          ) : (
            <form
              className="beta-form"
              onSubmit={handleSubmit}
              aria-label="Beta signup form"
              noValidate
            >
              <div className="beta-input-row">
                <label htmlFor="beta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="beta-email"
                  type="email"
                  className="beta-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={error ? 'beta-email-error' : undefined}
                />
                <button type="submit" className="btn-beta-submit" disabled={loading}>
                  {loading ? (
                    <>Sending… <Loader2 size={17} className="spin" aria-hidden="true" /></>
                  ) : (
                    <>Get Beta Access <ArrowRight size={17} aria-hidden="true" /></>
                  )}
                </button>
              </div>
              {error && (
                <p
                  id="beta-email-error"
                  style={{ color: 'var(--color-accent-red)', fontSize: '0.875rem', textAlign: 'left' }}
                  role="alert"
                >
                  {error}
                </p>
              )}
              <p className="beta-privacy">
                No spam. Unsubscribe anytime. 100% client-side — your files never leave your browser.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Screen-reader-only utility */}
      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`}</style>
    </section>
  )
}
