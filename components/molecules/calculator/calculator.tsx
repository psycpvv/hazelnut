import { Typography } from '@/components/atoms/typography'

import CalcImage from './calc-image'
import CalculatorInputs from './calculator-inputs'
import CalculatorPanel from './calculator-panel'
import CalculatorSlider from './calculator-slider'
import Chart1 from './chart1'
import Chart2 from './chart2'

export default function Calculator() {
  return (
    <div className="px-6">
      <div className="w-full py-12">
        <div className="font-nunito flex flex-col px-8 text-xs text-white">
          <div className="relative flex h-[46px] w-full items-center justify-end rounded-full bg-secondary">
            <div className="px-4">28.301</div>
            <div className="absolute left-0 top-0 flex h-[46px] w-[24%] items-center justify-center rounded-full bg-primary">
              1.444 <br /> (5.1%)
            </div>
          </div>
        </div>
        <Typography
          variant="h4"
          textColor="primary"
          className="px-6 pt-8 text-center"
        >
          AVAILABLE FOR <br /> RESERVATION: 450*
        </Typography>
        <Typography
          variant="subtitle1"
          textColor="primary"
          className="px-6 text-center"
        >
          * Reserved trees are lorem ipsum ipsum
        </Typography>
      </div>
      <div className="flex flex-col">
        <CalcImage />
        <div className="flex flex-col items-center justify-center">
          <CalculatorInputs />
          <div className="w-full">
            <CalculatorSlider />
          </div>
          <div className="w-full">
            <CalculatorPanel />
          </div>
        </div>
      </div>

      <Chart1 />
      <Chart2 />
    </div>
  )
}
