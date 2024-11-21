import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Typography } from '@/components/atoms/typography'
import { urlFor } from '@/sanity/utils/image-builder'

export default function ItemsWithImage(data: Partial<Sanity.ItemsWithImage>) {
  return (
    <div className="container mx-auto grid px-4 py-12 lg:grid-cols-2 lg:items-center lg:justify-center">
      <div className="flex flex-col gap-7 md:px-6">
        <Typography variant="h2" textColor="primary" className="uppercase">
          {data.title}
        </Typography>
        {data.items?.length && (
          <div className="grid grid-cols-1 gap-6 text-lg md:grid-cols-2">
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
                <div className="-translate-y-1.5">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <img
        src={urlFor(data.image?.asset!).width(752).url()}
        alt="bush only new"
        className="order-first pb-10 md:order-none"
      />
    </div>
  )
}
