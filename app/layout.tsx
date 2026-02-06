import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Yizhou Ma | Personal Website',
    template: '%s | Yizhou Ma',
  },
  description:
    'Personal website of Yizhou Ma. Digitalization and automation in food science at Wageningen University.',
  keywords: [
    'food science',
    'digitalization',
    'automation',
    'lab automation',
    'agentic food formulation',
  ],
  authors: [{ name: 'Yizhou Ma' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Yizhou Ma',
    title: 'Yizhou Ma | Personal Website',
    description:
      'Personal website of Yizhou Ma. Digitalization and automation in food science at Wageningen University.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yizhou Ma | Personal Website',
    description:
      'Personal website of Yizhou Ma. Digitalization and automation in food science at Wageningen University.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
