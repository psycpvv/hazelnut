import React from 'react'

import { cn } from '@/utils/utils'

import { Button } from '../button'

export type InvestButtonProps = {
  color?: 'default' | 'secondary'
  className?: string
}

export default function InvestButton({
  color = 'secondary',
  className,
}: InvestButtonProps) {
  return (
    <Button buttonColor={color} className={cn('w-52', className)}>
      INVEST NOW
    </Button>
  )
}
