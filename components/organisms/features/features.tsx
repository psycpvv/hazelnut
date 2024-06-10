import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function Features() {
  return (
    <div className="container grid px-4 py-12 md:grid-cols-2 md:items-center md:justify-center">
      <Image
        src="/assets/img/zdravi-lesnici.jpg"
        width={1500}
        height={1176}
        alt="bush only new"
        className="pb-10 md:order-last"
      />
      <div className="flex flex-col gap-7 px-6">
        <Typography variant="h2" textColor="primary">
          FEATURES
        </Typography>
        <div className="grid gap-6 text-[18px]/6 md:grid-cols-2 md:text-2xl">
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              We plant, grow, harvest and sell. You collect returns.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Prioritized investor return backed by long-term partnerships with
              supply chain buyers.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Stable historical sector performance coupled with favorable
              projected trends.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Tree insurance with a replanting guarantee.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Implementing precision agriculture for increased yields and a
              positive carbon footprint.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Operational transparency facilitated by blockchain technology.
            </div>
          </div>
          <div className="flex gap-2.5 font-light items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={25}
                className="text-secondary"
              />
            </div>
            <div className="-translate-y-1.5">
              Streamlined investment into real-world assets through tokenized
              securities.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
