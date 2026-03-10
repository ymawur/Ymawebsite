'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { TagPill } from '@/components/TagPill'
import { SearchInput } from '@/components/SearchInput'
import { Button } from '@/components/Button'
import { BlogPost } from '@/types'
import { useLanguage } from '@/components/LanguageProvider'

interface BlogPageClientProps {
  posts: BlogPost[]
  tags: string[]
}

export function BlogPageClient({ posts, tags }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const { language } = useLanguage()

  const filteredPosts = useMemo(() => posts.filter((post) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matches = post.frontmatter.title.toLowerCase().includes(query) || post.frontmatter.summary.toLowerCase().includes(query)
      if (!matches) return false
    }
    if (selectedTag && !post.frontmatter.tags.includes(selectedTag)) return false
    return true
  }), [posts, searchQuery, selectedTag])

  const clearFilters = () => { setSearchQuery(''); setSelectedTag(null) }

  return (
    <>
      <section className="py-12 bg-accent-50/50"><Container><h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language==='zh'?'博客':'Blog'}</h1></Container></section>
      <section className="py-8 border-b border-gray-200"><Container><div className="space-y-4"><SearchInput value={searchQuery} onChange={setSearchQuery} placeholder={language==='zh'?'搜索文章...':'Search posts...'} className="max-w-md" />
      {tags.length>0 && <div className="flex flex-wrap gap-2 items-center"><span className="text-sm text-gray-500">{language==='zh'?'按标签筛选：':'Filter by tag:'}</span><TagPill onClick={() => setSelectedTag(null)} isActive={selectedTag===null}>{language==='zh'?'全部':'All'}</TagPill>{tags.map((tag)=><TagPill key={tag} onClick={()=>setSelectedTag(tag)} isActive={selectedTag===tag}>{tag}</TagPill>)}</div>}
      </div></Container></section>
      <section className="py-12"><Container>{filteredPosts.length>0 ? <div className="space-y-6">{filteredPosts.map((post)=><Card key={post.slug} href={`/blog/${post.slug}`}><h2 className="text-xl font-semibold text-gray-900 mb-2">{post.frontmatter.title}</h2><p className="text-gray-600">{post.frontmatter.summary}</p></Card>)}</div> : <div className="text-center py-12"><p className="text-gray-600 mb-4">{language==='zh'?'没有匹配搜索条件的文章。':'No posts match your search.'}</p><Button onClick={clearFilters} variant="secondary">{language==='zh'?'清除筛选':'Clear filters'}</Button></div>}</Container></section>
      <section className="py-8 border-t border-gray-200"><Container><div className="flex items-center justify-center"><Link href="/rss.xml" className="text-sm text-gray-600 hover:text-accent-600">{language==='zh'?'订阅 RSS':'Subscribe to RSS feed'}</Link></div></Container></section>
    </>
  )
}
