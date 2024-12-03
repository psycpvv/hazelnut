import { PortableText, stegaClean } from 'next-sanity'

import { PortableSmallListComponent } from '@/components/atoms/portable-component/portable-component'
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
        <div className="flex flex-col gap-8 px-4">
          <Typography
            variant={stegaClean(titleVariant) ?? 'h2'}
            textColor={invertColor ? 'white' : 'primary'}
            className=""
          >
            {title}
          </Typography>
          {description && (
            <div
              className={cn(
                'font-light md:text-xl',
                invertColor && 'text-white',
              )}
            >
              <PortableText
                value={description}
                components={PortableSmallListComponent}
              />
            </div>
          )}
          {cta?.length && <Ctas cta={cta} />}
          {note && (
            <div className={cn('md:pb-14', invertColor && 'text-white')}>
              {note}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
