import { WritingsPageClient } from './WritingsPageClient'
import { getAllWritings } from '@/lib/writings'

export const metadata = {
  title: 'Writings',
  description: 'Long-form essays and web-native pieces by Yizhou Ma.',
}

export default function WritingsPage() {
  const writings = getAllWritings()

  return <WritingsPageClient writings={writings} />
}
