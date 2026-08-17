"use client"

import { useEffect, useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  MousePointer2,
} from "lucide-react"

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Git",
]

const principles = [
  {
    title: "Clarity",
    text: "Interfaces should communicate before they decorate.",
    icon: Layers3,
  },
  {
    title: "Interaction",
    text: "Motion should guide attention, not compete for it.",
    icon: Sparkles,
  },
  {
    title: "Engineering",
    text: "Good visuals deserve clean and maintainable code.",
    icon: Code2,
  },
]

/* =========================================================
   SMOOTH REVEAL SYSTEM
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1]

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(4px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
}

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -55,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: smoothEase,
    },
  },
}

const slideRight = {
  hidden: {
    opacity: 0,
    x: 55,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const sectionRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
    mass: 0.6,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
    mass: 0.6,
  })

  const orbX = useTransform(smoothX, [-20, 20], [-25, 25])
  const orbY = useTransform(smoothY, [-20, 20], [-25, 25])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()

      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      mouseX.set((x - 0.5) * 20)
      mouseY.set((y - 0.5) * 20)
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [mouseX, mouseY])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050B16]
        px-6
        pb-28
        pt-16
        text-white
        sm:px-8
        lg:px-12
        lg:pb-36
        lg:pt-20
      "
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: orbX,
            y: orbY,
          }}
          className="
            absolute
            -right-[12%]
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#4D8DFF]/[0.045]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[18%]
            top-[42%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#6BA4FF]/[0.025]
            blur-[110px]
          "
        />

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.018]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* =========================================================
            OPENING
        ========================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.15,
            ease: smoothEase,
          }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">

            <div>
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  ease: smoothEase,
                }}
                className="mb-6 flex items-center gap-3"
              >
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: smoothEase,
                  }}
                  className="h-px bg-[#4D8DFF]"
                />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                  A little about me
                </span>
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 28,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.12,
                  ease: smoothEase,
                }}
                className="
                  max-w-[900px]
                  font-clash
                  text-4xl
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.055em]
                  sm:text-5xl
                  lg:text-[5.5rem]
                "
              >
                I&apos;m interested in what happens
                <span className="text-white/25">
                  {" "}
                  when design starts behaving like code.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 22,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: smoothEase,
              }}
              className="
                max-w-[390px]
                pb-1
                text-sm
                leading-7
                text-white/35
                lg:justify-self-end
              "
            >
              I&apos;m a frontend developer at the beginning of my
              professional journey — learning by building, experimenting
              and turning ideas into real interfaces.
            </motion.p>
          </div>
        </motion.div>

        {/* =========================================================
            STORY — PART ONE
        ========================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* LEFT VISUAL */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              ease: smoothEase,
            }}
            className="relative"
          >
            <div
              className="
                relative
                min-h-[390px]
                overflow-hidden
                border
                border-white/[0.08]
                bg-[#07101D]
              "
            >
              <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-full w-[1px] bg-white/[0.045]" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.05]" />

                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    right-[15%]
                    top-[15%]
                    h-28
                    w-28
                    rounded-full
                    bg-[#4D8DFF]/[0.08]
                    blur-[55px]
                  "
                />
              </div>

              <div className="relative flex min-h-[390px] flex-col justify-between p-7 sm:p-9">

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.7,
                    ease: smoothEase,
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Terminal
                      size={14}
                      strokeWidth={1.3}
                      className="text-[#6BA4FF]"
                    />

                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                      Building mindset
                    </span>
                  </div>

                  <span className="text-[9px] text-white/15">
                    frontend
                  </span>
                </motion.div>

                <div className="relative">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: ["18%", "62%", "38%", "75%"],
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-4 h-px bg-[#6BA4FF]/70"
                  />

                  <div className="space-y-2">

                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        width: ["72%", "88%", "65%"],
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        width: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.7,
                          delay: 0.25,
                        },
                      }}
                      className="h-5 bg-white/[0.07]"
                    />

                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        width: ["48%", "68%", "55%"],
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        width: {
                          duration: 5,
                          repeat: Infinity,
                          delay: 0.2,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.7,
                          delay: 0.38,
                        },
                      }}
                      className="h-5 bg-white/[0.045]"
                    />

                    <div className="mt-7 grid grid-cols-3 gap-2">

                      {[0, 1, 2].map((item) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            y: 12,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.25,
                          }}
                          transition={{
                            delay: 0.5 + item * 0.12,
                            duration: 0.7,
                            ease: smoothEase,
                          }}
                          className={
                            item === 1
                              ? "h-16 border border-[#4D8DFF]/15 bg-[#4D8DFF]/[0.035]"
                              : "h-16 border border-white/[0.06] bg-white/[0.025]"
                          }
                        />
                      ))}

                    </div>
                  </div>

                  <motion.div
                    animate={{
                      x: [0, 35, 10, 0],
                      y: [0, -8, 4, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-8 right-[18%]"
                  >
                    <MousePointer2
                      size={17}
                      strokeWidth={1.3}
                      className="fill-[#4D8DFF] text-white"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.7,
                    ease: smoothEase,
                  }}
                  className="flex items-end justify-between border-t border-white/[0.06] pt-5"
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                    idea → interface
                  </span>

                  <Code2
                    size={15}
                    strokeWidth={1.2}
                    className="text-[#6BA4FF]/60"
                  />
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT STORY */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.25,
              delay: 0.12,
              ease: smoothEase,
            }}
          >
            <motion.span
              initial={{
                opacity: 0,
                x: 15,
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
                duration: 0.7,
                delay: 0.15,
                ease: smoothEase,
              }}
              className="text-[9px] uppercase tracking-[0.2em] text-[#6BA4FF]"
            >
              It started with curiosity
            </motion.span>

            <motion.h3
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.95,
                delay: 0.28,
                ease: smoothEase,
              }}
              className="
                mt-5
                max-w-[700px]
                font-clash
                text-3xl
                font-medium
                leading-[1.04]
                tracking-[-0.045em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              I like turning a blank screen into something that feels
              intentional.
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.48,
                ease: smoothEase,
              }}
              className="
                mt-7
                max-w-[620px]
                text-sm
                leading-7
                text-white/35
                sm:text-[15px]
                sm:leading-8
              "
            >
              I&apos;m Simran Gautam, a frontend developer focused on
              building responsive interfaces that feel considered,
              intuitive and alive. I enjoy turning ideas into polished
              digital experiences where design and engineering work
              together.
            </motion.p>

            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: 0.65,
                ease: smoothEase,
              }}
              className="mt-9 flex items-center gap-4"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.72,
                  ease: smoothEase,
                }}
                className="h-px bg-[#4D8DFF]/60"
              />

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                design becomes interaction
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            STORY — PART TWO
        ========================================================== */}

        <div className="mt-24 grid items-center gap-14 lg:mt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              ease: smoothEase,
            }}
            className="lg:order-1"
          >
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: smoothEase,
              }}
              className="text-[9px] uppercase tracking-[0.2em] text-[#6BA4FF]"
            >
              Then I started paying attention
            </motion.span>

            <motion.h3
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.95,
                delay: 0.25,
                ease: smoothEase,
              }}
              className="
                mt-5
                max-w-[720px]
                font-clash
                text-3xl
                font-medium
                leading-[1.04]
                tracking-[-0.045em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              I don&apos;t just think about how something looks.
              <span className="text-white/25">
                {" "}
                I think about how it behaves.
              </span>
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: smoothEase,
              }}
              className="
                mt-7
                max-w-[620px]
                text-sm
                leading-7
                text-white/35
                sm:text-[15px]
                sm:leading-8
              "
            >
              My approach is simple: understand the problem first,
              then build the experience around it. I care about clean
              component architecture, responsive behaviour,
              accessibility, performance and motion that has a purpose.
            </motion.p>

            <div className="mt-9 grid max-w-[580px] grid-cols-3 border-y border-white/[0.07]">

              {[
                "Structure",
                "Behaviour",
                "Experience",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: 0.55 + index * 0.14,
                    duration: 0.75,
                    ease: smoothEase,
                  }}
                  className="
                    border-r
                    border-white/[0.07]
                    px-3
                    py-5
                    last:border-r-0
                    sm:px-5
                  "
                >
                  <div className="mb-3 text-[8px] text-[#6BA4FF]">
                    0{index + 1}
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.25,
              delay: 0.1,
              ease: smoothEase,
            }}
            className="lg:order-2"
          >
            <BuildVisual />
          </motion.div>
        </div>

        {/* =========================================================
            LEARNING STORY
        ========================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.15,
            ease: smoothEase,
          }}
          className="
            mt-28
            border-y
            border-white/[0.07]
            py-16
            lg:mt-36
            lg:py-20
          "
        >
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">

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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6BA4FF]">
                And I&apos;m still learning
              </span>

              <p className="mt-5 max-w-[300px] text-sm leading-7 text-white/30">
                I&apos;m at the beginning of my professional journey,
                so learning by building is a big part of how I grow.
              </p>
            </motion.div>

            <div>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: smoothEase,
                }}
                className="
                  max-w-[850px]
                  font-clash
                  text-3xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.045em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                I&apos;m continuously exploring modern React and Next.js
                patterns, interaction design, animation and better ways
                to translate visual ideas into maintainable frontend systems.
              </motion.h3>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">

                {[
                  "Learn",
                  "Build",
                  "Experiment",
                  "Understand",
                  "Improve",
                ].map((item, index) => (
                  <motion.div
                    key={item}
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
                      amount: 0.25,
                    }}
                    transition={{
                      delay: 0.45 + index * 0.13,
                      duration: 0.65,
                      ease: smoothEase,
                    }}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.55 + index * 0.13,
                        duration: 0.45,
                        ease: smoothEase,
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#6BA4FF]/70
                      "
                    />

                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            PRINCIPLES
        ========================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.1,
            ease: smoothEase,
          }}
          className="mt-24 lg:mt-28"
        >
          <div className="mb-10">

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              className="text-[9px] uppercase tracking-[0.2em] text-white/20"
            >
              What guides the work
            </motion.span>

            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: smoothEase,
              }}
              className="
                mt-4
                font-clash
                text-3xl
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              A few things I care about.
            </motion.h3>
          </div>

          <div className="grid border-y border-white/[0.07] lg:grid-cols-3">

            {principles.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(5px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.16,
                    duration: 0.85,
                    ease: smoothEase,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    min-h-[230px]
                    border-b
                    border-white/[0.07]
                    p-7
                    transition-colors
                    duration-500
                    hover:bg-white/[0.018]
                    lg:border-b-0
                    lg:border-r
                    lg:p-9
                    last:border-r-0
                  "
                >
                  <div className="flex items-start justify-between">

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.35 + index * 0.16,
                        duration: 0.55,
                        ease: smoothEase,
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.2}
                        className="
                          text-[#6BA4FF]/60
                          transition-transform
                          duration-500
                          group-hover:rotate-12
                          group-hover:scale-110
                        "
                      />
                    </motion.div>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.2}
                      className="
                        text-white/15
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#6BA4FF]
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
                      amount: 0.2,
                    }}
                    transition={{
                      delay: 0.42 + index * 0.16,
                      duration: 0.75,
                      ease: smoothEase,
                    }}
                    className="mt-20"
                  >
                    <h4 className="font-clash text-xl tracking-[-0.025em]">
                      {item.title}
                    </h4>

                    <p className="mt-3 max-w-[260px] text-xs leading-6 text-white/25">
                      {item.text}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: smoothEase,
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-[#6BA4FF]
                    "
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* =========================================================
            TOOLKIT
        ========================================================== */}

        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.1,
            ease: smoothEase,
          }}
          className="mt-24 lg:mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr]">

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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Currently exploring
              </span>

              <p className="mt-4 max-w-[280px] text-xs leading-6 text-white/25">
                A growing toolkit built through projects, experiments
                and a lot of curiosity.
              </p>
            </motion.div>

            <div className="relative overflow-hidden border-t border-white/[0.07] pt-7">

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 18,
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
                      delay: index * 0.08,
                      duration: 0.7,
                      ease: smoothEase,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      border-b
                      border-white/[0.05]
                      py-4
                      pr-5
                      text-sm
                      text-white/30
                      transition-colors
                      duration-300
                      hover:text-white/80
                    "
                  >
                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.1 + index * 0.08,
                        duration: 0.4,
                        ease: smoothEase,
                      }}
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-white/15
                        transition-colors
                        duration-300
                        group-hover:bg-[#6BA4FF]
                      "
                    />

                    {technology}
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CLOSING
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            ease: smoothEase,
          }}
          className="
            mt-24
            border-t
            border-white/[0.07]
            pt-10
            lg:mt-32
            lg:pt-12
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <motion.p
              initial={{
                opacity: 0,
                y: 22,
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
                duration: 0.9,
                delay: 0.15,
                ease: smoothEase,
              }}
              className="
                max-w-[820px]
                font-clash
                text-3xl
                leading-[1.03]
                tracking-[-0.045em]
                text-white/75
                sm:text-4xl
                lg:text-5xl
              "
            >
              I&apos;m still at the beginning.
              <span className="text-white/25">
                {" "}
                That means there is a lot left to build,
                learn and explore.
              </span>
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: smoothEase,
              }}
              whileHover={{
                x: 5,
                y: -5,
              }}
              className="shrink-0"
            >
              <ArrowDownRight
                size={24}
                strokeWidth={1.1}
                className="text-[#6BA4FF]/70"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ===============================================================
   BUILD VISUAL
================================================================ */

function BuildVisual() {
  const blocks = [
    {
      label: "Structure",
      width: "76%",
    },
    {
      label: "Components",
      width: "58%",
    },
    {
      label: "Interaction",
      width: "84%",
    },
  ]

  return (
    <div
      className="
        relative
        min-h-[380px]
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#07101D]
      "
    >
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.025]" />

        <motion.div
          animate={{
            rotate: [0, 4, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[22%]
            top-[20%]
            h-[220px]
            w-[220px]
            rounded-full
            border
            border-[#6BA4FF]/10
          "
        />

        <motion.div
          animate={{
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[28%]
            top-[26%]
            h-[160px]
            w-[160px]
            rounded-full
            border
            border-[#6BA4FF]/10
          "
        />
      </div>

      <div className="relative flex min-h-[380px] flex-col justify-between p-7 sm:p-9">

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Code2
              size={14}
              strokeWidth={1.2}
              className="text-[#6BA4FF]"
            />

            <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
              From idea to interface
            </span>
          </div>

          <span className="text-[9px] text-white/15">
            building
          </span>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[400px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-5 text-[9px] uppercase tracking-[0.16em] text-white/20"
          >
            How I think about a frontend
          </motion.div>

          <div className="space-y-3">

            {blocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{
                  opacity: 0,
                  x: -25,
                  filter: "blur(4px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  delay: 0.2 + index * 0.18,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="mb-2 flex items-center justify-between">

                  <span className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                    {block.label}
                  </span>

                  <span className="font-mono text-[8px] text-white/15">
                    0{index + 1}
                  </span>

                </div>

                <div className="h-8 border border-white/[0.06] bg-white/[0.02]">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: block.width,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.45 + index * 0.18,
                      duration: 1.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-[#6BA4FF]/[0.08]"
                  />

                </div>
              </motion.div>
            ))}

          </div>

          <motion.div
            animate={{
              x: [0, 18, 4, 0],
              y: [0, -4, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 bottom-0"
          >
            <MousePointer2
              size={18}
              strokeWidth={1.2}
              className="fill-[#6BA4FF] text-white"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-between border-t border-white/[0.06] pt-5"
        >
          <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
            clean structure
          </span>

          <span className="text-[9px] uppercase tracking-[0.15em] text-[#6BA4FF]/60">
            meaningful motion
          </span>
        </motion.div>

      </div>
    </div>
  )
}