import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const layout = readFileSync("app/layout.tsx", "utf8");
const homePage = readFileSync("app/page.tsx", "utf8");
const writingPage = readFileSync("app/writings/[slug]/page.tsx", "utf8");
const writingsData = readFileSync("data/writings.ts", "utf8");

assert(
  !layout.includes("Personal website of Yizhou Ma."),
  "root layout must not contain homepage description",
);
assert(
  !layout.includes("openGraph:"),
  "root layout must not define page-specific Open Graph metadata",
);
assert(
  !layout.includes("twitter:"),
  "root layout must not define page-specific Twitter metadata",
);

assert(
  homePage.includes("alternates:"),
  "homepage must define its canonical metadata",
);
assert(
  homePage.includes("openGraph:"),
  "homepage must keep homepage Open Graph metadata",
);
assert(
  homePage.includes("twitter:"),
  "homepage must keep homepage Twitter metadata",
);

assert(
  writingPage.includes("alternates:"),
  "writing pages must define canonical URLs",
);
assert(
  writingPage.includes('type: \"article\"'),
  "writing pages must define article Open Graph type",
);
assert(
  writingPage.includes('card: \"summary_large_image\"'),
  "writing pages must define large Twitter cards",
);
assert(
  writingPage.includes("getWritingImage"),
  "writing pages must derive OG images from article images",
);

assert(
  writingsData.includes('slug: \"ddos-cycle-and-microbial-cell-factory\"'),
  "target writing must exist",
);
assert(
  writingsData.includes('seoTitle: \"Discover, Develop, Optimize & Scale\"'),
  "target writing must define the requested SEO title",
);
assert(
  writingsData.includes("microbial cell factory knowledge"),
  "target writing must define a page-specific SEO description based on article content",
);
