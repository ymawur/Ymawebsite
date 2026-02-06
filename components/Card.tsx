import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function Card({ children, className = '', href }: CardProps) {
  const baseClasses =
    'bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:border-gray-300'

  if (href) {
    return (
      <a href={href} className={`block ${baseClasses} ${className}`}>
        {children}
      </a>
    )
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>
}
