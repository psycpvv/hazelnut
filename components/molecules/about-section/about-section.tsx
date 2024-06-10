import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function AboutSection() {
  return (
    <div className="relative flex w-full flex-col gap-20 pb-8">
      <div className="absolute -top-[73px] md:-top-[79px]" id="about"></div>
      <div className="flex flex-col items-center justify-center bg-primary px-4 py-16 text-center">
        <Typography
          variant="h3"
          textColor="white"
          className="md:w-2/3 md:text-4xl"
        >
          No barriers. Direct access to a stable asset class with as little as
          one Treesury Tree.
        </Typography>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="container grid md:grid-cols-2">
          <div className="px-4">
            <Image
              src="/assets/img/bush-only-new.jpg"
              width={1024}
              height={1024}
              alt="bush only new"
            />
          </div>
          <div className="flex flex-col gap-4 px-4">
            <Typography
              variant="h3"
              textColor="primary"
              className="font-roboto"
            >
              Convert idle capital into future returns while making a positive
              environmental impact
            </Typography>
            <Typography variant="subtitle1">
              We offer accessible agricultural investments managed by
              experienced professionals with a proven track record in
              sustainable farming. Gain access to an asset class that has
              traditionally been limited to large investors but is now available
              to you as well. Our team of agricultural specialists employs a
              proprietary farming methodology to consistently deliver
              above-average crop volumes, ensuring the potential for enduring
              positive performance. With a minimum investment of just one tree,
              each Treesury Tree you acquire grants you a share of the profits
              generated from the sale of hazelnut produce. No prior agricultural
              experience or effort is necessary as our team of experts handles
              all farming operations. Furthermore, your investment holds the
              potential for capital growth and future returns through carbon
              credits. Additionally, secondary market enables streamlined
              reselling of assets, ensuring liquidity when needed.*
            </Typography>
            <Typography variant="text">
              * Subject to regulatory holding requirements and secondary market
              listing. Terms and Conditions apply.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
