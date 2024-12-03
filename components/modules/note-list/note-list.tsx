'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { PortableText } from 'next-sanity'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'

import Ctas from '../ctas'

export default function NoteList(data: Partial<Sanity.NoteList>) {
  const { isMd, isLg } = useMedia()
  return (
    <div className="flex w-full flex-col items-center bg-primary px-4 py-20">
      <div className="container">
        <div className="flex flex-col gap-4 text-center text-white">
          <Typography variant="h2">{data.title}</Typography>
          {data.subtitle && (
            <Typography variant="subtitle1">{data.subtitle}</Typography>
          )}
        </div>
        {data.item?.length && (
          <div className="py-12">
            <Swiper
              pagination={{
                clickable: true,
                el: '.swiper-note-list-pagination',
              }}
              navigation={isMd}
              slidesPerView={isMd ? (isLg ? 3 : 2) : 1}
              spaceBetween={28}
              modules={[Pagination, Navigation]}
              className="[&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:text-primary"
            >
              {data.item.map(item => (
                <SwiperSlide
                  key={item._key}
                  className="relative !h-unset rounded-md bg-white p-7 pb-5 pl-12 md:p-10"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-2 rounded-bl-md rounded-tl-md bg-secondary"></div>
                  <h4 className="pb-6 font-nunito text-2xl text-primary md:text-3xl">
                    {item.title}
                  </h4>
                  <PortableText
                    value={item.description}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="font-light md:text-lg">{children}</p>
                        ),
                      },
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <div className="swiper-note-list-pagination flex justify-center gap-1 [&>.swiper-pagination-bullet]:!bg-white [&>span]:!h-3 [&>span]:!w-3"></div>
      {data.cta?.length && (
        <div className="flex gap-1 pt-12 md:gap-4">
          <Ctas cta={data.cta} />
        </div>
      )}
      {data.note && (
        <Typography variant="subtitle2" className="pt-8 text-center">
          {data.note}
        </Typography>
      )}
    </div>
  )
}
