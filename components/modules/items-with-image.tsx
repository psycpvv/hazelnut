import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getImageDimensions } from '@sanity/asset-utils'
import { Image } from 'next-sanity/image'

import { Typography } from '@/components/atoms/typography'
import { urlFor } from '@/sanity/utils/image-builder'

export default function ItemsWithImage(data: Partial<Sanity.ItemsWithImage>) {
  return (
    <div className="container mx-auto grid px-4 py-12 lg:grid-cols-2 lg:items-center lg:justify-center">
      <div className="flex flex-col gap-7 md:gap-12 md:px-6">
        <Typography variant="h2" textColor="primary" className="uppercase">
          {data.title}
        </Typography>
        {data.items?.length && (
          <div className="grid grid-cols-1 gap-6 text-[18px] md:grid-cols-2 md:text-xl 2xl:text-2xl">
            {data.items.map((item, index) => (
              <div
                className="flex gap-2.5 font-light items-first-baseline"
                key={index}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  width={25}
                  className="text-secondary"
                />
                <div className="-translate-y-1 md:-translate-y-1.5">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {data.image && (
        <Image
          src={urlFor(data.image).url()}
          width={644}
          height={644 / getImageDimensions(data.image).aspectRatio}
          alt="bush only new"
          className="order-first pb-10 md:order-none"
          loading="lazy"
        />
      )}
    </div>
  )
}
