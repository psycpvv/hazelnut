import Image from 'next/image'

import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'
import { type Income } from '@/sanity/queries/pages/home.query'

type IncomeProps = { data: Income }
export default function Income({ data }: IncomeProps) {
  return (
    <div className="flex w-full flex-col items-center bg-primary py-16">
      <div className="container grid items-center justify-center px-8 lg:grid-cols-2">
        <Image
          src={data.image.url}
          width={data.image.metadata.dimensions.width}
          height={data.image.metadata.dimensions.height}
          alt="bush only new"
          className="w-full px-12 pb-10"
        />
        <div className="lg flex flex-col gap-5">
          <Typography variant="h2" textColor="white">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" textColor="white">
            {data.subtitle}
          </Typography>
          <InvestButton className="mt-8 w-full" buttonColor="secondary" />
        </div>
      </div>
    </div>
  )
}
