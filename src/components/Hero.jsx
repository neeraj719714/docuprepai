import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Check, Paperclip, ChevronDown, Zap } from 'lucide-react'
import { useBetaModal } from './BetaModal.jsx'

function useProgressAnimation() {
  const [progress, setProgress] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)
  const DURATION = 3200  // ms to go 0 → 100
  const PAUSE = 1200     // ms to hold at 100 before reset

  useEffect(() => {
    let phase = 'run'  // 'run' | 'pause' | 'reset'
    let pauseStart = null

    const tick = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now

      if (phase === 'run') {
        const elapsed = now - startTimeRef.current
        const pct = Math.min(100, (elapsed / DURATION) * 100)
        setProgress(Math.round(pct))
        if (pct >= 100) {
          phase = 'pause'
          pauseStart = now
        }
      } else if (phase === 'pause') {
        if (now - pauseStart >= PAUSE) {
          phase = 'run'
          startTimeRef.current = now
          setProgress(0)
          setAnimKey(k => k + 1)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { progress, animKey }
}

export default function Hero() {
  const { progress, animKey } = useProgressAnimation()
  const { openModal } = useBetaModal()

  return (
    <section id="hero" className="hero">
      {/* Background orbs */}
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />
      </div>

      <div className="container hero-content">
        <div className="hero-inner">
          {/* Badge */}
          <div className="hero-badge" role="status">
            <span aria-hidden="true" />
            Beta Now Live — Join the First 500 Users
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="line-accent text-gradient">Transform PDFs for</span>
            {' '}the AI Era.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            DocuPrepAI prepares your documents for AI consumption, securely redacts sensitive data,
            and converts bank statements to clean CSV — 100% client-side. Your data never leaves your browser.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <button className="btn-primary" onClick={openModal}>
              Join Free Beta
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>

          {/* Trust signals */}
          <div className="hero-trust" aria-label="Beta benefits">
            <span className="hero-trust-item">
              <Check size={15} aria-hidden="true" />
              No credit card
            </span>
            <span className="hero-trust-item">
              <Check size={15} aria-hidden="true" />
              500 beta slots
            </span>
            <span className="hero-trust-item">
              <Check size={15} aria-hidden="true" />
              Free forever
            </span>
            <span className="hero-trust-item">
              <Check size={15} aria-hidden="true" />
              Data never leaves your browser
            </span>
          </div>

          {/* Product mockup */}
          <div className="hero-mockup" role="img" aria-label="DocuPrepAI product interface preview">
            {/* Window chrome */}
            <div className="mockup-header">
              <div className="mockup-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="mockup-title">DocuPrepAI — PDF Processor</span>
              <button className="mockup-add-btn" tabIndex={-1} aria-hidden="true">
                <Paperclip size={13} />
                Choose file
              </button>
            </div>

            {/* File rows */}
            <div className="mockup-body">
              <div className="mockup-file-row">
                <div className="mockup-file-icon" aria-hidden="true">PDF</div>
                <div className="mockup-file-info">
                  <div className="mockup-file-name">research_paper.pdf</div>
                  <div className="mockup-file-size">2.4 MB</div>
                </div>
                <div className="mockup-file-actions" aria-hidden="true">
                  <ArrowRight size={14} className="mockup-arrow" />
                  <span className="mockup-tag mockup-tag-output">Output</span>
                  <span className="mockup-tag mockup-tag-select">
                    AI-Ready <ChevronDown size={10} />
                  </span>
                </div>
              </div>

              <div className="mockup-file-row">
                <div className="mockup-file-icon" aria-hidden="true">PDF</div>
                <div className="mockup-file-info">
                  <div className="mockup-file-name">bank_statement.pdf</div>
                  <div className="mockup-file-size">1.8 MB</div>
                </div>
                <div className="mockup-file-actions" aria-hidden="true">
                  <ArrowRight size={14} className="mockup-arrow" />
                  <span className="mockup-tag mockup-tag-output">Output</span>
                  <span className="mockup-tag mockup-tag-select">
                    CSV <ChevronDown size={10} />
                  </span>
                </div>
              </div>
            </div>

            {/* Progress footer */}
            <div className="mockup-footer">
              <div className="mockup-convert-row">
                <div className="mockup-convert-btn" aria-hidden="true">
                  <Zap size={15} />
                  Processing...
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="mockup-progress-label" aria-hidden="true">Extracting content</div>
                  <div
                    className="mockup-progress-pct"
                    aria-label={`Processing ${progress}% complete`}
                  >
                    {progress}%
                  </div>
                </div>
              </div>
              <div
                className="mockup-progress-track"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  key={animKey}
                  className="mockup-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
