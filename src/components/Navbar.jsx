import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
   >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md shadow-[0_0_24px_rgba(255,0,64,0.12)]">
          <a href="#" className="text-white font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: 'Orbitron, var(--font-sans)' }}>
            <span className="text-red-500">//</span> Samar Mane
          </a>
          <div className="flex items-center gap-6 text-white/80 text-sm">
            {[
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a key={link.label} className="group relative hover:text-white transition" href={link.href}>
                {link.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-red-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          {/* Ambient glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-40"
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ background: 'radial-gradient(120px 60px at 10% 50%, rgba(255,0,64,0.25), transparent), radial-gradient(120px 60px at 90% 50%, rgba(168,85,247,0.22), transparent)' }}
          />
        </div>
      </div>
    </motion.nav>
  )
}
