'use client'

import { useState, useMemo } from 'react'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { TagPill } from '@/components/TagPill'
import { FilterBar } from '@/components/FilterBar'
import { Button } from '@/components/Button'
import { outputs } from '@/data/outputs'
import { OutputCategory } from '@/types'

const categories: OutputCategory[] = ['Publications', 'Talks', 'Software', 'Datasets', 'Other']

export default function OutputsPage() {
  const [selectedCategory, setSelectedCategory] = useState<OutputCategory | 'All'>('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showSelectedOnly, setShowSelectedOnly] = useState(false)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    outputs.forEach((output) => {
      output.tags.forEach((tag) => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  }, [])

  // Filter outputs
  const filteredOutputs = useMemo(() => {
    return outputs.filter((output) => {
      // Category filter
      if (selectedCategory !== 'All' && output.category !== selectedCategory) {
        return false
      }

      // Tag filter
      if (selectedTags.length > 0 && !selectedTags.some((tag) => output.tags.includes(tag))) {
        return false
      }

      // Selected only filter
      if (showSelectedOnly && !output.selected) {
        return false
      }

      return true
    })
  }, [selectedCategory, selectedTags, showSelectedOnly])

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedTags([])
    setShowSelectedOnly(false)
  }

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedTags.length > 0 || showSelectedOnly

  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outputs</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of my publications, talks, software projects, and datasets from my research
            journey.
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <Container>
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            showSelectedOnly={showSelectedOnly}
            onToggleSelectedOnly={() => setShowSelectedOnly(!showSelectedOnly)}
          />
          {hasActiveFilters && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-500">
                Showing {filteredOutputs.length} of {outputs.length} outputs
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-accent-600 hover:text-accent-700 underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Outputs List */}
      <section className="py-12">
        <Container>
          {filteredOutputs.length > 0 ? (
            <div className="space-y-6">
              {filteredOutputs.map((output) => (
                <Card key={output.id} className="relative">
                  {output.selected && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-100 text-accent-800">
                        Selected
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <TagPill>{output.category}</TagPill>
                    <span className="text-sm text-gray-500">{output.year}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 pr-20">{output.title}</h2>

                  <p className="text-sm text-gray-600 mb-2">
                    {output.authors.join(', ')}
                    {output.venue && <span className="text-gray-500"> &bull; {output.venue}</span>}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {output.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {output.links.map((link) => (
                      <Button
                        key={link.label}
                        href={link.href}
                        variant="secondary"
                        size="sm"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No outputs match your filters.</p>
              <Button onClick={clearFilters} variant="secondary">
                Clear filters
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
