import React from 'react'
import Navbar from './components/Navbar'
import NeonBackground from './components/NeonBackground'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-red-500/30 selection:text-white">
      <NeonBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
