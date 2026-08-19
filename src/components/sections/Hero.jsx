
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  MousePointer2,
  Terminal,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const stories = [
  {
    number: "01",
    kicker: "WHERE IT STARTED",
    title: "I was curious about",
    accent: "how interfaces work.",
    description:
      "Before writing complex applications, I wanted to understand why some digital experiences simply feel right — how layout, spacing, interaction and motion come together.",
    visual: "curiosity",
  },
  {
    number: "02",
    kicker: "THEN I STARTED BUILDING",
    title: "That curiosity turned",
    accent: "into interfaces.",
    description:
      "I started with frontend development, turning ideas into responsive interfaces with React, JavaScript, CSS and Next.js — focusing on the details people actually feel while using a product.",
    visual: "interface",
  },
  {
    number: "03",
    kicker: "HOW I THINK",
    title: "I don't stop at the screen.",
    accent: "I follow the interaction.",
    description:
      "Components, state, APIs, performance and accessibility became part of the process. I enjoy understanding what happens behind an interaction, not only how it looks.",
    visual: "code",
  },
  {
    number: "04",
    kicker: "WHERE I'M GOING",
    title: "Now I'm exploring",
    accent: "the full picture.",
    description:
      "I'm a fresher building my foundation in frontend development while exploring the wider product journey — from polished interfaces to the systems that make them work.",
    visual: "fullstack",
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  /*
   * The section is intentionally taller than the viewport.
   * The content stays sticky while scroll progress reveals
   * each story one after another.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const updateTouch = () => {
      setIsTouch(mediaQuery.matches);
    };

    updateTouch();

    const handleMove = (event) => {
      if (mediaQuery.matches) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 10);
      mouseY.set(y * 10);
    };

    window.addEventListener("pointermove", handleMove);
    mediaQuery.addEventListener?.("change", updateTouch);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      mediaQuery.removeEventListener?.("change", updateTouch);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[500vh] bg-[#050B16] text-white"
    >
      {/* =========================================================
          STICKY EXPERIENCE
      ========================================================== */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* =======================================================
            BACKGROUND — NOT A GENERIC GRID
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* subtle technical frame */}
          <div className="absolute inset-[5%] border border-white/[0.035]" />

          <div className="absolute left-[5%] top-[5%] h-3 w-3 border-l border-t border-[#4D8DFF]/30" />
          <div className="absolute right-[5%] top-[5%] h-3 w-3 border-r border-t border-[#4D8DFF]/30" />
          <div className="absolute bottom-[5%] left-[5%] h-3 w-3 border-b border-l border-[#4D8DFF]/30" />
          <div className="absolute bottom-[5%] right-[5%] h-3 w-3 border-b border-r border-[#4D8DFF]/30" />

          {/* architectural lines */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.025]" />

          {/* orbital structure */}
          <motion.div
            style={{
              x: isTouch ? 0 : springX,
              y: isTouch ? 0 : springY,
            }}
            className="absolute left-[56%] top-[47%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4D8DFF]/[0.06]"
          />

          <motion.div
            style={{
              x: isTouch ? 0 : springX,
              y: isTouch ? 0 : springY,
            }}
            className="absolute left-[56%] top-[47%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4D8DFF]/[0.07]"
          />

          <motion.div
            style={{
              x: isTouch ? 0 : springX,
              y: isTouch ? 0 : springY,
            }}
            className="absolute left-[56%] top-[47%] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.035] blur-[55px]"
          />

          {/* moving technical point */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[56%] top-[47%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4D8DFF]/60 shadow-[0_0_18px_rgba(77,141,255,0.7)]" />
          </motion.div>

          {/* technical floating fragments */}
          <div className="absolute left-[8%] top-[22%] font-mono text-[8px] tracking-[0.12em] text-white/[0.13]">
            {"<interface />"}
          </div>

          <div className="absolute right-[9%] top-[27%] font-mono text-[8px] tracking-[0.12em] text-white/[0.11]">
            {"{ interaction }"}
          </div>

          <div className="absolute bottom-[24%] left-[12%] font-mono text-[8px] tracking-[0.12em] text-white/[0.10]">
            0x / component
          </div>

          <div className="absolute bottom-[20%] right-[10%] font-mono text-[8px] tracking-[0.12em] text-white/[0.10]">
            render → respond
          </div>
        </div>

        {/* =======================================================
            MAIN LAYOUT
        ======================================================== */}

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 sm:px-8 lg:px-12">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            {/* =================================================
                LEFT STORY
            ================================================== */}

            <div className="relative min-h-[470px]">
              {/* vertical progress */}
              <div className="absolute -left-1 top-0 hidden h-full w-px bg-white/[0.07] lg:block">
                <motion.div
                  style={{
                    height: useTransform(
                      scrollYProgress,
                      [0, 1],
                      ["0%", "100%"]
                    ),
                  }}
                  className="w-px bg-[#4D8DFF]"
                />
              </div>

              {stories.map((story, index) => (
                <StoryScene
                  key={story.number}
                  story={story}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            {/* =================================================
                RIGHT INTERACTIVE VISUAL
            ================================================== */}

            <InteractiveVisual
              progress={scrollYProgress}
              springX={springX}
              springY={springY}
              isTouch={isTouch}
            />
          </div>
        </div>

        {/* =======================================================
            TOP NAV-LIKE INFORMATION — NOT A BADGE
        ======================================================== */}

        {/* <div className="absolute left-6 right-6 top-7 z-30 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
            Simran Gautam
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            frontend / learning / building
          </div>
        </div> */}

        {/* =======================================================
            STORY COUNTER
        ======================================================== */}

        <StoryCounter progress={scrollYProgress} />

        {/* =======================================================
            CTA — ONLY AT END
        ======================================================== */}

        <FinalCTA progress={scrollYProgress} scrollTo={scrollTo} />
      </div>
    </section>
  );
}

/* ===============================================================
   STORY SCENE
================================================================ */

function StoryScene({ story, index, progress }) {
  const segment = 1 / stories.length;

  const start = index * segment;
  const enter = start + segment * 0.18;
  const exit = start + segment * 0.82;
  const end = start + segment;

  const opacity = useTransform(
    progress,
    [start, enter, exit, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start, enter, exit, end],
    [40, 0, 0, -35]
  );

  const scale = useTransform(
    progress,
    [start, enter, exit, end],
    [0.97, 1, 1, 0.985]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className="absolute inset-0 flex max-w-[620px] flex-col justify-center pl-0 lg:pl-8"
    >
      <div className="mb-7 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#4D8DFF]">
          {story.number}
        </span>

        <span className="h-px w-10 bg-white/[0.12]" />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          {story.kicker}
        </span>
      </div>

      <h1 className="max-w-[600px] font-clash text-[clamp(2.7rem,5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
        {story.title}
        <br />
        <span className="text-[#4D8DFF]">{story.accent}</span>
      </h1>

      <p className="mt-8 max-w-[500px] text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
        {story.description}
      </p>

      {index === 1 && (
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>
      )}

      {index === 2 && (
        <div className="mt-9 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
          <Terminal size={12} className="text-[#4D8DFF]/70" />
          <span>thinking beyond the component</span>
        </div>
      )}

      {index === 3 && (
        <div className="mt-9 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
          <Layers3 size={12} className="text-[#4D8DFF]/70" />
          <span>frontend → systems → product</span>
        </div>
      )}
    </motion.div>
  );
}

/* ===============================================================
   RIGHT VISUAL
================================================================ */

function InteractiveVisual({
  progress,
  springX,
  springY,
  isTouch,
}) {
  const segment = 1 / stories.length;

  return (
    <div className="relative hidden h-[570px] lg:block">
      {stories.map((story, index) => {
        return (
          <VisualScene
            key={story.number}
            story={story}
            index={index}
            progress={progress}
            springX={springX}
            springY={springY}
            isTouch={isTouch}
          />
        );
      })}
    </div>
  );
}

function VisualScene({
  story,
  index,
  progress,
  springX,
  springY,
  isTouch,
}) {
  const segment = 1 / stories.length;

  const start = index * segment;
  const enter = start + segment * 0.18;
  const exit = start + segment * 0.82;
  const end = start + segment;

  const opacity = useTransform(
    progress,
    [start, enter, exit, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start, enter, exit, end],
    [35, 0, 0, -30]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        x: isTouch ? 0 : springX,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative h-[500px] w-full max-w-[680px]">
        {story.visual === "curiosity" && <CuriosityVisual progress={progress} />}
        {story.visual === "interface" && <InterfaceVisual progress={progress} />}
        {story.visual === "code" && <CodeVisual progress={progress} />}
        {story.visual === "fullstack" && <FullStackVisual progress={progress} />}

        <motion.div
          style={{
            y: isTouch ? 0 : springY,
          }}
          className="absolute bottom-2 right-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/[0.16]"
        >
          {story.number} / 04
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   VISUAL 01 — CURIOSITY
================================================================ */

function CuriosityVisual({ progress }) {
  const rotate = useTransform(progress, [0, 0.25], [-8, 12]);

  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div
        style={{ rotate }}
        className="relative h-[300px] w-[420px] border border-white/[0.08] bg-[#080F1C]/70"
      >
        <div className="absolute -left-5 -top-5 h-10 w-10 border-l border-t border-[#4D8DFF]/40" />
        <div className="absolute -bottom-5 -right-5 h-10 w-10 border-b border-r border-[#4D8DFF]/40" />

        <div className="absolute left-8 top-8 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
          observation / 001
        </div>

        <motion.div
          animate={{
            x: [0, 140, 240, 80, 0],
            y: [0, -35, 50, 90, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-[#4D8DFF] shadow-[0_0_25px_rgba(77,141,255,0.7)]"
        />

        <div className="absolute left-[18%] top-[35%] h-px w-[64%] bg-white/[0.06]" />
        <div className="absolute left-[18%] top-[55%] h-px w-[64%] bg-white/[0.06]" />
        <div className="absolute left-[35%] top-[20%] h-[60%] w-px bg-white/[0.05]" />
        <div className="absolute left-[65%] top-[20%] h-[60%] w-px bg-white/[0.05]" />

        <div className="absolute bottom-8 left-8 font-mono text-[9px] text-white/30">
          observe
        </div>

        <div className="absolute bottom-8 right-8 font-mono text-[9px] text-[#4D8DFF]/60">
          → understand
        </div>
      </motion.div>
    </div>
  );
}

/* ===============================================================
   VISUAL 02 — INTERFACE
================================================================ */

function InterfaceVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div
        initial={{ rotateX: 8, rotateY: -8 }}
        animate={{
          rotateX: [8, 4, 8],
          rotateY: [-8, -3, -8],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[350px] w-[510px] overflow-hidden border border-white/[0.1] bg-[#080F1C] shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
      >
        <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>

          <span className="font-mono text-[7px] text-white/20">
            interface.dev
          </span>
        </div>

        <div className="grid h-[310px] grid-cols-[25%_75%]">
          <div className="border-r border-white/[0.06] p-4">
            <div className="h-2 w-12 bg-white/15" />

            <div className="mt-8 space-y-3">
              <div className="h-1 w-full bg-[#4D8DFF]/60" />
              <div className="h-1 w-[70%] bg-white/10" />
              <div className="h-1 w-[82%] bg-white/10" />
              <div className="h-1 w-[55%] bg-white/10" />
            </div>
          </div>

          <div className="relative p-7">
            <div className="absolute right-5 top-5 font-mono text-[7px] text-[#4D8DFF]/60">
              responsive
            </div>

            <div className="max-w-[250px]">
              <div className="h-2 w-20 bg-[#4D8DFF]/50" />
              <div className="mt-4 h-8 w-full bg-white/[0.08]" />
              <div className="mt-2 h-8 w-[75%] bg-white/[0.045]" />
            </div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="absolute bottom-8 left-7 right-7 border border-white/[0.08] bg-white/[0.025] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 bg-white/20" />
                  <div className="mt-2 h-1.5 w-28 bg-white/[0.08]" />
                </div>

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex h-8 w-8 items-center justify-center border border-[#4D8DFF]/30"
                >
                  <ArrowUpRight size={13} className="text-[#4D8DFF]" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                x: [0, 35, 5, 0],
                y: [0, -8, 4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[66px] right-[70px]"
            >
              <MousePointer2
                size={18}
                className="fill-[#4D8DFF] text-white"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ===============================================================
   VISUAL 03 — CODE
================================================================ */

function CodeVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="relative w-[520px]">
        <div className="absolute -left-8 top-10 h-[300px] w-px bg-gradient-to-b from-transparent via-[#4D8DFF]/30 to-transparent" />

        <div className="overflow-hidden border border-white/[0.09] bg-[#070D18]">
          <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4">
            <div className="flex items-center gap-2">
              <Code2 size={12} className="text-[#4D8DFF]/70" />
              <span className="font-mono text-[8px] text-white/25">
                Component.jsx
              </span>
            </div>

            <span className="font-mono text-[7px] text-white/15">
              building...
            </span>
          </div>

          <div className="space-y-3 p-7 font-mono text-[9px] leading-5">
            <CodeLine number="01">
              <span className="text-[#4D8DFF]">const</span>{" "}
              <span className="text-white/65">experience</span> = {"{"}
            </CodeLine>

            <CodeLine number="02">
              <span className="pl-4 text-white/35">interface:</span>{" "}
              <span className="text-white/55">&quot;intentional&quot;</span>,
            </CodeLine>

            <CodeLine number="03">
              <span className="pl-4 text-white/35">interaction:</span>{" "}
              <span className="text-white/55">&quot;meaningful&quot;</span>,
            </CodeLine>

            <CodeLine number="04">
              <span className="pl-4 text-white/35">responsive:</span>{" "}
              <span className="text-[#7CA7FF]">true</span>,
            </CodeLine>

            <CodeLine number="05">
              <span className="text-white/35">{"}"}</span>;
            </CodeLine>

            <div className="my-5 h-px bg-white/[0.05]" />

            <CodeLine number="06">
              <span className="text-[#4D8DFF]">return</span>{" "}
              <span className="text-white/60">&lt;Experience /&gt;</span>
            </CodeLine>

            <motion.div
              animate={{
                opacity: [0.15, 1, 0.15],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
              className="ml-[36px] h-4 w-px bg-[#4D8DFF]"
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/15">
          <span>logic</span>
          <span>state</span>
          <span>data</span>
          <span>response</span>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   VISUAL 04 — FULL STACK EXPLORATION
================================================================ */

function FullStackVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="relative h-[400px] w-[540px]">
        <div className="absolute left-1/2 top-1/2 h-px w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.08]" />

        <Node
          className="left-[2%] top-1/2 -translate-y-1/2"
          icon={<Code2 size={15} />}
          title="Frontend"
          subtitle="React / Next.js"
        />

        <Node
          className="left-1/2 top-[7%] -translate-x-1/2"
          icon={<Layers3 size={15} />}
          title="Application"
          subtitle="Components / State"
        />

        <Node
          className="right-[2%] top-1/2 -translate-y-1/2"
          icon={<Terminal size={15} />}
          title="Backend"
          subtitle="APIs / Data"
        />

        <Node
          className="bottom-[5%] left-1/2 -translate-x-1/2"
          icon={<ArrowUpRight size={15} />}
          title="Product"
          subtitle="Experience"
        />

        <motion.div
          animate={{
            x: [-150, 0, 150, 0, -150],
            y: [0, -125, 0, 125, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D8DFF] shadow-[0_0_20px_rgba(77,141,255,0.8)]"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
          learning the system
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   NODE
================================================================ */

function Node({ className, icon, title, subtitle }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        borderColor: "rgba(77,141,255,0.35)",
      }}
      className={`absolute w-[135px] border border-white/[0.08] bg-[#080F1C] p-4 ${className}`}
    >
      <div className="mb-3 text-[#4D8DFF]/70">{icon}</div>

      <div className="text-[10px] text-white/65">{title}</div>

      <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/20">
        {subtitle}
      </div>
    </motion.div>
  );
}

/* ===============================================================
   CODE LINE
================================================================ */

function CodeLine({ number, children }) {
  return (
    <div className="flex">
      <span className="mr-5 w-4 shrink-0 select-none text-white/10">
        {number}
      </span>

      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

/* ===============================================================
   STORY COUNTER
================================================================ */

function StoryCounter({ progress }) {
  const rawProgress = useTransform(progress, [0, 1], [0, 4]);

  return (
    <div className="absolute bottom-8 left-6 z-30 sm:left-8 lg:left-12">
      <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-white/20">
        <span className="text-[#4D8DFF]">SCROLL</span>

        <div className="h-px w-14 bg-white/[0.08]">
          <motion.div
            style={{
              width: useTransform(progress, [0, 1], ["0%", "100%"]),
            }}
            className="h-px bg-[#4D8DFF]"
          />
        </div>

        <motion.span>
          <motion.span>
            {useTransform(rawProgress, (value) => {
              const current = Math.min(4, Math.floor(value) + 1);
              return String(current).padStart(2, "0");
            })}
          </motion.span>
          <span className="text-white/10"> / 04</span>
        </motion.span>
      </div>
    </div>
  );
}

/* ===============================================================
   FINAL CTA
================================================================ */

function FinalCTA({ progress, scrollTo }) {
  const opacity = useTransform(progress, [0.91, 0.97, 1], [0, 1, 1]);

  const y = useTransform(progress, [0.91, 1], [20, 0]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        pointerEvents: "none",
      }}
      className="absolute bottom-8 right-6 z-30 sm:right-8 lg:right-12"
    >
      <motion.button
        whileHover={{
          x: 4,
        }}
        onClick={() => scrollTo("#work")}
        className="pointer-events-auto group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white"
      >
        <span>continue exploring</span>

        <ArrowDownRight
          size={13}
          className="text-[#4D8DFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
        />
      </motion.button>
    </motion.div>
  );
}

