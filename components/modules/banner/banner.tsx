import { urlFor } from '@/sanity/utils/image-builder'

import Ctas from '../ctas'

export default function Banner(data: Partial<Sanity.Banner>) {
  return (
    <div
      className="flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${urlFor(data.bgimage?.asset!).width(1920).url()})`,
      }}
    >
      <div className="container relative z-10 px-4 py-52 text-white md:px-12 xl:w-1/2">
        {data.title && (
          <div className="font-nunito text-[34px] uppercase leading-[42px]">
            {data.title}
          </div>
        )}
        {data.subtitle && <div className="pb-9 pt-5">{data.subtitle}</div>}
        {data.cta?.length && (
          <div className="flex gap-4">
            <Ctas cta={data.cta} />
          </div>
        )}
      </div>
    </div>
  )
}
