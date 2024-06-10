import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function TrackRecord() {
  return (
    <div className="container grid px-4 py-14 lg:grid-cols-2 lg:gap-8">
      <div>
        <div className="flex flex-col gap-4 px-4 pb-12 text-center">
          <Typography variant="h2" textColor="primary">
            PROVEN TRACK RECORD
          </Typography>
          <Typography variant="subtitle1">
            We are a team of industry professionals, focused on identifying
            acquiring and managing specialized hazelnut investments across the
            agricultural sector. We are committed to providing our customers
            with easy and simple access to the agri asset class, as well as the
            technology they need to buy, sell, and monitor their investments on
            their journey to financial success.
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2.5 text-base/6 items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={16}
                className="text-secondary"
              />
            </div>
            <div>
              10,000 ha intensive high-yield hazelnut orchards developed
            </div>
          </div>
          <div className="flex gap-2.5 text-base/6 items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={16}
                className="text-secondary"
              />
            </div>
            <div>Award winning AgTech AI solutions</div>
          </div>
          <div className="flex gap-2.5 text-base/6 items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={16}
                className="text-secondary"
              />
            </div>
            <div>EUR50M+ private equity investments in agribusinesses</div>
          </div>
          <div className="flex gap-2.5 text-base/6 items-first-baseline">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                width={16}
                className="text-secondary"
              />
            </div>
            <div>
              Fortune 100 executive management experience with a 500% revenue
              growth track record
            </div>
          </div>
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
