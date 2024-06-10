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
    <div className="grid gap-4 md:grid-cols-3">
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">BONUS</div>
        <Typography variant="subtitle2">Total Acquired Trees</Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatNumber(totalTokens())}
          <div className="text-base">
            {bonusTokens()
              ? `(Including ${formatNumber(bonusTokens())} Bonus Trees)`
              : ''}
          </div>
        </div>
        <Typography variant="subtitle2" textColor="primary">
          Obtained Bonus Amount
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{formatNumber(bonusAmount())}
        </div>
        <Typography variant="subtitle2" textColor="primary">
          Effective Price per Tree
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{discountedTokenPrice()}
        </div>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">RETURN</div>
        <Typography variant="subtitle2">
          Average Annual Yield (40 years)
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {yieldAveragePerYear40Years()}%
        </div>
        <Typography variant="subtitle2" textColor="primary">
          Total Investment Return (40 yrs)
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          €{formatDisplayNumber(Math.trunc(totalReturn40()))}
        </div>
        <Typography variant="subtitle2" textColor="primary">
          Payback Period
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {paybackYears()} years
        </div>
      </div>
      <div className="h-full rounded-2xl border border-solid border-[rgba(49,70,140,0.3)] p-5">
        <div className="pb-5 font-nunito text-[22px] text-primary">
          CARBON CREDITS
        </div>
        <Typography variant="subtitle2">
          Total CO<sub>2</sub> Captured (40 yrs)
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatDisplayNumber(totalCo240YearsMt())} t
        </div>
        <Typography variant="subtitle2" textColor="primary">
          Average Annual CO<sub>2</sub> Captured
        </Typography>
        <div className="pb-4 font-nunito text-[22px] text-primary">
          {formatDisplayNumber(totalCo2AveragePerYearMt())} t
        </div>
      </div>
    </div>
  )
}
