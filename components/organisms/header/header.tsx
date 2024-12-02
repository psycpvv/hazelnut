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
        <Link href="/">
          <Logo className="h-14 md:h-16" />
        </Link>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {header.menu.map(nav => (
            <li
              key={nav._key}
              className="font-nunito text-sm text-primary xl:text-base"
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
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Menu />
        </button>
      </div>
      <div
        className={cn(
          'overflow-hidden transition-all duration-500',
          isOpen ? 'h-[440px]' : 'h-0',
        )}
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
