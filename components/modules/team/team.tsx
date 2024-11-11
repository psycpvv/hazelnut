'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import TeamItem from '@/components/atoms/team-item'
import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'

export default function Team(data: Partial<Sanity.Team>) {
  const { isMd, isLg, isXl } = useMedia()
  return (
    <div className="flex w-full flex-col items-center bg-primary px-4 py-20">
      <div className="container">
        <div className="flex flex-col gap-4 text-center text-white">
          <Typography variant="h2">{data.title}</Typography>
          <Typography variant="subtitle1">{data.subtitle}</Typography>
        </div>
        {data.team?.length && (
          <div className="py-12">
            <Swiper
              pagination={{
                clickable: true,
                el: '.swiper-teams-pagination',
              }}
              slidesPerView={isMd ? (isLg ? (isXl ? 5 : 3) : 2) : 1}
              spaceBetween={20}
              modules={[Pagination]}
            >
              {data.team.map((team, key) => (
                <SwiperSlide key={key}>
                  <TeamItem data={team} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <div className="swiper-teams-pagination flex justify-center gap-2 [&>.swiper-pagination-bullet]:!bg-white [&>span]:!h-3 [&>span]:!w-3"></div>
      </div>
    </div>
  )
}
