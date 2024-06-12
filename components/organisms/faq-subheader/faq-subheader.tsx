import Link from 'next/link'
import React from 'react'

import { categories } from './constants'

export default function FaqSubheader() {
  return (
    <div className="container flex flex-col items-center px-3 py-10">
      <input
        type="search"
        className="w-full max-w-[500px] rounded-sm border px-4 py-2.5 text-lg outline-none"
        placeholder="Search..."
      />
      <div className="py-10 text-white">
        <div className="grid w-full grid-cols-2 gap-2 md:flex md:justify-center md:gap-4">
          {categories.map((category, key) => (
            <Link
              key={key}
              href={category.href}
              className="flex h-[50px] w-full items-center justify-center rounded-lg bg-primary px-4 text-center font-bold md:h-auto md:w-auto md:px-2.5 md:py-1"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
