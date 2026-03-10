'use client'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { researchInterests } from '@/data/research'
import { researchZh } from '@/lib/translations'
import { useLanguage } from '@/components/LanguageProvider'

export default function ResearchPage() {
  const { language } = useLanguage()
  return (
    <>
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language === 'zh' ? '研究方向' : 'Research Interests'}</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {researchInterests.map((interest) => {
              const zh = researchZh[interest.id]
              const title = language === 'zh' ? zh.title : interest.title
              const desc = language === 'zh' ? zh.description : interest.description
              const bullets = language === 'zh' ? zh.bullets : interest.bullets
              return (
                <Card key={interest.id} className="h-full">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{desc}</p>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{language === 'zh' ? '关键方向：' : 'Key Areas:'}</h3>
                  <ul className="space-y-1.5 mb-4">{bullets.map((bullet, index) => <li key={index} className="text-sm text-gray-600">• {bullet}</li>)}</ul>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
