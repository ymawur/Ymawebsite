import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-gray-200">404</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we could not find the page you are looking for. It might have been moved or
          deleted.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Go home</Button>
          <Button href="/blog" variant="secondary">
            Read blog
          </Button>
        </div>
      </Container>
    </section>
  )
}
