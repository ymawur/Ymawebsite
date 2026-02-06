import React from 'react'
import Image from 'next/image'

interface CalloutProps {
  type?: 'info' | 'warning' | 'success'
  children: React.ReactNode
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const styles = {
    info: 'bg-accent-50 border-accent-300 text-accent-900',
    warning: 'bg-amber-50 border-amber-300 text-amber-900',
    success: 'bg-emerald-50 border-emerald-300 text-emerald-900',
  }

  const icons = {
    info: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  }

  return (
    <div className={`my-6 p-4 rounded-lg border-l-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 mt-0.5">{icons[type]}</span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

interface FigureProps {
  src: string
  alt: string
  caption?: string
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}

interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <pre className="my-6 p-4 bg-gray-900 rounded-lg overflow-x-auto">
      <code className={`text-sm font-mono text-gray-100 ${className || ''}`}>{children}</code>
    </pre>
  )
}

export const mdxComponents = {
  Callout,
  Figure,
  CodeBlock,
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <pre
        className="my-6 p-4 bg-gray-900 rounded-lg overflow-x-auto"
        tabIndex={0}
        {...props}
      >
        {children}
      </pre>
    )
  },
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <code className={`text-sm font-mono text-gray-100 ${className || ''}`} {...props}>
        {children}
      </code>
    )
  },
  h2: ({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={id}
      className="text-2xl font-semibold text-gray-900 mt-10 mb-4 scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={id}
      className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-8 border-gray-200" {...props} />,
}
