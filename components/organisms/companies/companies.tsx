'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Partners } from '@/sanity/queries/pages/home.query'

type CompaniesProps = { data: Partners['partners'] }

export default function Companies({ data }: CompaniesProps) {
  return (
    <div className="-mx-8 py-4 xl:-mx-16 2xl:-mx-28 2xl:py-12">
      <Swiper
        loop={true}
        centeredSlides={false}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        modules={[Autoplay]}
        className="[&>.swiper-wrapper]:ease-linear"
      >
        {[1, 2, 3].map(v => (
          <SwiperSlide className="!w-auto" key={v}>
            <div className="flex h-12 items-center justify-center gap-12 pl-12 md:h-20 md:gap-24 md:pl-24 lg:h-20 2xl:h-36 2xl:gap-56 2xl:pl-56">
              {data.map((partner, key) => (
                <Link
                  key={key}
                  href={partner.domain}
                  target="_blank"
                  className="h-12 lg:h-20"
                >
                  <Image
                    src={partner.image.url}
                    width={partner.image.metadata.dimensions.width}
                    height={partner.image.metadata.dimensions.height}
                    alt="BioSense_bedz"
                    className="h-12 w-auto lg:h-20"
                  />
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
