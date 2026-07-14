import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteUrl } from "@/lib/site";
import { getWritingBySlug, getWritingPath } from "@/lib/writings";
import { WritingArticle } from "@/components/WritingArticle";

const ddosCycleSlug = "ddos-cycle-and-microbial-cell-factory";

function getDdosCycleWriting() {
  return getWritingBySlug(ddosCycleSlug);
}

function getWritingImage(
  writing: NonNullable<ReturnType<typeof getWritingBySlug>>,
) {
  return writing.sections.find((section) => section.image)?.image;
}

export function generateMetadata(): Metadata {
  const writing = getDdosCycleWriting();

  if (!writing) return {};

  const siteUrl = getSiteUrl();
  const title = writing.seoTitle ?? writing.title;
  const description = writing.seoDescription ?? writing.summary;
  const url = `${siteUrl}${getWritingPath(writing)}`;
  const image = getWritingImage(writing);
  const images = image
    ? [
        {
          url: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: writing.date,
      authors: ["Yizhou Ma"],
      siteName: "Yizhou Ma",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image.src] : undefined,
    },
  };
}

export default function DdosCyclePage() {
  const writing = getDdosCycleWriting();

  if (!writing) notFound();

  return <WritingArticle writing={writing} />;
}
