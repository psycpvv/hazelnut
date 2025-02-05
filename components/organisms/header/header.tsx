'use client'
import { useState } from 'react'

import { Logo, Menu } from '@/components/atoms/icons'
import LanguageButton from '@/components/atoms/language-button'
import Ctas from '@/components/modules/ctas'
import { Link } from '@/i18n/routing'
import { cn } from '@/utils/utils'

export default function Header(header: Sanity.Layout['header']) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed z-50 flex w-full flex-col bg-white px-4 py-1.5 text-sm shadow-lg md:px-8">
      <div className="flex justify-between">
        <Link href="/" aria-label="Home">
          <Logo className="h-14 md:h-16" />
        </Link>

        <ul className="hidden items-center gap-3 lg:flex 2xl:gap-6">
          {header.menu.map(nav => (
            <li
              key={nav._key}
              className="font-nunito text-sm text-primary 2xl:text-base"
              onClick={() => setIsOpen(false)}
            >
              <Link href={nav.link} target={nav.newTab ? '_blank' : '_self'}>
                {nav.title}
              </Link>
            </li>
          ))}
          <div className="flex gap-3 xl:gap-4">
            <LanguageButton />
            {header.cta?.length && <Ctas cta={header.cta} />}
          </div>
        </ul>
        <div className="flex items-center gap-6 lg:hidden">
          <LanguageButton />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={cn('overflow-hidden transition-all duration-500')}
        style={{
          height: isOpen ? 78 + 52 * header.menu.length : 0,
        }}
      >
        <ul className="flex flex-col py-4">
          {header.menu.map(nav => (
            <li
              key={nav._key}
              className="py-4 font-nunito text-sm text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Link href={nav.link} target={nav.newTab ? '_blank' : '_self'}>
                {nav.title}
              </Link>
            </li>
          ))}
          {header.cta?.length && (
            <li
              className="flex justify-between"
              onClick={() => setIsOpen(false)}
            >
              <Ctas cta={header.cta} />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
