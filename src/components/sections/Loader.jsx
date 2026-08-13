// src/components/sections/Loader.jsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let timeout

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)

          timeout = setTimeout(() => {
            setIsLoading(false)

            setTimeout(() => {
              onComplete?.()
            }, 450)
          }, 300)

          return 100
        }

        // Smooth, controlled progress
        const increment =
          prev < 60 ? 6 :
          prev < 85 ? 3 :
          1.5

        return Math.min(prev + increment, 100)
      })
    }, 55)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9998]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#050B16]
            text-white
          "
        >
          {/* =========================================
              BACKGROUND
          ========================================== */}

          <div className="pointer-events-none absolute inset-0">

            {/* Technical grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.025]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: '70px 70px',
              }}
            />

            {/* Blue ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#2563EB]/[0.055]
                blur-[140px]
              "
            />

            {/* Small corner glow */}
            <div
              className="
                absolute
                -left-40
                top-1/4
                h-80
                w-80
                rounded-full
                bg-[#2563EB]/[0.025]
                blur-[120px]
              "
            />

          </div>

          {/* =========================================
              CONTENT
          ========================================== */}

          <div className="relative z-10 w-full max-w-[420px] px-8">

            {/* Top metadata */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-8
                flex
                items-center
                justify-between
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              <span>Portfolio</span>

              <span className="flex items-center gap-2">
                <span className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#4D8DFF]
                " />

                Frontend Developer
              </span>
            </motion.div>

            {/* =====================================
                LOGO / MARK
            ====================================== */}

            <div className="mb-10 flex justify-center">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >

                {/* Outer rotating ring */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    border
                    border-[#4D8DFF]/10
                    border-t-[#4D8DFF]/60
                  "
                />

                {/* Main mark */}

                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#4D8DFF]/20
                    bg-[#081120]
                  "
                >

                  <span
                    className="
                      font-clash
                      text-2xl
                      font-semibold
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    SG
                  </span>

                  {/* Center dot */}

                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      right-2
                      top-2
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#4D8DFF]
                    "
                  />

                </div>

              </motion.div>

            </div>

            {/* =====================================
                NAME
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="text-center"
            >

              <h1
                className="
                  font-clash
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                Simran Gautam
              </h1>

              <p
                className="
                  mt-2
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Building interfaces with code & curiosity
              </p>

            </motion.div>

            {/* =====================================
                PROGRESS
            ====================================== */}

            <div className="mt-12">

              <div className="mb-3 flex items-center justify-between">

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-white/25
                  "
                >
                  Initializing
                </span>

                <motion.span
                  key={Math.floor(progress)}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  className="
                    font-mono
                    text-[10px]
                    text-[#4D8DFF]
                  "
                >
                  {Math.floor(progress)
                    .toString()
                    .padStart(3, '0')}
                  %
                </motion.span>

              </div>

              {/* Progress track */}

              <div
                className="
                  relative
                  h-px
                  w-full
                  overflow-hidden
                  bg-white/[0.08]
                "
              >

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    bg-[#4D8DFF]
                  "
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                  }}
                />

                {/* Moving highlight */}

                <motion.div
                  animate={{
                    x: ['-100%', '400%'],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    top-0
                    h-full
                    w-20
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                  "
                />

              </div>

            </div>

            {/* =====================================
                BOTTOM STATUS
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#4D8DFF]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-white/20
                "
              >
                Preparing the experience
              </span>

            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}