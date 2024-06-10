'use client'
import useInvestStore from '@/store/investStore'

import { Button } from '../button'

export type InvestButtonProps = {
  color?: 'default' | 'secondary'
  className?: string
}

export default function InvestButton({
  color = 'secondary',
  className,
}: InvestButtonProps) {
  const setIsOpen = useInvestStore(state => state.setIsOpen)
  return (
    <Button
      buttonColor={color}
      className={className}
      onClick={() => setIsOpen(true)}
    >
      INVEST NOW
    </Button>
  )
}
