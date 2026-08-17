'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Contact from '../sections/Contact'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/simrannnnnn8990',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simran-gautam-793b89303?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    label: 'Email',
    href: 'mailto:simranguatam@gmail.com',
  },
]

/* ============================================================
   FLOATING PARTICLES
============================================================ */

const sparkleParticles = [
  { left: '7%', top: '22%', size: 3, delay: 0 },
  { left: '15%', top: '70%', size: 2, delay: 0.8 },
  { left: '24%', top: '35%', size: 3, delay: 1.4 },
  { left: '33%', top: '76%', size: 2, delay: 0.4 },
  { left: '42%', top: '18%', size: 3, delay: 1.1 },
  { left: '51%', top: '68%', size: 2, delay: 1.8 },
  { left: '60%', top: '28%', size: 2, delay: 0.6 },
  { left: '69%', top: '77%', size: 3, delay: 1.5 },
  { left: '77%', top: '17%', size: 2, delay: 0.3 },
  { left: '84%', top: '48%', size: 3, delay: 1.2 },
  { left: '91%', top: '25%', size: 2, delay: 0.7 },
]

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const letters = 'Connect'.split('')

  return (
    <>
      <footer
        id="connect"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#050B16]
          px-6
          py-10
          text-white
          sm:px-8
          lg:px-12
        "
      >
        {/* ========================================================
            SIMPLE BACKGROUND
            NO GRID / NO PATTERN
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Bottom blue glow */}
          <div
            className="
              absolute
              bottom-[-260px]
              left-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#2563EB]/[0.05]
              blur-[150px]
            "
          />

          {/* Center subtle glow */}
          <motion.div
            className="
              absolute
              left-1/2
              top-[52%]
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#4D8DFF]/[0.035]
              blur-[120px]
            "
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* ======================================================
              FLOATING WHITE PARTICLES
          ====================================================== */}

          <div className="absolute inset-0 overflow-hidden">
            {sparkleParticles.map((particle, index) => (
              <motion.span
                key={`particle-${index}`}
                className="
                  absolute
                  rounded-full
                  bg-white
                  shadow-[0_0_10px_rgba(255,255,255,0.65)]
                "
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
                animate={{
                  y: [0, -35, -70, -110, -145],
                  x: [
                    0,
                    index % 2 === 0 ? 5 : -5,
                    index % 2 === 0 ? -3 : 4,
                    index % 2 === 0 ? 3 : -2,
                    0,
                  ],
                  opacity: [0, 0.12, 0.6, 0.2, 0],
                  scale: [0.3, 0.8, 1.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 5 + (index % 4),
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            MAIN CONTAINER
        ======================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-5rem)]
            max-w-[1500px]
            flex-col
          "
        >

          {/* ======================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="flex flex-1 flex-col justify-center">

            {/* ====================================================
                INTRO
            ==================================================== */}

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
              }}
              className="mb-4 max-w-md"
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-white/45
                  sm:text-[14px]
                "
              >
                Have an idea worth building?
                <br />
                Let&apos;s turn it into something people remember.
              </p>
            </motion.div>

            {/* ====================================================
                CONNECT SECTION
            ==================================================== */}

            <div
              className="
                relative
                overflow-hidden
                border-y
                border-white/[0.07]
                py-10
                sm:py-12
                lg:py-14
              "
            >

              {/* Subtle center light */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[250px]
                  w-[250px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#4D8DFF]/[0.045]
                  blur-[105px]
                "
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* ==================================================
                  CONNECT WORD
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                "
              >

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    text-center
                  "
                >

                  {letters.map((letter, index) => {

                    /*
                      Alternating entrance:
                      C -> from top
                      o -> from bottom
                      n -> from top
                      n -> from bottom
                      e -> from top
                      c -> from bottom
                      t -> from top
                    */

                    const fromTop = index % 2 === 0

                    return (
                      <motion.span
                        key={`${letter}-${index}`}
                        initial={{
                          opacity: 0,
                          y: fromTop ? -100 : 100,
                          rotate: fromTop ? -7 : 7,
                          scale: 0.88,
                          filter: 'blur(4px)',
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          rotate: index % 2 === 0 ? -1 : 1,
                          scale: 1,
                          filter: 'blur(0px)',
                        }}
                        viewport={{
                          once: true,
                          amount: 0.35,
                        }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.075,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          relative
                          inline-block
                          text-[clamp(3.5rem,11vw,7.5rem)]
                          font-semibold
                          leading-[0.78]
                          text-white
                        "
                        style={{
                          /*
                            Modern clean font.
                            No handwritten/script font.
                          */
                          fontFamily:
                            'Inter, Helvetica Neue, Arial, sans-serif',
                          letterSpacing: '-0.075em',
                        }}
                      >
                        {letter}
                      </motion.span>
                    )
                  })}

                  {/* =================================================
                      BLUE UNDERLINE
                  ================================================= */}

                  <motion.span
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      width: '58%',
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      bottom-[-10px]
                      left-[21%]
                      h-[2px]
                      rotate-[-2deg]
                      rounded-full
                      bg-[#4D8DFF]/70
                    "
                  />
                </div>

                {/* =================================================
                    WITH ME
                ================================================= */}

                <motion.div
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
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.7,
                  }}
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span
                    className="
                      h-px
                      w-7
                      bg-[#4D8DFF]/40
                      sm:w-10
                    "
                  />

                  <span
                    className="
                      text-[17px]
                      font-medium
                      leading-none
                      tracking-[-0.03em]
                      text-white/75
                      sm:text-[20px]
                    "
                    style={{
                      fontFamily:
                        'Inter, Helvetica Neue, Arial, sans-serif',
                    }}
                  >
                    with me
                  </span>

                  <span
                    className="
                      h-px
                      w-7
                      bg-[#4D8DFF]/40
                      sm:w-10
                    "
                  />
                </motion.div>

                {/* =================================================
                    LEFT SPARKLE
                ================================================= */}

                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    left-[17%]
                    top-[18%]
                    text-[13px]
                    text-white/55
                  "
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    opacity: [0.2, 0.9, 0.25, 0.7, 0.2],
                    scale: [0.8, 1.15, 0.8, 1.05, 0.8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ✦
                </motion.span>

                {/* =================================================
                    RIGHT SPARKLE
                ================================================= */}

                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    right-[17%]
                    bottom-[17%]
                    text-[10px]
                    text-[#4D8DFF]/65
                  "
                  animate={{
                    rotate: [0, -90, -180, -270, -360],
                    opacity: [0.15, 0.8, 0.2, 0.65, 0.15],
                    scale: [0.7, 1.25, 0.7, 1.05, 0.7],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ✦
                </motion.span>

              </div>
            </div>

            {/* ====================================================
                CTA
            ==================================================== */}

            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                delay: 0.2,
                duration: 0.65,
              }}
              className="
                mt-5
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              {/* CTA TEXT */}

              <div className="max-w-sm">
                <p
                  className="
                    text-[13px]
                    leading-6
                    text-white/40
                    sm:text-[14px]
                  "
                >
                  Good interfaces start with good conversations.
                  If you&apos;re working on something interesting,
                  I&apos;d love to hear about it.
                </p>
              </div>

              {/* CTA BUTTON */}

              <motion.button
                type="button"
                onClick={() => setIsContactOpen(true)}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  border
                  border-[#4D8DFF]/40
                  bg-[#4D8DFF]/[0.045]
                  px-6
                  py-3.5
                  text-[11px]
                  font-medium
                  tracking-[0.11em]
                  text-white/80
                  transition-all
                  duration-300
                  hover:border-[#4D8DFF]
                  hover:bg-[#4D8DFF]/[0.09]
                  hover:text-white
                "
              >
                <span>
                  Get in touch
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

            </motion.div>
          </div>

          {/* ======================================================
              SOCIAL LINKS
          ====================================================== */}

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
            }}
            transition={{
              delay: 0.15,
              duration: 0.55,
            }}
            className="
              border-t
              border-white/[0.07]
              py-4
            "
          >

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              {/* SOCIAL LINKS */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-7
                  gap-y-3
                "
              >
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === 'Email'
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      social.label === 'Email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-[12px]
                      font-medium
                      uppercase
                      tracking-[0.10em]
                      text-white/75
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >

                    <span>
                      {social.label}
                    </span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.3}
                      className="
                        text-white/40
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#4D8DFF]
                      "
                    />

                  </a>
                ))}
              </div>

              {/* AVAILABLE STATUS */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    relative
                    flex
                    h-1.5
                    w-1.5
                  "
                >

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#4D8DFF]
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#4D8DFF]
                    "
                  />

                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.11em]
                    text-white/55
                  "
                >
                  Available for opportunities
                </span>

              </div>

            </div>
          </motion.div>

          {/* ======================================================
              BOTTOM
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              gap-2
              pt-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/25
              "
            >
              © 2026 Simran Gautam
            </p>

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/25
              "
            >
              Designed & built with intention
            </p>

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/25
              "
            >
              Lucknow, India
            </p>

          </div>

        </div>
      </footer>

      {/* ==========================================================
          CONTACT DRAWER
      ========================================================== */}

      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  )
}