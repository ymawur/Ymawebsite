'use client'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { outputs } from '@/data/outputs'
import { outputsZh } from '@/lib/translations'
import { useLanguage } from '@/components/LanguageProvider'

export default function OutputsPage() {
  const { language } = useLanguage()
  return (
    <>
      <section className="py-12 bg-accent-50/50"><Container><h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language === 'zh' ? '项目' : 'Projects'}</h1></Container></section>
      <section className="py-12"><Container><div className="grid md:grid-cols-2 gap-6">{outputs.map((output) => { const zh = outputsZh[output.id]; return <Card key={output.id} href={`/outputs/${output.id}`} className="h-full">{output.selected && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-100 text-accent-800 mb-3">{language==='zh'?'精选':'Selected'}</span>}<h2 className="text-xl font-semibold text-gray-900 mb-2">{language==='zh'&&zh?zh.title:output.title}</h2><p className="text-sm text-gray-600">{language==='zh'&&zh?zh.headline:output.headline}</p></Card>})}</div></Container></section>
    </>
  )
}
