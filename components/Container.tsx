import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'wide' | 'narrow'
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-4xl',
    wide: 'max-w-6xl',
    narrow: 'max-w-2xl',
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
}
