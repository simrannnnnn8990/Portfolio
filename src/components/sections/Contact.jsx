'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Terminal,
} from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Contact() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Remove previous status when user starts editing again
    if (status.message) {
      setStatus({
        type: '',
        message: '',
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    setStatus({
      type: '',
      message: '',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'Something went wrong. Please try again.'
        )
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })

      setFormData({
        name: '',
        email: '',
        message: '',
      })
      setTimeout(() => {
  setStatus({
    type: '',
    message: '',
  })
}, 4000)
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus({
        type: 'error',
        message:
          error.message ||
          'Unable to send your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
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
      {/* BACKGROUND */}

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

        <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#2563EB]/[0.035] blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-140px] h-[450px] w-[450px] rounded-full bg-[#2563EB]/[0.035] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D8DFF]/[0.015] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* HEADER */}

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
              duration: 0.7,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#4D8DFF]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Contact
              </span>
            </div>

            <h2
              className="
                font-clash
                text-4xl
                font-semibold
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let&apos;s build
              <br />

              <span className="text-white/35">
                something meaningful.
              </span>
            </h2>
          </motion.div>

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
              delay: 0.15,
              duration: 0.6,
            }}
            className="max-w-[330px]"
          >
            <p className="text-xs leading-6 text-white/35">
              Have an idea, a project, or simply want to talk
              frontend? I&apos;d love to hear what you&apos;re working on.
            </p>
          </motion.div>
        </div>

        {/* MAIN CONTENT */}

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* LEFT */}

          <motion.div
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
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <div className="mb-10 flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <Terminal
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#4D8DFF]"
                />

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  contact.info
                </span>
              </div>
            </div>

            <h3
              className="
                max-w-md
                font-clash
                text-2xl
                font-medium
                leading-tight
                tracking-[-0.025em]
                sm:text-3xl
              "
            >
              Have something in mind?
              <span className="text-white/30">
                {' '}
                Let&apos;s talk.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-white/35
                sm:text-[15px]
                sm:leading-8
              "
            >
              I&apos;m open to frontend development opportunities,
              collaborations and interesting ideas that can turn
              into meaningful digital experiences.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-12 border-t border-white/[0.07]">

              {/* EMAIL */}

              <div
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  py-5
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      transition-colors
                      duration-300
                      group-hover:border-[#4D8DFF]/30
                    "
                  >
                    <Mail
                      size={14}
                      strokeWidth={1.3}
                      className="text-white/35 transition-colors group-hover:text-[#4D8DFF]"
                    />
                  </div>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.15em] text-white/20">
                      Email
                    </span>

                    <a
                      href="mailto:simranguatam@gmail.com"
                      className="mt-1 block text-xs text-white/55 transition-colors hover:text-[#4D8DFF]"
                    >
                      simranguatam@gmail.com
                    </a>
                  </div>
                </div>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.2}
                  className="
                    text-white/15
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#4D8DFF]
                  "
                />
              </div>

              {/* LOCATION */}

              <div
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  py-5
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      transition-colors
                      duration-300
                      group-hover:border-[#4D8DFF]/30
                    "
                  >
                    <MapPin
                      size={14}
                      strokeWidth={1.3}
                      className="text-white/35 transition-colors group-hover:text-[#4D8DFF]"
                    />
                  </div>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.15em] text-white/20">
                      Location
                    </span>

                    <span className="mt-1 block text-xs text-white/55">
                      Lucknow, India
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.2}
                  className="
                    text-white/15
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#4D8DFF]
                  "
                />
              </div>

              {/* STATUS */}

              <div className="flex items-center gap-4 py-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4D8DFF]" />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.15em] text-white/20">
                    Status
                  </span>

                  <span className="mt-1 block text-xs text-white/55">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 border-l border-[#4D8DFF]/30 pl-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                Curiosity → Craft → Experience
              </p>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              delay: 0.2,
            }}
          >
            <div
              className="
                relative
                border
                border-white/[0.09]
                bg-[#080F1C]
              "
            >

              {/* FORM HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  px-5
                  py-4
                "
              >
                <div className="flex items-center gap-2">
                  <Send
                    size={13}
                    strokeWidth={1.3}
                    className="text-[#4D8DFF]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                    send.message
                  </span>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8"
              >

                {/* NAME */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    delay: 0.35,
                  }}
                >
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                    required
                  />
                </motion.div>

                {/* EMAIL */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    delay: 0.42,
                  }}
                  className="mt-8"
                >
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                     Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                    required
                  />
                </motion.div>


                {/* MESSAGE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    delay: 0.56,
                  }}
                  className="mt-8"
                >
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                     Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-4
                      text-sm
                      leading-7
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                    required
                  />
                </motion.div>

                {/* STATUS */}

                {status.message && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`
                      mt-6
                      border
                      px-4
                      py-3
                      text-[10px]
                      leading-5
                      ${
                        status.type === 'success'
                          ? 'border-[#4D8DFF]/20 bg-[#4D8DFF]/[0.04] text-[#7CA7FF]'
                          : 'border-red-400/20 bg-red-400/[0.04] text-red-300'
                      }
                    `}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* SUBMIT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    delay: 0.63,
                  }}
                  className="mt-10"
                >
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      group
                      relative
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      border
                      border-[#4D8DFF]/40
                      bg-[#4D8DFF]/[0.06]
                      px-8
                      py-4
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-white/75
                      transition-all
                      duration-300
                      hover:border-[#4D8DFF]
                      hover:bg-[#4D8DFF]/[0.1]
                      hover:text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    `}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>

                    {!isSubmitting && (
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.3}
                        className="
                          relative
                          z-10
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    )}

                    {isSubmitting && (
                      <span className="relative z-10 h-3.5 w-3.5 animate-spin rounded-full border border-white/20 border-t-[#4D8DFF]" />
                    )}

                    <motion.span
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-1/3
                        bg-gradient-to-r
                        from-transparent
                        via-[#4D8DFF]/10
                        to-transparent
                      "
                      initial={{
                        x: '-150%',
                      }}
                      whileHover={{
                        x: '450%',
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                    />
                  </MagneticButton>
                </motion.div>
              </form>

              {/* FOOTER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.07]
                  px-6
                  py-4
                "
              >
                <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
                  Response usually within 24–48h
                </span>

                <span className="font-mono text-[8px] text-[#4D8DFF]/50">
                  {isSubmitting ? 'SENDING' : 'READY'}
                </span>
              </div>

              {/* CORNER MARKS */}

              <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-[#4D8DFF]/50" />
              <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-[#4D8DFF]/50" />
              <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-[#4D8DFF]/50" />
              <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-[#4D8DFF]/50" />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}

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
            duration: 0.6,
          }}
          className="
            mt-24
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-white/[0.07]
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              End of page
            </p>

            <p className="mt-2 text-xs text-white/25">
              Thanks for making it this far.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
              Let&apos;s create something
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

