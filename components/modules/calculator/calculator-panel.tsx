'use client'
import { useTranslations } from 'next-intl'

import { Typography } from '@/components/atoms/typography'
import useCalculatorStore from '@/store/calculatorStore'
import { formatDisplayNumber, formatNumber } from '@/utils/utils'

export default function CalculatorPanel() {
  const t = useTranslations('Modules.calculator')
  const {
    bonusTokens,
    totalTokens,
    bonusAmount,
    discountedTokenPrice,
    totalReturn40,
    yieldAveragePerYear40Years,
    paybackYears,
    totalCo240YearsMt,
    totalCo2AveragePerYearMt,
  } = useCalculatorStore(state => state)
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">
          {t('bonus')}
        </div>
        <Typography variant="subtitle2">{t('total-acquired-trees')}</Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatNumber(totalTokens())}
          <div className="text-base">
            {bonusTokens()
              ? `(Including ${formatNumber(bonusTokens())} Bonus Trees)`
              : ''}
          </div>
        </div>
        <Typography variant="subtitle2">
          {t('obtained-bonus-amount')}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{formatNumber(bonusAmount())}
        </div>
        <Typography variant="subtitle2">
          {t('effective-price-per-tree')}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{discountedTokenPrice()}
        </div>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">
          {t('return')}
        </div>
        <Typography variant="subtitle2">
          {t('average-annual-yield-40-years')}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {yieldAveragePerYear40Years()}%
        </div>
        <Typography variant="subtitle2">
          {t('total-investment-return-40-yrs')}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{formatDisplayNumber(Math.trunc(totalReturn40()))}
        </div>
        <Typography variant="subtitle2">{t('payback-period')}</Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {paybackYears()} {t('years')}
        </div>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">
          {t('carbon-credits')}
        </div>
        <Typography variant="subtitle2">
          {t.rich(
            'total-co-less-than-sub-greater-than-2-less-than-sub-greater-than-captured-40-yrs',
            {
              sub: chunks => <sub>{chunks}</sub>,
            },
          )}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatDisplayNumber(totalCo240YearsMt())} t
        </div>
        <Typography variant="subtitle2">
          {t.rich(
            'average-annual-co-less-than-sub-greater-than-2-less-than-sub-greater-than-captured',
            {
              sub: chunks => <sub>{chunks}</sub>,
            },
          )}
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatDisplayNumber(totalCo2AveragePerYearMt())} t
        </div>
      </div>
    </div>
  )
}
