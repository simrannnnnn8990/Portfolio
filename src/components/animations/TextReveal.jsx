'use client'

import { motion } from 'framer-motion'

export default function TextReveal({
  text,
  className = '',
  delay = 0,
}) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={child}
          style={{
            display: 'inline-block',
            marginRight: '0.25em',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}