import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'Transformers', 'PyTorch', 'TensorFlow', 'FastAPI', 'LangChain', 'FAISS', 'Weights & Biases', 'MLflow', 'Docker', 'Kubernetes', 'Airflow/Prefect', 'MLOps', 'Data Engineering'
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          style={{ fontFamily: 'Orbitron, var(--font-sans)' }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-red-500/50 hover:bg-red-500/10"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
