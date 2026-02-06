'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { TagPill } from '@/components/TagPill'
import { SearchInput } from '@/components/SearchInput'
import { Button } from '@/components/Button'
import { BlogPost } from '@/types'

interface BlogPageClientProps {
  posts: BlogPost[]
  tags: string[]
}

export function BlogPageClient({ posts, tags }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          post.frontmatter.title.toLowerCase().includes(query) ||
          post.frontmatter.summary.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      if (selectedTag && !post.frontmatter.tags.includes(selectedTag)) {
        return false
      }

      return true
    })
  }, [posts, searchQuery, selectedTag])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTag(null)
  }

  const hasActiveFilters = searchQuery || selectedTag

  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Thoughts, tutorials, and insights on AI research, technology, and the future of machine
            learning.
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <Container>
          <div className="space-y-4">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search posts..."
              className="max-w-md"
            />

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Filter by tag:</span>
                <TagPill onClick={() => setSelectedTag(null)} isActive={selectedTag === null}>
                  All
                </TagPill>
                {tags.map((tag) => (
                  <TagPill
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    isActive={selectedTag === tag}
                  >
                    {tag}
                  </TagPill>
                ))}
              </div>
            )}

            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Showing {filteredPosts.length} of {posts.length} posts
                </span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent-600 hover:text-accent-700 underline underline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Posts List */}
      <section className="py-12">
        <Container>
          {filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-accent-600 transition-colors">
                        {post.frontmatter.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{post.frontmatter.summary}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
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
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No posts match your search.</p>
              <Button onClick={clearFilters} variant="secondary">
                Clear filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* RSS Link */}
      <section className="py-8 border-t border-gray-200">
        <Container>
          <div className="flex items-center justify-center">
            <Link
              href="/rss.xml"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.736-23.954-24-24v4.812z" />
              </svg>
              Subscribe to RSS feed
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
