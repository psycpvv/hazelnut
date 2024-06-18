import Image from 'next/image'
import { PortableText } from 'next-sanity'

import PortableSmallListComponent from '@/components/atoms/portable-small-list-component'
import { Typography } from '@/components/atoms/typography'
import { type TrackRecord } from '@/sanity/queries/pages/home.query'

type TrackRecordProps = { data: TrackRecord }

export default function TrackRecord({ data }: TrackRecordProps) {
  return (
    <div className="container grid px-4 py-14 lg:grid-cols-2 lg:gap-8">
      <div>
        <div className="flex flex-col gap-4 px-4 pb-12 text-center">
          <Typography variant="h2" textColor="primary">
            {data.title}
          </Typography>
          <Typography variant="subtitle1">{data.subtitle}</Typography>
        </div>
        <div className="[&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3">
          <PortableText
            value={data.description}
            components={PortableSmallListComponent}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 pt-10 md:flex-row md:px-8">
        <Image
          src="/assets/img/Inspire-Challenge-design-1024x857.png"
          width={200}
          height={167}
          alt="favicon"
          className="md:w-1/2"
        />
        <Image
          src="/assets/img/download__2_-removebg-preview.png"
          width={200}
          height={69}
          alt="favicon"
          className="md:w-1/2"
        />
      </div>
    </div>
  )
}
