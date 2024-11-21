import { PortableText } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/utils'

import Ctas from '../ctas'

export default function RichText({
  invertColor,
  title,
  subtitle,
  description,
  cta,
}: Partial<Sanity.RichText>) {
  return (
    <div className={cn(invertColor && 'bg-primary')}>
      <div
        className={cn(
          'container relative mx-auto flex w-full flex-col gap-6 px-4 py-14',
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
            className="text-center"
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <div
            className={cn(
              'text-center [&_a]:text-primary [&_a]:underline',
              invertColor && 'text-white',
            )}
          >
            <PortableText
              value={subtitle}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-2xl">{children}</p>
                  ),
                },
              }}
            />
          </div>
        )}
        {!!cta?.length && (
          <div className="flex w-full justify-between gap-8 py-8 md:justify-center">
            <Ctas cta={cta} />
          </div>
        )}
        {description && (
          <div
            className={cn(
              'text-center [&_a]:text-primary [&_a]:underline [&_p]:text-lg',
              invertColor && 'text-white',
            )}
          >
            {description && <PortableText value={description} />}
          </div>
        )}
      </div>
    </div>
  )
}
