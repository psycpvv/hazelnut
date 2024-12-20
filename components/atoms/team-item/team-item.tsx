import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '@/i18n/routing'
import { urlFor } from '@/sanity/utils/image-builder'

export default function TeamItem({ data }: { data: Sanity.Team['team'][0] }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlFor(data.avatar).width(640).url()}
        alt="upper-curve"
        className="h-[450px] w-full rounded-2xl object-cover sm:h-[300px]"
      />
      <div className="relative z-10 mx-auto -mt-16 w-[90%] rounded-2xl bg-white p-5 pt-10 text-center">
        <div className="absolute -top-6 left-1/2 flex h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-white">
          <Link href={data.linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="text-primary transition-colors duration-300 hover:text-black"
            />
          </Link>
        </div>
        <div className="text-lg">{data.name}</div>
        <div className="mx-auto mt-2.5 max-w-[150px] text-[#777]">
          {data.role}
        </div>
      </div>
    </div>
  )
}
