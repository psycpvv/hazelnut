import Link from 'next/link'
import React from 'react'

import { Typography } from '@/components/atoms/typography'

export default function FaqTitle() {
  return (
    <div className="flex w-full flex-col bg-primary py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center text-white">
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <Typography variant="subtitle1">
          If you haven’t found an answer to your question,
          <br />
          <Link href="/#contact" className="underline">
            contact us
          </Link>
        </Typography>
      </div>
    </div>
  )
}
