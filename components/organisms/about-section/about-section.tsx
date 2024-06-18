import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'
import { type AboutSection } from '@/sanity/queries/pages/home.query'

type AboutSectionProps = { data: AboutSection }

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <div className="relative flex w-full flex-col gap-20 pb-8">
      <div className="absolute -top-[73px] md:-top-[79px]" id="about"></div>
      <div className="flex flex-col items-center justify-center bg-primary px-4 py-16 text-center">
        <Typography
          variant="h3"
          textColor="white"
          className="md:w-2/3 md:text-4xl"
        >
          {data.caption}
        </Typography>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="container grid md:grid-cols-2">
          <div className="px-4">
            <Image
              src={data.image.url}
              width={data.image.metadata.dimensions.width}
              height={data.image.metadata.dimensions.height}
              alt="bush only new"
            />
          </div>
          <div className="flex flex-col gap-4 px-4">
            <Typography
              variant="h3"
              textColor="primary"
              className="font-roboto"
            >
              {data.title}
            </Typography>
            <Typography variant="subtitle1">{data.subtitle}</Typography>
            <Typography variant="text">{data.hint}</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
