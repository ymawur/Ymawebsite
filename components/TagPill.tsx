import React from 'react'

interface TagPillProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export function TagPill({ children, className = '', onClick, isActive = false }: TagPillProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        transition-colors duration-200
        ${
          isActive
            ? 'bg-accent-100 text-accent-800 ring-1 ring-accent-300'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {children}
    </span>
  )
}
