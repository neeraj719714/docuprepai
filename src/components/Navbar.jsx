import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoWithText from '../../main-logo-with-tex.svg'
import { useBetaModal } from './BetaModal.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useBetaModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" aria-label="DocuPrepAI home">
          <img src={logoWithText} alt="DocuPrepAI" />
        </a>

        <div className="navbar-links">
          <a href="#hero">Home</a>
          <a href="#problems">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="navbar-right">
          <button className="btn-nav-cta" onClick={openModal}>Join Beta</button>
        </div>

        <button
          className="navbar-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <a href="#hero" onClick={handleNavClick}>Home</a>
        <a href="#problems" onClick={handleNavClick}>Features</a>
        <a href="#how-it-works" onClick={handleNavClick}>How It Works</a>
        <a href="#faq" onClick={handleNavClick}>FAQ</a>
        <button className="btn-nav-cta" onClick={() => { handleNavClick(); openModal() }}>Join Beta</button>
      </div>
    </nav>
  )
}
