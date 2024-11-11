import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/atoms/typography'

export default function Card({
  card,
}: {
  card: Sanity.TextWithCards['cards'][0]
}) {
  return (
    <Link
      href={card.link}
      className="group relative z-10 flex h-full w-full flex-col items-center overflow-hidden rounded-2xl border border-solid border-white/10 p-9 before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[0%] before:bg-white before:transition-all before:duration-500 before:ease-out before:content-empty after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-[0%] after:bg-white after:transition-all after:duration-500 after:ease-out after:content-empty hover:before:w-[51%] hover:after:w-[51%] md:items-start"
    >
      <div className="h-[100px] overflow-hidden">
        <Image {...card.logo} alt="security-shield" className="py-5" />
      </div>

      <div className="pb-2.5 pt-5 text-center font-nunito text-2xl text-white transition-all duration-300 group-hover:text-primary md:text-left">
        {card.title}
      </div>
      <Typography
        variant="subtitle1"
        className="pb-2 pt-1 text-center text-white transition-all duration-300 group-hover:text-primary md:text-left"
      >
        {card.description}
      </Typography>
    </Link>
  )
}
