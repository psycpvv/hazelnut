'use client'
import { format } from 'date-fns'
import Image from 'next/image'
import { stegaClean } from 'next-sanity'
import { useState } from 'react'

import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/utils'

import Ctas from '../ctas'

export default function Timeline(data: Partial<Sanity.Timeline>) {
  const [showHand, setShowHand] = useState(true)
  const width = `${100 / (data.plans?.length ?? 1)}%`
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center bg-primary px-4 py-20 text-white">
        <div id="roadmap" className="absolute -top-[73px] md:-top-[79px]"></div>
        <Image
          src="/assets/img/upper-curve.svg"
          width={1920}
          height={64}
          alt="upper-curve"
          className="absolute left-0 top-0"
        />
        <div className="container flex flex-col items-center">
          <div className="flex flex-col gap-4 pl-5 pr-4 text-center">
            <Typography variant="h2">{data.title}</Typography>
            <Typography variant="subtitle1">{data.subtitle}</Typography>
          </div>
          <div
            className="w-full overflow-x-auto"
            onScroll={e => {
              if (e.currentTarget.scrollLeft > 730 && showHand)
                setShowHand(false)
              if (e.currentTarget.scrollLeft < 730 && !showHand)
                setShowHand(true)
            }}
          >
            <div className="flex w-full min-w-[1200px] py-10 pl-6">
              {data.plans?.map((plan, i) => {
                const quarter = stegaClean(plan.quarter)
                const year = stegaClean(plan.year)
                const currentQuarter = format(new Date(), 'Q')
                const currentYear = format(new Date(), 'yy')
                const later =
                  Number(`${currentYear}${currentQuarter}`) <
                  Number(`${year}${quarter}`)
                const same =
                  `${currentYear}${currentQuarter}` === `${year}${quarter}`
                return (
                  <div
                    className="relative flex flex-col"
                    key={i}
                    style={{ width }}
                  >
                    <div className="-ml-3.5 font-bold">
                      Q{quarter}/{year}
                    </div>
                    <div
                      className={cn(
                        'relative z-10 mb-6 mt-4 h-[3px]',
                        later ? 'bg-white' : 'bg-secondary',
                        i === 0 && '-ml-4',
                      )}
                    >
                      <div
                        className={cn(
                          'h-5 w-5 -translate-y-[43%] rounded-full',
                          later ? 'bg-white' : 'bg-secondary',
                          same && 'animate-blink-green',
                          i === 0 && 'ml-4',
                        )}
                      ></div>
                    </div>
                    <div className="relative flex flex-col gap-6">
                      <div className="absolute left-[10px] top-[-15px] h-[calc(100%-10px)] border-l-2 border-dashed border-white/30"></div>
                      {plan.items.map((item, i) => (
                        <div className="pr-3" key={i}>
                          <div
                            className="relative pl-7 text-sm"
                            style={{
                              height: i === plan.items.length - 1 ? 30 : 'auto',
                            }}
                          >
                            <div
                              className={cn(
                                'absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full',
                                later ? 'bg-[#8e9ac0]' : 'bg-secondary',
                                same && 'animate-blink-green',
                              )}
                            ></div>
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {data.cta?.length && (
            <div className="flex gap-1 md:gap-4">
              <Ctas cta={data.cta} />
            </div>
          )}
          {data.note && (
            <Typography variant="subtitle2" className="pt-8 text-center">
              {data.note}
            </Typography>
          )}
        </div>
      </div>
      <Image
        src="/assets/img/bottom-curve.png"
        width={1920}
        height={64}
        alt="upper-curve"
      />
    </>
  )
}
