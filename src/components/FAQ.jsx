import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is DocuPrepAI really free?',
    answer:
      'Yes. Beta users get permanent free access to all core features — AI-Ready Export, Secure Redaction, and Bank Statement to CSV — for the lifetime of their account. No credit card required to sign up. We may introduce a paid tier for advanced features later, but early beta users are grandfathered into the free plan.',
  },
  {
    question: 'How does AI-Ready Export work?',
    answer:
      'Our engine analyzes the PDF\'s internal structure, detects and removes formatting artifacts like headers, footers, watermarks, and multi-column layouts, then re-flows the text into a clean, linear format that AI models like ChatGPT and Claude can process without context corruption or hallucination-inducing junk.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. DocuPrepAI runs entirely in your browser — your files are never uploaded to any server. All processing happens locally on your device using client-side technology. No data leaves your machine, ever. There are no servers involved in document processing, so there is nothing to breach.',
  },
  {
    question: 'What PDF types are supported?',
    answer:
      'DocuPrepAI supports standard digital PDFs, scanned PDFs (using built-in OCR powered by our document understanding engine), password-protected PDFs, and fillable PDF forms. Files up to 500 pages are supported in the current beta. Higher page counts will be available in the API tier.',
  },
  {
    question: 'Can I use DocuPrepAI via API?',
    answer:
      'Yes. A full REST API is available for all beta users, complete with endpoint documentation, code examples in Python, JavaScript, and cURL, SDK packages, and webhook support for async processing of large documents. API keys are provided upon beta account activation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <header className="faq-header">
          <div className="section-badge">
            <span aria-hidden="true">💬</span>
            FAQ
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know before joining the beta</p>
        </header>

        <dl className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? ' open' : ''}`}
              >
                <dt>
                  <button
                    className="faq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="faq-chevron"
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  aria-labelledby={`faq-question-${i}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    {faq.answer}
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
