'use client'

import { PortableText } from 'next-sanity'

import { PortableTitleWithBoldComponent } from '@/components/atoms/portable-component/portable-component'
import { Typography } from '@/components/atoms/typography'
import useMedia from '@/hooks/useMedia'
import { cn } from '@/utils/utils'

import Ctas from '../ctas'

export default function RichText({
  invertColor,
  title,
  subtitle,
  description,
  cta,
  titleSize,
  titleWidth,
}: Partial<Sanity.RichText>) {
  const { isMd, isLg } = useMedia()
  return (
    <div className={cn(invertColor && 'bg-primary')}>
      <div
        className={cn(
          'container relative mx-auto flex w-full flex-col gap-4 px-4 py-20 md:gap-6',
        )}
      >
        <div
          className="absolute -top-[73px] md:-top-[79px]"
          id="esc-white"
        ></div>
        {title && (
          <Typography
            variant="h2"
            textColor={invertColor ? 'white' : 'primary'}
            className="mx-auto text-center"
            style={{
              ...(isMd &&
                titleWidth && {
                  width: titleWidth + '%',
                }),
              ...(isLg && titleSize && { fontSize: titleSize + 'px' }),
            }}
          >
            <PortableText
              value={title}
              components={PortableTitleWithBoldComponent}
            />
          </Typography>
        )}

        {subtitle && (
          <div
            className={cn(
              'text-center font-light [&_a]:text-primary [&_a]:underline',
              invertColor && 'text-white',
            )}
          >
            <PortableText
              value={subtitle}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="md:text-2xl [&>strong]:font-bold">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          </div>
        )}
        {!!cta?.length && (
          <div className="flex w-full justify-center gap-8 py-6">
            <Ctas cta={cta} />
          </div>
        )}
        {description && (
          <div
            className={cn(
              'text-center font-light [&_a]:text-primary [&_a]:underline [&_p]:md:text-lg',
              invertColor && 'text-white',
            )}
          >
            {description && (
              <PortableText
                value={description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="[&>strong]:font-bold">{children}</p>
                    ),
                  },
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
