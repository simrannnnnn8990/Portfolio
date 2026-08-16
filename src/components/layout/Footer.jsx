'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Contact from '../sections/Contact'

const socials = [
  {
    label: 'GitHub',
    href: '#',
  },
  {
    label: 'LinkedIn',
    href: '#',
  },
  {
    label: 'Instagram',
    href: '#',
  },
]

// const connectLetters = 'CONNECT'.split('')

/* Deterministic particle positions */
const sparkleParticles = [
  { left: '5%', top: '20%', size: 3, delay: 0 },
  { left: '12%', top: '68%', size: 2, delay: 0.8 },
  { left: '20%', top: '34%', size: 4, delay: 1.4 },
  { left: '29%', top: '76%', size: 2, delay: 0.4 },
  { left: '37%', top: '17%', size: 3, delay: 1.1 },
  { left: '45%', top: '70%', size: 3, delay: 1.8 },
  { left: '53%', top: '27%', size: 2, delay: 0.6 },
  { left: '62%', top: '78%', size: 4, delay: 1.5 },
  { left: '70%', top: '15%', size: 2, delay: 0.3 },
  { left: '77%', top: '48%', size: 3, delay: 1.2 },
  { left: '85%', top: '24%', size: 2, delay: 0.7 },
  { left: '92%', top: '70%', size: 4, delay: 1.9 },
  { left: '16%', top: '52%', size: 2, delay: 2.1 },
  { left: '34%', top: '45%', size: 2, delay: 0.9 },
  { left: '58%', top: '54%', size: 3, delay: 2.4 },
  { left: '88%', top: '40%', size: 2, delay: 1.7 },
]

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)

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
          py-20
          text-white
          sm:px-8
          lg:px-12
        "
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          {/* GRID */}
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

          {/* AMBIENT BLUE LIGHT */}
          <div
            className="
              absolute
              bottom-[-220px]
              left-1/2
              h-[520px]
              w-[520px]
              -translate-x-1/2
              rounded-full
              bg-[#2563EB]/[0.045]
              blur-[150px]
            "
          />

          {/* SECOND SUBTLE GLOW */}
          <div
            className="
              absolute
              bottom-[15%]
              left-1/2
              h-[280px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-[#4D8DFF]/[0.025]
              blur-[120px]
            "
          />

         {/* SPARKLE PARTICLES */}
<div className="absolute inset-0 overflow-hidden">
  {sparkleParticles.map((particle, index) => (
    <motion.span
      key={`particle-${index}`}
      className="
        absolute
        rounded-full
        bg-white
        shadow-[0_0_10px_rgba(255,255,255,0.75)]
      "
      style={{
        left: particle.left,
        top: particle.top,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
      }}
      animate={{
        y: [0, -35, -75, -115, -150],
x: [
  0,
  index % 2 === 0 ? 5 : -5,
  index % 2 === 0 ? -3 : 4,
  index % 2 === 0 ? 3 : -2,
  0,
],
opacity: [0, 0.15, 0.65, 0.25, 0],
scale: [0.35, 0.9, 1.25, 0.75, 0.25],
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

{/* TINY BLUE PARTICLES */}
<div className="absolute inset-0 overflow-hidden">
  {sparkleParticles.slice(3, 15).map((particle, index) => (
    <motion.span
      key={`blue-${index}`}
      className="
        absolute
        rounded-full
        bg-[#4D8DFF]
        shadow-[0_0_10px_rgba(77,141,255,0.8)]
      "
      style={{
        left: `calc(${particle.left} + ${index % 3}px)`,
        top: particle.top,
        width: '2px',
        height: '2px',
      }}
      animate={{
        y: [0, -60, -120],
        x: [0, index % 2 === 0 ? 4 : -4, 0],
        opacity: [0, 0.45, 0],
        scale: [0.5, 1.3, 0.3],
      }}
      transition={{
        duration: 4.5 + (index % 3),
        delay: particle.delay + 0.5,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  ))}
</div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1500px] flex-col">

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/[0.07]
              pb-5
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4D8DFF]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Let&apos;s connect
              </span>
            </div>

            <span className="font-mono text-[9px] text-white/15">
              04 / 04
            </span>
          </motion.div>

          {/* MAIN */}
          <div className="flex flex-1 flex-col justify-center">

            {/* CAPTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-8 max-w-md"
            >
              <p className="text-sm leading-7 text-white/35 sm:text-[15px]">
                Have an idea worth building?
                <br />
                Let&apos;s turn it into something people remember.
              </p>
            </motion.div>

            {/* CONNECT */}
<div
  className="
    relative
    overflow-hidden
    border-y
    border-white/[0.07]
    py-14
    sm:py-16
    lg:py-20
  "
>
  {/* FLOATING SPARKLES */}
  <div className="pointer-events-none absolute inset-0">
    {sparkleParticles.map((particle, index) => (
      <motion.span
        key={index}
        className="
          absolute
          rounded-full
          bg-white
          shadow-[0_0_12px_rgba(255,255,255,0.7)]
        "
        style={{
          left: particle.left,
          top: particle.top,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        }}
        animate={{
          opacity: [0.04, 0.35, 0.8, 0.25, 0.04],
scale: [0.5, 1, 1.35, 0.75, 0.5],
y: [0, -6, 2, -5, 0],
        }}
        transition={{
          duration: 4 + (index % 3),
          delay: particle.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>

  {/* SOFT BLUE GLOW */}
  <motion.div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[280px]
      w-[280px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#4D8DFF]/[0.055]
      blur-[110px]
    "
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.3, 0.55, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  {/* HANDWRITTEN CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center">

    {/* CONNECT */}
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        rotate: -2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: -2,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        text-center
        text-[clamp(4.5rem,14vw,10rem)]
        leading-[0.7]
      "
      style={{
        fontFamily:
          '"Segoe Script", "Brush Script MT", "Snell Roundhand", cursive',
        fontWeight: 500,
        letterSpacing: '-0.06em',
      }}
    >
      <span className="relative inline-block text-white">
        Connect

        {/* HAND DRAWN UNDERLINE */}
        <motion.span
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: '68%',
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.65,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-[-7px]
            left-[8%]
            h-[3px]
            rotate-[-2deg]
            rounded-full
            bg-[#4D8DFF]/70
          "
        />
      </span>
    </motion.div>

    {/* WITH ME */}
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
        delay: 0.45,
        duration: 0.7,
      }}
      className="
        relative
        mt-6
        flex
        items-center
        gap-4
      "
    >
      <span className="h-px w-8 bg-[#4D8DFF]/40 sm:w-12" />

      <span
        className="
          text-[clamp(1.4rem,4vw,2.5rem)]
          leading-none
          text-white/85
        "
        style={{
          fontFamily:
            '"Segoe Script", "Brush Script MT", "Snell Roundhand", cursive',
          fontWeight: 500,
          letterSpacing: '-0.04em',
        }}
      >
        with me
      </span>

      <span className="h-px w-8 bg-[#4D8DFF]/40 sm:w-12" />
    </motion.div>

    {/* SPARKLE ACCENT — LEFT */}
    <motion.span
      className="
        pointer-events-none
        absolute
        left-[18%]
        top-[18%]
        text-[14px]
        text-white/60
      "
      animate={{
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.2, 1, 0.3, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8, 1.1, 0.8],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      ✦
    </motion.span>

    {/* SPARKLE ACCENT — RIGHT */}
    <motion.span
      className="
        pointer-events-none
        absolute
        right-[18%]
        bottom-[15%]
        text-[11px]
        text-[#4D8DFF]/70
      "
      animate={{
        rotate: [0, -90, -180, -270, -360],
        opacity: [0.15, 0.9, 0.2, 0.7, 0.15],
        scale: [0.7, 1.3, 0.7, 1.1, 0.7],
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

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-10
                flex
                flex-col
                gap-8
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="max-w-sm">
                <p className="text-xs leading-6 text-white/30">
                  Good interfaces start with good conversations.
                  If you&apos;re working on something interesting,
                  I&apos;d love to hear about it.
                </p>
              </div>

              <motion.button
                type="button"
                onClick={() => setIsContactOpen(true)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  border
                  border-[#4D8DFF]/40
                  bg-[#4D8DFF]/[0.05]
                  px-6
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-[#4D8DFF]
                  hover:bg-[#4D8DFF]/[0.1]
                  hover:text-white
                "
              >
                <span>Get in touch</span>

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

          {/* SOCIALS */}
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
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              border-t
              border-white/[0.07]
              py-6
            "
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex flex-wrap gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      uppercase
                      tracking-[0.13em]
                      text-white/25
                      transition-colors
                      duration-300
                      hover:text-white/70
                    "
                  >
                    <span>{social.label}</span>

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.2}
                      className="
                        text-white/15
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

              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
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

                <span className="text-[9px] uppercase tracking-[0.13em] text-white/25">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM */}
          <div
            className="
              flex
              flex-col
              gap-3
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-[8px] uppercase tracking-[0.12em] text-white/15">
              © 2026 Simran Gautam
            </p>

            <p className="text-[8px] uppercase tracking-[0.12em] text-white/15">
              Designed & built with intention
            </p>

            <p className="text-[8px] uppercase tracking-[0.12em] text-white/15">
              Lucknow, India
            </p>
          </div>
        </div>
      </footer>

      {/* CONTACT DRAWER */}
      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  )
}