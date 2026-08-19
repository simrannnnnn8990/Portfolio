'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Sparkles,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

/*
|--------------------------------------------------------------------------
| PROJECT IMAGES
|--------------------------------------------------------------------------
| Replace these filenames with your actual images inside:
|
| public/project/
|
| Example:
| ursSkill1.png
| ursSkill2.png
| ursSkill3.png
| ursSkill4.png
|
*/

const projectImages = [
  {
    src: '/project/ursSkill1.png',
    alt: 'URS Skill website homepage',
    label: 'Homepage',
  },
  {
    src: '/project/ursSkill2.png',
    alt: 'URS Skill website interface',
    label: 'Interface',
  },
  {
    src: '/project/ursSkill3.png',
    alt: 'URS Skill responsive interface',
    label: 'Responsive Experience',
  },
  {
    src: '/project/ursSkill4.png',
    alt: 'URS Skill website section',
    label: 'Content Experience',
  },
]

const technologies = [
  'Next.js',
  'React.js',
  'JavaScript',
  'Tailwind CSS',
  'GSAP',
  'Responsive Design',
]

const contributions = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Developed the interface with reusable React components and a structured frontend architecture.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Responsive UI',
    description:
      'Built the experience to adapt across desktop, tablet and mobile screen sizes.',
    icon: MonitorSmartphone,
  },
  {
    number: '03',
    title: 'Motion & Interaction',
    description:
      'Added purposeful transitions and scroll-based interactions to improve the overall experience.',
    icon: MousePointer2,
  },
  {
    number: '04',
    title: 'Visual Implementation',
    description:
      'Translated the visual direction into a consistent interface with attention to spacing, hierarchy and detail.',
    icon: Sparkles,
  },
]

export default function URSSkillCaseStudy() {
  const { scrollYProgress } = useScroll()

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, -70]
  )

  return (
    <main className="min-h-screen overflow-hidden bg-[#070D17] text-white">

      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div
          className="
            absolute
            left-[-15%]
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-18%]
            top-[38%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#60A5FA]/[0.025]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            left-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#3B82F6]/[0.02]
            blur-[150px]
          "
        />

      </div>


      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <header className="relative z-20 border-b border-white/[0.06]">

        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            items-center
            justify-between
            px-6
            py-5
            sm:px-8
            lg:px-12
          "
        >

          <a
            href="/#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >

            <ArrowLeft
              size={13}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to work

          </a>


          <div
            className="
              hidden
              items-center
              gap-3
              sm:flex
            "
          >

            <span className="h-1 w-1 rounded-full bg-[#60A5FA]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/20
              "
            >
              Case Study / 02
            </span>

          </div>


          <a
            href="https://www.ursskill.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#93C5FD]/65
              transition-colors
              duration-300
              hover:text-[#BFDBFE]
            "
          >

            Live Website

            <ArrowUpRight
              size={13}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </a>

        </div>

      </header>


      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative z-10 px-6 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">

        <div className="mx-auto max-w-[1500px]">

          {/* HERO INTRO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              ease,
            }}
          >

            <div className="mb-7 flex items-center gap-3">

              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }}
                className="h-px bg-[#60A5FA]"
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-[#93C5FD]/50
                "
              >
                Corporate Website / Frontend
              </span>

            </div>


            <h1
              className="
                max-w-[1100px]
                font-clash
                text-[4.5rem]
                font-semibold
                leading-[0.82]
                tracking-[-0.065em]
                sm:text-[6.5rem]
                md:text-[7.5rem]
                lg:text-[9.5rem]
              "
            >

              URS
              <span className="text-white/[0.18]">
                {' '}Skill.
              </span>

            </h1>


            <div
              className="
                mt-10
                grid
                gap-10
                lg:grid-cols-[1fr_0.65fr]
                    "
            >

              <div>

                <p
                  className="
                    max-w-[680px]
                    text-sm
                    leading-7
                    text-white/40
                    sm:text-base
                    sm:leading-8
                  "
                >
                  A responsive corporate website focused on clear
                  information hierarchy, reusable frontend architecture,
                  responsive interfaces and purposeful motion.
                </p>


                <div className="mt-7 flex flex-wrap gap-2">

                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        border
                        border-white/[0.07]
                        bg-white/[0.018]
                        px-3
                        py-2
                        text-[8px]
                        uppercase
                        tracking-[0.08em]
                        text-white/30
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>


              {/* PROJECT META */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-8
                  gap-y-7
                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >

                <Meta
                  label="Role"
                  value="Frontend Developer"
                />

                <Meta
                  label="Type"
                  value="Production Website"
                />

                <Meta
                  label="Stack"
                  value="Next.js + React"
                />

                <Meta
                  label="Focus"
                  value="UI / Motion"
                />

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              HERO IMAGE
          ====================================================== */}

          <motion.div
            style={{ y: heroImageY }}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.25,
              delay: 0.3,
              ease,
            }}
            className="
              relative
              mt-16
              lg:mt-24
            "
          >

            <div
              className="
                absolute
                -inset-6
                bg-[#3B82F6]/[0.035]
                blur-[60px]
              "
            />

            <ImageFrame
              image="/project/ursSkill1.png"
              alt="URS Skill website homepage"
              label="01 / Homepage"
              large
            />

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
          px-6
          py-24
          sm:px-8
          lg:px-12
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            gap-16
            lg:grid-cols-[0.7fr_1fr]
          "
        >

          <SectionHeading
            number="01"
            eyebrow="Overview"
            title={
              <>
                Building a clearer
                <br />
                digital experience.
              </>
            }
          />


          <div>

            <p
              className="
                text-sm
                leading-7
                text-white/40
                sm:text-base
                sm:leading-8
              "
            >
              URS Skill was approached as a responsive digital
              experience where visual hierarchy, accessibility,
              responsiveness and interaction needed to work together
              rather than compete with each other.
            </p>


            <p
              className="
                mt-6
                text-sm
                leading-7
                text-white/25
                sm:leading-8
              "
            >
              The implementation focused on creating a clean,
              maintainable frontend while keeping the interface
              visually engaging across different screen sizes.
            </p>


            <div
              className="
                mt-10
                grid
                grid-cols-2
                border-l
                border-t
                border-white/[0.07]
                sm:grid-cols-4
              "
            >

              {[
                ['Frontend', 'Next.js'],
                ['UI', 'React.js'],
                ['Styling', 'Tailwind'],
                ['Motion', 'GSAP'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    border-b
                    border-r
                    border-white/[0.07]
                    bg-[#070D17]
                    p-5
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      text-white/20
                    "
                  >
                    {label}
                  </span>

                  <p className="mt-2 text-xs text-white/55">
                    {value}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          APPROACH
      ========================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
          px-6
          py-24
          sm:px-8
          lg:px-12
          lg:py-32
        "
      >

        <div className="mx-auto max-w-[1200px]">

          <SectionHeading
            number="02"
            eyebrow="Approach"
            title={
              <>
                Structure first.
                <br />
                Detail second.
              </>
            }
          />


          <div
            className="
              mt-16
              grid
              gap-px
              border
              border-white/[0.07]
              bg-white/[0.07]
              md:grid-cols-3
            "
          >

            <ApproachCard
              number="01"
              title="Information hierarchy"
              text="The interface was structured around clear sections and visual hierarchy so important content remains easy to scan."
            />

            <ApproachCard
              number="02"
              title="Reusable UI"
              text="Reusable components and consistent spacing patterns keep the interface maintainable and visually consistent."
            />

            <ApproachCard
              number="03"
              title="Purposeful motion"
              text="Motion was used to support navigation, feedback and visual continuity instead of overwhelming the content."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          INTERFACE SHOWCASE
      ========================================================== */}

      <section
        className="
          relative
          z-10
          px-6
          py-24
          sm:px-8
          lg:px-12
          lg:py-32
        "
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-14 max-w-[700px]">

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#60A5FA]/70
              "
            >
              03 — Interface
            </span>

            <h2
              className="
                mt-5
                font-clash
                text-4xl
                font-medium
                leading-[0.95]
                tracking-[-0.045em]
                text-white/90
                sm:text-6xl
              "
            >
              Designed around
              <span className="text-white/25">
                {' '}clarity.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[560px]
                text-sm
                leading-7
                text-white/30
              "
            >
              A closer look at the visual system, layouts and
              responsive interface developed for the project.
            </p>

          </div>


          {/* =====================================================
              IMAGE GALLERY
          ====================================================== */}

          <div className="space-y-6">

            {/* MAIN IMAGE */}

            <GalleryImage
              image={projectImages[0]}
              large
            />


            {/* TWO IMAGE ROW */}

            <div className="grid gap-6 md:grid-cols-2">

              <GalleryImage
                image={projectImages[1]}
              />

              <GalleryImage
                image={projectImages[2]}
              />

            </div>


            {/* FOURTH IMAGE */}

            <GalleryImage
              image={projectImages[3]}
              large
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTRIBUTION
      ========================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
          px-6
          py-24
          sm:px-8
          lg:px-12
          lg:py-32
        "
      >

        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[650px]">

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#60A5FA]/70
              "
            >
              04 — My contribution
            </span>

            <h2
              className="
                mt-5
                font-clash
                text-4xl
                font-medium
                tracking-[-0.045em]
                text-white/90
                sm:text-5xl
              "
            >
              From structure
              to interaction.
            </h2>

          </div>


          <div
            className="
              mt-14
              grid
              border-l
              border-t
              border-white/[0.07]
              sm:grid-cols-2
            "
          >

            {contributions.map((item, index) => {

              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
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
                    delay: index * 0.08,
                    duration: 0.7,
                    ease,
                  }}
                  className="
                    group
                    border-b
                    border-r
                    border-white/[0.07]
                    p-7
                    transition-colors
                    duration-500
                    hover:bg-[#60A5FA]/[0.025]
                    lg:p-9
                  "
                >

                  <div className="flex items-start justify-between">

                    <span
                      className="
                        font-mono
                        text-[9px]
                        text-[#60A5FA]/45
                      "
                    >
                      {item.number}
                    </span>

                    <Icon
                      size={17}
                      strokeWidth={1.2}
                      className="
                        text-white/15
                        transition-colors
                        duration-300
                        group-hover:text-[#60A5FA]/70
                      "
                    />

                  </div>


                  <h3
                    className="
                      mt-12
                      font-clash
                      text-xl
                      font-medium
                      tracking-[-0.025em]
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      max-w-[390px]
                      text-xs
                      leading-6
                      text-white/25
                    "
                  >
                    {item.description}
                  </p>

                </motion.div>
              )

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          RESPONSIVE DESIGN
      ========================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
          px-6
          py-24
          sm:px-8
          lg:px-12
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            items-center
            gap-14
            lg:grid-cols-[0.65fr_1fr]
          "
        >

          <SectionHeading
            number="05"
            eyebrow="Responsive"
            title={
              <>
                One system.
                <br />
                Different screens.
              </>
            }
          />


          <div>

            <p
              className="
                text-sm
                leading-7
                text-white/35
                sm:text-base
                sm:leading-8
              "
            >
              The interface was implemented with responsive behaviour
              in mind, allowing layouts, typography, spacing and
              interactions to adapt naturally across screen sizes.
            </p>


            <div className="mt-8 space-y-3">

              {[
                'Desktop-first visual hierarchy',
                'Flexible responsive layouts',
                'Touch-friendly interaction',
                'Consistent component behaviour',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-white/[0.06]
                    pb-3
                  "
                >

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      border
                      border-[#60A5FA]/20
                      bg-[#60A5FA]/[0.04]
                    "
                  >
                    <Check
                      size={10}
                      strokeWidth={1.5}
                      className="text-[#60A5FA]"
                    />
                  </span>

                  <span className="text-xs text-white/35">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUTCOME
      ========================================================== */}

      <section
        className="
          relative
          z-10
          px-6
          pb-32
          pt-24
          sm:px-8
          lg:px-12
          lg:pb-44
          lg:pt-32
        "
      >

        <div className="mx-auto max-w-[1200px]">

          <div
            className="
              border-t
              border-white/[0.08]
              pt-10
            "
          >

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#60A5FA]/70
              "
            >
              06 — Outcome
            </span>


            <h2
              className="
                mt-7
                max-w-[950px]
                font-clash
                text-4xl
                font-medium
                leading-[0.95]
                tracking-[-0.05em]
                text-white/90
                sm:text-6xl
                lg:text-7xl
              "
            >
              A responsive,
              interactive experience
              <span className="text-white/25">
                {' '}built for the real web.
              </span>
            </h2>


            <p
              className="
                mt-8
                max-w-[650px]
                text-sm
                leading-7
                text-white/30
                sm:text-base
                sm:leading-8
              "
            >
              The final implementation brings together structured
              frontend architecture, responsive UI and motion into
              one cohesive digital experience.
            </p>


            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-3">

              <a
                href="https://www.ursskill.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[#60A5FA]/30
                  bg-[#60A5FA]/[0.045]
                  px-5
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#93C5FD]/75
                  transition-all
                  duration-300
                  hover:border-[#60A5FA]/60
                  hover:bg-[#60A5FA]/[0.09]
                  hover:text-[#BFDBFE]
                "
              >

                Visit live website

                <ExternalLink
                  size={13}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />

              </a>


              <a
                href="/#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/[0.08]
                  px-5
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:border-white/[0.18]
                  hover:text-white/70
                "
              >

                More projects

                <ArrowLeft
                  size={13}
                  strokeWidth={1.2}
                  className="
                    rotate-180
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER LINE
      ========================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.06]
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            items-center
            justify-between
            px-6
            py-5
            sm:px-8
            lg:px-12
          "
        >

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/15
            "
          >
            URS Skill / Case Study
          </span>


          <span
            className="
              flex
              items-center
              gap-2
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/15
            "
          >

            <span className="h-1 w-1 rounded-full bg-[#60A5FA]" />

            Frontend Development

          </span>

        </div>

      </div>

    </main>
  )
}


/* ==============================================================
   SMALL COMPONENTS
============================================================== */

function Meta({ label, value }) {
  return (
    <div>

      <span
        className="
          text-[8px]
          uppercase
          tracking-[0.15em]
          text-white/20
        "
      >
        {label}
      </span>

      <p className="mt-2 text-xs text-white/55">
        {value}
      </p>

    </div>
  )
}


function SectionHeading({
  number,
  eyebrow,
  title,
}) {
  return (
    <div>

      <div className="flex items-center gap-3">

        <span
          className="
            font-mono
            text-[9px]
            text-[#60A5FA]/55
          "
        >
          {number}
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#60A5FA]/50
          "
        />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          {eyebrow}
        </span>

      </div>


      <h2
        className="
          mt-5
          font-clash
          text-4xl
          font-medium
          leading-[0.95]
          tracking-[-0.045em]
          text-white/90
          sm:text-5xl
        "
      >
        {title}
      </h2>

    </div>
  )
}


function ApproachCard({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.35,
        ease,
      }}
      className="
        group
        bg-[#070D17]
        p-7
        lg:p-9
      "
    >

      <span
        className="
          font-mono
          text-[9px]
          text-[#60A5FA]/45
        "
      >
        {number}
      </span>


      <h3
        className="
          mt-12
          font-clash
          text-xl
          font-medium
          tracking-[-0.025em]
          text-white/65
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-3
          text-xs
          leading-6
          text-white/25
        "
      >
        {text}
      </p>

    </motion.div>
  )
}


function ImageFrame({
  image,
  alt,
  label,
  large = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.5,
        ease,
      }}
      className="group relative"
    >

      {/* CORNERS */}

      <span
        className="
          absolute
          -left-2
          -top-2
          z-20
          h-5
          w-5
          border-l
          border-t
          border-[#60A5FA]/50
        "
      />

      <span
        className="
          absolute
          -right-2
          -top-2
          z-20
          h-5
          w-5
          border-r
          border-t
          border-[#60A5FA]/50
        "
      />

      <span
        className="
          absolute
          -bottom-2
          -left-2
          z-20
          h-5
          w-5
          border-b
          border-l
          border-[#60A5FA]/50
        "
      />

      <span
        className="
          absolute
          -bottom-2
          -right-2
          z-20
          h-5
          w-5
          border-b
          border-r
          border-[#60A5FA]/50
        "
      />


      {/* IMAGE */}

      <div
        className={`
          relative
          overflow-hidden
          border
          border-white/[0.08]
          bg-[#091321]
          ${
            large
              ? 'aspect-[16/9]'
              : 'aspect-[4/3]'
          }
        `}
      >

        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1.2s]
            ease-out
            group-hover:scale-[1.025]
          "
        />


        {/* OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#070D17]/60
            via-transparent
            to-transparent
            opacity-70
          "
        />


        {/* LABEL */}

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              bg-[#070D17]/75
              px-3
              py-2
              text-[8px]
              uppercase
              tracking-[0.15em]
              text-white/45
              backdrop-blur-md
            "
          >
            {label}
          </span>


          <ArrowUpRight
            size={15}
            strokeWidth={1.2}
            className="
              text-white/25
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#93C5FD]
            "
          />

        </div>

      </div>

    </motion.div>
  )
}


function GalleryImage({
  image,
  large = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
    >

      <ImageFrame
        image={image.src}
        alt={image.alt}
        label={image.label}
        large={large}
      />

    </motion.div>
  )
}