import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { outputs } from '@/data/outputs'

type OutputDetailPageProps = {
  params: {
    id: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return outputs.map((output) => ({ id: output.id }))
}

export function generateMetadata({ params }: OutputDetailPageProps): Metadata {
  const output = outputs.find((item) => item.id === params.id)

  if (!output) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: output.title,
    description: output.headline,
    openGraph: {
      title: `${output.title} | Yizhou Ma`,
      description: output.headline,
      type: 'article',
      images: [{ url: output.image.src, alt: output.image.alt }],
    },
  }
}

export default function OutputDetailPage({ params }: OutputDetailPageProps) {
  const output = outputs.find((item) => item.id === params.id)

  if (!output) {
    notFound()
  }

  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{output.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{output.headline}</p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-accent-50 border border-accent-100">
              <Image src={output.image.src} alt={output.image.alt} fill className="object-cover" />
            </div>
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
              {output.description}
            </div>
          </div>

          <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Links</h2>
            <div className="flex flex-col gap-3">
              {output.links.map((link) => (
                <Button key={link.label} href={link.href} variant="secondary">
                  {link.label}
                </Button>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
