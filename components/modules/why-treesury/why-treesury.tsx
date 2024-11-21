'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'
import { cn } from '@/utils/utils'

import { assets, mockData } from './constants'

export default function WhyTreesury(data: Partial<Sanity.WhyTreesury>) {
  const { isMd, isLg } = useMedia()
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)
  function updateCell(_row: number, _col: number) {
    setRow(_row)
    setCol(_col)
  }
  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-col gap-4 px-4 pb-12 text-center">
        <Typography variant="h2" textColor="primary">
          {data.title}
        </Typography>
        <Typography variant="subtitle1">{data.subtitle} </Typography>
      </div>
      <div className="flex" onMouseLeave={() => updateCell(0, 0)}>
        <div className="w-1/3 pl-4 text-[11px] shadow-why-tree md:shadow-none lg:w-1/6">
          <div
            className="flex h-24 items-end font-nunito text-primary md:py-5"
            onMouseEnter={() => updateCell(0, 0)}
          >
            ASSET CLASS
          </div>
          {assets.map((asset, key) => (
            <div
              key={key}
              className="flex h-16 items-center border-t font-nunito"
              onMouseEnter={() => updateCell(0, key + 1)}
            >
              {asset}
            </div>
          ))}
        </div>
        <div className="w-2/3 lg:w-5/6">
          <Swiper
            pagination={{
              clickable: true,
              el: '.swiper-why-treesury-pagination',
            }}
            slidesPerView={isLg ? 3 : 1}
            spaceBetween={0}
            modules={[Pagination]}
            className="md:!pl-4"
          >
            {mockData.map((_data, _key) => (
              <SwiperSlide key={_key}>
                <div className="flex w-full md:overflow-visible">
                  {_data.map((__data, __key) => (
                    <div
                      className={cn(
                        'flex w-1/2 flex-col px-2',
                        row === _key * 2 + __key && 'md:shadow-why-tree-item',
                      )}
                      key={__key}
                    >
                      <div
                        className="flex h-24 flex-col items-center justify-end border-b md:py-5"
                        onMouseEnter={() => updateCell(_key * 2 + __key, 0)}
                      >
                        <Image
                          src={__data.icon}
                          width={40}
                          height={40}
                          alt="favicon"
                          className={cn(
                            row === _key * 2 + __key || isMd || 'opacity-20',
                          )}
                        />
                        <div className="mt-2.5 flex items-end font-nunito text-[11px] text-primary">
                          {__data.title}
                        </div>
                      </div>
                      {__data.values.map((v, k) => (
                        <div
                          key={k}
                          className={cn(
                            'flex h-16 flex-col items-center justify-center border-b',
                            col === k + 1 && 'bg-[#f3f3f3]',
                          )}
                          onMouseEnter={() =>
                            updateCell(_key * 2 + __key, k + 1)
                          }
                        >
                          {v === -1 ? (
                            <Image
                              src="/assets/img/table/disabled.svg"
                              width={16}
                              height={16}
                              alt="avatar"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={v === 1 ? faCheckCircle : faTimesCircle}
                              width={20}
                              className={cn(
                                v ? 'text-secondary' : 'text-[#EF626C]',
                              )}
                            />
                          )}
                        </div>
                      ))}
                      <div
                        onMouseEnter={() => updateCell(_key * 2 + __key, 8)}
                        className="flex h-16 flex-col items-center justify-center"
                      >
                        <div
                          className={cn(
                            'flex h-full w-full items-center justify-center rounded-b-xl font-nunito text-2xl',
                            __data.averageStyle === 'secondary'
                              ? 'bg-secondary text-white'
                              : 'text-[#5e5e5e]',
                          )}
                        >
                          {__data.average}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="swiper-why-treesury-pagination my-7 flex justify-center gap-2 [&>.swiper-pagination-bullet-active]:!bg-primary [&>span]:!h-3 [&>span]:!w-3"></div>
      <Typography variant="text" className="p-4 pt-12">
        <PortableText value={data.description} />
      </Typography>
    </div>
  )
}
