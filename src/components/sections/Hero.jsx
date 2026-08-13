'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  MousePointer2,
} from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 20,
  })

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 20,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')

    setIsTouch(mediaQuery.matches)

    const handleMove = (event) => {
      if (mediaQuery.matches) return

      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      mouseX.set(x * 12)
      mouseY.set(y * 12)
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [mouseX, mouseY])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050B16] text-white"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Ambient blue light */}
      <motion.div
        style={{
          x: isTouch ? 0 : springX,
          y: isTouch ? 0 : springY,
        }}
        className="
          pointer-events-none
          absolute
          left-[40%]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#2563EB]/[0.06]
          blur-[130px]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          items-center
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:px-12
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* LEFT */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#4D8DFF]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Frontend Developer / Creative Engineer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[760px]
                font-clash
                text-[clamp(3.5rem,8vw,7.5rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              <span className="block">I build</span>

              <span className="relative block">
                interfaces
                <span className="absolute bottom-[-6px] left-0 h-px w-[38%] bg-[#4D8DFF]" />
              </span>

              <span className="mt-4 block text-white/40">
                that feel <span className="text-[#4D8DFF]">alive.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="
                mt-9
                max-w-[560px]
                text-sm
                leading-7
                text-white/45
                sm:text-base
                sm:leading-8
              "
            >
              I&apos;m Simran Gautam, a frontend developer from
              Lucknow building responsive, interactive web experiences
              with React, Next.js and modern frontend technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <MagneticButton
                onClick={() => scrollTo('#work')}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#4D8DFF]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:bg-[#3D7BE8]
                "
              >
                Explore My Work

                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollTo('#contact')}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/[0.12]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/70
                  transition
                  duration-300
                  hover:border-[#4D8DFF]/50
                  hover:text-white
                "
              >
                Let&apos;s Connect

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </MagneticButton>
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                mt-14
                flex
                flex-wrap
                items-center
                gap-5
                border-t
                border-white/[0.07]
                pt-5
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />

                <span className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                  Based in Lucknow
                </span>
              </div>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <span className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                React / Next.js / JavaScript
              </span>
            </motion.div>
          </div>

          {/* RIGHT — WORKSPACE */}
          <motion.div
            style={{
              x: isTouch ? 0 : springX,
              y: isTouch ? 0 : springY,
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="mx-auto w-full max-w-[620px]"
          >
            {/* Label */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Interactive Workspace
              </span>

              <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-white/25">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />
                Live
              </span>
            </div>

            {/* Browser */}
            <div className="overflow-hidden border border-white/[0.1] bg-[#080F1C]/90 shadow-[0_35px_100px_rgba(0,0,0,0.35)]">

              {/* Browser bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>

                <div className="hidden h-6 w-[42%] items-center justify-center border border-white/[0.05] bg-white/[0.02] sm:flex">
                  <span className="text-[8px] text-white/20">
                    simran.dev / workspace
                  </span>
                </div>

                <span className="text-[8px] text-white/20">
                  01
                </span>
              </div>

              {/* Workspace */}
              <div className="grid min-h-[420px] grid-cols-1 sm:grid-cols-[42%_58%]">

                {/* Code */}
                <div className="border-b border-white/[0.07] bg-[#060C17] sm:border-b-0 sm:border-r">

                  <div className="flex h-9 items-center gap-2 border-b border-white/[0.06] px-4">
                    <Code2
                      size={12}
                      className="text-[#4D8DFF]/70"
                    />

                    <span className="text-[8px] text-white/25">
                      Hero.jsx
                    </span>
                  </div>

                  <div className="overflow-hidden px-4 py-5 font-mono text-[8px] leading-[2]">
                    <CodeLine number="01">
                      <span className="text-[#4D8DFF]">const</span>{' '}
                      <span className="text-white/70">
                        experience
                      </span>
                    </CodeLine>

                    <CodeLine number="02">
                      <span className="text-white/30">
                        = buildExperience(
                      </span>
                    </CodeLine>

                    <CodeLine number="03">
                      <span className="pl-2 text-white/40">
                        {'{'}
                      </span>
                    </CodeLine>

                    <CodeLine number="04">
                      <span className="pl-4 text-[#7CA7FF]">
                        design:
                      </span>{' '}
                      <span className="text-white/40">
                        &quot;intentional&quot;,
                      </span>
                    </CodeLine>

                    <CodeLine number="05">
                      <span className="pl-4 text-[#7CA7FF]">
                        motion:
                      </span>{' '}
                      <span className="text-white/40">
                        &quot;meaningful&quot;,
                      </span>
                    </CodeLine>

                    <CodeLine number="06">
                      <span className="pl-4 text-[#7CA7FF]">
                        responsive:
                      </span>{' '}
                      <span className="text-white/40">
                        true,
                      </span>
                    </CodeLine>

                    <CodeLine number="07">
                      <span className="pl-2 text-white/40">
                        {'}'}
                      </span>
                    </CodeLine>

                    <CodeLine number="08">
                      <span className="text-white/30">
                        )
                      </span>
                    </CodeLine>

                    <div className="my-5 h-px bg-white/[0.05]" />

                    <CodeLine number="09">
                      <span className="text-[#4D8DFF]">
                        return
                      </span>{' '}
                      <span className="text-white/60">
                        &lt;Experience /&gt;
                      </span>
                    </CodeLine>

                    <motion.div
                      animate={{ opacity: [0.15, 0.8, 0.15] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                      className="mt-5 h-3 w-px bg-[#4D8DFF]"
                    />
                  </div>
                </div>

                {/* Preview */}
                <div className="relative min-h-[420px] overflow-hidden bg-[#0A1322]">

                  <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Live Preview
                    </span>

                    <span className="text-[8px] text-[#4D8DFF]">
                      ● 01
                    </span>
                  </div>

                  <div className="flex min-h-[420px] flex-col justify-between p-6 pt-20">

                    <div>
                      <div className="mb-10 flex items-center justify-between">
                        <div className="h-1.5 w-16 bg-white/20" />

                        <div className="flex gap-2">
                          <span className="h-1 w-5 bg-white/10" />
                          <span className="h-1 w-8 bg-white/10" />
                        </div>
                      </div>

                      <div className="max-w-[260px]">
                        <div className="mb-2 h-2 w-20 bg-[#4D8DFF]/50" />

                        <div className="h-7 w-full bg-white/[0.08]" />

                        <div className="mt-2 h-7 w-[78%] bg-white/[0.05]" />
                      </div>

                      {/* Component card */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative mt-10 border border-white/[0.08] bg-white/[0.025] p-4"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-[8px] uppercase tracking-[0.12em] text-white/25">
                            Component
                          </span>

                          <span className="text-[8px] text-[#4D8DFF]">
                            React
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center border border-[#4D8DFF]/20 bg-[#4D8DFF]/[0.06]">
                            <span className="text-sm font-semibold text-[#4D8DFF]">
                              R
                            </span>
                          </div>

                          <div>
                            <div className="text-[10px] text-white/70">
                              Reusable UI
                            </div>

                            <div className="mt-1 text-[8px] text-white/25">
                              component architecture
                            </div>
                          </div>
                        </div>

                        {/* Cursor */}
                        <motion.div
                          animate={{
                            x: [0, 10, 3, 0],
                            y: [0, -4, 3, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute -bottom-3 right-6"
                        >
                          <MousePointer2
                            size={18}
                            strokeWidth={1.4}
                            className="fill-[#4D8DFF] text-white"
                          />

                          <span className="absolute left-4 top-3 whitespace-nowrap border border-white/[0.08] bg-[#08111F] px-2 py-1 text-[7px] text-white/60">
                            INTERACT
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="mt-8 flex items-end justify-between border-t border-white/[0.06] pt-4">
                      <div>
                        <div className="text-[8px] uppercase tracking-[0.14em] text-white/25">
                          Design
                        </div>

                        <div className="mt-1 text-[9px] text-white/55">
                          → Code → Interaction
                        </div>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-[#4D8DFF]/70"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Browser footer */}
              <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-3">
                <span className="text-[8px] uppercase tracking-[0.1em] text-white/20">
                  Design → Code → Experience
                </span>

                <span className="text-[8px] text-white/20">
                  Simran Gautam
                </span>
              </div>
            </div>

            {/* Index */}
            <div className="absolute -right-2 -top-7 hidden text-[9px] tracking-[0.15em] text-white/20 lg:block">
              01 / INTRO
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#work')}
        className="absolute bottom-7 left-6 hidden items-center gap-3 lg:flex"
      >
        <span className="flex h-9 w-5 items-start justify-center border border-white/15">
          <motion.span
            animate={{
              y: [5, 19, 5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
            className="mt-1 h-1.5 w-px bg-[#4D8DFF]"
          />
        </span>

        <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
          Scroll to explore
        </span>
      </button>

      {/* Location */}
      <div className="absolute bottom-7 right-6 hidden text-[8px] uppercase tracking-[0.14em] text-white/20 lg:block">
        Lucknow / India
      </div>
    </section>
  )
}

function CodeLine({ number, children }) {
  return (
    <div className="flex">
      <span className="mr-4 w-4 shrink-0 select-none text-white/10">
        {number}
      </span>

      <span className="whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}