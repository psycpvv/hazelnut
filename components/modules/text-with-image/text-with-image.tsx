import { PortableText, stegaClean } from 'next-sanity'

import CtaNote from '@/components/atoms/cta-note'
import {
  PortableSmallListComponent,
  PortableTitleWithBoldComponent,
} from '@/components/atoms/portable-component/portable-component'
import { Typography } from '@/components/atoms/typography'
import { urlFor } from '@/sanity/utils/image-builder'
import { cn } from '@/utils/utils'

import Ctas from '../ctas'

export default function TextWithImage({
  image,
  description,
  note,
  invertColor,
  title,
  titleVariant,
  cta,
  imagePosition,
}: Partial<Sanity.TextWithImage>) {
  return (
    <div className={cn('py-14 md:py-24', invertColor && 'bg-primary')}>
      <div className="container mx-auto grid items-center justify-center gap-8 md:grid-cols-2">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlFor(image).url()}
            alt="bush only new"
            className={cn(imagePosition && 'order-last')}
          />
        )}
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-8 md:px-4">
          <Typography
            variant={stegaClean(titleVariant) ?? 'h2'}
            textColor={invertColor ? 'white' : 'primary'}
            className=""
          >
            <PortableText
              value={title}
              components={PortableTitleWithBoldComponent}
            />
          </Typography>
          {description && (
            <div
              className={cn(
                'font-light md:text-xl 2xl:text-2xl',
                invertColor && 'text-white',
              )}
            >
              <PortableText
                value={description}
                components={PortableSmallListComponent}
              />
            </div>
          )}
          {cta?.length && (
            <div className="py-8 md:py-0">
              <Ctas cta={cta} />
            </div>
          )}
          {note && (
            <CtaNote
              note={note}
              className={cn(
                'pt-0 text-left md:pb-14',
                invertColor && 'text-white',
              )}
            />
          )}
        </div>
      </div>
    </div>
  )
}
