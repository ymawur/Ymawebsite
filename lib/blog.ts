import 'server-only'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogPostFrontmatter, TOCItem } from '@/types'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const frontmatter = data as BlogPostFrontmatter
      const readingTimeResult = readingTime(content)

      return {
        slug,
        frontmatter,
        content,
        readingTime: readingTimeResult.text,
      }
    })
    .filter((post) => !post.frontmatter.draft)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })

  return posts
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const frontmatter = data as BlogPostFrontmatter
    const readingTimeResult = readingTime(content)

    return {
      slug,
      frontmatter,
      content,
      readingTime: readingTimeResult.text,
    }
  } catch {
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tagsSet = new Set<string>()

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const posts = getAllBlogPosts()
  const currentIndex = posts.findIndex((post) => post.slug === slug)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  const prev = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null

  return { prev, next }
}

export function generateTOC(content: string): TOCItem[] {
  const toc: TOCItem[] = []
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    toc.push({ id, text, level })
  }

  return toc
}
