const FALLBACK_SITE_URL = 'https://yizhouma.me'

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!configuredUrl) {
    return FALLBACK_SITE_URL
  }

  return configuredUrl.replace(/\/$/, '')
}
