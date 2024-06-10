import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '@/components/atoms/button'
import { IconButton } from '@/components/atoms/icon-button'

export default function Banner() {
  return (
    <div className="w-full bg-[url('/assets/img/hero6.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10 px-4 py-52 text-white">
        <div className="font-nunito text-[34px] uppercase leading-[42px]">
          Embrace the power of investments in <br />
          agriculture for a sustainable future
        </div>
        <div className="pb-9 pt-5">
          We offer green passive income opportunities within your reach
        </div>
        <div className="flex gap-1">
          <div>
            <Button buttonColor="secondary" className="text-nowrap">
              INVEST NOW
            </Button>
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
