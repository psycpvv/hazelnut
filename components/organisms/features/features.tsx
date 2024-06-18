import Image from 'next/image'
import { PortableText } from 'next-sanity'

import PortableListComponent from '@/components/atoms/portable-list-component'
import { Typography } from '@/components/atoms/typography'
import { type Features } from '@/sanity/queries/pages/home.query'

type FeaturesProps = { data: Features }
export default function Features({ data }: FeaturesProps) {
  return (
    <div className="container grid px-4 py-12 md:grid-cols-2 md:items-center md:justify-center">
      <Image
        src={data.image.url}
        width={data.image.metadata.dimensions.width}
        height={data.image.metadata.dimensions.height}
        alt="bush only new"
        className="pb-10 md:order-last"
      />
      <div className="flex flex-col gap-7 px-6">
        <Typography variant="h2" textColor="primary">
          {data.title}
        </Typography>
        <div className="[&>ul]:grid [&>ul]:gap-6 [&>ul]:text-[18px]/6 [&>ul]:md:grid-cols-2 [&>ul]:md:text-2xl">
          <PortableText
            value={data.description}
            components={PortableListComponent}
          />
        </div>
      </div>
    </div>
  )
}
