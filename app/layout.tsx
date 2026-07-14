import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getSiteUrl } from '@/lib/site'
import { LanguageProvider } from '@/components/LanguageProvider'
import { LangText } from '@/components/LangText'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yizhou Ma | Automation & AI in Food Science',
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
    url: siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: 'Yizhou Ma',
    title: 'Yizhou Ma | Automation & AI in Food Science',
    description:
      'Personal website of Yizhou Ma. Digitalization and automation in food science at Wageningen University.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yizhou Ma | Automation & AI in Food Science',
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
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            <LangText en="Skip to main content" zh="跳转到主要内容" />
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
