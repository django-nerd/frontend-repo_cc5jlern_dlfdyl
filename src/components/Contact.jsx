import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          style={{ fontFamily: 'Orbitron, var(--font-sans)' }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={(e)=>{e.preventDefault(); setSent(true)}}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:grid-cols-2"
        >
          <input required placeholder="Name" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-red-500/60"/>
          <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-red-500/60"/>
          <textarea required placeholder="Message" className="md:col-span-2 min-h-[140px] rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-red-500/60"/>
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="rounded-lg bg-red-600/90 px-6 py-3 text-white shadow-[0_0_24px_4px_rgba(255,0,64,0.35)] transition hover:bg-red-600">Send</button>
            {sent && <span className="text-green-400">Thanks! I'll get back to you.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
