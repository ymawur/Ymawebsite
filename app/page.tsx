'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { outputs } from '@/data/outputs'
import { useLanguage } from '@/components/LanguageProvider'
import { outputsZh } from '@/lib/translations'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ybenma/' },
  { label: 'GitLab', href: 'https://git.wur.nl/yizhou.ma/' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=LTcsUgcAAAAJ&hl=en' },
]

export default function HomePage() {
  const selectedOutputs = outputs.filter((o) => o.selected).slice(0, 3)
  const { language } = useLanguage()

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent-50/50 to-white">
        <Container>
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Yizhou Ma (马逸舟)</h1>
              <p className="text-xl text-gray-600 mb-6">
                {language === 'zh' ? '瓦赫宁根大学助理教授' : 'Assistant professor at Wageningen University'}
              </p>
              <div className="hidden md:flex items-center gap-4 mb-6">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent-700 hover:text-accent-800 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                {language === 'zh'
                  ? '我在瓦赫宁根大学（WUR）从事食品科学数字化与自动化研究。我的职业与个人追求建立在全球责任、数据驱动研究与可持续系统设计之上。当前研究方向包括固体食品测试实验室自动化、智能体食品配方与食品材料结构表征。'
                  : 'Digitalization & Automation in Food Science at WUR. My professional and personal pursuits are built upon global responsibility, data-driven research, and sustainable system design. In my research, I work on lab automation of solid food testing, agentic food formulation, and structural representation of food materials.'}
              </p>
            </div>
            <div className="flex-shrink-0 md:ml-auto">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-accent-50">
                <Image src="/images/Headshot3.jpg" alt={language === 'zh' ? '马逸舟肖像' : 'Portrait of Yizhou Ma'} fill className="object-cover" priority />
              </div>
              <div className="md:hidden mt-4 flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent-700 hover:text-accent-800 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 -mt-6">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <Card href="/research"><h2 className="text-lg font-semibold text-gray-900 mb-2">{language === 'zh' ? '研究' : 'Research'}</h2><p className="text-sm text-gray-600">{language === 'zh' ? '食品测试实验室自动化、智能体配方与食品结构表征。' : 'Lab automation for food testing, agentic food formulation, and structural representation of food materials.'}</p></Card>
            <Card href="/outputs"><h2 className="text-lg font-semibold text-gray-900 mb-2">{language === 'zh' ? '项目' : 'Projects'}</h2><p className="text-sm text-gray-600">{language === 'zh' ? '食品科学数字化与自动化相关的研究成果与产出。' : 'Research outputs and artifacts from digitalization and automation in food science.'}</p></Card>
            <Card href="/collaborate"><h2 className="text-lg font-semibold text-gray-900 mb-2">{language === 'zh' ? '合作' : 'Collaborate'}</h2><p className="text-sm text-gray-600">{language === 'zh' ? '欢迎联系并开展合作。' : "Let's get in touch and collaborate"}</p></Card>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-gray-200">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">{language === 'zh' ? '精选项目' : 'Selected Projects'}</h2>
            <Link href="/outputs" className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors">
              {language === 'zh' ? '查看全部 →' : 'View all →'}
            </Link>
          </div>

          <div className="space-y-4">
            {selectedOutputs.map((output) => {
              const zh = outputsZh[output.id]
              return (
                <Card key={output.id} href={`/outputs/${output.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-1">{language === 'zh' && zh ? zh.title : output.title}</h3>
                  <p className="text-sm text-gray-600">{language === 'zh' && zh ? zh.headline : output.headline}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
