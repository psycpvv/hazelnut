import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import { TeamMember } from '@/sanity/queries/pages/home.query'

type TeamItemProps = {
  data: TeamMember
}
export default function TeamItem({
  data: { linkedin, name, role, image },
}: TeamItemProps) {
  return (
    <div>
      <Image
        src={image.url}
        width={image.metadata.dimensions.width}
        height={image.metadata.dimensions.height}
        alt="upper-curve"
        className="h-[450px] rounded-2xl object-cover"
      />

      <div className="relative z-10 mx-auto -mt-16 w-[90%] rounded-2xl bg-white p-5 pt-10 text-center">
        <div className="absolute -top-6 left-1/2 flex h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-white">
          <Link href={linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="text-primary transition-colors duration-300 hover:text-black"
            />
          </Link>
        </div>
        <div className="text-lg">{name}</div>
        <div className="mt-2.5 text-[#777]">{role}</div>
      </div>
    </div>
  )
}
