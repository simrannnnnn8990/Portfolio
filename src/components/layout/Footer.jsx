'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050B16] px-6 py-16 text-white sm:px-8 lg:px-12">
      
      {/* Background */}
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

        <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.035] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#4D8DFF]" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Connect
          </span>
        </motion.div>

        {/* Main Footer */}
        <div className="border-y border-white/[0.07] py-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#4D8DFF]">
                Frontend Developer
              </p>

              <h2 className="mt-3 font-clash text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Simran
                <span className="text-white/25">.</span>
              </h2>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/30">
                Building thoughtful interfaces where design,
                interaction and frontend engineering meet.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-[#4D8DFF]/30
                    hover:bg-[#4D8DFF]/[0.04]
                  "
                >
                  <span className="font-mono text-[8px] text-white/20 transition-colors group-hover:text-[#4D8DFF]">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/40 transition-colors group-hover:text-white/80">
                    {social.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.3}
                    className="
                      text-white/15
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:text-[#4D8DFF]
                    "
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            flex
            flex-col
            gap-4
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[9px] uppercase tracking-[0.12em] text-white/20">
            © 2026 Simran Gautam. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-40" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4D8DFF]" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.13em] text-white/25">
              Lucknow, India
            </span>
          </div>

          <p className="text-[9px] uppercase tracking-[0.12em] text-white/20">
            Designed & Built with intention
          </p>
        </motion.div>

      </div>
    </footer>
  )
}