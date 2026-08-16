

'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Send, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Contact({ isOpen, onClose }) {
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

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status.message) {
      setStatus({
        type: '',
        message: '',
      })
    }
  }

  const handleClose = () => {
    if (isSubmitting) return

    setStatus({
      type: '',
      message: '',
    })

    onClose()
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

      setFormData({
  name: '',
  email: '',
  message: '',
})

setStatus({
  type: 'success',
  message: 'Message sent successfully.',
})

setTimeout(() => {
  setStatus({
    type: '',
    message: '',
  })

  onClose()
}, 1200)
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus({
        type: 'error',
        message:
          error.message || 'Unable to send your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[6px]"
          />

          {/* DRAWER */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 30,
            }}
            className="
  fixed
  right-0
  top-[88px]
  z-[100]
  flex
  h-[calc(100dvh-88px)]
  w-full
  max-w-[620px]
  flex-col
  overflow-hidden
  border-l
  border-white/[0.08]
  bg-[#050B16]
  text-white
  shadow-[-30px_0_80px_rgba(0,0,0,0.35)]
"
          >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

              <div className="absolute right-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#2563EB]/[0.06] blur-[130px]" />

              <div className="absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full bg-[#2563EB]/[0.035] blur-[130px]" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-full flex-col">
              
          
              {/* INTRO */}
              {/* INTRO */}
<div className="relative px-6 pb-5 pt-6 sm:px-8 sm:pt-7">
  <button
    type="button"
    onClick={handleClose}
    aria-label="Close contact form"
    className="
      group
      absolute
      right-6
      top-5
      flex
      h-9
      w-9
      items-center
      justify-center
      border
      border-white/[0.08]
      bg-white/[0.02]
      transition-all
      duration-300
      hover:border-[#4D8DFF]/40
      hover:bg-[#4D8DFF]/[0.05]
      sm:right-8
    "
  >
    <X
      size={16}
      strokeWidth={1.3}
      className="text-white/40 transition-colors group-hover:text-white"
    />
  </button>

  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4D8DFF]/70">
      Let&apos;s talk
    </p>

    <h2 className="mt-3 max-w-lg font-clash text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
      Have something
      <br />
      <span className="text-white/30">
        worth building?
      </span>
    </h2>

    <p className="mt-3 max-w-md text-xs leading-6 text-white/35">
      Tell me what you&apos;re working on, what you&apos;re
      exploring, or simply say hello. I&apos;ll get back to you
      as soon as I can.
    </p>
  </motion.div>
</div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="px-6 pb-5 sm:px-8"
              >
                {/* NAME */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="contact-name"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                  />
                </motion.div>

                {/* EMAIL */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                  className="mt-5"
                >
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                  />
                </motion.div>

                {/* MESSAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="mt-5"
                >
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-[9px] uppercase tracking-[0.15em] text-white/25"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me a little about your idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      leading-7
                      text-white
                      outline-none
                      placeholder:text-white/15
                      transition-colors
                      duration-300
                      focus:border-[#4D8DFF]
                    "
                  />
                </motion.div>

                {/* STATUS */}
                <AnimatePresence mode="wait">
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
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
                </AnimatePresence>

                {/* SUBMIT */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-5"
                >
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="
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
  py-3.5
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
"
>
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>

                    {!isSubmitting ? (
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
                    ) : (
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
                      initial={{ x: '-150%' }}
                      whileHover={{ x: '450%' }}
                      transition={{ duration: 0.7 }}
                    />
                  </MagneticButton>
                </motion.div>
              </form>

              {/* CONTACT INFO */}
              <div className="border-t border-white/[0.07] px-6 py-3 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  
                  <a
                    href="mailto:simranguatam@gmail.com"
                    className="group flex items-center gap-3"
                  >
                    <Mail
                      size={14}
                      strokeWidth={1.3}
                      className="text-white/25 transition-colors group-hover:text-[#4D8DFF]"
                    />

                    <span className="text-[10px] text-white/35 transition-colors group-hover:text-white/70">
                      simranguatam@gmail.com
                    </span>
                  </a>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={14}
                      strokeWidth={1.3}
                      className="text-white/25"
                    />

                    <span className="text-[10px] text-white/25">
                      Lucknow, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}