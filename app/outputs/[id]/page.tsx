'use client'

import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { outputs } from '@/data/outputs'
import { outputsZh } from '@/lib/translations'
import { useLanguage } from '@/components/LanguageProvider'

export default function OutputDetailPage() {
  const params = useParams<{ id: string }>()
  const output = outputs.find((item) => item.id === params.id)
  const { language } = useLanguage()
  if (!output) notFound()
  const zh = outputsZh[output.id]

  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language==='zh'&&zh?zh.title:output.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{language==='zh'&&zh?zh.headline:output.headline}</p>
        </div>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-accent-50 border border-accent-100">
              <Image src={output.image.src} alt={language==='zh'&&zh?zh.imageAlt:output.image.alt} fill className={`object-cover ${output.id === 'food-in-the-hood-podcast' ? 'object-top' : ''}`} />
            </div>
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">{language==='zh'&&zh?zh.description:output.description}</div>
          </div>
          <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h2 className="text-lg font-semibold text-gray-900 mb-4">{language==='zh'?'链接':'Links'}</h2><div className="flex flex-col gap-3">{output.links.map((link) => <Button key={link.label} href={link.href} variant="secondary">{language==='zh'&&zh?.links?.[link.label]?zh.links[link.label]:link.label}</Button>)}</div></aside>
        </div>
      </Container>
    </section>
  )
}
