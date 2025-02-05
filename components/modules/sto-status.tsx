'use client'

import { useTranslations } from 'next-intl'
import { PortableText } from 'next-sanity'

import { cn } from '@/utils/utils'

import Ctas from './ctas'

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
    <div className="container relative mx-auto flex flex-col gap-10 px-4 py-16">
      <div className="w-full md:pb-12">
        <div className="flex justify-between font-nunito text-xs text-white md:px-12">
          <div className="relative mb-2.5 h-[30px] rounded-full bg-primary px-3.5 py-2 text-[10px]">
            {t('treesury-tokens-sold')}
            <div className="absolute -bottom-3.5 left-4 border-8 border-solid border-transparent border-t-primary"></div>
          </div>
          <div className="relative mb-2.5 h-[30px] rounded-full bg-primary px-3.5 py-2 text-[10px]">
            {t('total-issuance')}
            <div className="absolute -bottom-3.5 right-4 border-8 border-solid border-transparent border-t-primary"></div>
          </div>
        </div>
        <div className="flex flex-col font-nunito text-xs text-white md:px-8 md:text-[15px]">
          <div className="relative flex h-[46px] w-full items-center justify-end rounded-full bg-secondary">
            <div className="px-4">
              {Intl.NumberFormat('sr', {
                style: 'decimal',
              }).format(totalTokens!)}
            </div>
            <div
              className="absolute left-0 top-0 flex h-[46px] items-center rounded-full bg-primary pl-3 max-md:!min-w-[18%] md:pl-4"
              style={{
                width: (soldTokens! * 100) / totalTokens! + '%',
              }}
            >
              {Intl.NumberFormat('sr', {
                style: 'decimal',
              }).format(soldTokens!)}{' '}
              ({Math.round((soldTokens! * 100) / totalTokens!)}%)
            </div>
            <div
              className="absolute top-0 h-full w-1 -translate-x-1/2 bg-primary"
              style={{
                left: (successThresholdOfSto! * 100) / totalTokens! + '%',
              }}
            >
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-8 border-solid border-transparent/0 border-b-primary"></div>
              <div className="absolute left-0.5 top-[56px] mb-3 hidden h-[30px] -translate-x-1/2 text-nowrap rounded-full bg-primary px-3.5 py-2 font-nunito text-[10px] text-xs text-white md:block">
                {t('the-success-threshold-of-the-sto')} -{' '}
                {Intl.NumberFormat('sr', {
                  style: 'decimal',
                }).format(successThresholdOfSto!)}
              </div>
            </div>
          </div>
          <div className="mb-3 mt-2.5 text-nowrap rounded-full bg-primary px-3.5 py-2 text-center font-nunito text-xs text-white md:hidden">
            {t('the-success-threshold-of-the-sto')} -{' '}
            {Intl.NumberFormat('sr', {
              style: 'decimal',
            }).format(successThresholdOfSto!)}
          </div>
        </div>
      </div>
      {description && (
        <div
          className={cn(
            'text-center font-light [&_a]:text-primary [&_a]:underline [&_p]:text-base [&_p]:md:text-lg',
          )}
        >
          {description && <PortableText value={description} />}
        </div>
      )}
      <div className="mx-auto grid w-2/3 grid-cols-1 justify-center gap-8 font-nunito text-primary md:grid-cols-2">
        <div className="text-center">
          <div className="text-nowrap text-2xl">{t('reserved-tokens')}:</div>
          <div className="pt-4 text-[40px]">
            {Intl.NumberFormat('sr', {
              style: 'decimal',
            }).format(reservedTokens!)}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl">{t('available-for-reservation')}:</div>
          <div className="pt-4 text-[40px]">
            {Intl.NumberFormat('sr', {
              style: 'decimal',
            }).format(availableTokens!)}
          </div>
        </div>
      </div>
      <div className="text-center font-light md:text-lg">{note}</div>

      {!!cta?.length && (
        <div className="flex w-full justify-center gap-8">
          <Ctas cta={cta} />
        </div>
      )}
    </div>
  )
}
