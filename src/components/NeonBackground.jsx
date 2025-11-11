import React from 'react'
import { motion } from 'framer-motion'

// Animated cyberpunk background: gradient aura, grid, particles
export default function NeonBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,0,64,0.25),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(110,0,255,0.25),transparent_60%)] mix-blend-screen" />

      {/* Gradient glow blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-[46rem] w-[46rem] rounded-full bg-[#ff0033]/20 blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-fuchsia-600/20 blur-3xl"
        animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] animate-slow-pan" />
      </div>

      {/* Floating particles */}
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/60 shadow-[0_0_8px_2px_rgba(255,0,64,0.25)]"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 4 }}
        />
      ))}
    </div>
  )
}
