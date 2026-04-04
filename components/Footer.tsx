'use client'

import React from 'react'
import { useLanguage } from './LanguageProvider'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-600">
            &copy; {currentYear} Yizhou Ma (马逸舟). {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  )
}
