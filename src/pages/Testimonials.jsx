import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { id: 1, name: 'Client A', quote: 'Amazing work — delivered on time and beyond expectations.' },
  { id: 2, name: 'Client B', quote: 'Improved our conversion rate significantly.' },
  { id: 3, name: 'Client C', quote: 'Great communicator and skilled developer.' },
]

export default function Testimonials() {
  return (
    <section>
      <h2>Testimonials</h2>
      <div className="testimonials">
        {items.map((t, i) => (
          <motion.blockquote key={t.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
            <p>“{t.quote}”</p>
            <cite>- {t.name}</cite>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
