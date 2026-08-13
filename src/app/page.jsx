// src/app/page.jsx
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/sections/Loader'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <main className={`${isLoading ? 'overflow-hidden' : ''}`}>
        <Navbar />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="work">
          <Skills />
          <Projects />
        </section>
        <Services />
        <Experience />       
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </>
  )
}