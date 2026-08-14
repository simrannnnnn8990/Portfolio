// src/components/ui/MagneticButton.jsx
'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  onClick,
  className = '',
  strength = 0.25,
  type = 'button',
  disabled = false,
}) {
  const ref = useRef(null)

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (event) => {
    if (!ref.current || disabled) return

    const rect = ref.current.getBoundingClientRect()

    const x =
      (event.clientX - (rect.left + rect.width / 2)) *
      strength

    const y =
      (event.clientY - (rect.top + rect.height / 2)) *
      strength

    setPosition({
      x: Math.max(-10, Math.min(10, x)),
      y: Math.max(-10, Math.min(10, y)),
    })
  }

  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0,
    })
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
        mass: 0.25,
      }}
      className={`group relative ${className}`}
    >
      {children}
    </motion.button>
  )
}