import React from 'react'
import { Twitter, Github, Linkedin } from 'lucide-react'
import { useToast } from './Toast.jsx'
import logoWithText from '../../main-logo-with-tex.svg'

export default function Footer() {
  const showToast = useToast()

  const handleComingSoon = (e) => {
    e.preventDefault()
    showToast('This feature is coming soon!')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" aria-label="DocuPrepAI home">
              <img src={logoWithText} alt="DocuPrepAI" />
            </a>
            <p className="footer-tagline">
              Making PDFs AI-ready, truly secure, and turning bank statements into clean CSV — all in one tool.
            </p>
          </div>

          {/* Product column */}
          <div>
            <div className="footer-col-title">Product</div>
            <nav aria-label="Product links">
              <ul className="footer-links">
                <li><a href="#" onClick={handleComingSoon}>AI Export</a></li>
                <li><a href="#" onClick={handleComingSoon}>Secure Redaction</a></li>
                <li><a href="#" onClick={handleComingSoon}>Bank Statement CSV</a></li>
                <li><a href="#" onClick={handleComingSoon}>API Docs</a></li>
              </ul>
            </nav>
          </div>

          {/* Company column */}
          <div>
            <div className="footer-col-title">Company</div>
            <nav aria-label="Company links">
              <ul className="footer-links">
                <li><a href="#" onClick={handleComingSoon}>About</a></li>
                <li><a href="#" onClick={handleComingSoon}>Blog</a></li>
                <li><a href="#" onClick={handleComingSoon}>Careers</a></li>
                <li><a href="#" onClick={handleComingSoon}>Privacy Policy</a></li>
                <li><a href="#" onClick={handleComingSoon}>Terms</a></li>
              </ul>
            </nav>
          </div>

          {/* Connect column */}
          <div>
            <div className="footer-col-title">Connect</div>
            <div className="footer-social" aria-label="Social media links">
              <a
                href="https://twitter.com/docuprepai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DocuPrepAI on Twitter"
              >
                <Twitter size={17} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/docuprepai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DocuPrepAI on GitHub"
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/docuprepai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DocuPrepAI on LinkedIn"
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; 2025 DocuPrepAI. All rights reserved.
          </p>
          <nav className="footer-bottom-right" aria-label="Legal links">
            <a href="#" onClick={handleComingSoon}>Privacy Policy</a>
            <a href="#" onClick={handleComingSoon}>Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
