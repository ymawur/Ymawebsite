import { notFound } from 'next/navigation'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { Container } from '@/components/Container'
import { TagPill } from '@/components/TagPill'
import { getBlogPostBySlug, getAllBlogPosts, generateTOC, getAdjacentPosts } from '@/lib/blog'
import { mdxComponents } from '@/lib/mdx-components'
import { TOCItem } from '@/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: 'article',
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  }
}

async function MDXContent({ content }: { content: string }) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'github-light',
              keepBackground: true,
            },
          ],
        ],
      },
    },
  })

  return <>{compiledContent}</>
}

function TableOfContents({ items }: { items: TOCItem[] }) {
  if (items.length === 0) return null

  return (
    <nav className="bg-gray-50 rounded-lg p-4 mb-8">
      <h2 className="text-sm font-semibold text-gray-900 mb-3">Table of Contents</h2>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${item.level === 3 ? 'pl-4' : ''}`}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-600 hover:text-accent-600 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const toc = generateTOC(post.content)
  const { prev, next } = getAdjacentPosts(params.slug)

  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container size="narrow">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.frontmatter.title}</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>&bull;</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {post.frontmatter.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12">
        <Container size="narrow">
          <TableOfContents items={toc} />

          <article className="prose-custom">
            <MDXContent content={post.content} />
          </article>
        </Container>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-gray-200">
        <Container size="narrow">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col items-start p-4 rounded-lg border border-gray-200 hover:border-accent-300 hover:bg-accent-50 transition-colors"
              >
                <span className="text-sm text-gray-500 mb-1">Previous</span>
                <span className="font-medium text-gray-900 group-hover:text-accent-700 transition-colors">
                  {prev.frontmatter.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end p-4 rounded-lg border border-gray-200 hover:border-accent-300 hover:bg-accent-50 transition-colors text-right"
              >
                <span className="text-sm text-gray-500 mb-1">Next</span>
                <span className="font-medium text-gray-900 group-hover:text-accent-700 transition-colors">
                  {next.frontmatter.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
