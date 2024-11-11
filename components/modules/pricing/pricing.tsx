import { Hazelnut } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'

import Ctas from '../ctas'

export default function Pricing(data: Partial<Sanity.Pricing>) {
  return (
    <div className="container flex flex-col items-center justify-center px-3 py-8">
      <Typography
        variant="h2"
        textColor="primary"
        className="px-3 pb-12 text-center"
      >
        {data.title}
      </Typography>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24">
          <div>
            <div className="relative flex h-[134px] items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                {data.earlyPrice}
              </div>
              <Hazelnut className="absolute left-[50%] top-0 w-[150px] -translate-x-1/2" />
            </div>
            <Typography variant="h3" textColor="primary" className="pt-3">
              EARLY BIRD PRICE *
            </Typography>
          </div>
          <div>
            <div className="relative flex h-[134px] items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                {data.regularPrice}
              </div>
              <Hazelnut
                className="absolute left-[50%] top-0 w-[150px] -translate-x-1/2"
                fill="#7C7F33"
              />
            </div>
            <Typography variant="h3" textColor="primary" className="pt-3">
              REGULAR PRICE
            </Typography>
          </div>
        </div>
      </div>
      {data.cta?.length && <Ctas cta={data.cta} />}

      <Typography variant="text">{data.subtitle}</Typography>
      <Typography variant="text">{data.note}</Typography>
    </div>
  )
}
