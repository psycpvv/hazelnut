'use client'
import dynamic from 'next/dynamic'

import { Button } from '@/components/atoms/button'
import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'
import { HowItWorks } from '@/sanity/queries/pages/home.query'

const Player = dynamic(
  async () => (await import('@lottiefiles/react-lottie-player')).Player,
  { ssr: false },
)
type Basiness1Props = { data: HowItWorks }

export default function Basiness1({ data }: Basiness1Props) {
  return (
    <div className="container relative flex flex-col items-center px-4 py-20">
      <div className="absolute -top-[73px] md:-top-[79px]" id="services"></div>
      <Typography variant="h2" textColor="primary" className="pb-4 text-center">
        {data.title}
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        {data.subtitle}
      </Typography>

      <div className="flex flex-col justify-center gap-4 pt-8 md:flex-row md:flex-wrap md:gap-0">
        {[data.step1, data.step2, data.step3].map((step, key) => (
          <div
            className="flex flex-col items-center gap-6 md:w-1/2 lg:w-1/3"
            key={key}
          >
            <div className="h-[240px] w-[200px]">
              <Player autoplay loop src={step.lottieFile} />
            </div>
            <Typography
              variant="h3"
              textColor="primary"
              className="text-center"
            >
              STEP {key + 1}
              <div className="font-roboto text-xl">{step.title}</div>
            </Typography>
            <Typography variant="subtitle1" className="px-6 text-center">
              {step.subtitle}
            </Typography>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between gap-8 py-8 md:justify-center">
        <InvestButton buttonColor="default" />
        <Button variant="outlined">
          <div className="px-3">
            DOWNLOAD <br /> WHITEPAPER
          </div>
        </Button>
      </div>
    </div>
  )
}
