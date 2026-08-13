// src/components/ui/ParallaxImage.jsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.15,
}) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -8,
        },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [speed])

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-full
        w-full
        overflow-hidden
      "
    >
      <div
        ref={imageRef}
        className="
          absolute
          -inset-y-[8%]
          left-0
          w-full
        "
        style={{
          transform: `scale(${1 + speed * 0.15})`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`
            object-cover
            ${className}
          `}
        />
      </div>
    </div>
  )
}