'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/atoms/button'
import { Logo, Menu } from '@/components/atoms/icons'
import InvestButton from '@/components/atoms/invest-button'
import { cn } from '@/utils/utils'

import { navs } from './constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed z-50 flex w-full flex-col bg-white px-4 py-1.5 text-sm shadow-lg md:px-8">
      <div className="flex justify-between">
        <Logo className="w-44 md:w-48" />
        <ul className="hidden items-center gap-4 lg:flex xl:gap-8">
          {navs.map((nav, key) => (
            <li
              key={key}
              className="font-nunito text-sm text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
          <div className="flex gap-3 xl:gap-6">
            <Button variant="outlined" className="h-10">
              <Link href="/faq">FAQ</Link>
            </Button>
            <InvestButton color="default" className="h-10" />
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
          {navs.map((nav, key) => (
            <li
              key={key}
              className="py-4 font-nunito text-sm text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
          <li className="flex justify-between" onClick={() => setIsOpen(false)}>
            <Button variant="outlined">
              <Link href="/faq">FAQ</Link>
            </Button>
            <InvestButton color="default" />
          </li>
        </ul>
      </div>
    </div>
  )
}
