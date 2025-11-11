import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure readability, keep pointer-events-none */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0)_0%,rgba(9,9,11,0.35)_50%,rgba(9,9,11,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: 'Orbitron, var(--font-sans)' }}
        >
          Samar Mane
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-base sm:text-xl md:text-2xl text-white/80"
        >
          Machine Learning Engineer • Generative AI • MLOps • Research
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-3 text-white backdrop-blur-sm transition hover:border-red-500/60 hover:bg-red-500/10">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_2px_rgba(255,0,64,0.6)] animate-pulse" />
            View Projects
          </a>
          <a href="#contact" className="rounded-full bg-red-600/90 px-6 py-3 text-white shadow-[0_0_24px_4px_rgba(255,0,64,0.35)] transition hover:bg-red-600">Contact</a>
        </motion.div>
      </div>
    </section>
  )
}
