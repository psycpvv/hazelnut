import { Typography } from '@/components/atoms/typography'

export default function CalculatorBlue() {
  return (
    <div className="w-full bg-primary px-3 py-14 text-white">
      <div className="container flex flex-col items-center gap-4">
        <Typography variant="h2" className="text-center">
          INVESTMENT PLANNER
        </Typography>
        <Typography variant="subtitle1" className="text-center">
          By choosing the desired number of Treesury Trees or entering the total
          investment amount in our investment calculator, you can calculate the
          potential return and quantify the positive impact your investment is
          going to generate. You have the option to input the values manually,
          or use the slider.
        </Typography>
      </div>
    </div>
  )
}
