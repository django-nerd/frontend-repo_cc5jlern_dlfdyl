import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, BrainCircuit, Github } from 'lucide-react'

const items = [
  {
    title: 'Vision Transformer Fine-tuning',
    desc: 'Fine-tuned ViT on medical imaging with mixed-precision and advanced augmentations.',
    icon: Cpu,
    tags: ['PyTorch', 'ViT', 'AMP', 'Albumentations']
  },
  {
    title: 'RAG Chat for Docs',
    desc: 'Built a production-grade retrieval augmented generation pipeline with hybrid search.',
    icon: BrainCircuit,
    tags: ['LangChain', 'FAISS', 'OpenAI', 'FastAPI']
  },
  {
    title: 'MLOps CI/CD',
    desc: 'End-to-end ML pipeline with feature store, model registry, and automated deployment.',
    icon: Cpu,
    tags: ['MLflow', 'Prefect', 'Docker', 'Kubernetes']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: 'Orbitron, var(--font-sans)' }}
        >
          Featured Work
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background:'radial-gradient(600px circle at var(--x) var(--y), rgba(255,0,64,0.25), transparent 40%)'}}/>
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                  <p.icon className="h-6 w-6 text-red-400" />
                </div>
                <Github className="h-5 w-5 text-white/60" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-black/40 border border-white/10 px-3 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
