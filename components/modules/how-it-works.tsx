'use client'

import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { stegaClean } from 'next-sanity'

import CtaNote from '@/components/atoms/cta-note'
import { Typography } from '@/components/atoms/typography'

import Ctas from './ctas'

const Player = dynamic(
  async () => (await import('@lottiefiles/react-lottie-player')).Player,
  { ssr: false },
)

export default function HowItWorks(data: Partial<Sanity.HowItWorks>) {
  const t = useTranslations('Modules.how-it-works')
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
                <Player
                  autoplay
                  loop
                  src={stegaClean(step.lottieFile)}
                  renderer="canvas"
                />
              </div>
              <h3 className="text-center font-nunito text-xl text-primary md:text-2xl">
                {t('step', { step: key + 1 })}
                <div className="">{step.title}</div>
              </h3>
              <Typography variant="subtitle1" className="px-6 text-center">
                {step.subtitle}
              </Typography>
            </div>
          ))}
        </div>
      )}
      {data.cta?.length && (
        <div className="flex w-full justify-center gap-8 py-8">
          <Ctas cta={data.cta} />
        </div>
      )}
      {data.note && <CtaNote note={data.note} />}
    </div>
  )
}
