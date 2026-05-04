export interface ResearchInterest {
  id: string
  title: string
  description: string
  bullets: string[]
  tags: string[]
}

export interface OutputLink {
  label: string
  href: string
}

export type OutputCategory = 'Publications' | 'Talks' | 'Software' | 'Datasets' | 'Other'

export interface Output {
  id: string
  title: string
  headline: string
  intro?: string
  description: string
  outlook?: string
  image: {
    src: string
    alt: string
  }
  links: OutputLink[]
  selected?: boolean
  demoHtml?: string
}

export interface BlogPostFrontmatter {
  title: string
  date: string
  summary: string
  tags: string[]
  draft?: boolean
}

export interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string
  readingTime: string
}

export interface TOCItem {
  id: string
  text: string
  level: number
}
