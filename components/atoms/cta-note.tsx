'use client'

import { cn } from '@/utils/utils'

export default function CtaNote({
  note,
  className,
}: {
  note: string
  className?: string
}) {
  return (
    <div className={cn('pt-6 text-center font-light md:text-lg', className)}>
      {note}
    </div>
  )
}
