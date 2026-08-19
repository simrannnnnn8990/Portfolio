"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const journey = [
  {
    id: "01",
    label: "Education",
    title: "Master's in Computer Science",
    subtitle: "Maharishi University of Information Technology",
    location: "Lucknow",
    description:
      "Building a strong foundation in computer science while developing practical skills in modern software and web development.",
    focus: [
      "Computer Science Fundamentals",
      "Software Development",
      "Web Technologies",
      "Problem Solving",
    ],
    technologies: [
      "Computer Science",
      "Web Development",
      "Programming",
    ],
  },
  {
    id: "02",
    label: "Frontend",
    title: "Frontend Development",
    subtitle: "Learning by building",
    description:
      "Developing responsive and reusable interfaces while strengthening my understanding of modern frontend development and user-focused design.",
    focus: [
      "Responsive Interfaces",
      "Reusable Components",
      "Modern JavaScript",
      "Clean UI Implementation",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "03",
    label: "Projects",
    title: "Project-Based Learning",
    subtitle: "Turning ideas into working products",
    description:
      "Applying what I learn through practical projects, focusing on real-world interfaces, component architecture, API integration and maintainable code.",
    focus: [
      "Real-world UI Development",
      "API Integration",
      "Component Architecture",
      "Problem Solving",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "04",
    label: "Exploring",
    title: "Full-Stack Development",
    subtitle: "Growing beyond the frontend",
    description:
      "Currently expanding my knowledge beyond frontend development by exploring backend technologies, databases and complete application architecture.",
    focus: [
      "Backend Fundamentals",
      "REST APIs",
      "Database Concepts",
      "Frontend–Backend Integration",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
    ],
  },
];

const currentFocus = [
  "React.js & Next.js",
  "Modern UI Development",
  "Full-Stack Development",
  "Performance & Accessibility",
];

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#050B16]
        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-18%]
            top-[18%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#4D8DFF]/[0.02]
            blur-[120px]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-12%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#4D8DFF]/[0.018]
            blur-[130px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[160px]
          "
        />
      </div>

      <div className="relative z-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mx-auto
            flex
            min-h-[70vh]
            max-w-[1500px]
            flex-col
            justify-center
            px-5
            py-16
            sm:min-h-[62vh]
            sm:px-8
            sm:py-20
            lg:min-h-[62vh]
            lg:px-12
            lg:py-16
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
          >

            {/* LEFT */}

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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-6 bg-[#4D8DFF] sm:w-7" />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[#4D8DFF]/70
                    sm:text-[9px]
                    sm:tracking-[0.22em]
                  "
                >
                  My Journey
                </span>
              </motion.div>

              {/* MAIN HEADING */}

              <div className="overflow-hidden">
                <motion.h2
                  initial={{
                    y: "100%",
                  }}
                  whileInView={{
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    font-clash
                    text-[clamp(2.5rem,11vw,4.8rem)]
                    font-semibold
                    leading-[0.86]
                    tracking-[-0.055em]
                    text-white
                    sm:text-[clamp(3rem,7vw,4.8rem)]
                  "
                >
                  Learning.
                </motion.h2>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{
                    y: "100%",
                  }}
                  whileInView={{
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    font-clash
                    text-[clamp(2.5rem,11vw,4.8rem)]
                    font-semibold
                    leading-[0.86]
                    tracking-[-0.055em]
                    text-[#4D8DFF]
                    sm:text-[clamp(3rem,7vw,4.8rem)]
                  "
                >
                  Building.
                </motion.h2>
              </div>
            </div>

            {/* RIGHT */}

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
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                max-w-[390px]
                lg:justify-self-end
              "
            >
              <p
                className="
                  text-[11px]
                  leading-6
                  text-white/40
                  sm:text-xs
                  sm:leading-7
                "
              >
                I&apos;m an entry-level developer focused on
                frontend development, building practical
                projects and continuously expanding my skills
                towards full-stack development.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/25
                  sm:mt-6
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#4D8DFF]
                    shadow-[0_0_14px_rgba(77,141,255,0.5)]
                  "
                />

                Scroll to explore
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            JOURNEY
        ================================================= */}

        <div className="relative">
          {journey.map((item, index) => (
            <JourneyItem
              key={item.id}
              item={item}
              index={index}
              progress={smoothProgress}
              total={journey.length}
            />
          ))}
        </div>

        {/* =================================================
            CURRENT FOCUS
        ================================================= */}

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-12
          "
        >
          <motion.div
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
              duration: 0.8,
            }}
            className="
              border-t
              border-white/[0.07]
              pt-7
              sm:pt-9
            "
          >
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_1.5fr]
                lg:gap-10
              "
            >

              {/* LEFT */}

              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#4D8DFF]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-[#4D8DFF]/75
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Currently Learning
                  </span>
                </div>

                <h3
                  className="
                    mt-4
                    font-clash
                    text-[clamp(1.8rem,8vw,3rem)]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.045em]
                  "
                >
                  Growing one project
                  <br />

                  <span className="text-[#4D8DFF]">
                    at a time.
                  </span>
                </h3>
              </div>

              {/* RIGHT */}

              <div>
                <p
                  className="
                    max-w-[620px]
                    text-[11px]
                    leading-6
                    text-white/35
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  My current focus is strengthening my frontend
                  skills while gradually moving towards full-stack
                  development. I&apos;m continuously learning,
                  experimenting and turning that knowledge into
                  practical projects.
                </p>

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                    sm:mt-6
                  "
                >
                  {currentFocus.map((focus) => (
                    <span
                      key={focus}
                      className="
                        border
                        border-white/[0.08]
                        px-2.5
                        py-2
                        text-[8px]
                        uppercase
                        tracking-[0.07em]
                        text-white/35
                        transition-all
                        duration-300
                        hover:border-[#4D8DFF]/35
                        hover:text-[#4D8DFF]
                        sm:px-3
                        sm:text-[9px]
                      "
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM */}

          <div
            className="
              mt-10
              flex
              flex-col
              justify-between
              gap-4
              border-t
              border-white/[0.05]
              pt-6
              sm:mt-14
              md:flex-row
              md:items-center
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.14em]
                text-white/20
                sm:text-[9px]
                sm:tracking-[0.16em]
              "
            >
              Always learning. Always building.
            </p>

            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#4D8DFF]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-[#4D8DFF]/60
                  sm:text-[9px]
                  sm:tracking-[0.14em]
                "
              >
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   JOURNEY ITEM
========================================================= */

function JourneyItem({
  item,
  index,
  progress,
  total,
}) {
  const segmentStart = index / total;
  const segmentEnd = (index + 1) / total;

  const enterStart = Math.max(
    0,
    segmentStart - 0.08
  );

  const center =
    segmentStart + 0.5 / total;

  const exitEnd = Math.min(
    1,
    segmentEnd + 0.08
  );

  const scale = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [0.88, 1, 0.88]
  );

  const opacity = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [0.2, 1, 0.2]
  );

  const blurValue = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [4, 0, 4]
  );

  const y = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [50, 0, -50]
  );

  const titleX = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [40, 0, -40]
  );

  const numberOpacity = useTransform(
    progress,
    [
      enterStart,
      center,
      exitEnd,
    ],
    [0.2, 1, 0.2]
  );

  const filter = useTransform(
    blurValue,
    (value) => `blur(${value}px)`
  );

  return (
    <div
      className="
        relative
        h-[100svh]
        min-h-[680px]
        sm:h-[82vh]
        sm:min-h-[600px]
      "
    >
      <div
        className="
          sticky
          top-0
          flex
          h-[100svh]
          min-h-[680px]
          items-center
          overflow-hidden
          sm:h-screen
          sm:min-h-[600px]
        "
      >

        {/* CENTER LINE */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#4D8DFF]/[0.06]
            to-transparent
          "
        />

        <motion.div
          style={{
            scale,
            opacity,
            y,
            filter,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* TOP META */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              sm:mb-6
            "
          >
            <motion.div
              style={{
                opacity: numberOpacity,
              }}
              className="
                flex
                items-center
                gap-2.5
                sm:gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  text-[#4D8DFF]
                  sm:text-[10px]
                "
              >
                [{item.id}]
              </span>

              <span
                className="
                  h-px
                  w-5
                  bg-[#4D8DFF]/35
                  sm:w-7
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/30
                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                {item.label}
              </span>
            </motion.div>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/15
                sm:block
              "
            >
              0{index + 1} / 0{total}
            </span>
          </div>

          {/* JOURNEY HEADING */}

          <motion.div
            style={{
              x: titleX,
            }}
            className="relative"
          >
            <h3
              className="
                max-w-[900px]
                font-clash
                text-[clamp(2rem,9vw,4.3rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.055em]
                text-white
                sm:text-[clamp(2.4rem,6vw,4.3rem)]
              "
            >
              {item.title}
            </h3>
          </motion.div>

          {/* SUBTITLE + DESCRIPTION */}

          <div
            className="
              mt-5
              grid
              gap-5
              sm:mt-6
              sm:gap-7
              lg:grid-cols-[1fr_1fr]
            "
          >

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.13em]
                  text-[#4D8DFF]/75
                  sm:text-[10px]
                  sm:tracking-[0.16em]
                "
              >
                {item.subtitle}
              </p>

              {item.location && (
                <p
                  className="
                    mt-2
                    text-[9px]
                    text-white/20
                    sm:text-[10px]
                  "
                >
                  {item.location}
                </p>
              )}
            </div>

            <div>
              <p
                className="
                  max-w-[540px]
                  text-[11px]
                  leading-6
                  text-white/35
                  sm:text-sm
                  sm:leading-7
                "
              >
                {item.description}
              </p>
            </div>
          </div>

          {/* DETAILS */}

          <div
            className="
              mt-6
              grid
              gap-6
              border-t
              border-white/[0.07]
              pt-5
              sm:mt-7
              sm:gap-8
              sm:pt-6
              md:grid-cols-[1fr_1fr]
            "
          >

            {/* FOCUS */}

            <div>
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-[#4D8DFF]/70
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                What I&apos;m Developing
              </span>

              <div
                className="
                  mt-3
                  grid
                  gap-2
                  sm:mt-4
                  sm:grid-cols-2
                "
              >
                {item.focus.map((focus) => (
                  <div
                    key={focus}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[10px]
                      leading-5
                      text-white/30
                      sm:gap-3
                      sm:text-xs
                    "
                  >
                    <span
                      className="
                        h-px
                        w-4
                        shrink-0
                        bg-[#4D8DFF]/45
                        sm:w-5
                      "
                    />

                    {focus}
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}

            <div>
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-[#4D8DFF]/70
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                Technologies
              </span>

              <div
                className="
                  mt-3
                  flex
                  flex-wrap
                  gap-1.5
                  sm:mt-4
                  sm:gap-2
                "
              >
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      border
                      border-white/[0.08]
                      bg-white/[0.015]
                      px-2.5
                      py-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.06em]
                      text-white/30
                      transition-colors
                      duration-300
                      hover:border-[#4D8DFF]/35
                      hover:text-[#4D8DFF]
                      sm:px-3
                      sm:py-2
                      sm:text-[9px]
                      sm:tracking-[0.08em]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM */}

          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              sm:mt-7
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#4D8DFF]
                shadow-[0_0_12px_rgba(77,141,255,0.6)]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-[#4D8DFF]/55
                sm:text-[9px]
                sm:tracking-[0.18em]
              "
            >
              Keep scrolling
            </span>
          </div>

        </motion.div>
      </div>
    </div>
  );
}