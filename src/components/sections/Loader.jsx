"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stages = [
  {
   
    text: "INITIALIZING",
    accent: "THE INTERFACE",
  },
  {
    
    text: "ASSEMBLING",
    accent: "THE EXPERIENCE",
  },
  {
    
    text: "SHAPING",
    accent: "THE DETAILS",
  },
  {
   
    text: "REFINING",
    accent: "THE CRAFT",
  },
  {
    
    text: "ALMOST",
    accent: "READY",
  },
];

const stairs = [
  { width: "18%", delay: 0 },
  { width: "28%", delay: 0.04 },
  { width: "38%", delay: 0.08 },
  { width: "48%", delay: 0.12 },
  { width: "58%", delay: 0.16 },
  { width: "68%", delay: 0.2 },
  { width: "78%", delay: 0.24 },
  { width: "88%", delay: 0.28 },
];

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [];

    stages.forEach((_, index) => {
      if (index === 0) return;

      timers.push(
        setTimeout(() => {
          setStage(index);
        }, index * 1700)
      );
    });

    timers.push(
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 12000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  const progress = Math.min(96, (stage + 1) * 19);

  return (
    <AnimatePresence>
      <motion.main
        key="loader"
        className="
          fixed
          inset-0
          z-[9999]
          overflow-hidden
          bg-[#050b16]
          text-white
        "
        initial={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1.015,
          transition: {
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* BASE */}

          <div className="absolute inset-0 bg-[#050b16]" />

          {/* BLUE CENTER ATMOSPHERE */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[65vh]
              w-[75vw]
              max-w-[1100px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#4D8DFF]/[0.045]
              blur-[120px]
            "
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* UPPER BLUE ATMOSPHERE */}

          <motion.div
            className="
              absolute
              left-[-8%]
              top-[-35%]
              h-[70vh]
              w-[55vw]
              rounded-full
              bg-[#4D8DFF]/[0.035]
              blur-[110px]
            "
            animate={{
              x: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* LOWER BLUE ATMOSPHERE */}

          <motion.div
            className="
              absolute
              bottom-[-40%]
              right-[-15%]
              h-[70vh]
              w-[55vw]
              rounded-full
              bg-[#4D8DFF]/[0.025]
              blur-[130px]
            "
            animate={{
              x: [0, -50, 0],
              y: [0, -25, 0],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              ARCHITECTURAL GRID
          ================================================== */}

          <div className="absolute inset-0 opacity-[0.025]">
            <div className="absolute left-0 right-0 top-[23%] h-px bg-white" />
            <div className="absolute left-0 right-0 top-[50%] h-px bg-[#4D8DFF]" />
            <div className="absolute left-0 right-0 top-[77%] h-px bg-white" />

            <div className="absolute left-[17%] top-0 h-full w-px bg-white" />
            <div className="absolute left-[83%] top-0 h-full w-px bg-white" />
          </div>

          {/* =================================================
              TOP BLUE STRIP
              Comes from top before main reveal
          ================================================== */}

          <motion.div
            className="
              absolute
              left-0
              top-0
              h-[1px]
              w-full
              origin-left
              bg-[#4D8DFF]
              shadow-[0_0_18px_rgba(77,141,255,0.8)]
            "
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: [0, 1, 1],
              opacity: [0, 1, 0.35],
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.65, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* =================================================
              TOP LIGHT SWEEP
          ================================================== */}

          <motion.div
            className="
              absolute
              left-[-35%]
              top-[7%]
              h-px
              w-[35%]
              bg-gradient-to-r
              from-transparent
              via-[#4D8DFF]
              to-transparent
              shadow-[0_0_18px_rgba(77,141,255,0.6)]
            "
            initial={{
              x: "0vw",
              opacity: 0,
            }}
            animate={{
              x: "380vw",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.8,
              delay: 0.5,
              ease: "linear",
            }}
          />

          {/* =================================================
              CENTER HORIZONTAL BLUE LIGHT
          ================================================== */}

          <motion.div
            className="
              absolute
              left-[-30%]
              top-1/2
              h-px
              w-[40%]
              bg-gradient-to-r
              from-transparent
              via-[#4D8DFF]/60
              to-transparent
              blur-[1px]
            "
            animate={{
              x: ["0vw", "220vw"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />

          {/* =================================================
              VERTICAL BLUE LIGHT
          ================================================== */}

          <motion.div
            className="
              absolute
              left-[30%]
              top-[-30%]
              h-[35%]
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#4D8DFF]/40
              to-transparent
            "
            animate={{
              y: ["0vh", "170vh"],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "linear",
            }}
          />

          {/* =================================================
              CORNER FRAME
          ================================================== */}

          <div
            className="
              absolute
              left-6
              top-24
              h-12
              w-12
              border-l
              border-t
              border-[#4D8DFF]/[0.12]
              sm:left-10
            "
          />

          <div
            className="
              absolute
              bottom-24
              right-6
              h-12
              w-12
              border-b
              border-r
              border-[#4D8DFF]/[0.12]
              sm:right-10
            "
          />

          {/* =================================================
              AMBIENT POINTS
          ================================================== */}

          <div className="absolute left-[14%] top-[31%] h-[2px] w-[2px] rounded-full bg-[#4D8DFF]/50" />

          <div className="absolute right-[19%] top-[38%] h-[2px] w-[2px] rounded-full bg-[#4D8DFF]/40" />

          <div className="absolute left-[24%] bottom-[26%] h-[1px] w-[1px] rounded-full bg-[#4D8DFF]/60" />

          <div className="absolute right-[28%] bottom-[21%] h-[2px] w-[2px] rounded-full bg-[#4D8DFF]/40" />

          {/* =================================================
              VIGNETTE
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_32%,rgba(2,7,15,0.72)_100%)]
            "
          />
        </div>

        {/* =====================================================
            TOP HEADER
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-20
            flex
            items-center
            justify-between
            px-6
            py-6
            sm:px-10
            lg:px-14
          "
        >
          {/* <div className="flex items-center gap-4">
            <motion.span
              className="
                h-px
                w-8
                bg-[#4D8DFF]
                shadow-[0_0_10px_rgba(77,141,255,0.45)]
              "
              animate={{
                width: [24, 40, 24],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.42em]
                text-white/45
                sm:text-[11px]
              "
            >
              Build something meaningful
            </span>
          </div> */}
        </div>

        {/* =====================================================
            MAIN LOADER
        ====================================================== */}

        <div className="relative flex h-full items-center justify-center">
          <div className="relative flex w-full flex-col items-center">

            {/* =================================================
                TOP STRIP → CENTRAL REVEAL
            ================================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[18%]
                h-px
                w-[75%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#4D8DFF]/30
                to-transparent
              "
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: [0, 1, 1],
                opacity: [0, 0.8, 0.25],
              }}
              transition={{
                duration: 2.2,
                delay: 1,
                times: [0, 0.7, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* =================================================
                STAIR SYSTEM
            ================================================== */}

            <div
              className="
                relative
                flex
                h-[240px]
                w-full
                flex-col
                items-center
                justify-center
                gap-[7px]
                sm:h-[290px]
                lg:h-[330px]
              "
            >
              {stairs.map((stair, index) => (
                <motion.div
                  key={index}
                  className="
                    relative
                    h-[2px]
                    overflow-hidden
                    bg-white/[0.035]
                  "
                  style={{
                    width: stair.width,
                  }}
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.8 + stair.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* BLUE MAIN STRIP */}

                  <motion.div
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-full
                      bg-[#4D8DFF]
                      shadow-[0_0_12px_rgba(77,141,255,0.7)]
                    "
                    initial={{
                      x: "-105%",
                    }}
                    animate={{
                      x: "105%",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 1.15 + stair.delay,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />

                  {/* WHITE-BLUE LIGHT PASS */}

                  <motion.div
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-[18%]
                      bg-white/70
                      blur-[2px]
                    "
                    animate={{
                      x: ["-100%", "600%"],
                    }}
                    transition={{
                      duration: 2.8,
                      delay: 1.6 + index * 0.08,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ))}

              {/* =================================================
                  CENTRAL BLUE BEAM
              ================================================== */}

              <motion.div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-full
                  w-px
                  -translate-x-1/2
                  origin-bottom
                  bg-gradient-to-b
                  from-transparent
                  via-[#4D8DFF]/40
                  to-[#4D8DFF]/5
                  shadow-[0_0_12px_rgba(77,141,255,0.3)]
                "
                initial={{
                  scaleY: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* =================================================
                LOADING MESSAGE
            ================================================== */}

            <div
              className="
                relative
                mt-4
                flex
                min-h-[125px]
                flex-col
                items-center
                justify-center
                sm:mt-8
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(6px)",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center"
                >
                  <p
                    className="
                      text-[clamp(1.65rem,4vw,3.2rem)]
                      font-light
                      uppercase
                      tracking-[0.24em]
                      text-white
                    "
                  >
                    {stages[stage].text}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[clamp(1.05rem,2.2vw,1.6rem)]
                      font-light
                      uppercase
                      tracking-[0.28em]
                      text-[#4D8DFF]/60
                    "
                  >
                    {stages[stage].accent}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  STAGE DOTS
              ================================================== */}

              <div className="absolute bottom-0 flex items-center gap-3">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-1 w-1 rounded-full bg-[#4D8DFF]"
                    animate={{
                      opacity:
                        dot === stage
                          ? [0.2, 1, 0.2]
                          : 0.15,
                      scale:
                        dot === stage
                          ? [0.8, 1.6, 0.8]
                          : 0.8,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* =================================================
                PROGRESS
            ================================================== */}

            <div className="mt-10 w-[220px] sm:mt-12 sm:w-[300px]">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/25
                  "
                >
                  Processing
                </span>

                <motion.span
                  key={stage}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.2em]
                    text-[#4D8DFF]/60
                  "
                >
                  {progress}%
                </motion.span>
              </div>

              {/* TRACK */}

              <div className="relative h-px w-full bg-white/[0.1]">
                {/* BLUE PROGRESS */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    bg-[#4D8DFF]
                    shadow-[0_0_10px_rgba(77,141,255,0.7)]
                  "
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* PROGRESS NODE */}

                <motion.div
                  className="
                    absolute
                    top-1/2
                    h-2
                    w-2
                    -translate-y-1/2
                    rounded-full
                    bg-[#4D8DFF]
                    shadow-[0_0_14px_rgba(77,141,255,0.9)]
                  "
                  animate={{
                    left: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM METADATA
        ====================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-0
            right-0
            flex
            items-center
            justify-between
            px-6
            sm:px-10
            lg:px-14
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
            "
          >
            Portfolio / 2026
          </span>

          {/* <span
            className="
              flex
              items-center
              gap-2
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#4D8DFF]
                shadow-[0_0_8px_rgba(77,141,255,0.7)]
              "
            />

            Frontend Development
          </span> */}
        </div>
      </motion.main>
    </AnimatePresence>
  );
}