import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Typography } from '@/components/atoms/typography'

import Companies from '../companies'

export default function Partners() {
  return (
    <div className="px-4 py-14">
      <div className="flex flex-col gap-4 px-4 pb-12">
        <Typography variant="h2" textColor="primary" className="text-center">
          TREESURY PARTNERS
        </Typography>
      </div>
      <Companies />
    </div>
  )
}
