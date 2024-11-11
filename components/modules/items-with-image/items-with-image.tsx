import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function ItemsWithImage(data: Partial<Sanity.ItemsWithImage>) {
  return (
    <div className="container grid px-4 py-12 md:grid-cols-2 md:items-center md:justify-center">
      <Image
        {...data.image!}
        alt="bush only new"
        className="pb-10 md:order-last"
      />
      <div className="flex flex-col gap-7 px-6">
        <Typography variant="h2" textColor="primary">
          {data.title}
        </Typography>
        {data.items?.length && (
          <div className="[&>ul]:grid [&>ul]:gap-6 [&>ul]:text-[18px]/6 [&>ul]:md:grid-cols-2 [&>ul]:md:text-2xl">
            {data.items.map((item, index) => (
              <div
                className="flex gap-2.5 font-light items-first-baseline"
                key={index}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    width={25}
                    className="text-secondary"
                  />
                </div>
                <div className="-translate-y-1.5">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
