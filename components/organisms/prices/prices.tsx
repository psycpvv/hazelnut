'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '@/components/atoms/button'
import { Hazelnut } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'

export default function Prices() {
  const { ismd } = useMedia()
  return (
    <div className="container flex flex-col items-center justify-center px-3 py-8">
      <Typography
        variant="h2"
        textColor="primary"
        className="px-3 pb-12 text-center"
      >
        TREESURY TREE PRICING
      </Typography>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24">
          <div>
            <div className="relative flex h-[134px] items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                €102
              </div>
              <Hazelnut className="absolute left-[50%] top-0 w-[150px] -translate-x-1/2" />
            </div>
            <Typography variant="h3" textColor="primary" className="pt-3">
              EARLY BIRD PRICE *
            </Typography>
          </div>
          <div>
            <div className="relative flex h-[134px] items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                €139
              </div>
              <Hazelnut
                className="absolute left-[50%] top-0 w-[150px] -translate-x-1/2"
                fill="#7C7F33"
              />
            </div>
            <Typography variant="h3" textColor="primary" className="pt-3">
              REGULAR PRICE
            </Typography>
          </div>
        </div>
        <div className="w-full">
          <h3 className="pt-3 text-center text-xl/9 font-bold text-primary">
            Minimum Guaranteed Price for Subsequent Issues **
          </h3>
          <div className="w-full py-10 md:pb-5">
            {ismd ? (
              <div className="flex justify-between">
                <div className="relative w-1/4">
                  <Image
                    src="/assets/img/hazelnut-arrow1.png"
                    width={25}
                    height={32}
                    alt="hazelnut-arrow"
                    className="absolute right-[-10px] top-[40px]"
                  />

                  <div className="flex flex-col items-center">
                    <div className="relative flex h-[120px] items-center justify-center">
                      <div className="z-10 font-roboto text-2xl font-bold text-white">
                        €106
                      </div>
                      <Hazelnut
                        className="absolute left-[50%] top-0 h-[120px] w-[141px] -translate-x-1/2"
                        fill="#31468c"
                      />
                    </div>
                    <Typography
                      variant="h3"
                      textColor="primary"
                      className="pt-3 text-center text-xl"
                    >
                      YEAR 1
                    </Typography>
                  </div>
                </div>

                <div className="relative w-1/4">
                  <Image
                    src="/assets/img/hazelnut-arrow1.png"
                    width={25}
                    height={32}
                    alt="hazelnut-arrow"
                    className="absolute right-[-10px] top-[40px]"
                  />

                  <div className="flex flex-col items-center">
                    <div className="relative flex h-[120px] items-center justify-center">
                      <div className="z-10 font-roboto text-2xl font-bold text-white">
                        €123
                      </div>
                      <Hazelnut
                        className="absolute left-[50%] top-0 h-[120px] w-[141px] -translate-x-1/2"
                        fill="#31468c"
                      />
                    </div>
                    <Typography
                      variant="h3"
                      textColor="primary"
                      className="pt-3 text-center text-xl"
                    >
                      YEAR 2
                    </Typography>
                  </div>
                </div>

                <div className="relative w-1/4">
                  <Image
                    src="/assets/img/hazelnut-arrow1.png"
                    width={25}
                    height={32}
                    alt="hazelnut-arrow"
                    className="absolute right-[-10px] top-[40px]"
                  />

                  <div className="flex flex-col items-center">
                    <div className="relative flex h-[120px] items-center justify-center">
                      <div className="z-10 font-roboto text-2xl font-bold text-white">
                        €135
                      </div>
                      <Hazelnut
                        className="absolute left-[50%] top-0 h-[120px] w-[141px] -translate-x-1/2"
                        fill="#31468c"
                      />
                    </div>
                    <Typography
                      variant="h3"
                      textColor="primary"
                      className="pt-3 text-center text-xl"
                    >
                      YEAR 3
                    </Typography>
                  </div>
                </div>

                <div className="relative w-1/4">
                  <div className="flex flex-col items-center">
                    <div className="relative flex h-[120px] items-center justify-center">
                      <div className="z-10 font-roboto text-2xl font-bold text-white">
                        €139
                      </div>
                      <Hazelnut
                        className="absolute left-[50%] top-0 h-[120px] w-[141px] -translate-x-1/2"
                        fill="#31468c"
                      />
                    </div>
                    <Typography
                      variant="h3"
                      textColor="primary"
                      className="pt-3 text-center text-xl"
                    >
                      YEAR 4 & ONWARDS
                    </Typography>
                  </div>
                </div>
              </div>
            ) : (
              <Swiper
                pagination={{
                  clickable: true,
                  el: '.swiper-hazelnuts-pagination',
                }}
                slidesPerView={2}
                spaceBetween={0}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <div className="relative">
                    <Image
                      src="/assets/img/hazelnut-arrow1.png"
                      width={25}
                      height={32}
                      alt="hazelnut-arrow"
                      className="absolute right-[-10px] top-[40px]"
                    />

                    <div className="flex flex-col items-center">
                      <div className="relative flex h-[107px] items-center justify-center">
                        <div className="z-10 font-roboto text-2xl font-bold text-white">
                          €106
                        </div>
                        <Hazelnut
                          className="absolute left-[50%] top-0 w-[120px] -translate-x-1/2"
                          fill="#31468c"
                        />
                      </div>
                      <Typography
                        variant="h3"
                        textColor="primary"
                        className="pt-3 text-sm"
                      >
                        YEAR 1
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <Image
                      src="/assets/img/hazelnut-arrow1.png"
                      width={25}
                      height={32}
                      alt="hazelnut-arrow"
                      className="absolute right-[-10px] top-[40px]"
                    />

                    <div className="flex flex-col items-center">
                      <div className="relative flex h-[107px] items-center justify-center">
                        <div className="z-10 font-roboto text-2xl font-bold text-white">
                          €123
                        </div>
                        <Hazelnut
                          className="absolute left-[50%] top-0 w-[120px] -translate-x-1/2"
                          fill="#31468c"
                        />
                      </div>
                      <Typography
                        variant="h3"
                        textColor="primary"
                        className="pt-3 text-sm"
                      >
                        YEAR 2
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <Image
                      src="/assets/img/hazelnut-arrow1.png"
                      width={25}
                      height={32}
                      alt="hazelnut-arrow"
                      className="absolute right-[-10px] top-[40px]"
                    />

                    <div className="flex flex-col items-center">
                      <div className="relative flex h-[107px] items-center justify-center">
                        <div className="z-10 font-roboto text-2xl font-bold text-white">
                          €135
                        </div>
                        <Hazelnut
                          className="absolute left-[50%] top-0 w-[120px] -translate-x-1/2"
                          fill="#31468c"
                        />
                      </div>
                      <Typography
                        variant="h3"
                        textColor="primary"
                        className="pt-3 text-sm"
                      >
                        YEAR 3
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="relative flex h-[107px] items-center justify-center">
                        <div className="z-10 font-roboto text-2xl font-bold text-white">
                          €139
                        </div>
                        <Hazelnut
                          className="absolute left-[50%] top-0 w-[120px] -translate-x-1/2"
                          fill="#31468c"
                        />
                      </div>
                      <Typography
                        variant="h3"
                        textColor="primary"
                        className="pt-3 text-sm"
                      >
                        YEAR 4 & ONWARDS
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
          <div className="swiper-hazelnuts-pagination flex justify-center gap-2 md:hidden [&>.swiper-pagination-bullet-active]:!bg-primary [&>span]:!h-3 [&>span]:!w-3"></div>
        </div>
      </div>
      <Button className="my-8">
        DISCOVER: FACTORS AFFECTING TREESURY TREE PRICES
      </Button>

      <Typography variant="text">
        * The regular price of a Treesury Tree is €139. However, early investors
        can take advantage of privileged pricing. The privileged price for the
        first 22,500 Treesury Trees or the first 2 months, whichever milestone
        is reached first, in the first year is €110 (Early Bird Price). After
        that, the privileged price for Year 1 is €107. <br /> <br />
        ** For subsequent years, the guaranteed minimum prices at which Treesury
        will issue new tokens are as follows: Year 2: €123, Year 3: €135, and
        Year 4: €139. These guaranteed prices may only be reduced for limited
        early bird offerings. Please note that Treesury reserves the right to
        discontinue offering privileged prices at any time. The privileged price
        for early investors presents an attractive opportunity for potential
        capital gains, considering the projected increase in Treesury Tree price
        over time.
      </Typography>
    </div>
  )
}
