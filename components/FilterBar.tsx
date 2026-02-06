'use client'

import React from 'react'
import { OutputCategory } from '@/types'
import { TagPill } from './TagPill'

interface FilterBarProps {
  categories: OutputCategory[]
  selectedCategory: OutputCategory | 'All'
  onCategoryChange: (category: OutputCategory | 'All') => void
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  showSelectedOnly: boolean
  onToggleSelectedOnly: () => void
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  tags,
  selectedTags,
  onTagToggle,
  showSelectedOnly,
  onToggleSelectedOnly,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <TagPill
          onClick={() => onCategoryChange('All')}
          isActive={selectedCategory === 'All'}
        >
          All
        </TagPill>
        {categories.map((category) => (
          <TagPill
            key={category}
            onClick={() => onCategoryChange(category)}
            isActive={selectedCategory === category}
          >
            {category}
          </TagPill>
        ))}
      </div>

      {/* Tag filter */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 mr-2 self-center">Tags:</span>
          {tags.map((tag) => (
            <TagPill
              key={tag}
              onClick={() => onTagToggle(tag)}
              isActive={selectedTags.includes(tag)}
            >
              {tag}
            </TagPill>
          ))}
        </div>
      )}

      {/* Selected only toggle */}
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showSelectedOnly}
            onChange={onToggleSelectedOnly}
            className="sr-only peer"
          />
          <div
            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Show selected only</span>
        </label>
      </div>
    </div>
  )
}
