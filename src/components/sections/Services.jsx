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

/* ---------------------------------------------------------
   Animated service title
--------------------------------------------------------- */

function AnimatedTitle({ title, active }) {
  const words = title.split(' ')

  return (
    <motion.div
      className="overflow-hidden"
      animate={{
        x: active ? 8 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-wrap gap-x-[0.28em]">
        {words.map((word, index) => (
          <motion.span
            key={`${title}-${word}-${index}`}
            initial={{
              opacity: 0,
              y: 24,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

/* ---------------------------------------------------------
   Animated description
--------------------------------------------------------- */

function AnimatedDescription({ service }) {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={service.id}
        initial={{
          opacity: 0,
          y: 10,
          filter: 'blur(5px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          y: -8,
          filter: 'blur(5px)',
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-[520px]
          text-sm
          leading-7
          text-white/35
        "
      >
        {service.description}
      </motion.p>
    </AnimatePresence>
  )
}

export default function Services() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
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
        py-20
        text-white
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >

      {/* =====================================================
          VERY SUBTLE BACKGROUND
          No grid / no large glow / no cards
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Fine vertical architecture lines */}

        <div
          className="
            absolute
            inset-y-0
            left-[8%]
            w-px
            bg-white/[0.025]
          "
        />

        <div
          className="
            absolute
            inset-y-0
            right-[8%]
            w-px
            bg-white/[0.025]
          "
        />

        {/* Moving scan line */}

        <motion.div
          initial={{ y: '-100%' }}
          animate={
            isInView
              ? {
                  y: '100%',
                }
              : {}
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            left-[8%]
            right-[8%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#4D8DFF]/10
            to-transparent
          "
        />

        {/* Tiny center light */}

        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            h-px
            w-24
            -translate-x-1/2
            bg-[#4D8DFF]/20
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1380px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
          }}
          className="
            mb-10
            flex
            flex-col
            gap-5
            border-b
            border-white/[0.06]
            pb-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <div>

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-7 bg-[#4D8DFF]/70" />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
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
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-clash
                text-4xl
                font-semibold
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-[56px]
              "
            >
              Things I{' '}
              <span className="text-white/30">
                can build.
              </span>
            </motion.h2>

          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
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
              delay: 0.18,
            }}
            className="
              max-w-[330px]
              text-xs
              leading-6
              text-white/30
            "
          >
            I&apos;m an entry-level developer focused on
            building responsive interfaces, learning modern
            technologies and turning ideas into working
            web experiences.
          </motion.p>

        </motion.div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="border-t border-white/[0.06]">

          {services.map((service, index) => {
            const isActive = activeService === service.id

            return (
              <motion.article
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 18,
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
                  delay: 0.1 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() =>
                  setActiveService(service.id)
                }
                onMouseLeave={() =>
                  setActiveService(null)
                }
                className="
                  group
                  relative
                  border-b
                  border-white/[0.06]
                "
              >

                {/* =================================================
                    MAIN SERVICE ROW
                ================================================== */}

                <div
                  className="
                    grid
                    gap-5
                    py-6
                    lg:grid-cols-[70px_1fr_1.1fr_80px]
                    lg:items-center
                    lg:gap-8
                  "
                >

                  {/* NUMBER */}

                  <div className="flex items-center gap-3">

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0.45,
                      }}
                      className="
                        font-mono
                        text-[10px]
                        text-[#4D8DFF]
                      "
                    >
                      {service.id}
                    </motion.span>

                    <motion.span
                      animate={{
                        width: isActive ? 22 : 0,
                        opacity: isActive ? 0.7 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        h-px
                        bg-[#4D8DFF]
                      "
                    />

                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <div className="min-w-0">

                    <motion.h3
                      className="
                        font-clash
                        text-[25px]
                        font-semibold
                        leading-tight
                        tracking-[-0.035em]
                        text-white
                        sm:text-[29px]
                      "
                    >
                      <AnimatedTitle
                        title={service.title}
                        active={isActive}
                      />
                    </motion.h3>

                    <AnimatePresence mode="wait">

                      <motion.span
                        key={service.id}
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          mt-2
                          block
                          text-[9px]
                          uppercase
                          tracking-[0.14em]
                          text-white/20
                        "
                      >
                        {service.shortTitle}
                      </motion.span>

                    </AnimatePresence>

                  </div>

                  {/* =================================================
                      DESCRIPTION + TECHNOLOGIES
                  ================================================== */}

                  <div>

                    <AnimatedDescription
                      service={service}
                    />

                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.45,
                        y: isActive ? 0 : 2,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-3
                        gap-y-1.5
                      "
                    >
                      {service.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.07em]
                              text-white/20
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </motion.div>

                  </div>

                  {/* =================================================
                      ACTION
                  ================================================== */}

                  <div className="flex lg:justify-end">

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
                        x: 5,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.13em]
                        text-[#4D8DFF]/80
                      "
                    >

                      <span>
                        {isActive
                          ? 'Close'
                          : 'Details'}
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
                    DETAILS
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
                          gap-6
                          border-t
                          border-white/[0.04]
                          py-6
                          lg:grid-cols-[70px_1fr_1.1fr_80px]
                          lg:gap-8
                        "
                      >

                        <div />

                        {/* APPROACH */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.05,
                          }}
                        >

                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.15em]
                              text-[#4D8DFF]/60
                            "
                          >
                            Approach
                          </span>

                          <p
                            className="
                              mt-2
                              max-w-[420px]
                              text-xs
                              leading-6
                              text-white/30
                            "
                          >
                            {service.details}
                          </p>

                        </motion.div>

                        {/* FOCUS */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1,
                          }}
                        >

                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.15em]
                              text-[#4D8DFF]/60
                            "
                          >
                            Focus
                          </span>

                          <div
                            className="
                              mt-2
                              flex
                              flex-wrap
                              gap-x-5
                              gap-y-2
                            "
                          >
                            {service.capabilities.map(
                              (
                                capability,
                                capabilityIndex
                              ) => (
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
                                    duration: 0.3,
                                    delay:
                                      0.12 +
                                      capabilityIndex *
                                        0.045,
                                  }}
                                  className="
                                    flex
                                    items-center
                                    gap-2
                                    text-xs
                                    text-white/30
                                  "
                                >
                                  <span
                                    className="
                                      h-px
                                      w-3
                                      bg-[#4D8DFF]/50
                                    "
                                  />

                                  {capability}
                                </motion.div>
                              )
                            )}
                          </div>

                        </motion.div>

                        <div />

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

                {/* =================================================
                    ACTIVE LINE
                ================================================== */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-20
                    origin-left
                    bg-[#4D8DFF]
                  "
                />

              </motion.article>
            )
          })}

        </div>

        {/* =====================================================
            BOTTOM
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
            delay: 0.7,
            duration: 0.6,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-3
            pt-2
            md:flex-row
            md:items-center
            md:justify-between
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

          <div className="flex items-center gap-2">

            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#4D8DFF]
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.13em]
                text-white/20
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