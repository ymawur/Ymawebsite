import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { TagPill } from '@/components/TagPill'
import { researchInterests } from '@/data/research'
import { outputs } from '@/data/outputs'

export default function HomePage() {
  const selectedOutputs = outputs.filter((o) => o.selected).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent-50/50 to-white">
        <Container>
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Yizhou Ma</h1>
              <p className="text-xl text-gray-600 mb-6">
                Assistant professor at Wageningen University
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Digitalization & Automation in Food Science at WUR. My professional and personal
                pursuits are built upon global responsibility, data-driven research, and sustainable
                system design. In my research, I work on lab automation of solid food testing,
                agentic food formulation, and structural representation of food materials.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/outputs">View outputs</Button>
              </div>
            </div>
            <div className="flex-shrink-0 md:ml-auto">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-accent-50">
                <Image
                  src="/images/Headshot3.jpg"
                  alt="Portrait of Yizhou Ma"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Cards */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <Card href="/research">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Research</h2>
              </div>
              <p className="text-sm text-gray-600">
                Lab automation for food testing, agentic food formulation, and structural
                representation of food materials.
              </p>
            </Card>

            <Card href="/outputs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
              </div>
              <p className="text-sm text-gray-600">
                Research outputs and artifacts from digitalization and automation in food science.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Selected Projects */}
      <section className="py-12 border-t border-gray-200">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Selected Projects</h2>
            <Link
              href="/outputs"
              className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="space-y-4">
            {selectedOutputs.map((output) => (
              <Card key={output.id} href="/outputs">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{output.title}</h3>
                    <p className="text-sm text-gray-600">
                      {output.authors.join(', ')} &bull; {output.venue}
                    </p>
                  </div>
                  <TagPill>{output.category}</TagPill>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {output.tags.slice(0, 4).map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
