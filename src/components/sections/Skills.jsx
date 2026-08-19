"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive interfaces with component-driven architecture and modern React patterns.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Interface & Styling",
    description:
      "Translating visual systems into clean, responsive and consistent user interfaces.",
    technologies: [
      "Tailwind CSS",
      "CSS3",
      "Responsive UI",
      "Design Systems",
    ],
  },
  {
    title: "Motion & Interaction",
    description:
      "Creating purposeful interactions and transitions that make interfaces feel responsive.",
    technologies: [
      "Framer Motion",
      "GSAP",
      "ScrollTrigger",
      "Micro-interactions",
    ],
  },
];

const tools = [
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/react/ffffff",
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: "https://cdn.simpleicons.org/javascript/ffffff",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "https://cdn.simpleicons.org/typescript/ffffff",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "https://cdn.simpleicons.org/tailwindcss/ffffff",
  },
  {
    name: "Git",
    category: "Version Control",
    logo: "https://cdn.simpleicons.org/git/ffffff",
  },
  {
    name: "Vercel",
    category: "Deployment",
    logo: "https://cdn.simpleicons.org/vercel/ffffff",
  },
  {
    name: "Node.js",
    category: "Runtime",
    logo: "https://cdn.simpleicons.org/nodedotjs/ffffff",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.simpleicons.org/mongodb/ffffff",
  },
  {
    name: "Postman",
    category: "API Testing",
    logo: "https://cdn.simpleicons.org/postman/ffffff",
  },
];

const headingWords = [
  { text: "What", blue: false },
  { text: "I", blue: false },
  { text: "work", blue: true },
  { text: "with.", blue: false },
];

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const headingWord = {
  hidden: {
    opacity: 0,
    y: 45,
    rotateX: -70,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ToolItem({ tool }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-w-[150px]
        shrink-0
        flex-col
        items-center
        justify-center
        px-7
        py-8
        sm:min-w-[175px]
        sm:px-9
        lg:min-w-[190px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#4D8DFF]/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#4D8DFF]/20
        "
      />

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.08,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          sm:h-[70px]
          sm:w-[70px]
          lg:h-20
          lg:w-20
        "
      >
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          draggable="false"
          className="
            h-11
            w-11
            object-contain
            opacity-80
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:opacity-100
            sm:h-12
            sm:w-12
            lg:h-14
            lg:w-14
          "
        />
      </motion.div>

      <span
        className="
          relative
          z-10
          mt-4
          text-[10px]
          font-medium
          uppercase
          tracking-[0.12em]
          text-white/45
          transition-colors
          duration-300
          group-hover:text-white
          sm:text-[11px]
        "
      >
        {tool.name}
      </span>

      <span
        className="
          relative
          z-10
          mt-1
          text-[8px]
          uppercase
          tracking-[0.1em]
          text-white/20
          group-hover:text-[#4D8DFF]
        "
      >
        {tool.category}
      </span>
    </div>
  );
}

export default function Skills() {
  const marqueeTools = [...tools, ...tools];

  return (
    <section
      id="skills"
      className="
  relative
  overflow-hidden
  bg-[#050B16]
  px-6
  pt-0
  pb-20
  text-white
  sm:px-8
  sm:pt-2
  sm:pb-24
  lg:px-12
  lg:pt-0
  lg:pb-28
"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[-180px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#4D8DFF]/[0.045]
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.22, 0.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-220px]
            right-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#4D8DFF]/[0.035]
            blur-[150px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div
          className="
  mb-6
  flex
  flex-col
  justify-between
  gap-6
  border-b
  border-white/[0.07]
  pb-6
  md:flex-row
  md:items-end
"
        >
          <div>

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-7 bg-[#4D8DFF]" />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                Skills
              </span>
            </motion.div>

            <motion.h2
              variants={headingContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              style={{
                perspective: 1000,
              }}
              className="
  max-w-[800px]
  font-clash
  text-[2.5rem]
  font-semibold
  leading-[0.9]
  tracking-[-0.055em]
  sm:text-[3.2rem]
  md:text-[3.8rem]
  lg:text-[4.5rem]
  xl:text-[4.8rem]
"
            >
              {headingWords.map((word) => (
                <motion.span
                  key={word.text}
                  variants={headingWord}
                  className={`
                    mr-[0.15em]
                    inline-block
                    origin-bottom
                    ${
                      word.blue
                        ? "text-[#4D8DFF]"
                        : "text-white"
                    }
                  `}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="
                mt-6
                h-px
                w-20
                origin-left
                bg-[#4D8DFF]/70
              "
            />
          </div>

          <motion.p
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
              duration: 0.7,
            }}
            className="
              max-w-[320px]
              text-xs
              leading-6
              text-white/35
            "
          >
            A practical toolkit built around frontend
            engineering, interface design and thoughtful
            interaction.
          </motion.p>
        </div>

        {/* CORE SKILLS */}

        <div className="border-t border-white/[0.07]">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                group
                grid
                gap-7
                border-b
                border-white/[0.07]
                py-9
                md:grid-cols-[0.9fr_1.1fr]
                md:items-center
              "
            >
              <div>
                <h3
                  className="
                    font-clash
                    text-lg
                    font-medium
                    tracking-[-0.02em]
                    text-white/80
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-xl
                  "
                >
                  {skill.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[450px]
                    text-xs
                    leading-6
                    text-white/30
                  "
                >
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.08em]
                      text-white/25
                      transition-colors
                      duration-300
                      group-hover:text-[#4D8DFF]/75
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* TOOLKIT */}

        <div className="mt-8">

          <div
            className="
              mb-7
              flex
              items-end
              justify-between
              border-b
              border-white/[0.07]
              pb-5
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#4D8DFF]
                "
              >
                Toolkit
              </span>

              <h3
                className="
                  mt-2
                  font-clash
                  text-xl
                  font-medium
                  tracking-[-0.025em]
                  text-white/80
                  sm:text-2xl
                "
              >
                Tools I use.
              </h3>
            </div>

            <span
              className="
                hidden
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/20
                sm:block
              "
            >
              Everyday workflow
            </span>
          </div>

          {/* MARQUEE */}

          <div
            className="
              relative
              overflow-hidden
              border-y
              border-white/[0.07]
            "
          >

            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-20
                h-full
                w-16
                bg-gradient-to-r
                from-[#050B16]
                to-transparent
                sm:w-28
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-20
                h-full
                w-16
                bg-gradient-to-l
                from-[#050B16]
                to-transparent
                sm:w-28
              "
            />

            <motion.div
              className="flex w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeTools.map((tool, index) => (
                <ToolItem
                  key={`${tool.name}-${index}`}
                  tool={tool}
                />
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">
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

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-white/20
                "
              >
                Technologies
              </span>
            </div>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/15
              "
            >
              Moving continuously
            </span>
          </div>
        </div>

        {/* BOTTOM */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">

            <motion.span
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                border
                border-[#4D8DFF]/20
                bg-[#4D8DFF]/[0.04]
              "
            >
              <Sparkles
                size={12}
                strokeWidth={1.3}
                className="text-[#4D8DFF]"
              />
            </motion.span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-white/25
              "
            >
              Always learning. Always refining.
            </span>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Build something together

            <ArrowUpRight
              size={13}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#4D8DFF]
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}