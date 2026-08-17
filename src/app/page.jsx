// // src/app/page.jsx
// "use client";

// import { useEffect, useState } from "react";

// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import Loader from "@/components/sections/Loader";
// import Hero from "@/components/sections/Hero";
// import About from "@/components/sections/About";
// import Skills from "@/components/sections/Skills";
// import Projects from "@/components/sections/Projects";
// import Services from "@/components/sections/Services";
// import Experience from "@/components/sections/Experience";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);

//   /* ============================================================
//      FORCE PAGE TO START FROM TOP
//      ============================================================ */

//   useEffect(() => {
//     // Prevent browser from restoring the previous scroll position
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }

//     // Immediately move to top when page loads
//     window.scrollTo(0, 0);

//     return () => {
//       if ("scrollRestoration" in window.history) {
//         window.history.scrollRestoration = "auto";
//       }
//     };
//   }, []);

//   /* ============================================================
//      KEEP PAGE AT TOP WHILE LOADER IS RUNNING
//      ============================================================ */

//   useEffect(() => {
//     if (!isLoading) return;

//     window.scrollTo(0, 0);

//     const handleScroll = () => {
//       window.scrollTo(0, 0);
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isLoading]);

//   /* ============================================================
//      LOADER COMPLETE
//      ============================================================ */

//   const handleLoaderComplete = () => {
//     // Make absolutely sure the homepage starts from the top
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });

//     setIsLoading(false);

//     // One extra frame prevents browser/layout restoration
//     // from putting the page back at the old position.
//     requestAnimationFrame(() => {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "instant",
//       });
//     });
//   };

//   return (
//     <>
//       {isLoading && (
//         <Loader onComplete={handleLoaderComplete} />
//       )}

//       <main
//         className={
//           isLoading
//             ? "overflow-hidden"
//             : ""
//         }
//       >
//         <Navbar />

//         <section id="home">
//           <Hero />
//         </section>

//         <section id="about">
//           <About />
//         </section>

//         <section id="work">
//           <Skills />
//           <Projects />
//         </section>

//         <Services />

//         <Experience />

//         {/* <section id="contact"><Contact /></section> */}

//         <Footer />
//       </main>
//     </>
//   );
// }

// src/app/page.jsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="work">
          <Skills />
          <Projects />
        </section>

        <Services />

        <Experience />

        {/* <section id="contact"><Contact /></section> */}

        <Footer />
      </main>
    </>
  );
}