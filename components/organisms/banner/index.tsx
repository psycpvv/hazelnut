import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '@/components/atoms/button'
import { IconButton } from '@/components/atoms/icon-button'
import InvestButton from '@/components/atoms/invest-button'
import { type Banner } from '@/sanity/queries/pages/home.query'

type BannerProps = { data: Banner }

export default function Banner({ data }: BannerProps) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.image.url})` }}
    >
      <div className="container relative z-10 px-4 py-52 text-white">
        <div className="font-nunito text-[34px] uppercase leading-[42px]">
          {data.title}
        </div>
        <div className="pb-9 pt-5">{data.subtitle}</div>
        <div className="flex gap-1 md:gap-4">
          <div>
            <InvestButton buttonColor="secondary" />
          </div>
          <div>
            <Button buttonColor="secondary">WHITEPAPER</Button>
          </div>
          <IconButton effect="pulse" buttonColor="secondary">
            <FontAwesomeIcon icon={faPlay} width={14} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
