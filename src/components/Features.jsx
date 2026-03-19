import React from 'react'
import { Sparkles, ShieldCheck, Table2, Check } from 'lucide-react'

function AIReadyVisual() {
  return (
    <div className="feature-visual-card">
      <div className="fv-header">Before &amp; After — AI-Ready Export</div>
      <div className="fv-body">
        <div className="ba-columns">
          <div>
            <div className="ba-col-label bad">Before</div>
            <div className="ba-text bad">
              <div className="junk-line">─── Page 1 of 12 ───</div>
              <div className="junk-line">CONFIDENTIAL | DRAFT</div>
              <div style={{ marginTop: '6px' }}>
                Sect. 3.1...........pg 4{'\n'}
              </div>
              <div className="junk-line">©2024 Corp. All rights.</div>
              <div style={{ marginTop: '6px', color: '#4a5568' }}>
                The  findings  of  the<br />
                research  indicate  a<br />
                significant    increase...
              </div>
            </div>
          </div>
          <div>
            <div className="ba-col-label good">After</div>
            <div className="ba-text good">
              <div style={{ marginBottom: '8px', color: '#8892b0' }}>
                <strong style={{ color: '#e8eeff' }}>Section 3.1 — Findings</strong>
              </div>
              <div>
                The findings of the research indicate a significant
                increase in processing efficiency when structured
                data pipelines are applied consistently.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RedactionVisual() {
  return (
    <div className="feature-visual-card">
      <div className="fv-header">Secure Redaction Preview</div>
      <div className="fv-body">
        <div className="redaction-lines">
          <div className="redact-line normal" style={{ width: '90%' }} />
          <div className="redact-line normal" style={{ width: '75%' }} />
          <div className="redact-line redacted" style={{ width: '85%' }} />
          <div className="redact-line normal" style={{ width: '60%' }} />
          <div className="redact-line redacted" style={{ width: '70%' }} />
          <div className="redact-line redacted" style={{ width: '55%' }} />
          <div className="redact-line normal" style={{ width: '80%' }} />
          <div className="redact-line normal" style={{ width: '65%' }} />
        </div>
        <div className="redact-secure-badge" aria-label="Cryptographic redaction verified">
          <ShieldCheck size={14} aria-hidden="true" />
          Cryptographic removal verified — copy-paste returns nothing
        </div>
      </div>
    </div>
  )
}

function TableVisual() {
  return (
    <div className="feature-visual-card">
      <div className="fv-header">Bank Statement to Clean CSV — Preview</div>
      <div className="fv-body">
        <table className="fv-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>03/01</td>
              <td>ACH Payment - Rent</td>
              <td>$2,400</td>
              <td></td>
            </tr>
            <tr>
              <td>03/05</td>
              <td>Direct Deposit - Payroll</td>
              <td></td>
              <td>$4,850</td>
            </tr>
            <tr>
              <td>03/12</td>
              <td>POS Purchase - Grocery</td>
              <td>$127</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="csv-preview" aria-label="CSV output preview">
          Date,Description,Debit,Credit<br />
          03/01,ACH Payment - Rent,$2400,<br />
          03/05,Direct Deposit - Payroll,,$4850<br />
          03/12,POS Purchase - Grocery,$127,
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    number: null,
    icon: Sparkles,
    colorClass: 'green',
    headline: 'Feed PDFs to AI Without the Noise',
    description:
      'Our intelligent engine strips away every piece of formatting junk that confuses language models — page numbers, running headers, footers, watermarks, and multi-column chaos — then re-flows the content into clean, linear, semantically-coherent text.',
    bullets: [
      { text: 'Intelligent text re-flow across columns and sections', color: 'green' },
      { text: 'Removes headers, footers, watermarks & pagination', color: 'green' },
      { text: 'Preserves semantic structure for AI context windows', color: 'green' },
    ],
    Visual: AIReadyVisual,
    reverse: false,
    label: 'AI-Ready Export',
  },
  {
    number: null,
    icon: ShieldCheck,
    colorClass: 'blue',
    headline: 'Redact Data That Stays Gone',
    description:
      'Standard "redaction" tools draw black boxes on screen — the underlying text data remains in the file and can be trivially recovered. DocuPrepAI performs cryptographic removal, permanently deleting the character data from the PDF structure itself.',
    bullets: [
      { text: 'Pixels AND underlying text data permanently removed', color: 'blue' },
      { text: 'Copy-paste from the redacted PDF reveals nothing', color: 'blue' },
      { text: 'Full audit trail for legal and compliance workflows', color: 'blue' },
    ],
    Visual: RedactionVisual,
    reverse: true,
    label: 'True Secure Redaction',
  },
  {
    number: null,
    icon: Table2,
    colorClass: 'purple',
    headline: 'Bank Statements to Clean CSV',
    description:
      'Smart table detection that handles the cases standard tools break on: merged cells, multi-column bank statement layouts, nested tables, and irregular row spans. Export to perfectly structured CSV that opens flawlessly in Excel and Python.',
    bullets: [
      { text: 'Handles every major bank statement format', color: 'purple' },
      { text: 'Accurate date, description, and amount parsing', color: 'purple' },
      { text: 'Merged cell reconstruction with clean data mapping', color: 'purple' },
    ],
    Visual: TableVisual,
    reverse: false,
    label: 'Bank Statement to CSV',
  },
]

export default function Features() {
  return (
    <section id="features-detail" className="features">
      <div className="features-bg-orb" aria-hidden="true" />
      <div className="container">
        <header className="features-header">
          <div className="section-badge">
            <span aria-hidden="true">✨</span>
            The Solution
          </div>
          <h2 className="features-title">One Tool. Three Superpowers.</h2>
          <p className="features-subtitle">
            DocuPrepAI solves each problem with purpose-built intelligence
          </p>
        </header>

        {features.map((f) => {
          const Icon = f.icon
          const { Visual } = f
          return (
            <article
              key={f.number}
              className={`feature-block${f.reverse ? ' reverse' : ''}`}
            >
              <div className="feature-text">
                {f.number && <div className="feature-number-tag">{f.number}</div>}
                <div className={`feature-icon-wrap ${f.colorClass}`} aria-hidden="true">
                  <Icon size={26} />
                </div>
                <h3 className="feature-headline">{f.headline}</h3>
                <p className="feature-desc">{f.description}</p>
                <ul className="feature-bullets" aria-label={`${f.label} features`}>
                  {f.bullets.map((b) => (
                    <li key={b.text} className="feature-bullet">
                      <span className={`feature-bullet-dot ${b.color}`} aria-hidden="true" />
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-visual">
                <Visual />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
