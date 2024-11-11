import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function TextWithImage(data: Partial<Sanity.TextWithImage>) {
  return (
    <div className="relative flex w-full flex-col gap-20 pb-8">
      <div className="flex w-full flex-col items-center">
        <div className="container grid md:grid-cols-2">
          <div className="px-4">
            {data.image && <Image {...data.image} alt="bush only new" />}
          </div>
          <div className="flex flex-col gap-4 px-4">
            <Typography
              variant="h3"
              textColor="primary"
              className="font-roboto"
            >
              {data.title}
            </Typography>
            <Typography variant="subtitle1">{data.title}</Typography>
            {data.note && <Typography variant="text">{data.note}</Typography>}
          </div>
        </div>
      </div>
    </div>
  )
}
