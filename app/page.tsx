import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { HomePageClient } from "./HomePageClient";

const siteUrl = getSiteUrl();
const homeTitle = "Yizhou Ma | Automation & AI in Food Science";
const homeDescription =
  "Personal website of Yizhou Ma. Digitalization and automation in food science at Wageningen University.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Yizhou Ma",
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
