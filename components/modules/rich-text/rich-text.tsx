import { Typography } from '@/components/atoms/typography'

import Ctas from '../ctas'

export default function RichText(data: Partial<Sanity.RichText>) {
  return (
    <div className="container relative flex w-full flex-col gap-4 px-4 py-14">
      <div className="absolute -top-[73px] md:-top-[79px]" id="esc-white"></div>
      <Typography variant="h2" textColor="primary" className="text-center">
        {data.title}
      </Typography>
      {data.subtitle && (
        <Typography variant="subtitle1" className="text-center">
          {data.subtitle}
        </Typography>
      )}

      {data.cta?.length && (
        <div className="flex w-full justify-between gap-8 py-8 md:justify-center">
          <Ctas cta={data.cta} />
        </div>
      )}
    </div>
  )
}
