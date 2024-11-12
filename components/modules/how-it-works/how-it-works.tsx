'use client'

import dynamic from 'next/dynamic'
import { stegaClean } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'

import Ctas from '../ctas'

const Player = dynamic(
  async () => (await import('@lottiefiles/react-lottie-player')).Player,
  { ssr: false },
)
export default function HowItWorks(data: Partial<Sanity.HowItWorks>) {
  return (
    <div className="container relative mx-auto flex flex-col items-center px-4 py-20">
      <div className="absolute -top-[73px] md:-top-[79px]" id="services"></div>
      <Typography variant="h2" textColor="primary" className="pb-4 text-center">
        {data.title}
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        {data.subtitle}
      </Typography>
      {data.steps?.length && (
        <div className="flex flex-col justify-center gap-4 pt-8 md:flex-row md:flex-wrap md:gap-0">
          {data.steps.map((step, key) => (
            <div
              className="flex flex-col items-center gap-6 md:w-1/2 lg:w-1/3"
              key={key}
            >
              <div className="h-[240px] w-[200px]">
                <Player autoplay loop src={stegaClean(step.lottieFile)} />
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
      )}

      <div className="flex w-full justify-between gap-8 py-8 md:justify-center">
        {data.cta?.length && <Ctas cta={data.cta} />}
      </div>
    </div>
  )
}
