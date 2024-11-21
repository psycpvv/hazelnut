import { Typography } from '@/components/atoms/typography'
import { urlFor } from '@/sanity/utils/image-builder'

export default function Partners(data: Partial<Sanity.Partners>) {
  return (
    <div className="mx-auto px-4 py-14">
      <div className="flex flex-col gap-4 px-4 pb-12">
        <Typography variant="h2" textColor="primary" className="text-center">
          {data.title}
        </Typography>
      </div>
      {data.partners && !!data.partners.length && (
        <div className="mx-auto flex max-w-[1320px] justify-center gap-8 overflow-auto md:flex-wrap">
          {data.partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              className="transition-opacity duration-300 hover:opacity-60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlFor(partner.image).height(200).url()}
                alt="Companies"
                className="h-20 max-h-20 w-auto max-w-52 object-contain"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
