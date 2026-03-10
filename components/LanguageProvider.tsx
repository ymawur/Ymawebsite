'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'zh' | 'en'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  useEffect(() => {
    const stored = window.localStorage.getItem('site-language') as Language | null
    const next = stored === 'en' || stored === 'zh' ? stored : 'zh'
    setLanguage(next)
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  }, [])

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh')),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
