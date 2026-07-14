import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LangText } from "@/components/LangText";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yizhou Ma",
    template: "%s | Yizhou Ma",
  },
  keywords: [
    "food science",
    "digitalization",
    "automation",
    "lab automation",
    "agentic food formulation",
  ],
  authors: [{ name: "Yizhou Ma" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
