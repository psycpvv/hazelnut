'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import { getImageDimensions } from '@sanity/asset-utils'
import { Image } from 'next-sanity/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import { urlFor } from '@/sanity/utils/image-builder'

export default function Partners(data: Partial<Sanity.Partners>) {
  return (
    <div className="mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col gap-4 px-4 pb-12">
        <Typography variant="h2" textColor="primary" className="text-center">
          {data.title}
        </Typography>
      </div>
      {data.partners && !!data.partners.length && (
        <div className="mx-auto hidden max-w-[1320px] justify-center gap-8 overflow-auto md:flex md:flex-wrap">
          {data.partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <Image
                src={urlFor(partner.image).url()}
                height={200}
                width={200 * getImageDimensions(partner.image).aspectRatio}
                alt="Companies"
                className="h-20 max-h-20 w-auto max-w-52 object-contain"
              />
            </a>
          ))}
        </div>
      )}
      {data.partners && !!data.partners.length && (
        <div className="mx-auto flex max-w-[1320px] justify-center gap-8 overflow-auto md:hidden md:flex-wrap">
          <Swiper
            pagination={{
              clickable: true,
              el: '.swiper-partners-pagination',
            }}
            spaceBetween={20}
            modules={[Pagination]}
            enabled
            breakpoints={{
              768: {
                enabled: false,
              },
            }}
          >
            {data.partners.map((partner, i) => (
              <SwiperSlide key={i}>
                <a
                  key={i}
                  href={partner.url}
                  className="transition-opacity duration-300 hover:opacity-60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlFor(partner.image).height(200).url()}
                    alt="Companies"
                    className="mx-auto h-20 max-h-20 w-auto max-w-52 object-contain"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="swiper-partners-pagination mt-6 flex justify-center md:hidden md:gap-2 [&>.swiper-pagination-bullet]:!bg-primary [&>span]:!h-3 [&>span]:!w-3"></div>
    </div>
  )
}
