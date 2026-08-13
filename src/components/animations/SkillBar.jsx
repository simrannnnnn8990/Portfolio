'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SkillBar({ skill, index, isHovered }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* Skill Header */}
      <div className="mb-3 flex items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          {/* Icon */}
          <motion.span
            className="text-xl"
            animate={
              isHovered
                ? {
                    rotate: [0, 6, -6, 0],
                    scale: 1.1,
                  }
                : {
                    rotate: 0,
                    scale: 1,
                  }
            }
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
          </motion.span>

          {/* Skill Info */}
          <div>
            <span
              className="
                text-sm
                font-medium
                text-white/80
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {skill.name}
            </span>

            {skill.description && (
              <p
                className="
                  mt-0.5
                  text-[11px]
                  leading-5
                  text-white/25
                "
              >
                {skill.description}
              </p>
            )}
          </div>
        </div>

        {/* Skill Level */}
        <motion.span
          className="
            shrink-0
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-[#4D8DFF]/70
          "
          animate={{
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          {skill.level || 'Learning'}
        </motion.span>
      </div>

      {/* Skill Indicator */}
      <div
        className="
          relative
          h-[3px]
          overflow-hidden
          rounded-full
          bg-white/[0.06]
        "
      >
        <motion.div
          initial={{ width: 0 }}
          animate={
            isInView
              ? {
                  width: '100%',
                }
              : {}
          }
          transition={{
            duration: 0.9,
            delay: 0.2 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-y-0
            left-0
            rounded-full
            bg-[#4D8DFF]/70
          "
        />

        {/* Hover Shimmer */}
        {isHovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 0.9,
              ease: 'easeInOut',
            }}
            className="
              absolute
              inset-y-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
            "
          />
        )}
      </div>

      {/* Skill Tags */}
      {skill.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="
                border
                border-white/[0.06]
                bg-white/[0.015]
                px-2
                py-1
                text-[8px]
                uppercase
                tracking-[0.08em]
                text-white/25
                transition-all
                duration-300
                group-hover:border-[#4D8DFF]/20
                group-hover:text-white/40
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}