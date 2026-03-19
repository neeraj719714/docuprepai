import React from 'react'
import { ToastProvider } from './components/Toast.jsx'
import { BetaModalProvider } from './components/BetaModal.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problems from './components/Problems.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import BetaCTA from './components/BetaCTA.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ToastProvider>
      <BetaModalProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Problems />
          <Features />
          <HowItWorks />
          <BetaCTA />
          <FAQ />
        </main>
        <Footer />
      </BetaModalProvider>
    </ToastProvider>
  )
}
