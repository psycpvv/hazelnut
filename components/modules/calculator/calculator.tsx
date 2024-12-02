'use client'
import { PortableText } from 'next-sanity'
import { useEffect } from 'react'

import { Typography } from '@/components/atoms/typography'
import useCalculatorStore from '@/store/calculatorStore'

import Ctas from '../ctas'
import CalcInfo from './calc-info'
import CalculatorInputs from './calculator-inputs'
import CalculatorPanel from './calculator-panel'
import CalculatorSlider from './calculator-slider'
import Chart1 from './chart1'
import Chart2 from './chart2'

export default function Calculator(data: Partial<Sanity.Calculator>) {
  const { setTokenPrice } = useCalculatorStore(state => state)
  useEffect(() => {
    setTokenPrice(data.basePrice!)
  }, [data.basePrice, setTokenPrice])

  return (
    <div className="container relative mx-auto px-6">
      <div
        className="absolute -top-[73px] md:-top-[79px]"
        id="calculator"
      ></div>
      <div className="flex flex-col pt-20 md:flex-row md:gap-8">
        <CalcInfo />
        <div className="flex flex-col items-center justify-center gap-4 md:w-2/3">
          <CalculatorInputs />
          <div className="mt-6 w-full">
            <CalculatorSlider />
          </div>
          <div className="w-full">
            <CalculatorPanel />
          </div>
        </div>
      </div>
      <div className="grid gap-8 py-16 md:grid-cols-2">
        <Chart1 />
        <Chart2 />
      </div>

      <div className="flex flex-col">
        {data.cta?.length && (
          <div className="mx-auto my-5">
            <Ctas cta={data.cta} />
          </div>
        )}
        {data.note && (
          <Typography variant="subtitle2" className="text-center">
            {data.note}
          </Typography>
        )}

        {data.description && (
          <Typography variant="text" className="pb-20 pt-10">
            <PortableText value={data.description} />
          </Typography>
        )}
      </div>
    </div>
  )
}
