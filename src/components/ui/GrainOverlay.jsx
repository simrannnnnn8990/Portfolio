// src/components/ui/GrainOverlay.jsx
'use client'

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[100]
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          -inset-[50%]
          h-[200%]
          w-[200%]
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  )
}