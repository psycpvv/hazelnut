import { PortableText } from 'next-sanity'

import { urlFor } from '@/sanity/utils/image-builder'

import Ctas from '../ctas'

export default function Banner(data: Partial<Sanity.Banner>) {
  return (
    <div
      className="flex h-[calc(100vh-56px)] flex-col justify-center bg-cover bg-center bg-no-repeat md:h-auto"
      style={{
        backgroundImage: `url(${urlFor(data.bgimage?.asset!).width(1920).url()})`,
      }}
    >
      <div className="container relative z-10 px-4 text-white md:px-12 md:py-52 xl:w-1/2">
        <PortableText
          value={data.content}
          components={{
            block: {
              h1: ({ children }) => (
                <div className="font-nunito text-[34px] uppercase leading-[42px]">
                  {children}
                </div>
              ),
              p: ({ children }) => (
                <div className="font-nunito text-[34px] uppercase leading-[42px]">
                  {children}
                </div>
              ),
            },
            types: {
              cta: ({ value }) => (
                <div className="flex gap-2 sm:gap-4">
                  <Ctas cta={value.cta} />
                </div>
              ),
            },
          }}
        />
      </div>
    </div>
  )
}
