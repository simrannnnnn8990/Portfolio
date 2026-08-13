'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const isHovering = useRef(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = {
    damping: 28,
    stiffness: 650,
    mass: 0.35,
  }

  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches

    if (isTouchDevice) return

    const moveCursor = (event) => {
      const { clientX, clientY } = event

      cursorX.set(clientX - 16)
      cursorY.set(clientY - 16)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(
          ${clientX - 3}px,
          ${clientY - 3}px,
          0
        )`
      }
    }

    const handleMouseOver = (event) => {
      const target = event.target

      if (
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], .magnetic'
        )
      ) {
        isHovering.current = true

        if (cursorRef.current) {
          cursorRef.current.style.transform = 'scale(1.45)'
          cursorRef.current.style.backgroundColor =
            'rgba(77, 141, 255, 0.08)'
          cursorRef.current.style.borderColor =
            'rgba(77, 141, 255, 0.55)'
        }

        if (dotRef.current) {
          dotRef.current.style.backgroundColor = '#4D8DFF'
          dotRef.current.style.transform += ' scale(1.15)'
        }
      }
    }

    const handleMouseOut = (event) => {
      const target = event.target
      const relatedTarget = event.relatedTarget

      if (
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], .magnetic'
        )
      ) {
        if (
          relatedTarget instanceof Element &&
          target.closest(
            'a, button, input, textarea, select, [role="button"], .magnetic'
          ) ===
            relatedTarget.closest(
              'a, button, input, textarea, select, [role="button"], .magnetic'
            )
        ) {
          return
        }

        isHovering.current = false

        if (cursorRef.current) {
          cursorRef.current.style.transform = 'scale(1)'
          cursorRef.current.style.backgroundColor =
            'rgba(77, 141, 255, 0.05)'
          cursorRef.current.style.borderColor =
            'rgba(77, 141, 255, 0.35)'
        }

        if (dotRef.current) {
          dotRef.current.style.backgroundColor = '#4D8DFF'
        }
      }
    }

    const handleMouseLeaveWindow = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = '0'
      }
    }

    const handleMouseEnterWindow = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', moveCursor, {
      passive: true,
    })

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    document.documentElement.addEventListener(
      'mouseleave',
      handleMouseLeaveWindow
    )

    document.documentElement.addEventListener(
      'mouseenter',
      handleMouseEnterWindow
    )

    return () => {
      window.removeEventListener('mousemove', moveCursor)

      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)

      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeaveWindow
      )

      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnterWindow
      )
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer cursor */}
      <motion.div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-8
          w-8
          rounded-full
          border
          mix-blend-difference
        "
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          backgroundColor: 'rgba(77, 141, 255, 0.05)',
          borderColor: 'rgba(77, 141, 255, 0.35)',
          transition:
            'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), background-color 220ms ease, border-color 220ms ease, opacity 200ms ease',
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          h-1.5
          w-1.5
          rounded-full
          bg-[#4D8DFF]
        "
        style={{
          transition:
            'transform 70ms ease, background-color 200ms ease, opacity 200ms ease',
        }}
      />
    </>
  )
}