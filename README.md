# Personal Website

A modern, minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router and static site generation
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **MDX** for blog posts with custom components
- **Accessible** components with keyboard navigation and focus management
- **RSS feed** and **sitemap** generation
- **Responsive design** with mobile-first approach
- **SEO optimized** with metadata and Open Graph tags

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/              # Blog routes
│   │   ├── page.tsx       # Blog index
│   │   └── [slug]/        # Individual blog posts
│   ├── research/          # Research interests page
│   ├── outputs/           # Publications, talks, etc.
│   ├── rss.xml/           # RSS feed route
│   ├── sitemap.ts         # Sitemap generation
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── Card.tsx
│   ├── TagPill.tsx
│   ├── Button.tsx
│   ├── SearchInput.tsx
│   └── FilterBar.tsx
├── content/blog/          # MDX blog posts
├── data/                  # Typed data files
│   ├── research.ts
│   └── outputs.ts
├── lib/                   # Utility functions
│   ├── blog.ts
│   └── mdx-components.tsx
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd personal-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

## Adding Content

### Blog Posts

1. Create a new `.mdx` file in `/content/blog/`
2. Add frontmatter with the following fields:

```yaml
---
title: 'Your Post Title'
date: '2024-01-15'
summary: 'A brief summary of your post'
tags: ['Tag1', 'Tag2', 'Tag3']
draft: false  # Optional: set to true to hide from production
---
```

3. Write your content using MDX (Markdown + JSX)
4. Use custom components like `<Callout>`, `<Figure>`, and `<CodeBlock>`

Example:

```mdx
---
title: 'My New Post'
date: '2024-06-01'
summary: 'This is a summary of my post'
tags: ['Tutorial', 'AI']
---

## Introduction

Your content here...

<Callout type="info">
  This is an informational callout.
</Callout>

<CodeBlock>
{`const example = "code here"`}
</CodeBlock>
```

### Research Interests

Edit `/data/research.ts` to add or modify research interests:

```typescript
{
  id: 'unique-id',
  title: 'Research Area Title',
  description: 'Description of your research...',
  bullets: [
    'Key point 1',
    'Key point 2',
  ],
  tags: ['Tag1', 'Tag2'],
}
```

### Outputs (Publications, Talks, etc.)

Edit `/data/outputs.ts` to add publications, talks, software, and datasets:

```typescript
{
  id: 'unique-id',
  title: 'Output Title',
  year: 2024,
  authors: ['Your Name', 'Co-author'],
  venue: 'Conference or Journal Name',
  category: 'Publications', // or 'Talks', 'Software', 'Datasets', 'Other'
  tags: ['ML', 'NLP'],
  links: [
    { label: 'PDF', href: 'https://example.com/paper.pdf' },
    { label: 'Code', href: 'https://github.com/...' },
  ],
  selected: true, // Optional: highlights on homepage
}
```

## Customization

### Colors

The site uses a single accent color (blue by default). Modify in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... adjust shades as needed
    600: '#2563eb', // Primary accent
  },
}
```

### Typography

The site uses the system font stack. To use a Google Font:

1. Import the font in `app/layout.tsx`
2. Update the `fontFamily` in `tailwind.config.ts`

### Site Metadata

Update site-wide metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Name | Personal Website',
    template: '%s | Your Name',
  },
  description: 'Your site description...',
  // ... other metadata
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default settings

The site will automatically rebuild on each push to the main branch.

### Other Static Hosts

Build the site locally and upload the `dist/` directory:

```bash
npm run build
# Upload dist/ to your hosting provider
```

Compatible with:
- GitHub Pages
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static file host

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Accessibility

This site follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support
- Skip links for screen readers

## License

MIT License - feel free to use this template for your own personal website.
