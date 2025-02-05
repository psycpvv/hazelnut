import { PortableText } from 'next-sanity'

import { urlFor } from '@/sanity/utils/image-builder'

import Ctas from '../ctas'

export default function Banner(data: Partial<Sanity.Banner>) {
  return (
    <div
      className="flex h-[calc(100vh-56px)] flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:h-[80vh]"
      style={{
        backgroundImage: `url(${urlFor(data.bgimage?.asset!).width(1366).url()})`,
      }}
    >
      <div className="container max-w-[1620px]">
        <div className="relative z-10 flex flex-col gap-2 text-white md:gap-4 md:px-10 md:py-52 xl:w-1/2">
          <PortableText
            value={data.content}
            components={{
              block: {
                h1: ({ children }) => (
                  <div className="font-nunito text-[32px] uppercase leading-[42px] md:text-[34px] xl:text-[40px]">
                    {children}
                  </div>
                ),
                normal: ({ children }) => (
                  <p className="font-light md:text-lg [&>strong]:font-bold">
                    {children}
                  </p>
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
    </div>
  )
}
