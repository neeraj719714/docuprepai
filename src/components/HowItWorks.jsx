import React from 'react'
import { UploadCloud, SlidersHorizontal, Download } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UploadCloud,
    title: 'Upload Your PDF',
    description:
      'Drop any PDF, up to 500 pages. We handle standard documents, scanned images with OCR, password-protected files, and PDF forms.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Choose Your Output',
    description:
      'Select AI-Ready Text, Secure Redaction, or Bank Statement CSV — or all three at once. Configure settings for each output type as needed.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download & Use',
    description:
      'Get clean, processed files in seconds. Download directly from the browser or integrate via our REST API for automated workflows.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <header className="how-header">
          <div className="section-badge">
            <span aria-hidden="true">🚀</span>
            Quick Start
          </div>
          <h2 className="how-title">Get Started in 3 Simple Steps</h2>
          <p className="how-subtitle">
            From raw PDF to AI-ready, redacted, or clean bank statement CSV in under 2 seconds
          </p>
        </header>

        <div className="steps-wrapper">
          <div className="steps-line" aria-hidden="true" />
          <ol className="steps-grid">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.number} className="step-card">
                  <div
                    className="step-number-circle"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div className="step-icon-wrap" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
