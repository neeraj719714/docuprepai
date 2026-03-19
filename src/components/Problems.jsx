import React from 'react'
import { Brain, ShieldAlert, TableProperties } from 'lucide-react'

const problems = [
  {
    number: '01',
    icon: Brain,
    colorClass: 'orange',
    title: 'AI Chokes on PDF Formatting',
    description:
      'ChatGPT and Claude struggle with PDF junk — headers, watermarks, multi-column layouts, and encoding errors corrupt your AI\'s context window.',
  },
  {
    number: '02',
    icon: ShieldAlert,
    colorClass: 'red',
    title: 'Redaction Is Fake Security',
    description:
      'Drawing a black box over text doesn\'t delete it. Anyone can copy-paste from most "redacted" PDFs and recover the hidden data instantly.',
  },
  {
    number: '03',
    icon: TableProperties,
    colorClass: 'yellow',
    title: 'Bank Statements Break on Export',
    description:
      'Bank statement PDFs with merged cells, irregular layouts, or nested data get scrambled by standard converters — destroying your financial data integrity.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="problems">
      <div className="container">
        <header className="problems-header">
          <div className="section-badge">
            <span aria-hidden="true">⚠️</span>
            The Problem
          </div>
          <h2 className="problems-title">
            Why Your PDF Workflow Is Broken
          </h2>
          <p className="problems-subtitle">
            Three critical problems that cost you time, security, and accuracy every day
          </p>
        </header>

        <div className="problems-grid">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <article key={p.number} className="problem-card">
                <div className="problem-card-number">{p.number}</div>
                <div className={`problem-icon-wrap ${p.colorClass}`} aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
