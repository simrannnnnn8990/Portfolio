import './globals.css'

import CustomCursor from '@/components/layout/CustomCursor'
import GrainOverlay from '@/components/ui/GrainOverlay'
import ClientWrapper from '@/components/ClientWrapper'

export const metadata = {
  title: 'Simran Gautam | Frontend Developer',

  description:
    'Simran Gautam is a frontend developer specializing in modern web interfaces, responsive experiences, Next.js, React.js, Tailwind CSS, GSAP, and Framer Motion.',

  keywords: [
    'Simran Gautam',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'Tailwind CSS',
    'GSAP',
    'Framer Motion',
    'Frontend Portfolio',
    'Web Developer',
  ],

  authors: [
    {
      name: 'Simran Gautam',
    },
  ],

  creator: 'Simran Gautam',

  openGraph: {
    title: 'Simran Gautam | Frontend Developer',

    description:
      'Frontend developer building thoughtful interfaces with modern web technologies and purposeful interaction.',

    url: 'https://your-portfolio.com',

    siteName: 'Simran Gautam Portfolio',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Simran Gautam — Frontend Developer',
      },
    ],

    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Simran Gautam | Frontend Developer',

    description:
      'Frontend developer building thoughtful interfaces with React, Next.js, Tailwind CSS, GSAP and Framer Motion.',

    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <CustomCursor />

        <GrainOverlay />

        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}