import React from 'react'
import { motion } from 'framer-motion'

const mock = [
  { id: 1, title: 'Project Alpha', desc: 'A modern web app with React.' },
  { id: 2, title: 'Project Beta', desc: 'E-commerce platform with smooth UX.' },
  { id: 3, title: 'Project Gamma', desc: 'Data visualization dashboard.' },
]

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {mock.map((p, i) => (
          <motion.article key={p.id} className="card" whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring' }}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="btn" href="#">View case study</a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
