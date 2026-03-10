'use client'

import { useLanguage } from './LanguageProvider'

export function LangText({ en, zh }: { en: string; zh: string }) {
  const { language } = useLanguage()
  return <>{language === 'zh' ? zh : en}</>
}
