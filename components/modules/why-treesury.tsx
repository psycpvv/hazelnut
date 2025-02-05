'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PortableText } from 'next-sanity'
import { useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'
import { cn } from '@/utils/utils'

export default function WhyTreesury(data: Partial<Sanity.WhyTreesury>) {
  const t = useTranslations('Modules.why-treesury')
  const { isMd, isLg } = useMedia()
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)
  function updateCell(_row: number, _col: number) {
    setRow(_row)
    setCol(_col)
  }

  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-col items-center justify-center gap-4 pb-20 text-center md:px-4">
        <Typography variant="h2" textColor="primary">
          {data.title}
        </Typography>
        <Typography variant="subtitle1" className="md:max-w-[70%]">
          {data.subtitle}
        </Typography>
      </div>
      <div className="flex" onMouseLeave={() => updateCell(0, 0)}>
        <div className="w-1/3 pl-4 text-[11px] shadow-why-tree md:shadow-none lg:w-1/6">
          <div
            className="flex h-24 items-end font-nunito text-primary md:py-5"
            onMouseEnter={() => updateCell(0, 0)}
          >
            {t('asset-class')}
          </div>
          {[
            t('green'),
            t('inflation-hedge'),
            t('equity-build-up'),
            t('no-leverage'),
            t('attractive-yield'),
            t('hard-asset'),
            t('low-volatility'),
            t('average-annual-return'),
          ].map((asset, key) => (
            <div
              key={key}
              className="flex h-[60px] items-center border-t font-nunito"
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
            {[
              [
                {
                  icon: '/assets/img/favicon.png',
                  title: t('treesury'),
                  values: [1, 1, 1, 1, 1, 1, 1],
                  average: '12.0%+',
                  averageStyle: 'secondary',
                },
                {
                  icon: '/assets/img/table/bonds.svg',
                  title: t('bonds'),
                  values: [1, 0, 0, 1, 1, 0, 1],
                  average: '6.4%',
                },
              ],
              [
                {
                  icon: '/assets/img/table/stocks.svg',
                  title: t('stocks'),
                  values: [1, 0, 1, 0, -1, 0, 0],
                  average: '12.0%',
                },
                {
                  icon: '/assets/img/table/gold.svg',
                  title: t('gold'),
                  values: [0, 1, 0, 1, 0, 1, 0],
                  average: '6.5%',
                },
              ],
              [
                {
                  icon: '/assets/img/table/commercial.svg',
                  title: t('commercial'),
                  values: [0, 1, 1, 0, 1, 1, 0],
                  average: '8.0%',
                },
                {
                  icon: '/assets/img/table/cds.svg',
                  title: t('cds'),
                  values: [0, 0, 0, 1, 0, 0, 1],
                  average: '2.6%',
                },
              ],
            ].map((_data, _key) => (
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
                          loading="lazy"
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
                            'flex h-[60px] flex-col items-center justify-center border-b',
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
                              loading="lazy"
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
                        className="flex h-[60px] flex-col items-center justify-center"
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
      <div className="swiper-why-treesury-pagination my-7 flex justify-center md:gap-2 [&>.swiper-pagination-bullet-active]:!bg-primary [&>span]:!h-3 [&>span]:!w-3"></div>
      <Typography variant="text" className="p-4 px-0 md:pt-12">
        <PortableText value={data.description} />
      </Typography>
    </div>
  )
}
