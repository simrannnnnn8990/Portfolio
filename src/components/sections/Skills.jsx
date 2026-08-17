
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Terminal,
  Send,
} from 'lucide-react'

const skills = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive interfaces with component-driven architecture and modern React patterns.',
    technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
    icon: Code2,
  },
  {
    title: 'Interface & Styling',
    description:
      'Translating visual systems into clean, responsive and consistent user interfaces.',
    technologies: ['Tailwind CSS', 'CSS3', 'Responsive UI', 'Design Systems'],
    icon: MonitorSmartphone,
  },
  {
    title: 'Motion & Interaction',
    description:
      'Creating purposeful interactions and transitions that make interfaces feel responsive.',
    technologies: ['Framer Motion', 'GSAP', 'ScrollTrigger', 'Micro-interactions'],
    icon: Sparkles,
  },
]

const tools = [
  {
    name: 'Git',
    category: 'Version Control',
    icon: GitBranch,
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    icon: Layers3,
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    icon: Terminal,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: Database,
  },
  {
    name: 'REST APIs',
    category: 'Integration',
    icon: Braces,
  },
  {
    name: 'Postman',
    category: 'API Testing',
    icon: Send,
  },
]

const headingWords = [
  {
    text: 'What',
    muted: false,
  },
  {
    text: 'I',
    muted: false,
  },
  {
    text: 'work',
    muted: false,
  },
  {
    text: 'with.',
    muted: true,
  },
]

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const headingWord = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: -85,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function Skills() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      id="skills"
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

        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-[20%]
            top-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-[-120px]
            right-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#2563EB]/[0.03]
            blur-[130px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mb-16
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

          <div>

            {/* Section label */}

            <motion.div
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 32,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-[#4D8DFF]"
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                Skills
              </span>
            </motion.div>

            {/* =================================================
                CREATIVE MAIN HEADING
            ================================================= */}

            <motion.h2
              variants={headingContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              style={{
                perspective: 1000,
              }}
              className="
                max-w-[1100px]
                overflow-visible
                font-clash
                text-[4.2rem]
                font-semibold
                leading-[0.82]
                tracking-[-0.065em]
                sm:text-[5.5rem]
                md:text-[6.5rem]
                lg:text-[8rem]
                xl:text-[8.8rem]
              "
            >
              {headingWords.map((word) => (
                <motion.span
                  key={word.text}
                  variants={headingWord}
                  className={`
                    mr-[0.18em]
                    inline-block
                    origin-bottom
                    will-change-transform
                    ${
                      word.muted
                        ? 'text-white/20'
                        : 'text-white'
                    }
                  `}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h2>

            {/* tiny motion accent */}

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
                delay: 0.75,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                h-px
                w-24
                origin-left
                bg-[#4D8DFF]/60
              "
            />

          </div>

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
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="max-w-[330px]"
          >
            <p
              className="
                text-xs
                leading-6
                text-white/35
              "
            >
              A practical toolkit built around frontend engineering,
              interface design and thoughtful interaction.
            </p>
          </motion.div>

        </div>

        {/* ===================================================
            CORE SKILLS
        ==================================================== */}

        <div className="border-t border-white/[0.07]">

          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  grid
                  gap-8
                  border-b
                  border-white/[0.07]
                  py-10
                  md:grid-cols-[0.9fr_1.1fr_40px]
                  md:items-center
                "
              >

                {/* Title */}

                <div className="flex items-start gap-5">

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      transition-all
                      duration-300
                      group-hover:border-[#4D8DFF]/30
                      group-hover:bg-[#4D8DFF]/[0.05]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className="
                        text-white/35
                        transition-colors
                        duration-300
                        group-hover:text-[#4D8DFF]
                      "
                    />
                  </motion.div>

                  <div>

                    <h3
                      className="
                        font-clash
                        text-xl
                        font-medium
                        tracking-[-0.02em]
                        text-white/80
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {skill.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[420px]
                        text-xs
                        leading-6
                        text-white/30
                      "
                    >
                      {skill.description}
                    </p>

                  </div>

                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2">

                  {skill.technologies.map((technology, techIndex) => (
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
                        delay: index * 0.08 + techIndex * 0.05,
                        duration: 0.45,
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
                        group-hover:border-white/[0.12]
                        group-hover:text-white/60
                      "
                    >
                      {technology}
                    </motion.span>
                  ))}

                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.2}
                  className="
                    hidden
                    text-white/15
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#4D8DFF]
                    md:block
                  "
                />

              </motion.div>
            )
          })}

        </div>

        {/* ===================================================
            TOOLKIT
        ==================================================== */}

        <div className="mt-24">

          <div
            className="
              mb-8
              flex
              items-end
              justify-between
              border-b
              border-white/[0.07]
              pb-5
            "
          >

            <div>

              <motion.span
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
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#4D8DFF]
                "
              >
                Toolkit
              </motion.span>

              <motion.h3
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
                }}
                transition={{
                  duration: 0.65,
                }}
                className="
                  mt-2
                  font-clash
                  text-2xl
                  font-medium
                  tracking-[-0.025em]
                  text-white/80
                  sm:text-3xl
                "
              >
                Supporting tools.
              </motion.h3>

            </div>

            <span
              className="
                hidden
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/20
                sm:block
              "
            >
              Everyday workflow
            </span>

          </div>

          <div
            className="
              grid
              grid-cols-2
              border-l
              border-t
              border-white/[0.07]
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >

            {tools.map((tool, index) => {
              const Icon = tool.icon

              return (
                <motion.div
                  key={tool.name}
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
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(255,255,255,0.025)',
                    y: -3,
                  }}
                  className="
                    group
                    border-b
                    border-r
                    border-white/[0.07]
                    p-5
                    transition-colors
                    duration-300
                  "
                >

                  <div
                    className="
                      mb-8
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <Icon
                      size={17}
                      strokeWidth={1.25}
                      className="
                        text-white/25
                        transition-colors
                        duration-300
                        group-hover:text-[#4D8DFF]
                      "
                    />

                  </div>

                  <h4
                    className="
                      text-sm
                      font-medium
                      text-white/60
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {tool.name}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-white/20
                    "
                  >
                    {tool.category}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="flex items-center gap-3">

            <motion.span
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                border
                border-[#4D8DFF]/20
                bg-[#4D8DFF]/[0.04]
              "
            >
              <Sparkles
                size={12}
                strokeWidth={1.3}
                className="text-[#4D8DFF]"
              />
            </motion.span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-white/25
              "
            >
              Always learning. Always refining.
            </span>

          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Build something together

            <ArrowUpRight
              size={13}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#4D8DFF]
              "
            />
          </a>

        </motion.div>

      </div>
    </section>
  )
}

