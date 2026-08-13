'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const journey = [
  {
    id: '01',
    label: 'Education',
    title: 'Master’s in Computer Science',
    subtitle: 'Maharishi University of Information Technology',
    location: 'Lucknow',
    description:
      'Building a strong foundation in computer science while developing practical skills in modern web development.',
    focus: [
      'Computer Science Fundamentals',
      'Web Development',
      'Problem Solving',
      'Software Development',
    ],
    technologies: ['Computer Science', 'Web Development'],
  },

  {
    id: '02',
    label: 'Frontend',
    title: 'Frontend Development',
    subtitle: 'Learning by building',
    description:
      'Developing responsive and reusable interfaces with React and Next.js, with a focus on clean structure, usability and visual details.',
    focus: [
      'Responsive Interfaces',
      'Reusable Components',
      'Modern JavaScript',
      'Clean UI Implementation',
    ],
    technologies: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  },

  {
    id: '03',
    label: 'Projects',
    title: 'Project-Based Learning',
    subtitle: 'Turning ideas into working products',
    description:
      'Applying what I learn by building practical projects that improve my understanding of frontend development, APIs and real-world application structure.',
    focus: [
      'Real-world UI Development',
      'API Integration',
      'Component Architecture',
      'Problem Solving',
    ],
    technologies: ['React.js', 'Next.js', 'REST APIs', 'Git'],
  },

  {
    id: '04',
    label: 'Exploring',
    title: 'Full-Stack Development',
    subtitle: 'Growing beyond the frontend',
    description:
      'Currently exploring backend development and the MERN stack to understand how complete web applications work from frontend to database.',
    focus: [
      'Backend Fundamentals',
      'REST APIs',
      'Database Concepts',
      'Frontend–Backend Integration',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
]

const currentFocus = [
  'React.js & Next.js',
  'Modern UI Development',
  'Full-Stack Development',
  'Performance & Accessibility',
]

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  })

  const [activeJourney, setActiveJourney] = useState(null)

  return (
    <section
      ref={sectionRef}
      id="journey"
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

        {/* Technical Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
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

        {/* Blue Ambient Glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-160px]
            h-[440px]
            w-[440px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#2563EB]/[0.018]
            blur-[120px]
          "
        />

        {/* Vertical Guide */}
        <div
          className="
            absolute
            left-[32px]
            top-0
            bottom-0
            hidden
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#4D8DFF]/10
            to-transparent
            lg:left-1/2
            lg:block
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-20
            flex
            flex-col
            justify-between
            gap-10
            border-b
            border-white/[0.07]
            pb-10
            md:flex-row
            md:items-end
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
            }}
          >

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#4D8DFF]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                My Journey
              </span>

            </div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.1,
              }}
              className="
                font-clash
                text-4xl
                font-semibold
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Learning.
              <br />

              <span className="text-white/35">
                Building.
              </span>
            </motion.h2>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="max-w-[380px]"
          >

            <p
              className="
                text-xs
                leading-6
                text-white/35
              "
            >
              I&apos;m an entry-level developer focused on
              frontend development, building practical projects,
              learning modern technologies and growing towards
              full-stack development.
            </p>

          </motion.div>

        </div>

        {/* =====================================================
            JOURNEY
        ====================================================== */}

        <div className="relative">

          {journey.map((item, index) => {

            const isActive = activeJourney === item.id

            return (
              <motion.article
                key={item.id}
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
                  duration: 0.7,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() =>
                  setActiveJourney(item.id)
                }
                onMouseLeave={() =>
                  setActiveJourney(null)
                }
                className="
                  group
                  relative
                  border-b
                  border-white/[0.07]
                "
              >

                {/* Active Line */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-32
                    origin-left
                    bg-[#4D8DFF]
                  "
                />

                {/* MAIN ROW */}

                <div
                  className="
                    grid
                    gap-8
                    py-10
                    lg:grid-cols-[100px_1fr_1.1fr_110px]
                    lg:items-center
                  "
                >

                  {/* NUMBER */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        font-mono
                        text-[10px]
                        text-[#4D8DFF]
                      "
                    >
                      {item.id}
                    </span>

                    <span
                      className={`
                        hidden
                        h-px
                        w-8
                        transition-all
                        duration-500
                        lg:block
                        ${
                          isActive
                            ? 'bg-[#4D8DFF]/60'
                            : 'bg-white/[0.08]'
                        }
                      `}
                    />

                  </div>

                  {/* TITLE */}

                  <div>

                    <div
                      className="
                        mb-3
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#4D8DFF]/70
                      "
                    >
                      {item.label}
                    </div>

                    <motion.h3
                      animate={{
                        x: isActive ? 8 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        font-clash
                        text-2xl
                        font-semibold
                        tracking-[-0.03em]
                        text-white
                        sm:text-3xl
                      "
                    >
                      {item.title}
                    </motion.h3>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/20
                      "
                    >
                      {item.subtitle}
                    </p>

                  </div>

                  {/* DESCRIPTION */}

                  <div>

                    <p
                      className="
                        max-w-[540px]
                        text-sm
                        leading-7
                        text-white/35
                      "
                    >
                      {item.description}
                    </p>

                    {/* TECHNOLOGIES */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {item.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              border
                              border-white/[0.07]
                              bg-white/[0.015]
                              px-2.5
                              py-1.5
                              text-[8px]
                              uppercase
                              tracking-[0.08em]
                              text-white/25
                              transition-all
                              duration-300
                              group-hover:border-[#4D8DFF]/25
                              group-hover:text-white/45
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  {/* ACTION */}

                  <div
                    className="
                      flex
                      items-center
                      lg:justify-end
                    "
                  >

                    <motion.button
                      type="button"
                      onClick={() =>
                        setActiveJourney(
                          isActive
                            ? null
                            : item.id
                        )
                      }
                      whileHover={{
                        x: 4,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.14em]
                        text-[#4D8DFF]
                      "
                    >

                      <span>
                        {isActive
                          ? 'Close'
                          : 'Explore'}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isActive ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="text-sm"
                      >
                        +
                      </motion.span>

                    </motion.button>

                  </div>

                </div>

                {/* =================================================
                    EXPANDED CONTENT
                ================================================== */}

                <AnimatePresence>

                  {isActive && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <div
                        className="
                          grid
                          gap-8
                          border-t
                          border-white/[0.05]
                          py-8
                          lg:grid-cols-[100px_1fr_1.1fr_110px]
                        "
                      >

                        <div />

                        {/* APPROACH */}

                        <div>

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#4D8DFF]/60
                            "
                          >
                            What I&apos;m Building
                          </span>

                          <p
                            className="
                              mt-3
                              max-w-[420px]
                              text-xs
                              leading-6
                              text-white/30
                            "
                          >
                            I focus on understanding the
                            fundamentals first and then
                            applying them through practical
                            projects and real interface
                            implementations.
                          </p>

                        </div>

                        {/* FOCUS */}

                        <div>

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#4D8DFF]/60
                            "
                          >
                            Current Focus
                          </span>

                          <div className="mt-4 space-y-3">

                            {item.focus.map(
                              (focus, focusIndex) => (

                                <motion.div
                                  key={focus}
                                  initial={{
                                    opacity: 0,
                                    x: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      focusIndex *
                                      0.06,
                                  }}
                                  className="
                                    flex
                                    items-center
                                    gap-3
                                    text-xs
                                    text-white/30
                                  "
                                >

                                  <span
                                    className="
                                      h-px
                                      w-5
                                      bg-[#4D8DFF]/50
                                    "
                                  />

                                  {focus}

                                </motion.div>

                              )
                            )}

                          </div>

                        </div>

                        <div />

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.article>
            )
          })}

        </div>

        {/* =====================================================
            CURRENT FOCUS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.75,
            duration: 0.7,
          }}
          className="
            mt-16
            grid
            gap-8
            border-t
            border-white/[0.07]
            pt-10
            lg:grid-cols-[1fr_1.5fr]
            lg:items-center
          "
        >

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#4D8DFF]
                  animate-pulse
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#4D8DFF]/70
                "
              >
                Currently Learning
              </span>

            </div>

            <h3
              className="
                mt-4
                font-clash
                text-2xl
                font-semibold
                tracking-[-0.03em]
                sm:text-3xl
              "
            >
              Growing one project
              <br />
              <span className="text-white/30">
                at a time.
              </span>
            </h3>

          </div>

          {/* RIGHT */}

          <div>

            <p
              className="
                max-w-[600px]
                text-xs
                leading-6
                text-white/25
              "
            >
              My current focus is strengthening my frontend
              skills while gradually moving towards full-stack
              development. I&apos;m constantly learning,
              experimenting and turning that knowledge into
              practical projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              {currentFocus.map((focus) => (

                <span
                  key={focus}
                  className="
                    border
                    border-white/[0.07]
                    bg-white/[0.015]
                    px-3
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.08em]
                    text-white/30
                    transition-all
                    duration-300
                    hover:border-[#4D8DFF]/30
                    hover:text-white/55
                  "
                >
                  {focus}
                </span>

              ))}

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 1,
          }}
          className="
            mt-10
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-white/[0.05]
            pt-6
            md:flex-row
            md:items-center
          "
        >

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-white/20
            "
          >
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#4D8DFF]
                animate-pulse
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-white/25
              "
            >
              Open to opportunities
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  )
}