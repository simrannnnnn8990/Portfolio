'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Frontend Development',
    shortTitle: 'Building modern web interfaces',
    description:
      'Responsive and modern websites built with React and Next.js, with a strong focus on clean UI and usability.',
    details:
      'I focus on building structured, responsive interfaces with reusable React components and clean frontend architecture.',
    technologies: [
      'React.js',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
    ],
    capabilities: [
      'Reusable React Components',
      'Responsive Layouts',
      'Clean Component Structure',
      'Modern UI Development',
    ],
  },

  {
    id: '02',
    title: 'Responsive Web Design',
    shortTitle: 'Interfaces that work everywhere',
    description:
      'Mobile-first interfaces that look consistent and polished across desktop, tablet, and mobile devices.',
    details:
      'I build layouts that adapt naturally across different screen sizes while keeping the interface clean and easy to use.',
    technologies: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Responsive Design',
    ],
    capabilities: [
      'Mobile-first Layouts',
      'Desktop & Mobile UI',
      'Flexible Grids',
      'Cross-device Experience',
    ],
  },

  {
    id: '03',
    title: 'UI Implementation',
    shortTitle: 'Turning designs into interfaces',
    description:
      'Turning designs and ideas into functional interfaces with reusable components and attention to visual details.',
    details:
      'I translate design ideas into functional frontend interfaces while maintaining spacing, typography, responsiveness and visual consistency.',
    technologies: [
      'React.js',
      'JavaScript',
      'Figma to Code',
    ],
    capabilities: [
      'Design to Code',
      'Reusable Components',
      'Pixel-conscious UI',
      'Consistent Styling',
    ],
  },

  {
    id: '04',
    title: 'Interactive Experiences',
    shortTitle: 'Motion with a purpose',
    description:
      'Subtle animations and interactions that make interfaces more engaging without affecting usability.',
    details:
      'I use animation carefully to improve feedback, navigation and visual storytelling instead of adding motion just for decoration.',
    technologies: [
      'Framer Motion',
      'GSAP',
      'CSS Animations',
    ],
    capabilities: [
      'Page Transitions',
      'Scroll Animations',
      'Micro-interactions',
      'Hover Effects',
    ],
  },

  {
    id: '05',
    title: 'Website Optimization',
    shortTitle: 'Making interfaces faster',
    description:
      'Improving frontend performance, responsiveness, accessibility, and overall user experience.',
    details:
      'I pay attention to frontend performance and usability by reducing unnecessary work and following better development practices.',
    technologies: [
      'Performance',
      'SEO Basics',
      'Accessibility',
    ],
    capabilities: [
      'Image Optimization',
      'Performance Basics',
      'Semantic HTML',
      'Accessibility Basics',
    ],
  },

  {
    id: '06',
    title: 'API Integration',
    shortTitle: 'Connecting frontend with data',
    description:
      'Connecting frontend applications with APIs to create dynamic and functional web experiences.',
    details:
      'I integrate frontend applications with REST APIs to display dynamic data and create interactive user experiences.',
    technologies: [
      'REST APIs',
      'Fetch',
      'Axios',
      'JSON',
    ],
    capabilities: [
      'API Integration',
      'Fetching Data',
      'Loading States',
      'Error Handling',
    ],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  })

  const [activeService, setActiveService] = useState(null)

  return (
    <section
      ref={sectionRef}
      id="services"
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

        {/* Ambient Blue Glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[18%]
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
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-16
            flex
            flex-col
            justify-between
            gap-8
            border-b
            border-white/[0.07]
            pb-8
            md:flex-row
            md:items-end
          "
        >

          {/* Left */}

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
                 What I Do
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
              Things I
              <br />

              <span className="text-white/35">
                can build.
              </span>
            </motion.h2>

          </motion.div>

          {/* Right */}

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
            className="max-w-[340px]"
          >

            <p
              className="
                text-xs
                leading-6
                text-white/35
              "
            >
              I&apos;m an entry-level developer focused on
              building responsive interfaces, learning modern
              technologies and turning ideas into working
              web experiences.
            </p>

          </motion.div>

        </div>

        {/* =====================================================
            SERVICES LIST
        ====================================================== */}

        <div className="border-t border-white/[0.07]">

          {services.map((service, index) => {
            const isActive = activeService === service.id

            return (
              <motion.article
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.65,
                  delay: 0.15 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() =>
                  setActiveService(service.id)
                }
                onMouseLeave={() =>
                  setActiveService(null)
                }
                className="group relative border-b border-white/[0.07]"
              >

                {/* =================================================
                    MAIN ROW
                ================================================== */}

                <div
                  className="
                    grid
                    gap-8
                    py-8
                    lg:grid-cols-[90px_1fr_1.1fr_100px]
                    lg:items-center
                  "
                >

                  {/* Number */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        font-mono
                        text-[10px]
                        text-[#4D8DFF]
                      "
                    >
                      {service.id}
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

                  {/* Title */}

                  <div>

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
                      {service.title}
                    </motion.h3>

                    <span
                      className="
                        mt-2
                        block
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-white/20
                      "
                    >
                      {service.shortTitle}
                    </span>

                  </div>

                  {/* Description */}

                  <div>

                    <p
                      className="
                        max-w-[520px]
                        text-sm
                        leading-7
                        text-white/35
                      "
                    >
                      {service.description}
                    </p>

                    {/* Technology Tags */}

                    <div className="mt-4 flex flex-wrap gap-2">

                      {service.technologies.map(
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

                  {/* Action */}

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
                        setActiveService(
                          isActive
                            ? null
                            : service.id
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
                        {isActive ? 'Close' : 'Details'}
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
                    EXPANDED DETAILS
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
                          py-7
                          lg:grid-cols-[90px_1fr_1.1fr_100px]
                        "
                      >

                        <div />

                        <div>

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#4D8DFF]/60
                            "
                          >
                            Approach
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
                            {service.details}
                          </p>

                        </div>

                        <div>

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#4D8DFF]/60
                            "
                          >
                            What I Focus On
                          </span>

                          <div className="mt-3 space-y-2">

                            {service.capabilities.map(
                              (capability, capabilityIndex) => (
                                <motion.div
                                  key={capability}
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
                                      capabilityIndex *
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

                                  {capability}
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

                {/* Active Indicator */}

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
                    w-24
                    origin-left
                    bg-[#4D8DFF]
                  "
                />

              </motion.article>
            )
          })}

        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
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
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-6
            border-t
            border-white/[0.07]
            pt-8
            md:flex-row
            md:items-center
          "
        >

          <div>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Always learning. Always building.
            </p>

            <p
              className="
                mt-2
                text-xs
                text-white/20
              "
            >
              Currently focused on frontend development
              and growing into full-stack development.
            </p>

          </div>

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