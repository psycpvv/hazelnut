import Image from 'next/image'

import CtaNote from '@/components/atoms/cta-note'
import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'

import Ctas from './ctas'

export default function TextWithCards({
  title,
  subtitle,
  cards,
  cta,
  note,
}: Partial<Sanity.TextWithCards>) {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center bg-primary py-12">
        <Image
          src="/assets/img/upper-curve.svg"
          width={1920}
          height={64}
          loading="lazy"
          alt="upper-curve"
          className="absolute left-0 top-0"
        />
        <div className="container flex flex-col items-center lg:py-6">
          <Typography
            variant="h2"
            textColor="white"
            className="pb-4 pt-6 text-center"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            className="pb-[54px] text-center"
            textColor="white"
          >
            {subtitle}
          </Typography>
          {cards?.length && (
            <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap md:gap-0">
              {cards.map((card, key) => (
                <div className="md:w-1/2 md:p-3 lg:w-1/4 lg:flex-1" key={key}>
                  <Card card={card} />
                </div>
              ))}
            </div>
          )}
          {cta?.length && (
            <div className="pt-8">
              <Ctas cta={cta} />
            </div>
          )}
          {note && <CtaNote note={note} className="text-white" />}
        </div>
      </div>
      <Image
        src="/assets/img/bottom-curve.png"
        loading="lazy"
        width={1920}
        height={64}
        alt="upper-curve"
      />
    </>
  )
}
