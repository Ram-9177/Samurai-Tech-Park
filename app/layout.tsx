import type { Metadata } from 'next'
import { Orbitron, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://samuraitechpark.com'),
  title: {
    default: 'Samurai Tech Park - Leading Automation & Software Solutions',
    template: '%s | Samurai Tech Park'
  },
  description: 'Expert automation tools, custom software development, and B.Tech projects. Founded by Sri Ram in Tenali, Andhra Pradesh. Contact: +91 91779 03061',
  keywords: [
    'automation tools',
    'software development',
    'B.Tech projects',
    'custom software',
    'web development',
    'mobile app development',
    'AI solutions',
    'Tenali',
    'Andhra Pradesh',
    'Sri Ram',
    '9177903061',
    'sriram.polakam@gmail.com'
  ],
  authors: [{ name: 'Sri Ram', url: 'https://samuraitechpark.com' }],
  creator: 'Sri Ram',
  publisher: 'Samurai Tech Park',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://samuraitechpark.com',
    siteName: 'Samurai Tech Park',
    title: 'Samurai Tech Park - Leading Automation & Software Solutions',
    description: 'Expert automation tools, custom software development, and B.Tech projects. Founded by Sri Ram in Tenali, Andhra Pradesh.',
    images: [
      {
        url: '/images/samurai-tech-park-logo.png',
        width: 1200,
        height: 630,
        alt: 'Samurai Tech Park Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samurai Tech Park - Leading Automation & Software Solutions',
    description: 'Expert automation tools, custom software development, and B.Tech projects.',
    images: ['/images/samurai-tech-park-logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://samuraitechpark.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Samurai Tech Park",
    "description": "Leading automation tools, custom software development, and B.Tech projects",
    "url": "https://samuraitechpark.com",
    "logo": "https://samuraitechpark.com/images/samurai-tech-park-logo.png",
    "founder": {
      "@type": "Person",
      "name": "Sri Ram",
      "email": "sriram.polakam@gmail.com",
      "telephone": "+91 91779 03061"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tenali",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 91779 03061",
      "contactType": "customer service",
      "email": "sriram.polakam@gmail.com",
      "availableLanguage": ["English", "Telugu", "Hindi"]
    },
    "sameAs": [
      "https://wa.me/9177903061"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Automation Tools",
        "description": "Custom automation solutions for business processes"
      },
      {
        "@type": "Service", 
        "name": "Software Development",
        "description": "Web and mobile application development"
      },
      {
        "@type": "Service",
        "name": "B.Tech Projects",
        "description": "Complete academic projects for engineering students"
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/samurai-tech-park-logo.png" />
      </head>
      <body className={`${orbitron.variable} ${poppins.variable} font-sans`}>
        <div className="min-h-screen bg-dark-bg">
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
