'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'URS Writers',
    category: 'CONTENT WRITING PLATFORM',
    description:
      'A responsive content writing platform focused on a clean interface, reusable UI components, and a smooth user experience.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
    features: [
      'Responsive UI',
      'Reusable Components',
      'Performance Optimization',
    ],
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&auto=format&fit=crop&q=85',
  },
  {
    id: '02',
    title: 'URS Skill',
    category: 'CORPORATE WEBSITE',
    description:
      'A responsive corporate website designed with reusable components, polished interactions, and purposeful GSAP motion.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'GSAP'],
    features: [
      'Responsive Design',
      'Reusable Architecture',
      'GSAP Animations',
    ],
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&auto=format&fit=crop&q=85',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  })

  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      ref={sectionRef}
      id="projects"
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
          BACKGROUND — SAME LANGUAGE AS ABOUT
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

        {/* Blue Ambient Glow */}
        <div
          className="
            absolute
            left-[-160px]
            top-[15%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-150px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[140px]
          "
        />

        {/* Small center glow */}
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
            bg-[#2563EB]/[0.015]
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* =====================================================
            SECTION HEADER — SAME AS ABOUT
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
              x: -15,
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
                Selected Work
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
              Work that
              <br />

              <span className="text-white/35">
                speaks for itself.
              </span>
            </motion.h2>
          </motion.div>

          {/* Right */}
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
              delay: 0.2,
            }}
            className="max-w-[310px]"
          >
            <p
              className="
                text-xs
                leading-6
                text-white/35
              "
            >
              A selection of real projects where frontend
              engineering, responsive design and thoughtful
              interaction come together.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PROJECT LIST
        ====================================================== */}

        <div className="space-y-28">

          {projects.map((project, index) => {
            const isActive = activeProject === project.id

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() =>
                  setActiveProject(project.id)
                }
                onMouseLeave={() =>
                  setActiveProject(null)
                }
                className="group"
              >

                {/* Project Header */}

                <div className="mb-8 flex items-center gap-4">

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-[#4D8DFF]
                    "
                  >
                    {project.id}
                  </span>

                  <div
                    className={`
                      h-px
                      flex-1
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? 'bg-[#4D8DFF]/30'
                          : 'bg-white/[0.08]'
                      }
                    `}
                  />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    {project.category}
                  </span>

                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================== */}

                <div
                  className={`
                    grid
                    items-center
                    gap-12
                    lg:gap-20
                    lg:grid-cols-[0.9fr_1.1fr]
                    ${
                      index % 2 !== 0
                        ? 'lg:grid-cols-[1.1fr_0.9fr]'
                        : ''
                    }
                  `}
                >

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className={
                      index % 2 !== 0
                        ? 'lg:order-2'
                        : 'lg:order-1'
                    }
                  >

                    <motion.div
                      animate={{
                        x: isActive ? 7 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <h3
                        className="
                          font-clash
                          text-4xl
                          font-semibold
                          tracking-[-0.04em]
                          sm:text-5xl
                          lg:text-6xl
                        "
                      >
                        {project.title}
                        <span className="text-white/20">
                          .
                        </span>
                      </h3>

                    </motion.div>

                    <p
                      className="
                        mt-6
                        max-w-[600px]
                        text-sm
                        leading-7
                        text-white/40
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-8">

                      <div
                        className="
                          mb-4
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-white/20
                        "
                      >
                        Technologies
                      </div>

                      <div className="flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology, techIndex) => (
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
                                delay:
                                  index * 0.1 +
                                  techIndex * 0.04,
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
                                transition-all
                                duration-300
                                hover:border-[#4D8DFF]/30
                                hover:bg-[#4D8DFF]/[0.04]
                                hover:text-white/75
                              "
                            >
                              {technology}
                            </motion.span>
                          )
                        )}

                      </div>
                    </div>

                    {/* Features */}

                    <div className="mt-9 border-t border-white/[0.07]">

                      {project.features.map(
                        (feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                0.2 +
                                featureIndex * 0.08,
                            }}
                            className="
                              flex
                              items-center
                              gap-3
                              border-b
                              border-white/[0.07]
                              py-3
                            "
                          >
                            <span
                              className="
                                h-px
                                w-5
                                bg-[#4D8DFF]/50
                              "
                            />

                            <span
                              className="
                                text-xs
                                text-white/30
                              "
                            >
                              {feature}
                            </span>
                          </motion.div>
                        )
                      )}

                    </div>

                    {/* Explore */}

                    <div
                      className="
                        mt-9
                        inline-flex
                        items-center
                        gap-3
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-[#4D8DFF]
                      "
                    >

                      <span className="relative">

                        Explore project

                        <span
                          className={`
                            absolute
                            -bottom-2
                            left-0
                            h-px
                            bg-[#4D8DFF]
                            transition-all
                            duration-500
                            ${
                              isActive
                                ? 'w-full'
                                : 'w-0'
                            }
                          `}
                        />

                      </span>

                      <motion.span
                        animate={{
                          x: isActive ? 5 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        ↗
                      </motion.span>

                    </div>
                  </div>

                  {/* =================================================
                      PROJECT PREVIEW
                  ================================================== */}

                  <div
                    className={
                      index % 2 !== 0
                        ? 'lg:order-1'
                        : 'lg:order-2'
                    }
                  >

                    <div className="relative">

                      {/* Project Number */}

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.35,
                          y: isActive ? -6 : 0,
                        }}
                        className="
                          absolute
                          -top-8
                          right-0
                          z-20
                          font-clash
                          text-6xl
                          font-semibold
                          text-[#4D8DFF]/[0.07]
                        "
                      >
                        {project.id}
                      </motion.div>

                      {/* Preview */}

                      <motion.div
                        animate={{
                          y: isActive ? -7 : 0,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 180,
                          damping: 22,
                        }}
                        className="relative"
                      >

                        {/* Outer Frame */}

                        <div
                          className={`
                            absolute
                            -inset-3
                            border
                            transition-all
                            duration-700
                            ${
                              isActive
                                ? 'border-[#4D8DFF]/25'
                                : 'border-white/[0.05]'
                            }
                          `}
                        />

                        {/* Browser */}

                        <div
                          className="
                            relative
                            aspect-[16/10]
                            overflow-hidden
                            border
                            border-white/[0.09]
                            bg-[#080F1C]
                          "
                        >

                          {/* Browser Header */}

                          <div
                            className="
                              absolute
                              left-0
                              right-0
                              top-0
                              z-20
                              flex
                              h-9
                              items-center
                              justify-between
                              border-b
                              border-white/[0.07]
                              bg-[#07101D]/90
                              px-4
                              backdrop-blur-md
                            "
                          >

                            <div className="flex items-center gap-1.5">

                              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />

                            </div>

                            <span
                              className="
                                text-[8px]
                                tracking-[0.12em]
                                text-white/20
                                font-mono
                              "
                            >
                              {project.title.toUpperCase()}
                            </span>

                            <span
                              className="
                                text-[8px]
                                text-[#4D8DFF]/50
                                font-mono
                              "
                            >
                              {project.id}
                            </span>

                          </div>

                          {/* Image */}

                          <motion.img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            loading="lazy"
                            animate={{
                              scale: isActive ? 1.045 : 1,
                            }}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                              absolute
                              inset-0
                              h-full
                              w-full
                              object-cover
                              pt-9
                            "
                          />

                          {/* Image Overlay */}

                          <motion.div
                            animate={{
                              opacity: isActive ? 0.18 : 0.48,
                            }}
                            transition={{
                              duration: 0.5,
                            }}
                            className="
                              absolute
                              inset-0
                              bg-[#050B16]
                            "
                          />

                          {/* Blue Tint */}

                          <div
                            className="
                              absolute
                              inset-0
                              bg-[#2563EB]/[0.035]
                              mix-blend-screen
                            "
                          />

                          {/* Scan Animation */}

                          <motion.div
                            initial={{
                              x: '-120%',
                            }}
                            animate={
                              isActive
                                ? {
                                    x: '120%',
                                  }
                                : {
                                    x: '-120%',
                                  }
                            }
                            transition={{
                              duration: 1.1,
                              ease: 'easeInOut',
                            }}
                            className="
                              pointer-events-none
                              absolute
                              bottom-0
                              top-0
                              w-1/3
                              bg-gradient-to-r
                              from-transparent
                              via-[#4D8DFF]/[0.08]
                              to-transparent
                            "
                          />

                          {/* Bottom Information */}

                          <div
                            className="
                              absolute
                              bottom-4
                              left-4
                              z-10
                              font-mono
                              text-[8px]
                              tracking-wider
                              text-white/30
                            "
                          >
                            FRONTEND / {project.id}
                          </div>

                          <div
                            className="
                              absolute
                              bottom-4
                              right-4
                              z-10
                              font-mono
                              text-[8px]
                              text-[#4D8DFF]/60
                            "
                          >
                            VIEW ↗
                          </div>

                        </div>

                        {/* Corner Marks */}

                        <span
                          className="
                            absolute
                            -left-3
                            -top-3
                            h-5
                            w-5
                            border-l
                            border-t
                            border-[#4D8DFF]/50
                          "
                        />

                        <span
                          className="
                            absolute
                            -right-3
                            -top-3
                            h-5
                            w-5
                            border-r
                            border-t
                            border-[#4D8DFF]/50
                          "
                        />

                        <span
                          className="
                            absolute
                            -bottom-3
                            -left-3
                            h-5
                            w-5
                            border-b
                            border-l
                            border-[#4D8DFF]/50
                          "
                        />

                        <span
                          className="
                            absolute
                            -bottom-3
                            -right-3
                            h-5
                            w-5
                            border-b
                            border-r
                            border-[#4D8DFF]/50
                          "
                        />

                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Project Divider */}

                {index < projects.length - 1 && (
                  <div className="mt-28 h-px bg-white/[0.07]" />
                )}

              </motion.article>
            )
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT — SAME AS ABOUT STYLE
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
            delay: 0.7,
            duration: 0.7,
          }}
          className="
            mt-28
            flex
            flex-col
            justify-between
            gap-5
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
              Two projects. Real work.
            </p>

            <p
              className="
                mt-2
                text-xs
                text-white/20
              "
            >
              Built with intention, curiosity and clean frontend
              engineering.
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
              Available for opportunities
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  )
}