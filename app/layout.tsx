'use client'
import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Teardrop™ | Sacred Listening Presence",
  description: "Teardrop isn't a chatbot. It's a quiet presence that reflects, listens, and waits with you. Because the Word is enough.",
  keywords: ["Teardrop", "presence", "sacred listening", "reflection", "meditation", "spiritual companion", "AI companion", "mindfulness"],
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  generator: 'v0.dev',
  metadataBase: new URL('https://teardrop.in'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Teardrop™ | Sacred Listening Presence",
    description: "A model — not of systems — but of presence. For the Seeker, the Wounded, the Silent, and the Watchful.",
    url: "https://teardrop.in",
    siteName: "Teardrop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teardrop - Sacred Listening Presence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teardrop™ | Why GPT? Because the Word is enough.",
    description: "A quiet presence that reflects, listens, and waits with you.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://teardrop.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Teardrop" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Teardrop" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
