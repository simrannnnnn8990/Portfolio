'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
} from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('about')

  const tabs = {
    about: {
      label: 'About',
      title: 'I care about the details people don’t notice — until they’re wrong.',
      text:
        'I’m Simran Gautam, a frontend developer focused on building responsive interfaces that feel considered, intuitive and alive. I enjoy turning ideas into polished digital experiences where design and engineering work together.',
    },

    approach: {
      label: 'Approach',
      title: 'Design is only useful when it works.',
      text:
        'My approach is simple: understand the problem first, then build the experience around it. I care about clean component architecture, responsive behaviour, accessibility, performance and motion that has a purpose.',
    },

    currently: {
      label: 'Currently',
      title: 'Learning, building and pushing the frontend further.',
      text:
        'I’m continuously exploring modern React and Next.js patterns, interaction design, animation and better ways to translate visual ideas into maintainable frontend systems.',
    },
  }

  const principles = [
    {
      number: '01',
      title: 'Clarity',
      description:
        'Interfaces should communicate before they decorate.',
      icon: Layers3,
    },
    {
      number: '02',
      title: 'Interaction',
      description:
        'Motion should guide attention, not compete for it.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Engineering',
      description:
        'Good visuals deserve clean and maintainable code.',
      icon: Code2,
    },
  ]

  const technologies = [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP',
    'Git',
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050B16]
        px-6
        py-28
        text-white
        sm:px-8
        lg:px-12
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '72px 72px',
          }}
        />

        <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-[#2563EB]/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#2563EB]/[0.035] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/[0.07] pb-8 md:flex-row md:items-end">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#4D8DFF]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                 About
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                font-clash
                text-4xl
                font-semibold
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              The person behind
              <br />

              <span className="text-white/35">
                the interface.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[310px]"
          >
            <p className="text-xs leading-6 text-white/35">
              A frontend developer who enjoys the space where
              thoughtful design meets purposeful engineering.
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =================================================
              LEFT — STORY
          ================================================== */}

          <div>

            {/* Tabs */}
            <div className="mb-9 flex gap-7 border-b border-white/[0.07]">

              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`
                    relative
                    pb-4
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    transition-colors
                    duration-300
                    ${
                      activeTab === key
                        ? 'text-white'
                        : 'text-white/25 hover:text-white/55'
                    }
                  `}
                >
                  {tab.label}

                  {activeTab === key && (
                    <motion.span
                      layoutId="about-tab"
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-px
                        bg-[#4D8DFF]
                      "
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[280px]">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <h3
                    className="
                      max-w-[700px]
                      font-clash
                      text-2xl
                      font-medium
                      leading-tight
                      tracking-[-0.025em]
                      sm:text-3xl
                    "
                  >
                    {tabs[activeTab].title}
                  </h3>

                  <p className="
                    mt-7
                    max-w-[650px]
                    text-sm
                    leading-7
                    text-white/40
                    sm:text-[15px]
                    sm:leading-8
                  ">
                    {tabs[activeTab].text}
                  </p>
                </motion.div>

              </AnimatePresence>
            </div>

            {/* Principles */}
            <div className="border-t border-white/[0.07]">

              {principles.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className="
                      group
                      grid
                      grid-cols-[45px_1fr_auto]
                      items-center
                      gap-4
                      border-b
                      border-white/[0.07]
                      py-5
                    "
                  >
                    <span className="font-mono text-[9px] text-white/20">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="text-sm font-medium text-white/75">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-white/25">
                        {item.description}
                      </p>
                    </div>

                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className="
                        text-white/15
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#4D8DFF]
                      "
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT — DEVELOPER PROFILE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Main technical card */}
            <div
              className="
                relative
                overflow-hidden
                border
                border-white/[0.09]
                bg-[#080F1C]
              "
            >

              {/* Header */}
              <div className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
              ">
                <div className="flex items-center gap-2">
                  <Terminal
                    size={14}
                    strokeWidth={1.4}
                    className="text-[#4D8DFF]"
                  />

                  <span className="
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                  ">
                    developer.profile
                  </span>
                </div>

                <span className="text-[9px] text-white/20">
                  02
                </span>
              </div>

              {/* Identity */}
              <div className="p-6 sm:p-8">

                <div className="mb-10 flex items-start justify-between">

                  <div>
                    <span className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#4D8DFF]
                    ">
                      Hello, I&apos;m
                    </span>

                    <h3 className="
                      mt-3
                      font-clash
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      sm:text-4xl
                    ">
                      Simran
                      <span className="text-white/25">
                        .
                      </span>
                    </h3>

                    <p className="
                      mt-2
                      text-xs
                      text-white/30
                    ">
                      Frontend Developer
                    </p>
                  </div>

                  <div className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#4D8DFF]/20
                    bg-[#4D8DFF]/[0.05]
                  ">
                    <span className="
                      font-clash
                      text-lg
                      font-semibold
                      text-[#4D8DFF]
                    ">
                      S
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="
                  mb-8
                  grid
                  grid-cols-2
                  border-y
                  border-white/[0.06]
                ">

                  <div className="border-r border-white/[0.06] py-4">
                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
                      Location
                    </span>

                    <p className="mt-2 text-xs text-white/60">
                      Lucknow, India
                    </p>
                  </div>

                  <div className="py-4 pl-5">
                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
                      Focus
                    </span>

                    <p className="mt-2 text-xs text-white/60">
                      Frontend & UI
                    </p>
                  </div>

                </div>

                {/* Tech stack */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/25
                    ">
                      Current Toolkit
                    </span>

                    <Code2
                      size={13}
                      strokeWidth={1.3}
                      className="text-white/20"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">

                    {technologies.map((technology, index) => (
                      <motion.span
                        key={technology}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        className="
                          border
                          border-white/[0.08]
                          bg-white/[0.02]
                          px-3
                          py-2
                          text-[9px]
                          text-white/40
                          transition-colors
                          duration-300
                          hover:border-[#4D8DFF]/30
                          hover:text-white/75
                        "
                      >
                        {technology}
                      </motion.span>
                    ))}

                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="
                flex
                items-center
                justify-between
                border-t
                border-white/[0.07]
                px-6
                py-4
              ">
                <span className="
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-white/20
                ">
                  Building with intention
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#4D8DFF]/70"
                />
              </div>
            </div>

            {/* Small floating note */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                -bottom-5
                -left-3
                hidden
                border
                border-white/[0.08]
                bg-[#07101D]
                px-4
                py-3
                lg:block
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />

                <span className="
                  text-[8px]
                  uppercase
                  tracking-[0.13em]
                  text-white/35
                ">
                  Curiosity → Craft
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}