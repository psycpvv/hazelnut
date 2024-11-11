'use client'
import { useEffect, useState } from 'react'

import useCalculatorStore from '@/store/calculatorStore'
import { convertNumber, formatCurrency } from '@/utils/utils'

export default function CalculatorInputs() {
  const { tokens, setTokens, tokenPrice } = useCalculatorStore(state => state)
  const [investmentAmount, setInvestmentAmount] = useState(0)
  useEffect(() => {
    setInvestmentAmount(tokens * tokenPrice)
  }, [tokenPrice, tokens])

  return (
    <div className="flex w-full flex-col py-4 md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="">
        <input
          value={tokens}
          onChange={e => setTokens(Math.trunc(Number(e.target.value)))}
          type="text"
          className="w-full rounded-lg border border-solid border-primary px-4 py-0.5 text-center font-nunito text-2xl/9"
        />
        <p className="text-sm">Enter your desired number of Treesury Trees</p>
      </div>
      <div className="py-3 text-center">OR</div>
      <div className="">
        <div className="relative text-2xl/9">
          <input
            value={formatCurrency(investmentAmount)}
            onChange={e =>
              setInvestmentAmount(Math.trunc(convertNumber(e.target.value)))
            }
            onBlur={() => setTokens(Math.trunc(investmentAmount / tokenPrice))}
            type="text"
            className="w-full rounded-lg border border-solid border-primary px-4 py-0.5 text-center font-nunito"
          />
          <span className="absolute left-3.5 top-1">€</span>
        </div>
        <p className="text-sm">Enter your desired investment amount</p>
      </div>
    </div>
  )
}
