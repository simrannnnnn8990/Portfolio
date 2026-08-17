

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "../sections/Contact";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const clamp = (value, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);

  /* ============================================================
     INITIAL PAGE REVEAL
     ============================================================ */

  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroFinished(true);
    }, 3600);

    return () => window.clearTimeout(timer);
  }, []);

  /* ============================================================
     SCROLL ENGINE
     ============================================================ */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const progress = clamp(window.scrollY / 420);

        setScrollProgress(progress);

        const sections = navLinks
          .filter((link) => link.label !== "Contact")
          .map((link) => document.querySelector(link.href))
          .filter(Boolean);

        let currentSection = "home";

        sections.forEach((section) => {
          if (!section) return;

          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.35) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection);

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     MOBILE BODY LOCK
     ============================================================ */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ============================================================
     LOGO TRANSFORMATION
     ============================================================ */

  const logoWidth = 520 - scrollProgress * 395;

  /*
   * Initial position:
   * slightly lower on the full intro screen.
   *
   * Final position:
   * moves upward and becomes smaller while scrolling.
   */
  const logoY = 50 - scrollProgress * 65;

  /* ============================================================
     INTRO TEXT SCROLL TRANSFORMATION
     ============================================================ */

  const introTextProgress = clamp(
    (scrollProgress - 0.15) / 0.43
  );

  const introTextOpacity = 1 - introTextProgress;

  const introTextY = -introTextProgress * 24;

  const introTextBlur = introTextProgress * 5;

  /* ============================================================
     NAVIGATION REVEAL
     ============================================================ */

  const navProgress = clamp(
    (scrollProgress - 0.55) / 0.30
  );

  const navOpacity = navProgress;

  const navX = (1 - navProgress) * 22;

  /* ============================================================
     AVAILABLE STATUS
     ============================================================ */

  const statusProgress = clamp(
    (scrollProgress - 0.68) / 0.22
  );

  const statusX = (1 - statusProgress) * 12;

  /* ============================================================
     FINAL LOGO ALIGNMENT
     ============================================================ */

  const finalLogoOffset = scrollProgress * 3;

  /* ============================================================
     HEADER TOP POSITION
     ============================================================ */

  const headerPaddingTop =
    34 - scrollProgress * 14;

  /* ============================================================
     INTRO SPACE
     ============================================================ */

  const introHeight =
    typeof window !== "undefined"
      ? window.innerHeight
      : 900;

  /* ============================================================
     NAVIGATION
     ============================================================ */

  const handleNavigation = (href) => {
    setIsMenuOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // const handleNavClick = (
  //   link: (typeof navLinks)[number]
  // ) => {
  //   if (link.label === "Contact") {
  //     setIsMenuOpen(false);
  //     setIsContactOpen(true);
  //     return;
  //   }

  //   handleNavigation(link.href);
  // };

  const handleNavClick = (link) => {
  if (link.label === "Contact") {
    setIsMenuOpen(false);
    setIsContactOpen(true);
    return;
  }

  handleNavigation(link.href);
};

  return (
    <>
      {/* ========================================================
          INITIAL PAGE REVEAL
          DARK PANEL MOVES FROM BOTTOM → TOP
      ======================================================== */}

      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: "-100%",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              y: {
                delay: 0.75,
                duration: 1.35,
                ease: [0.76, 0, 0.24, 1],
              },
              opacity: {
                duration: 0.35,
              },
            }}
            className="
              fixed
              inset-0
              z-[10000]
              overflow-hidden
              bg-[#050b16]
            "
          >
            {/* SUBTLE BLUE LIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#4D8DFF]/[0.045]
                blur-[120px]
              "
            />

            {/* SMALL LOADING LINE */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                bottom-10
                left-1/2
                h-px
                w-16
                -translate-x-1/2
                origin-center
                bg-[#4D8DFF]
              "
            />

            {/* INTRO MARK */}

            <div
              className="
                absolute
                bottom-10
                left-8
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/25
                lg:left-12
              "
            >
              Portfolio / 2026
            </div>

            <div
              className="
                absolute
                bottom-10
                right-8
                flex
                items-center
                gap-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/25
                lg:right-12
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#4D8DFF]
                "
              />

              Loading
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          INTRO VIEWPORT
      ======================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none w-full"
        style={{
          height: `${introHeight}px`,
        }}
      />

      {/* ========================================================
          FIXED NAVBAR / INTRO
      ======================================================== */}

      <motion.header
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          right-0
          top-0
          z-[9997]
        "
      >
        <div
          className="
            pointer-events-auto
            relative
            mx-auto
            flex
            w-full
            items-start
            px-6
            lg:px-12
          "
          style={{
            paddingTop: `${headerPaddingTop}px`,
          }}
        >
          {/* ====================================================
              LOGO SYSTEM
          ==================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-0
              z-30
              flex
              -translate-x-1/2
              flex-col
              items-center
            "
            animate={{
              width: logoWidth,
              x:
                scrollProgress === 0
                  ? "-50%"
                  : `calc(-50vw + ${
                      24 + scrollProgress * 24
                    }px)`,
              y: logoY + finalLogoOffset,
            }}
            transition={{
              duration: 0.08,
              ease: "linear",
            }}
          >
            {/* ==================================================
                LOGO
            ================================================== */}

            <motion.button
              type="button"
              onClick={() =>
                handleNavigation("#home")
              }
              aria-label="Go to homepage"
              className="
                group
                relative
                block
                w-full
                overflow-visible
              "
              initial={{
                opacity: 0,
                scale: 0.88,
                filter: "blur(24px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.5,
                delay: 1.85,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/Simran LOGO.png"
                alt="Simran Gautam"
                draggable="false"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                  transition-opacity
                  duration-300
                  group-hover:opacity-80
                "
              />
            </motion.button>

            {/* ==================================================
                NAME
            ================================================== */}

            <motion.div
              className="
                -mt-16
                flex
                items-center
                justify-center
                whitespace-nowrap
                overflow-hidden
                text-center
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: introTextOpacity,
              }}
              transition={{
                duration: 0.08,
                ease: "linear",
              }}
              style={{
                pointerEvents:
                  introTextOpacity > 0.05
                    ? "auto"
                    : "none",
              }}
            >
              {/* SIMRAN */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: -70,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  delay: 2.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[clamp(1.5rem,3vw,2.7rem)]
                  font-light
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Simran
              </motion.span>

              <span className="w-[0.35em]" />

              {/* GAUTAM */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 70,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  delay: 2.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[clamp(1.5rem,3vw,2.7rem)]
                  font-light
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Gautam
              </motion.span>
            </motion.div>

            {/* ==================================================
                FRONTEND & CREATIVE DEVELOPER
            ================================================== */}

            <motion.div
              animate={{
                opacity: introTextOpacity,
                y: introTextY,
                filter: `blur(${introTextBlur}px)`,
              }}
              transition={{
                duration: 0.08,
                ease: "linear",
              }}
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-3
                whitespace-nowrap
              "
              style={{
                pointerEvents:
                  introTextOpacity > 0.05
                    ? "auto"
                    : "none",
              }}
            >
              <motion.span
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 3.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  h-px
                  w-10
                  shrink-0
                  bg-[#4D8DFF]
                "
              />

              <motion.span
                initial={{
                  opacity: 0,
                  y: 12,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: 3.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/45
                  lg:text-[10px]
                "
              >
                Frontend &amp; Creative Developer
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 3.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  h-px
                  w-10
                  shrink-0
                  bg-[#4D8DFF]
                "
              />
            </motion.div>
          </motion.div>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <motion.nav
            aria-label="Main navigation"
            className="
              ml-auto
              hidden
              items-center
              gap-7
              md:flex
              lg:gap-10
            "
            style={{
              opacity: navOpacity,
              transform: `translate3d(${navX}px, 0, 0)`,
              pointerEvents:
                navOpacity > 0.05
                  ? "auto"
                  : "none",
            }}
          >
            {navLinks.map((link, index) => {
              const isContact =
                link.label === "Contact";

              const isActive =
                !isContact &&
                activeSection ===
                  link.href.slice(1);

              return (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() =>
                    handleNavClick(link)
                  }
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: navOpacity,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    py-2
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                  "
                >
                  <span
                    className={`
                      h-[3px]
                      w-[3px]
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#4D8DFF] opacity-100"
                          : "bg-white opacity-0 group-hover:opacity-40"
                      }
                    `}
                  />

                  <span
                    className={`
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/45 group-hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </span>

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-full
                      origin-left
                      scale-x-0
                      bg-[#4D8DFF]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </motion.button>
              );
            })}
          </motion.nav>

          {/* ====================================================
              AVAILABLE
          ==================================================== */}

          <motion.div
            className="
              ml-8
              hidden
              self-center
              items-center
              gap-2
              lg:flex
            "
            style={{
              opacity: statusProgress,
              transform: `translate3d(${statusX}px, 0, 0)`,
              pointerEvents:
                statusProgress > 0.05
                  ? "auto"
                  : "none",
            }}
          >
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
                text-[9px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/35
              "
            >
              Available
            </span>
          </motion.div>

          {/* ====================================================
              MOBILE MENU BUTTON
          ==================================================== */}

          <motion.button
            type="button"
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
            aria-label={
              isMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMenuOpen}
            className="
              ml-auto
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.1]
              bg-[#050b16]/60
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#4D8DFF]/40
              md:hidden
            "
          >
            <div className="flex w-4 flex-col gap-[5px]">
              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: 45,
                        y: 5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
                className="
                  h-px
                  w-full
                  origin-center
                  bg-white
                "
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        opacity: 0,
                        x: 5,
                      }
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                transition={{
                  duration: 0.2,
                }}
                className="
                  h-px
                  w-full
                  bg-white
                "
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: -45,
                        y: -5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
                className="
                  h-px
                  w-full
                  origin-center
                  bg-white
                "
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* ========================================================
          MOBILE NAVIGATION
      ======================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-0
              z-[9996]
              flex
              items-center
              justify-center
              bg-[#050b16]
              md:hidden
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "48px 48px",
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#4D8DFF]/[0.07]
                blur-[100px]
              "
            />

            <div className="relative w-full px-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-12"
              >
                <img
                  src="/Simran LOGO.png"
                  alt="Simran Gautam"
                  className="
                    h-auto
                    w-[210px]
                    object-contain
                  "
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="
                  mb-8
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#4D8DFF]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  Navigation
                </span>
              </motion.div>

              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isContact =
                    link.label === "Contact";

                  const isActive =
                    !isContact &&
                    activeSection ===
                      link.href.slice(1);

                  return (
                    <motion.button
                      key={link.href}
                      type="button"
                      onClick={() =>
                        handleNavClick(link)
                      }
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.12 + index * 0.07,
                        duration: 0.45,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        border-b
                        border-white/[0.06]
                        py-5
                        text-left
                      "
                    >
                      <span
                        className={`
                          text-[10px]
                          tracking-[0.12em]
                          transition-colors
                          ${
                            isActive
                              ? "text-[#4D8DFF]"
                              : "text-white/25"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`
                          font-clash
                          text-[clamp(2rem,9vw,3.5rem)]
                          font-medium
                          tracking-[-0.04em]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "translate-x-2 text-white"
                              : "text-white/55 group-hover:translate-x-2 group-hover:text-white"
                          }
                        `}
                      >
                        {link.label}
                      </span>

                      <span
                        className={`
                          ml-auto
                          text-lg
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "translate-x-0 text-[#4D8DFF] opacity-100"
                              : "-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        ↗
                      </span>
                    </motion.button>
                  );
                })}
              </nav>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-white/25
                  "
                >
                  Frontend Developer
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-white/35
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#4D8DFF]
                    "
                  />

                  Lucknow, India
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          CONTACT DRAWER
      ======================================================== */}

      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}