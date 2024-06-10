'use client'
import useInvestStore from '@/store/investStore'

import { Button } from '../button'
import { ButtonProps } from '../button/button'

export default function InvestButton(props: ButtonProps) {
  const setIsOpen = useInvestStore(state => state.setIsOpen)
  return (
    <Button {...props} onClick={() => setIsOpen(true)}>
      INVEST NOW
    </Button>
  )
}
