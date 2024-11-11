import Ctas from '../ctas'

export default function Banner(data: Partial<Sanity.Banner>) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.bgimage?.src})` }}
    >
      <div className="container relative z-10 px-4 py-52 text-white">
        <div className="font-nunito text-[34px] uppercase leading-[42px]">
          {data.title}
        </div>
        <div className="pb-9 pt-5">{data.subtitle}</div>
        {data.cta?.length && (
          <div className="flex gap-1 md:gap-4">
            <Ctas cta={data.cta} />
          </div>
        )}
      </div>
    </div>
  )
}
