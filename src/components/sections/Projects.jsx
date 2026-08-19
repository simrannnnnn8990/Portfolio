'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'URS Writers',
    category: 'CONTENT WRITING PLATFORM',
    description:
      'A responsive content writing platform focused on a clean interface, reusable UI components, and a smooth user experience.',
    technologies: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
    ],
    features: [
      'Responsive UI',
      'Reusable Components',
      'Performance Optimization',
    ],
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&auto=format&fit=crop&q=85',
    liveUrl: '',
  },

  {
    id: '02',
    title: 'URS Skill',
    category: 'CORPORATE WEBSITE',
    description:
      'A responsive corporate website designed with reusable components, polished interactions, and purposeful GSAP motion.',
    technologies: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'GSAP',
    ],
    features: [
      'Responsive Design',
      'Reusable Architecture',
      'GSAP Animations',
    ],

    // YOUR ACTUAL LOCAL IMAGE
    image: '/project/ursSkill1.png',

    // LIVE WEBSITE
    liveUrl: 'https://www.ursskill.com/',

    // CASE STUDY
    caseStudyUrl: '/projects/urs-skill',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Projects() {
  const sectionRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const ambientY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -40]
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#070D17]
        px-6
        py-10
        text-white
        sm:px-8
        sm:py-12
        lg:px-12
        lg:py-14
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          style={{ y: ambientY }}
          className="
            absolute
            -left-[18%]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#2563EB]/[0.045]
            blur-[150px]
          "
        />

        <motion.div
          style={{ y: ambientY }}
          className="
            absolute
            -right-[15%]
            top-[35%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#60A5FA]/[0.035]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#3B82F6]/[0.018]
            blur-[170px]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.8,
            ease,
          }}
          className="
            absolute
            left-[8%]
            right-[8%]
            top-0
            h-px
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#60A5FA]/20
            to-transparent
          "
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 8, 0],
            opacity: [0.2, 0.42, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[22%]
            top-[18%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#93C5FD]
            shadow-[0_0_22px_rgba(147,197,253,0.65)]
          "
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.28, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="
            absolute
            bottom-[22%]
            left-[15%]
            h-1
            w-1
            rounded-full
            bg-[#60A5FA]
            shadow-[0_0_18px_rgba(96,165,250,0.6)]
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mb-7
            flex
            flex-col
            justify-between
            gap-5
            border-b
            border-white/[0.07]
            pb-5
            md:flex-row
            md:items-end
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              filter: 'blur(10px)',
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }
                : {}
            }
            transition={{
              duration: 1.1,
              ease,
            }}
          >

            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
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
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >

              <motion.span
                initial={{
                  width: 0,
                }}
                animate={
                  isInView
                    ? {
                        width: 30,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }}
                className="
                  h-px
                  bg-[#60A5FA]
                  shadow-[0_0_12px_rgba(96,165,250,0.45)]
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-[#93C5FD]/45
                "
              >
                Selected Work
              </span>

            </motion.div>


            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 45,
                rotateX: 20,
                filter: 'blur(12px)',
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: 'blur(0px)',
                    }
                  : {}
              }
              transition={{
                duration: 1.15,
                delay: 0.12,
                ease,
              }}
              style={{
                perspective: '1000px',
              }}
              className="
                font-clash
                text-4xl
                font-semibold
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >

              <span className="inline-block">
                Work that
              </span>

              <br />

              <span
                className="
                  relative
                  inline-block
                  overflow-hidden
                  align-bottom
                "
              >

                <motion.span
                  initial={{
                    opacity: 0,
                    y: '110%',
                    rotateX: -80,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.25,
                    delay: 0.35,
                    ease,
                  }}
                  className="
                    inline-block
                    origin-bottom
                    text-white/35
                  "
                >
                  speaks for itself.
                </motion.span>

              </span>

            </motion.h2>

          </motion.div>


          {/* RIGHT DESCRIPTION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              filter: 'blur(8px)',
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 0.45,
              ease,
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

        <div className="space-y-9">

          {projects.map((project, index) => {

            const isActive =
              activeProject === project.id

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 55,
                  filter: 'blur(8px)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                  ease,
                }}
                onMouseEnter={() =>
                  setActiveProject(project.id)
                }
                onMouseLeave={() =>
                  setActiveProject(null)
                }
                className="group"
              >

                {/* =================================================
                    CATEGORY
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.75,
                    ease,
                  }}
                  className="
                    mb-4
                    flex
                    items-center
                    gap-4
                  "
                >

                  <motion.div
                    animate={{
                      scaleX: isActive ? 1 : 0.75,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      ease,
                    }}
                    className="
                      h-px
                      flex-1
                      origin-left
                      bg-gradient-to-r
                      from-[#60A5FA]/40
                      to-white/[0.05]
                    "
                  />

                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      letterSpacing: isActive
                        ? '0.24em'
                        : '0.18em',
                      x: isActive ? -2 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="
                      text-[9px]
                      uppercase
                      text-[#93C5FD]/45
                    "
                  >
                    {project.category}
                  </motion.span>

                </motion.div>


                {/* =================================================
                    PROJECT GRID
                ================================================== */}

                <div
                  className={`
                    grid
                    items-center
                    gap-7
                    lg:gap-12
                    lg:grid-cols-[0.9fr_1.1fr]
                    ${
                      index % 2 !== 0
                        ? 'lg:grid-cols-[1.1fr_0.9fr]'
                        : ''
                    }
                  `}
                >

                  {/* =================================================
                      PROJECT CONTENT
                  ================================================== */}

                  <div
                    className={
                      index % 2 !== 0
                        ? 'lg:order-2'
                        : 'lg:order-1'
                    }
                  >

                    {/* TITLE */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 45,
                        rotateX: 25,
                        filter: 'blur(10px)',
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: 'blur(0px)',
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.05,
                        ease,
                      }}
                      animate={{
                        x: isActive ? 6 : 0,
                      }}
                    >

                      <h3
                        className="
                          font-clash
                          text-4xl
                          font-semibold
                          tracking-[-0.05em]
                          sm:text-5xl
                          lg:text-6xl
                        "
                      >
                        {project.title}

                        <motion.span
                          animate={{
                            opacity: isActive ? 0.7 : 0.2,
                            x: isActive ? 5 : 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="
                            inline-block
                            text-[#93C5FD]/35
                          "
                        >
                          .
                        </motion.span>

                      </h3>

                    </motion.div>


                    {/* DESCRIPTION */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 25,
                        filter: 'blur(7px)',
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease,
                      }}
                      className="
                        mt-3
                        max-w-[600px]
                        text-sm
                        leading-7
                        text-white/40
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      {project.description}
                    </motion.p>


                    {/* TECHNOLOGIES */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.22,
                        ease,
                      }}
                      className="mt-4"
                    >

                      <div
                        className="
                          mb-2.5
                          text-[9px]
                          uppercase
                          tracking-[0.16em]
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
                                y: 14,
                                rotateX: -35,
                                scale: 0.94,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                                rotateX: 0,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay:
                                  0.25 +
                                  techIndex * 0.07,
                                duration: 0.55,
                                ease,
                              }}
                              whileHover={{
                                y: -3,
                                scale: 1.04,
                              }}
                              className="
                                border
                                border-white/[0.08]
                                bg-[#0B1524]/80
                                px-3
                                py-2
                                text-[9px]
                                text-white/40
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:border-[#60A5FA]/35
                                hover:bg-[#60A5FA]/[0.06]
                                hover:text-[#BFDBFE]/80
                              "
                            >
                              {technology}
                            </motion.span>
                          )
                        )}

                      </div>

                    </motion.div>


                    {/* FEATURES */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.28,
                      }}
                      className="
                        mt-4
                        border-t
                        border-white/[0.07]
                      "
                    >

                      {project.features.map(
                        (feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{
                              opacity: 0,
                              x: -20,
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
                                0.3 +
                                featureIndex * 0.1,
                              duration: 0.6,
                              ease,
                            }}
                            className="
                              flex
                              items-center
                              gap-3
                              border-b
                              border-white/[0.07]
                              py-2.5
                            "
                          >

                            <motion.span
                              animate={{
                                width: isActive ? 28 : 18,
                                opacity: isActive
                                  ? 0.85
                                  : 0.4,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="
                                h-px
                                bg-[#60A5FA]
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

                    </motion.div>


                    {/* =================================================
                        LIVE WEBSITE ONLY
                    ================================================== */}

                    {project.liveUrl && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.65,
                          delay: 0.45,
                          ease,
                        }}
                        className="
                          mt-6
                          flex
                          items-center
                        "
                      >

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/live
                            inline-flex
                            items-center
                            gap-2.5
                            border
                            border-[#60A5FA]/25
                            bg-[#60A5FA]/[0.045]
                            px-4
                            py-2.5
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.13em]
                            text-[#93C5FD]/70
                            transition-all
                            duration-300
                            hover:border-[#60A5FA]/60
                            hover:bg-[#60A5FA]/[0.09]
                            hover:text-[#BFDBFE]
                          "
                        >

                          <span>
                            Live Website
                          </span>

                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.3}
                            className="
                              transition-transform
                              duration-300
                              group-hover/live:-translate-y-0.5
                              group-hover/live:translate-x-0.5
                            "
                          />

                        </a>

                      </motion.div>
                    )}

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

                      {/* CASE STUDY LINK */}

                      {project.caseStudyUrl ? (
                        <a
                          href={project.caseStudyUrl}
                          aria-label={`View ${project.title} case study`}
                          className="block cursor-pointer"
                        >
                          <ProjectPreview
                            project={project}
                            isActive={isActive}
                            index={index}
                            ease={ease}
                          />
                        </a>
                      ) : (
                        <ProjectPreview
                          project={project}
                          isActive={isActive}
                          index={index}
                          ease={ease}
                        />
                      )}

                    </div>

                  </div>

                </div>


                {/* =================================================
                    DIVIDER
                ================================================== */}

                {index < projects.length - 1 && (
                  <motion.div
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15,
                      ease,
                    }}
                    className="
                      mt-9
                      h-px
                      origin-left
                      bg-gradient-to-r
                      from-[#60A5FA]/20
                      via-white/[0.06]
                      to-transparent
                    "
                  />
                )}

              </motion.article>
            )
          })}

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: 'blur(6px)',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mt-9
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-white/[0.07]
            pt-5
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
                mt-1.5
                text-xs
                text-white/20
              "
            >
              Built with intention, curiosity and clean frontend
              engineering.
            </p>

          </div>


          <div className="flex items-center gap-3">

            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#60A5FA]
                shadow-[0_0_12px_rgba(96,165,250,0.8)]
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


/* ============================================================
   PROJECT PREVIEW COMPONENT
============================================================ */

function ProjectPreview({
  project,
  isActive,
  index,
  ease,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.91,
        y: 45,
        rotateX: 10,
        filter: 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 1.15,
        delay: 0.15 + index * 0.1,
        ease,
      }}
      animate={{
        y: isActive ? -6 : 0,
        scale: isActive ? 1.012 : 1,
      }}
      className="relative"
    >

      {/* SOFT GLOW */}

      <motion.div
        animate={{
          opacity: isActive ? 0.45 : 0.12,
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          duration: 0.8,
          ease,
        }}
        className="
          absolute
          -inset-8
          rounded-[50px]
          bg-[#3B82F6]/[0.07]
          blur-[50px]
        "
      />


      {/* OUTER FRAME */}

      <motion.div
        animate={{
          scale: isActive ? 1.015 : 1,
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className={`
          absolute
          -inset-3
          border
          ${
            isActive
              ? 'border-[#60A5FA]/30'
              : 'border-white/[0.05]'
          }
        `}
      />


      {/* BROWSER */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          border
          border-white/[0.10]
          bg-[#091321]
          shadow-[0_30px_90px_rgba(0,0,0,0.38)]
        "
      >

        {/* BROWSER HEADER */}

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
            bg-[#091321]/90
            px-4
            backdrop-blur-xl
          "
        >

          <div className="flex items-center gap-1.5">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-white/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-white/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-white/15
              "
            />

          </div>


          <motion.span
            animate={{
              opacity: isActive ? 0.5 : 0.2,
              letterSpacing: isActive
                ? '0.2em'
                : '0.12em',
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              font-mono
              text-[8px]
              text-white/20
            "
          >
            {project.title.toUpperCase()}
          </motion.span>


          <span
            className="
              font-mono
              text-[8px]
              text-[#60A5FA]/60
            "
          >
            ↗
          </span>

        </div>


        {/* IMAGE */}

        <motion.img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          draggable={false}
          animate={{
            scale: isActive ? 1.055 : 1,
          }}
          transition={{
            duration: 1.4,
            ease,
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


        {/* CINEMATIC OVERLAY */}

        <motion.div
          animate={{
            opacity: isActive ? 0.1 : 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            absolute
            inset-0
            bg-[#07101D]
          "
        />


        {/* LIGHT BLUE WASH */}

        <motion.div
          animate={{
            opacity: isActive ? 0.12 : 0.035,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            absolute
            inset-0
            bg-[#60A5FA]
            mix-blend-screen
          "
        />


        {/* MOVING LIGHT */}

        <motion.div
          initial={{
            x: '-130%',
          }}
          animate={{
            x: isActive ? '130%' : '-130%',
          }}
          transition={{
            duration: 1.4,
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
            via-[#BFDBFE]/[0.13]
            to-transparent
            blur-[2px]
          "
        />


        {/* BOTTOM LEFT LABEL */}

        <motion.div
          animate={{
            opacity: isActive ? 0.7 : 0.3,
            x: isActive ? 4 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
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
          FRONTEND
        </motion.div>


        {/* =================================================
            CASE STUDY SEMI-CIRCLE
        ================================================== */}

        {project.caseStudyUrl && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.65,
              x: 75,
              y: 75,
            }}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 0.65,
              x: isActive ? 0 : 75,
              y: isActive ? 0 : 75,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[-1px]
              right-[-1px]
              z-30
              flex
              h-[180px]
              w-[180px]
              items-center
              justify-center
              rounded-tl-[100%]
              bg-[#60A5FA]/[0.90]
              shadow-[-25px_-20px_80px_rgba(96,165,250,0.20)]
              backdrop-blur-sm
            "
          >

            <motion.div
              animate={{
                x: isActive ? 0 : 15,
                y: isActive ? 0 : 15,
                opacity: isActive ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.08,
                ease,
              }}
              className="
                mb-[-55px]
                ml-[38px]
                flex
                flex-col
                items-start
              "
            >

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#07101D]
                "
              >
                View Study
              </span>

              <span
                className="
                  mt-1
                  text-[18px]
                  leading-none
                  text-[#07101D]
                "
              >
                ↗
              </span>

            </motion.div>

          </motion.div>
        )}

      </div>


      {/* CORNER MARKS */}

      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.4,
        }}
        className="
          absolute
          -left-3
          -top-3
          h-5
          w-5
          border-l
          border-t
          border-[#60A5FA]/60
        "
      />

      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.4,
        }}
        className="
          absolute
          -right-3
          -top-3
          h-5
          w-5
          border-r
          border-t
          border-[#60A5FA]/60
        "
      />

      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.4,
        }}
        className="
          absolute
          -bottom-3
          -left-3
          h-5
          w-5
          border-b
          border-l
          border-[#60A5FA]/60
        "
      />

      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.4,
        }}
        className="
          absolute
          -bottom-3
          -right-3
          h-5
          w-5
          border-b
          border-r
          border-[#60A5FA]/60
        "
      />

    </motion.div>
  )
}