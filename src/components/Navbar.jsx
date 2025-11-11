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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-white font-semibold tracking-widest uppercase text-sm">
          <span className="text-red-500">//</span> Samar
        </a>
        <div className="flex items-center gap-6 text-white/80 text-sm">
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#skills">Skills</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
