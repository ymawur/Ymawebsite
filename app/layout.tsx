import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Jane Researcher | Personal Website',
    template: '%s | Jane Researcher',
  },
  description:
    'Personal website of Jane Researcher. Exploring machine learning, natural language processing, and responsible AI.',
  keywords: ['machine learning', 'NLP', 'AI research', 'deep learning', 'responsible AI'],
  authors: [{ name: 'Jane Researcher' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jane Researcher',
    title: 'Jane Researcher | Personal Website',
    description:
      'Personal website of Jane Researcher. Exploring machine learning, natural language processing, and responsible AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Researcher | Personal Website',
    description:
      'Personal website of Jane Researcher. Exploring machine learning, natural language processing, and responsible AI.',
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
