'use client'

import { useTranslations } from 'next-intl'
import { useDebouncedCallback } from 'use-debounce'

import useCalculatorStore from '@/store/calculatorStore'
import { convertNumber, formatCurrency } from '@/utils/utils'

export default function CalculatorInputs() {
  const t = useTranslations('Modules.calculator')
  const {
    tokens,
    setTokens,
    tokenPrice,
    investmentAmount,
    setInvestmentAmount,
  } = useCalculatorStore(state => state)
  const investmentAmountOnChangeHandler = useDebouncedCallback(
    (investmentAmount: number) => {
      const newTokens = Math.trunc(investmentAmount / tokenPrice)
      setTokens(newTokens)
      setInvestmentAmount(formatCurrency(newTokens * tokenPrice))
    },
    1500,
  )

  return (
    <div className="flex w-full flex-col py-4 md:flex-row md:items-center md:justify-between md:gap-6">
      <div>
        <input
          value={tokens || ''}
          onChange={e => {
            const token = Math.trunc(Number(e.target.value))
            setTokens(token)
            setInvestmentAmount(formatCurrency(token * tokenPrice))
          }}
          type="text"
          className="w-full rounded-lg border border-solid border-primary px-4 py-0.5 text-center font-nunito text-2xl/9"
        />
        <p className="text-sm">
          {t('enter-your-desired-number-of-treesury-trees')}
        </p>
      </div>
      <div className="py-3 text-center">{t('or')}</div>
      <div>
        <div className="relative text-2xl/9">
          <input
            value={investmentAmount === '0.00' ? '' : investmentAmount}
            onChange={e => {
              const value = convertNumber(e.target.value)
              setInvestmentAmount(value + '')
              investmentAmountOnChangeHandler(value)
            }}
            type="text"
            className="w-full rounded-lg border border-solid border-primary px-4 py-0.5 text-center font-nunito"
          />
          {investmentAmountOnChangeHandler.isPending() && (
            <div className="absolute right-3.5 top-2 flex justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            </div>
          )}
          <span className="absolute left-3.5 top-1">€</span>
        </div>
        <p className="text-sm">{t('enter-your-desired-investment-amount')}</p>
      </div>
    </div>
  )
}
