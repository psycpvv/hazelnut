import { Typography } from '@/components/atoms/typography'
import { CommonSection } from '@/sanity/types'

type CalculatorBlueProps = { data: CommonSection }

export default function CalculatorBlue({ data }: CalculatorBlueProps) {
  return (
    <div className="w-full bg-primary px-3 py-14 text-white">
      <div className="container flex flex-col items-center gap-4">
        <Typography variant="h2" className="text-center">
          {data.title}
        </Typography>
        <Typography variant="subtitle1" className="text-center">
          {data.subtitle}
        </Typography>
      </div>
    </div>
  )
}
