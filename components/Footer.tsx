'use client'

import React from 'react'
import { useLanguage } from './LanguageProvider'

const socialLinks = [
  { label: 'GitLab', href: 'https://git.wur.nl/yizhou.ma/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ybenma/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LTcsUgcAAAAJ&hl=en' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            &copy; {currentYear} Yizhou Ma (马逸舟). {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-700">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
