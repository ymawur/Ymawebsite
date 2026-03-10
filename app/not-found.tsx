import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { LangText } from '@/components/LangText'

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <div className="mb-8"><span className="text-8xl font-bold text-gray-200">404</span></div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4"><LangText en="Page not found" zh="页面未找到" /></h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto"><LangText en="Sorry, we could not find the page you are looking for." zh="抱歉，未找到您访问的页面。" /></p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/"><LangText en="Go home" zh="返回首页" /></Button>
          <Button href="/blog" variant="secondary"><LangText en="Read blog" zh="查看博客" /></Button>
        </div>
      </Container>
    </section>
  )
}
