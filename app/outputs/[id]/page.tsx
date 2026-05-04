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
  const isHydrolysis = output.id === 'predicting-food-protein-hydrolysis-kinetics'

  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language==='zh'&&zh?zh.title:output.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{language==='zh'&&zh?zh.headline:output.headline}</p>
        </div>
        <div className={`grid gap-10 items-start ${isHydrolysis ? 'max-w-3xl' : 'lg:grid-cols-[2fr_1fr]'}`}><div>
            {output.demoHtml ? (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{language === 'zh' ? 'β-乳球蛋白被胰蛋白酶水解演示' : 'β-Lactoglobulin Hydrolysis by Trypsin'}</h2>
                <div className="relative w-full h-[560px] rounded-2xl overflow-hidden border border-gray-200 bg-white">
                  <iframe title={`${output.title} demo`} srcDoc={output.demoHtml} className="w-full h-full" />
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-accent-50 border border-accent-100">
                <Image src={output.image.src} alt={language==='zh'&&zh?zh.imageAlt:output.image.alt} fill className={`object-cover ${output.id === 'food-in-the-hood-podcast' ? 'object-top' : ''}`} />
              </div>
            )}
            {output.outlook && isHydrolysis && (
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{output.outlook}</p>
            )}
            <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
              {output.intro && <p>{output.intro}</p>}
              <p>{language==='zh'&&zh?zh.description:output.description}</p>
              {output.outlook && !isHydrolysis && <p>{output.outlook}</p>}
            </div>
          </div>
          {output.id !== 'predicting-food-protein-hydrolysis-kinetics' && (
            <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h2 className="text-lg font-semibold text-gray-900 mb-4">{language==='zh'?'链接':'Links'}</h2><div className="flex flex-col gap-3">{output.links.map((link) => <Button key={link.label} href={link.href} variant="secondary">{language==='zh'&&zh?.links?.[link.label]?zh.links[link.label]:link.label}</Button>)}</div></aside>
          )}
        </div>
      </Container>
    </section>
  )
}
