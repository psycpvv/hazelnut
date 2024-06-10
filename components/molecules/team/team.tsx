'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import TeamItem from '@/components/atoms/team-item'
import { Typography } from '@/components/atoms/typography'

import { teams } from './constants'

export default function Team() {
  return (
    <div className="bg-primary px-4 py-20">
      <div className="flex flex-col gap-4 text-center text-white">
        <Typography variant="h2">TREESURY TEAM</Typography>
        <Typography variant="subtitle1">
          We believe that the interdisciplinarity of our team is our strongest
          asset.
        </Typography>
      </div>
      <div className="py-12">
        <Swiper
          pagination={{
            clickable: true,
            el: '.swiper-teams-pagination',
          }}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
        >
          {teams.map((team, key) => (
            <SwiperSlide key={key}>
              <TeamItem data={team} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-teams-pagination flex justify-center gap-2 [&>.swiper-pagination-bullet]:!bg-white [&>span]:!h-3 [&>span]:!w-3"></div>
    </div>
  )
}
