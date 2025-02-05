'use client'

import { useTranslations } from 'next-intl'

import { Hazelnut } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'

import Ctas from './ctas'

export default function Pricing(data: Partial<Sanity.Pricing>) {
  const t = useTranslations('Modules.pricing')
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-3 py-12">
      <Typography
        variant="h2"
        textColor="primary"
        className="px-3 text-center uppercase md:pb-12"
      >
        {data.title}
      </Typography>
      <div className="flex w-full flex-col items-center gap-6 pb-8">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24">
          <div>
            <div className="relative flex h-32 items-center justify-center md:h-44">
              <div className="z-10 text-[40px] font-bold text-white">
                €{data.earlyPrice}
              </div>
              <Hazelnut className="absolute left-[50%] top-0 w-36 -translate-x-1/2 md:w-48" />
            </div>
            <div className="pt-3 font-nunito text-2xl text-primary">
              {t('early-bird-price')}
            </div>
          </div>
          <div>
            <div className="relative flex h-32 items-center justify-center md:h-44">
              <div className="z-10 text-[40px] font-bold text-white">
                €{data.regularPrice}
              </div>
              <Hazelnut
                className="absolute left-[50%] top-0 w-36 -translate-x-1/2 md:w-48"
                fill="#7C7F33"
              />
            </div>
            <div className="pt-3 font-nunito text-2xl text-primary">
              {t('regular-price')}
            </div>
          </div>
        </div>
      </div>
      {data.cta?.length && (
        <div className="w-auto text-center">
          <Ctas cta={data.cta} />
        </div>
      )}
      <div className="flex flex-col gap-4 text-center md:w-3/4">
        {data.subtitle && (
          <Typography variant="subtitle2">{data.subtitle}</Typography>
        )}
        <Typography variant="text" className="text-left">
          {data.note}
        </Typography>
      </div>
    </div>
  )
}
