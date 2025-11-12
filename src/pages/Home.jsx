import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="home">
      <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        Hi, I'm Your Name
      </motion.h1>
      <motion.p initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        I build beautiful web experiences. Explore my projects and testimonials.
      </motion.p>
    </section>
  )
}
