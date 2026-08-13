'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
}) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}