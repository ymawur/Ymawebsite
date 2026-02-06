import { BlogPageClient } from './BlogPageClient'
import { getAllBlogPosts, getAllTags } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const tags = getAllTags()

  return <BlogPageClient posts={posts} tags={tags} />
}
