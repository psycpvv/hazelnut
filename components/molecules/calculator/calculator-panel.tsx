'use client'
import { Typography } from '@/components/atoms/typography'
import useCalculatorStore from '@/store/calculatorStore'
import { formatDisplayNumber, formatNumber } from '@/utils/utils'

export default function CalculatorPanel() {
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
    <div className="col-span-3 grid gap-4">
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <Typography variant="h3" textColor="primary" className="pb-5">
          BONUS
        </Typography>
        <Typography variant="subtitle2">Total Acquired Trees</Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          {formatNumber(totalTokens())}
          <div className="text-base">
            {bonusTokens()
              ? `(Including ${formatNumber(bonusTokens())} Bonus Trees)`
              : ''}
          </div>
        </Typography>
        <Typography variant="subtitle2" textColor="primary">
          Obtained Bonus Amount
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          €{formatNumber(bonusAmount())}
        </Typography>
        <Typography variant="subtitle2" textColor="primary">
          Effective Price per Tree
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          €{discountedTokenPrice()}
        </Typography>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <Typography variant="h3" textColor="primary" className="pb-5">
          RETURN
        </Typography>
        <Typography variant="subtitle2">
          Average Annual Yield (40 years)
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          {yieldAveragePerYear40Years()}%
        </Typography>
        <Typography variant="subtitle2" textColor="primary">
          Total Investment Return (40 yrs)
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          €{formatDisplayNumber(Math.trunc(totalReturn40()))}
        </Typography>
        <Typography variant="subtitle2" textColor="primary">
          Payback Period
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          {paybackYears()} years
        </Typography>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <Typography variant="h3" textColor="primary" className="pb-5">
          CARBON CREDITS
        </Typography>
        <Typography variant="subtitle2">
          Total CO<sub>2</sub> Captured (40 yrs)
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          {formatDisplayNumber(totalCo240YearsMt())} t
        </Typography>
        <Typography variant="subtitle2" textColor="primary">
          Average Annual CO<sub>2</sub> Captured
        </Typography>
        <Typography variant="h3" textColor="primary" className="pb-4">
          {formatDisplayNumber(totalCo2AveragePerYearMt())} t
        </Typography>
      </div>
    </div>
  )
}
