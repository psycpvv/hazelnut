import { Typography } from '@/components/atoms/typography'

export default function CalculatorBlue() {
  return (
    <div className="flex w-full flex-col gap-4 bg-primary px-3 py-14 text-white">
      <Typography variant="h2" className="text-center">
        INVESTMENT PLANNER
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        By choosing the desired number of Treesury Trees or entering the total
        investment amount in our investment calculator, you can calculate the
        potential return and quantify the positive impact your investment is
        going to generate. You have the option to input the values manually, or
        use the slider.
      </Typography>
    </div>
  )
}
