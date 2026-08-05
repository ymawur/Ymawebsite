import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { Container } from "@/components/Container";
import { getWritingBySlug } from "@/lib/writings";
import { mdxComponents } from "@/lib/mdx-components";

function escapeMdxText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;");
}

function renderInlineMarkdown(value: string) {
  return escapeMdxText(value).replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, label: string, href: string) =>
      `<a href="${href.replace(/&/g, "&amp;")}">${label}</a>`,
  );
}

function splitTableRow(row: string) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(row: string) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(row);
}

function normalizeWritingAssetPaths(source: string) {
  return source
    .replace(/\]\(assets\//g, "](/writings/assets/")
    .replace(/src=["']assets\//g, 'src="/writings/assets/');
}

function renderMarkdownTables(source: string) {
  const lines = source.split("\n");
  const renderedLines: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const separator = lines[index + 1];

    if (line.includes("|") && separator && isTableSeparator(separator)) {
      const headers = splitTableRow(line);
      const rows: string[][] = [];
      index += 2;

      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      index -= 1;
      renderedLines.push(
        "<table>",
        "<thead>",
        "<tr>",
        ...headers.map((header) => `<th>${renderInlineMarkdown(header)}</th>`),
        "</tr>",
        "</thead>",
        "<tbody>",
        ...rows.flatMap((row) => [
          "<tr>",
          ...headers.map(
            (_header, cellIndex) =>
              `<td>${renderInlineMarkdown(row[cellIndex] ?? "")}</td>`,
          ),
          "</tr>",
        ]),
        "</tbody>",
        "</table>",
      );
    } else {
      renderedLines.push(line);
    }
  }

  return renderedLines.join("\n");
}

async function WritingMdxContent({ contentFile }: { contentFile: string }) {
  const source = await fs.readFile(
    path.join(process.cwd(), "content", "writings", contentFile),
    "utf8",
  );
  const { content } = await compileMDX({
    source: renderMarkdownTables(normalizeWritingAssetPaths(source)),
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-light",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  return <>{content}</>;
}

export async function WritingArticle({
  writing,
}: {
  writing: NonNullable<ReturnType<typeof getWritingBySlug>>;
}) {
  return (
    <article className="bg-white">
      <section className="bg-accent-50/50 py-14">
        <Container>
          <a
            href="/writings"
            className="text-sm font-medium text-accent-700 hover:text-accent-800"
          >
            ← Back to writings
          </a>
          <p className="mt-6 text-sm font-medium text-accent-700">
            {writing.kicker}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {writing.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            {writing.summary}
          </p>
          <div className="mt-8 rounded-2xl border border-accent-100 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              {writing.hero}
            </p>
            <p className="mt-3 text-sm text-gray-500">{writing.byline}</p>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="mx-auto max-w-4xl space-y-14">
          {writing.contentFile ? (
            <article className="prose-custom writing-prose">
              <WritingMdxContent contentFile={writing.contentFile} />
            </article>
          ) : (
            writing.sections.map((section) => (
              <section key={section.title} className="scroll-mt-24">
                {section.eyebrow && (
                  <p className="text-sm font-semibold text-accent-700">
                    {section.eyebrow}
                  </p>
                )}
                <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-gray-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.image && (
                  <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full rounded-xl bg-white"
                    />
                    {section.image.caption && (
                      <figcaption className="mt-3 text-sm font-medium text-gray-600">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {section.subsections && (
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.title}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                      >
                        {subsection.label && (
                          <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">
                            {subsection.label}
                          </p>
                        )}
                        <h3 className="mt-1 text-lg font-semibold text-gray-900">
                          {subsection.title}
                        </h3>
                        <div className="mt-3 space-y-3 text-sm leading-6 text-gray-600">
                          {subsection.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.callout && (
                  <blockquote className="mt-8 rounded-2xl border-l-4 border-accent-500 bg-accent-50 p-5 text-base font-medium leading-7 text-gray-800">
                    {section.callout}
                  </blockquote>
                )}
              </section>
            ))
          )}

          {writing.footer && (
            <footer className="border-t border-gray-200 pt-8 text-sm leading-6 text-gray-500">
              {writing.footer.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </footer>
          )}
        </div>
      </Container>
    </article>
  );
}
