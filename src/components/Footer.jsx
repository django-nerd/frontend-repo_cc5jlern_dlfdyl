import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-10 text-center text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <p>© {new Date().getFullYear()} Samar Mane — ML Engineer. Built with love and neon.</p>
      </div>
    </footer>
  )
}
