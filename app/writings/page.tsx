import { WritingsPageClient } from './WritingsPageClient'
import { getAllWritings } from '@/lib/writings'

export default function WritingsPage() {
  const writings = getAllWritings()

  return <WritingsPageClient writings={writings} />
}
