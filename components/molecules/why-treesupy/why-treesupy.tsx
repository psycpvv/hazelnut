'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/utils'

import { assets, data } from './constants'

export default function WhyTreesupy() {
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)
  function updateCell(_row: number, _col: number) {
    setRow(_row)
    setCol(_col)
  }
  function initCell() {
    setRow(0)
    setCol(0)
  }
  return (
    <div className="py-14">
      <div className="flex flex-col gap-4 px-4 pb-12 text-center">
        <Typography variant="h2" textColor="primary">
          WHY TREESURY?
        </Typography>
        <Typography variant="subtitle1">
          Amidst the backdrop of an expanding global population and an
          ever-increasing demand for food, Treesury presents an exceptionally
          diversified investment opportunity with compelling long-term returns.
        </Typography>
      </div>
      <div className="flex" onMouseLeave={initCell}>
        <div className="w-32 pl-4 text-[11px] shadow-why-tree">
          <div
            className="flex h-24 items-end font-nunito text-primary"
            onMouseEnter={() => updateCell(0, 0)}
          >
            ASSET CLASS
          </div>
          {assets.map((asset, key) => (
            <div
              key={key}
              className="flex h-16 items-center font-nunito"
              onMouseEnter={() => updateCell(0, key + 1)}
            >
              {asset}
            </div>
          ))}
        </div>
        <div className="w-[200px] flex-1">
          <Swiper
            pagination={{
              clickable: true,
              el: '.swiper-why-treesupy-pagination',
            }}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Pagination]}
          >
            {data.map((_data, _key) => (
              <SwiperSlide key={_key}>
                <div className="flex w-full">
                  {_data.map((__data, __key) => (
                    <div className="flex w-1/2 flex-col px-2" key={__key}>
                      <div
                        className="flex h-24 flex-col items-center justify-end"
                        onMouseEnter={() => updateCell(_key * 2 + __key, 0)}
                      >
                        <Image
                          src={__data.icon}
                          width={40}
                          height={40}
                          alt="favicon"
                          className={cn(
                            row === _key * 2 + __key || 'opacity-20',
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
      <div className="swiper-why-treesupy-pagination my-7 flex justify-center gap-2 [&>.swiper-pagination-bullet-active]:!bg-primary [&>span]:!h-3 [&>span]:!w-3"></div>
      <Typography variant="text" className="px-4">
        * Only green bonds provide green investment opportunities, and only a
        limited number of stocks can be classified as green. ** Treesury Trees
        will be converted to security tokens that are backed by hard assets. ***
        Data source: Bloomberg, Federal Reserve Bank of St. Louis, NCREIF, and
        NYU Stern School of Business. U.S. Govt. Bonds - U.S. Treasury 10-Year
        Bond; Stocks - Standard & Poor 500 Index; Gold - Investment grade gold;
        Commercial - NCREIF Property Index; CD - Bankrate Historical 1-Year CD
        Interest Rates. Please note that past performance does not guarantee
        future results, and there is no guarantee that this trend will continue.
        Treesury&apos;s internal analysis covers the period from 1991 to 2022.
        All returns except for Treesury asset class are estimated and assume the
        reinvestment of dividends. The information provided on the index is for
        illustrative purposes only and is not intended to represent the results
        of an actual investment. Additionally, the returns mentioned do not
        include any management fees, transaction costs, or expenses. Volatility
        is measured by using the monthly total returns of each index or asset
        class, and the historical performance of each index is cited to
        illustrate historical market trends. It&apos;s worth noting that the
        risk/reward profile for each asset class varies significantly, and this
        information should not be considered a recommendation for any particular
        security. Furthermore, it is essential to keep in mind that you cannot
        invest directly in an index.
      </Typography>
    </div>
  )
}
