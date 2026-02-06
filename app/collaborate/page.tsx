import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Collaborate',
  description:
    'Collaboration opportunities with universities, research institutes, and commercial partners.',
}

export default function CollaboratePage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Collaborate</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            I welcome collaborations across academia and industry to advance open, impactful food
            science and automation.
          </p>
        </Container>
      </section>

      {/* Collaboration Cards */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Universities &amp; Research Institutes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I collaborate with academic partners to develop open-source software and hardware at
                the intersection of food science, automation, and artificial intelligence. I am
                particularly interested in interdisciplinary collaborations with mechanical
                engineers, nutritionists, and social scientists.
              </p>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Let&apos;s get in touch for:</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Joint research proposals and grants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Co-supervision of graduate and undergraduate students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Shared experimental platforms and data resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Open-source software and model development</span>
                </li>
              </ul>
            </Card>

            <Card className="h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Companies &amp; Commercial Partners
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I work with companies to translate research into practical, deployable solutions for
                food product development, processing, and quality control. I have experience with
                public-private partnerships and consulting engagements across startups and
                established organizations.
              </p>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Typical engagement formats include:
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Contract research and sponsored projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Technology feasibility studies and prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">&bull;</span>
                  <span>Long-term strategic consulting</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
