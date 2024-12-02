'use client'

import { useTranslations } from 'next-intl'
import { PortableText } from 'next-sanity'

import { cn } from '@/utils/utils'

import Ctas from '../ctas'

export default function StoStatus({
  totalTokens,
  soldTokens,
  successThresholdOfSto,
  description,
  reservedTokens,
  availableTokens,
  cta,
  note,
}: Partial<Sanity.StoStatus>) {
  const t = useTranslations('Modules.sto-status')
  return (
    <div className="container relative mx-auto flex flex-col gap-10 py-12">
      <div className="w-full pb-12">
        <div className="flex justify-between px-12">
          <div className="relative mb-3 rounded-full bg-primary px-3.5 py-2 font-nunito text-xs text-white">
            TREESURY TOKENS SOLD
            <div className="absolute -bottom-4 left-6 border-8 border-solid border-white border-t-primary"></div>
          </div>
          <div className="relative mb-3 rounded-full bg-primary px-3.5 py-2 font-nunito text-xs text-white">
            TOTAL ISSUANCE
            <div className="absolute -bottom-4 right-6 border-8 border-solid border-white border-t-primary"></div>
          </div>
        </div>
        <div className="flex flex-col font-nunito text-xs text-white md:px-8 md:text-[15px]">
          <div className="relative flex h-[46px] w-full items-center justify-end rounded-full bg-secondary">
            <div className="px-4">{totalTokens}</div>
            <div
              className="absolute left-0 top-0 flex h-[46px] items-center rounded-full bg-primary pl-4"
              style={{
                width: (soldTokens! * 100) / totalTokens! + '%',
              }}
            >
              {soldTokens} <br className="md:hidden" /> (
              {Math.round((soldTokens! * 100) / totalTokens!)}%)
            </div>
            <div
              className="absolute top-0 h-full w-1 -translate-x-1/2 bg-primary"
              style={{
                left: (successThresholdOfSto! * 100) / totalTokens! + '%',
              }}
            >
              <div className="absolute left-0.5 top-[56px] mb-3 -translate-x-1/2 text-nowrap rounded-full bg-primary px-3.5 py-2 font-nunito text-xs text-white">
                THE SUCCESS THRESHOLD OF THE (STO) - 10.000
                <div className="absolute bottom-[calc(100%-3px)] left-1/2 -translate-x-1/2 border-[10px] border-solid border-white/0 border-b-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {description && (
        <div
          className={cn(
            'text-center [&_a]:text-primary [&_a]:underline [&_p]:text-lg',
          )}
        >
          {description && <PortableText value={description} />}
        </div>
      )}
      <div className="mx-auto grid w-2/3 grid-cols-2 justify-center font-nunito text-primary">
        <div className="text-center">
          <div className="text-2xl">{t('reserved-tokens')}:</div>
          <div className="pt-4 text-4xl">{reservedTokens}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl">{t('available-for-reservation')}:</div>
          <div className="pt-4 text-4xl">{availableTokens}</div>
        </div>
      </div>
      <div className="text-center text-lg">{note}</div>

      {!!cta?.length && (
        <div className="flex w-full justify-between gap-8 md:justify-center">
          <Ctas cta={cta} />
        </div>
      )}
    </div>
  )
}
