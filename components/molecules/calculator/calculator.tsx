import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'

import CalcInfo from './calc-info'
import CalculatorInputs from './calculator-inputs'
import CalculatorPanel from './calculator-panel'
import CalculatorSlider from './calculator-slider'
import Chart1 from './chart1'
import Chart2 from './chart2'

export default function Calculator() {
  return (
    <div className="px-6">
      <div className="w-full py-12">
        <div className="flex flex-col font-nunito text-xs text-white">
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
          className="px-3 pt-8 text-center"
        >
          AVAILABLE FOR RESERVATION: 450*
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
        <CalcInfo />
        <div className="flex flex-col items-center justify-center gap-4">
          <CalculatorInputs />
          <div className="w-full">
            <CalculatorSlider />
          </div>
          <div className="w-full">
            <CalculatorPanel />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-8">
        <Chart1 />
        <Chart2 />
      </div>

      <div className="flex flex-col">
        <div className="mx-auto my-10">
          <InvestButton className="w-52" />
        </div>

        <Typography variant="text" className="pb-20">
          The investment calculator provided on this website is intended for
          informational purposes only. The calculations generated by the
          investment calculator are based on various data sources, including
          third-party information and data collected by Treesury. However,
          Treesury does not guarantee the accuracy, completeness, or reliability
          of the calculations or the underlying data.The investment calculator
          is designed to provide users with an estimate of potential investment
          returns, but it should not be considered as financial or investment
          advice. The calculations are subject to inherent limitations and
          assumptions, and actual investment results may vary. Calculated
          offsets are based on a Treesury Tree lifetime of forty years.
          <br />
          <br />
          Treesury strives to include data from what we believe to be reputable
          sources. However, we cannot guarantee the accuracy or timeliness of
          the data provided by third parties. Users are advised to independently
          verify any information or data before making any investment
          decisions.The results generated by the investment calculator should
          not be considered as a guarantee of future investment performance or
          as a recommendation to invest in any specific investment opportunity.
          The calculator does not take into account individual financial
          circumstances, risk tolerance, or investment objectives. Users should
          carefully consider their own financial situation and consult with a
          qualified financial advisor before making any investment decisions.
          <br />
          <br />
          Treesury disclaims any liability for any loss or damage arising from
          the use of the investment calculator or reliance on its results. Users
          use the calculator at their own risk and understand that the
          calculations are provided on an &quot;as-is&quot; basis without any
          warranties, express or implied. By using the investment calculator,
          users acknowledge and agree that the calculations are for
          informational purposes only and do not constitute financial or
          investment advice. Users are solely responsible for any investment
          decisions they make based on the calculator&apos;s results.
          <br />
          <br />
          This disclaimer applies to the investment calculator and its use on
          the Treesury website.
        </Typography>
      </div>
    </div>
  )
}
