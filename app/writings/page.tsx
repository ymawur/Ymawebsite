'use client'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { useLanguage } from '@/components/LanguageProvider'

export default function WritingsPage() {
  const { language } = useLanguage()
  const isZh = language === 'zh'

  return (
    <>
      <section className="py-12 bg-accent-50/50">
        <Container>
          <p className="text-sm font-medium text-accent-700 mb-3">
            {isZh ? '即将上线' : 'Coming soon'}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '写作' : 'Writings'}
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            {isZh
              ? '这里将收录长篇写作、随笔与网页化文章。HTML 内容准备好后，会整理并发布到这个栏目。'
              : 'A home for long-form writing, essays, and web-native articles. Prepared HTML pieces will be streamlined and published here as they are added.'}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {isZh ? '内容准备区' : 'Content staging area'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {isZh
                ? '请把已经制作好的 HTML 文件放在仓库中的 content/writings-html/ 文件夹。之后可以把它们接入为独立写作页面。'
                : 'Place prepared HTML files in a content/writings-html/ folder in the repository. They can then be connected as individual writing pages.'}
            </p>
            <code className="block rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-800">
              content/writings-html/example-writing.html
            </code>
          </Card>
        </Container>
      </section>
    </>
  )
}
