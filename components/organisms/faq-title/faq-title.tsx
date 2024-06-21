import { PortableText } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'

export default function FaqTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle: any
}) {
  return (
    <div className="flex w-full flex-col items-center bg-primary px-4 py-16 lg:py-28">
      <div className="container flex flex-col items-center justify-center gap-4 text-center text-white">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="subtitle1">
          <PortableText value={subtitle} />
        </Typography>
      </div>
    </div>
  )
}
