import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section>
      <h2>About</h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        I'm a frontend engineer with a passion for building delightful, accessible interfaces.
      </motion.p>
    </section>
  )
}
