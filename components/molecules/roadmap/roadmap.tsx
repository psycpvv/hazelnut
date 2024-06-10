'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/utils'

export default function Roadmap() {
  const [showHand, setShowHand] = useState(true)
  return (
    <>
      <div
        id="roadmap"
        className="relative flex w-full flex-col items-center justify-center bg-primary px-4 pb-20 pt-16 text-white"
      >
        <Image
          src="/assets/img/upper-curve.svg"
          width={1920}
          height={64}
          alt="upper-curve"
          className="absolute left-0 top-0"
        />
        <div className="container flex flex-col items-center">
          <div className="flex flex-col gap-4 pl-5 pr-4 text-center">
            <Typography variant="h2">ROADMAP</Typography>
            <Typography variant="subtitle1">
              Learn more about our strategic plan and project timeline.
            </Typography>
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
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q1/23</div>
                <div className="relative z-10 -ml-4 mb-6 mt-4 h-[3px] w-[100%+16px] bg-secondary">
                  <div className="z-10 ml-4 h-5 w-5 -translate-y-[43%] rounded-full bg-secondary"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+23px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-secondary"></div>
                    Closed Alpha Product Market Fit Testing
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q2/23</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] animate-blink rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+23px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-white"></div>
                    Public Alpha Product Market Fit Testing
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q3/23</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-white"></div>
                      Public Alpha Product Market Fit Testing
                    </div>

                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+35px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative mt-4 pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                    Crowdfunding Season 2023
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q4/23</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      Crowdfunding Season 2023
                    </div>

                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+35px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative mt-4 pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                    Planting Season 2023
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q1/24</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      Planting Season 2023
                    </div>
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      Tokenization of Crowdfunding Season 2023
                    </div>

                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+35px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative mt-4 pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                    STO Registration Season 2024
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q2/24</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      STO Registration Season 2024
                    </div>
                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+35px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative mt-4 pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                    Carbon Credit Certification
                  </div>
                </div>
              </div>
              <div className="relative flex w-[14.2857%] flex-col">
                <div className="-ml-3.5 font-bold">Q3/24</div>
                <div className="relative z-10 mb-6 mt-4 h-[3px] w-full bg-white">
                  <div className="z-10 h-5 w-5 -translate-y-[43%] rounded-full bg-white"></div>
                </div>
                <div className="pr-3">
                  <div className="relative flex flex-col gap-4">
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      Secondary Market (ATS) Token Listing
                    </div>
                    <div className="relative pl-7 text-sm">
                      <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                      Airdrop to Crowdfunding Investors for Season 2023
                    </div>

                    <div className="absolute left-[10px] top-[-15px] h-[calc(100%+35px)] border-l-2 border-dashed border-white/30"></div>
                  </div>
                  <div className="relative mt-4 pl-7 text-sm">
                    <div className="absolute left-1 top-1 z-10 h-3.5 w-3.5 rounded-full bg-[#8e9ac0]"></div>
                    Token Trading Enabled
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/hand.png"
            width={40}
            height={40}
            alt="hand"
            className={cn(
              'origin-bottom-center animate-hand-rotate transition-all duration-300 lg:hidden',
              showHand ? 'opacity-100' : 'opacity-0',
            )}
          />
          <InvestButton className="mt-10 md:h-[60px] md:w-[200px]" />
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
