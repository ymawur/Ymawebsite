import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { outputs } from '@/data/outputs'

export default function OutputsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of publications, software, and related artifacts from my work in food
            science digitalization and automation.
          </p>
        </Container>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {outputs.map((output) => (
              <Card key={output.id} href={`/outputs/${output.id}`} className="h-full">
                {output.selected && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-100 text-accent-800 mb-3">
                    Selected
                  </span>
                )}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{output.title}</h2>
                <p className="text-sm text-gray-600">{output.headline}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
