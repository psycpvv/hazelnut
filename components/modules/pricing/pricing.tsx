'use client'

import { useTranslations } from 'next-intl'

import { Hazelnut } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'

import Ctas from '../ctas'

export default function Pricing(data: Partial<Sanity.Pricing>) {
  const t = useTranslations('Modules.pricing')
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-3 py-8">
      <Typography
        variant="h2"
        textColor="primary"
        className="px-3 pb-12 text-center uppercase"
      >
        {data.title}
      </Typography>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24">
          <div>
            <div className="relative flex h-44 items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                €{data.earlyPrice}
              </div>
              <Hazelnut className="absolute left-[50%] top-0 w-48 -translate-x-1/2" />
            </div>
            <Typography variant="h4" textColor="primary" className="pt-3">
              {t('early-bird-price')}
            </Typography>
          </div>
          <div>
            <div className="relative flex h-44 items-center justify-center">
              <div className="z-10 font-roboto text-3xl font-bold text-white">
                €{data.regularPrice}
              </div>
              <Hazelnut
                className="absolute left-[50%] top-0 w-48 -translate-x-1/2"
                fill="#7C7F33"
              />
            </div>
            <Typography variant="h4" textColor="primary" className="pt-3">
              {t('regular-price')}
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center">
        {data.cta?.length && <Ctas cta={data.cta} />}
        {data.subtitle && (
          <Typography variant="subtitle2">{data.subtitle}</Typography>
        )}
      </div>
      <Typography variant="text">{data.note}</Typography>
    </div>
  )
}
