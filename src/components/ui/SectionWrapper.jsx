'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({
  children,
  className = '',
}) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.12,
  })

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}