"use client";

import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { useLanguage } from "@/components/LanguageProvider";
import { getWritingPath, type Writing } from "@/lib/writings";

interface WritingsPageClientProps {
  writings: Writing[];
}

export function WritingsPageClient({ writings }: WritingsPageClientProps) {
  const { language } = useLanguage();
  const isZh = language === "zh";

  return (
    <>
      <section className="py-12 bg-accent-50/50">
        <Container>
          <p className="text-sm font-medium text-accent-700 mb-3">
            {isZh ? "文章与网页作品" : "Essays and web-native pieces"}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? "写作" : "Writings"}
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            {isZh
              ? "长篇写作、随笔与网页化文章会发布在这里。"
              : "Long-form writing, essays, and web-native articles live here."}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {writings.map((writing) => (
              <Card
                key={writing.slug}
                href={getWritingPath(writing)}
                className="h-full"
              >
                <p className="text-sm font-medium text-accent-700 mb-3">
                  {writing.kicker}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {writing.title}
                </h2>
                <p className="text-sm text-gray-600 leading-6">
                  {writing.summary}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
