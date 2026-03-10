'use client'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { useLanguage } from '@/components/LanguageProvider'

export default function CollaboratePage() {
  const { language } = useLanguage()
  return (
    <>
      <section className="py-12 bg-accent-50/50"><Container><h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language==='zh'?'合作':'Collaborate'}</h1></Container></section>
      <section className="py-12"><Container><div className="grid md:grid-cols-2 gap-6"><Card><h2 className="text-xl font-semibold mb-3">{language==='zh'?'高校与研究机构':'Universities & Research Institutes'}</h2><p>{language==='zh'?'欢迎与高校伙伴在食品科学、自动化与AI交叉领域开展开源软硬件合作。':'I collaborate with academic partners to develop open-source software and hardware at the intersection of food science, automation, and artificial intelligence.'}</p></Card><Card><h2 className="text-xl font-semibold mb-3">{language==='zh'?'企业与商业伙伴':'Companies & Commercial Partners'}</h2><p>{language==='zh'?'我与企业合作，将研究转化为可部署的食品开发、加工与质量控制解决方案。':'I work with companies to translate research into practical, deployable solutions for food product development, processing, and quality control.'}</p></Card></div></Container></section>
    </>
  )
}
