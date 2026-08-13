'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      let currentSection = 'home'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.35) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavigation = (href) => {
    setIsMenuOpen(false)

    const target = document.querySelector(href)

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      {/* Desktop / Main Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.8,
        }}
        className="fixed left-0 right-0 top-0 z-[9997] pointer-events-none"
      >
        <div
          className={`
            mx-auto
            flex
            items-center
            justify-between
            transition-all
            duration-500
            pointer-events-auto
            ${
              isScrolled
                ? `
                  mt-4
                  w-[calc(100%-2rem)]
                  max-w-5xl
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#07101f]/90
                  px-5
                  py-3
                  shadow-[0_18px_60px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                `
                : `
                  w-full
                  border-b
                  border-white/[0.06]
                  bg-[#050b16]/20
                  px-6
                  py-5
                  lg:px-12
                  lg:py-6
                `
            }
          `}
        >
          {/* Brand */}
          <button
            type="button"
            onClick={() => handleNavigation('#home')}
            aria-label="Go to homepage"
            className="group relative flex items-center gap-2"
          >
            <span className="font-clash text-[20px] font-semibold tracking-[-0.04em] text-white sm:text-[22px]">
              Simran
              <span className="text-[#4D8DFF]">.</span>
            </span>

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-px
                w-0
                bg-[#4D8DFF]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    text-[12px]
                    font-medium
                    tracking-[0.08em]
                    uppercase
                    transition-colors
                    duration-300
                  "
                >
                  {/* Active indicator */}
                  <span
                    className={`
                      h-1
                      w-1
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'bg-[#4D8DFF] opacity-100'
                          : 'bg-white opacity-0 group-hover:opacity-40'
                      }
                    `}
                  />

                  <span
                    className={
                      isActive
                        ? 'text-white'
                        : 'text-white/45 group-hover:text-white/90'
                    }
                  >
                    {link.label}
                  </span>

                  {/* Hover line */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-px
                      origin-left
                      bg-[#4D8DFF]
                      transition-transform
                      duration-300
                      ${
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }
                    `}
                  />
                </button>
              )
            })}
          </nav>

          {/* Availability / Status */}
          <div className="hidden items-center gap-2 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4D8DFF]" />
            </span>

            <span className="text-[10px] font-medium tracking-[0.12em] text-white/45 uppercase">
              Available
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              transition-all
              duration-300
              hover:border-[#4D8DFF]/40
              hover:bg-[#4D8DFF]/[0.08]
              md:hidden
            "
          >
            <div className="flex w-4 flex-col gap-[5px]">
              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="h-px w-full origin-center bg-white"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? { opacity: 0, x: 5 }
                    : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
                className="h-px w-full bg-white"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: -45, y: -5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="h-px w-full origin-center bg-white"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[9996]
              flex
              items-center
              justify-center
              bg-[#050b16]
              md:hidden
            "
          >
            {/* Subtle background grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: '48px 48px',
              }}
            />

            {/* Blue ambient light */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#2563EB]/[0.07]
                blur-[100px]
              "
            />

            <div className="relative w-full px-8">
              {/* Menu label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#4D8DFF]" />

                <span className="text-[10px] font-medium tracking-[0.2em] text-white/35 uppercase">
                  Navigation
                </span>
              </motion.div>

              {/* Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.slice(1)

                  return (
                    <motion.button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavigation(link.href)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.07,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        border-b
                        border-white/[0.06]
                        py-5
                        text-left
                      "
                    >
                      <span
                        className={`
                          text-[10px]
                          tracking-[0.12em]
                          transition-colors
                          ${
                            isActive
                              ? 'text-[#4D8DFF]'
                              : 'text-white/25'
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`
                          font-clash
                          text-[clamp(2rem,9vw,3.5rem)]
                          font-medium
                          tracking-[-0.04em]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? 'translate-x-2 text-white'
                              : 'text-white/55 group-hover:translate-x-2 group-hover:text-white'
                          }
                        `}
                      >
                        {link.label}
                      </span>

                      <span
                        className={`
                          ml-auto
                          text-lg
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? 'translate-x-0 text-[#4D8DFF] opacity-100'
                              : '-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                          }
                        `}
                      >
                        ↗
                      </span>
                    </motion.button>
                  )
                })}
              </nav>

              {/* Mobile footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex items-center justify-between"
              >
                <span className="text-[10px] tracking-[0.14em] text-white/25 uppercase">
                  Frontend Developer
                </span>

                <span className="flex items-center gap-2 text-[10px] tracking-[0.12em] text-white/35 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />
                  Lucknow, India
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}