'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/atoms/button'
import Drawer from '@/components/atoms/drawer'
import { Logo, Menu } from '@/components/atoms/icons'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed z-50 flex w-full flex-col gap-4 bg-white px-4 py-1.5 text-sm">
      <div className="flex justify-between">
        <Logo className="w-44" />
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </div>
      <ul className="flex hidden flex-col">
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="/">HOME</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#services">HOW IT WORKS</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#calculator">CALCULATOR</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#about">ABOUT</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#roadmap">ROADMAP</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#contact">CONTACT</a>
        </li>
        <li
          className="font-nunito py-4 text-sm text-primary"
          onClick={() => setIsOpen(false)}
        >
          <a href="#esc-white">WHITEPAPER</a>
        </li>
        <li className="flex justify-between">
          <Button variant="outlined">
            <Link href="/faq">FAQ</Link>
          </Button>
          <Button>INVEST NOW</Button>
        </li>
      </ul>
    </div>
  )
}
