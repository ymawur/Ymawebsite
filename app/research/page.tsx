import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { TagPill } from '@/components/TagPill'
import { researchInterests } from '@/data/research'

export const metadata: Metadata = {
  title: 'Research Interests',
  description:
    'Digitalization and automation in food science, including lab automation, agentic formulation, and structural representation.',
}

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Interests</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            My research focuses on digitalization and automation in food science, emphasizing
            global responsibility, data-driven research, and sustainable system design.
          </p>
        </Container>
      </section>

      {/* Research Interests */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {researchInterests.map((interest) => (
              <Card key={interest.id} className="h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{interest.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{interest.description}</p>

                <h3 className="text-sm font-medium text-gray-900 mb-2">Key Areas:</h3>
                <ul className="space-y-1.5 mb-4">
                  {interest.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-accent-500 mt-1">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {interest.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration CTA */}
      <section className="py-12 border-t border-gray-200">
        <Container>
          <div className="bg-accent-50 rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Interested in collaborating?</h2>
            <p className="text-gray-600 mb-4 max-w-lg mx-auto">
              I am always open to discussing research ideas, potential collaborations, and speaking
              opportunities.
            </p>
            <a
              href="mailto:yizhou.ma@wur.nl"
              className="inline-flex items-center justify-center px-4 py-2 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
