'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Companies() {
  return (
    <div className="-mx-8 py-4 xl:-mx-16 2xl:-mx-28 2xl:py-12">
      <Swiper
        loop={true}
        centeredSlides={false}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        modules={[Autoplay]}
        className="[&>.swiper-wrapper]:ease-linear"
      >
        {[1, 2, 3].map(v => (
          <SwiperSlide className="!w-auto" key={v}>
            <div className="flex h-12 items-center justify-center gap-12 pl-12 md:h-20 md:gap-24 md:pl-24 lg:h-20 2xl:h-36 2xl:gap-56 2xl:pl-56">
              <Link
                href="https://biosens.rs/en"
                target="_blank"
                className="h-12 lg:h-20"
              >
                <Image
                  src="/assets/img/partners/BioSense_bedz.svg"
                  width={140}
                  height={48}
                  alt="BioSense_bedz"
                  className="h-12 w-auto lg:h-20"
                />
              </Link>
              <Link
                href="https://www.inovacionifond.rs/en/"
                target="_blank"
                className="h-12 lg:h-20"
              >
                <Image
                  src="https://www.inovacionifond.rs/public/images/fid-logo-rs-eng.svg"
                  width={140}
                  height={48}
                  alt="BioSense_bedz"
                  className="h-12 w-auto lg:h-20"
                />
              </Link>
              <Link
                href="https://www.virtus.rs/"
                target="_blank"
                className="h-12 lg:h-20"
              >
                <Image
                  src="/assets/img/partners/virtus2.svg"
                  width={140}
                  height={48}
                  alt="BioSense_bedz"
                  className="h-12 w-auto lg:h-20"
                />
              </Link>
              <Link
                href="https://www.gistnetwork.org/"
                target="_blank"
                className="h-12 lg:h-20"
              >
                <Image
                  src="/assets/img/partners/gist2.png"
                  width={140}
                  height={48}
                  alt="BioSense_bedz"
                  className="h-12 w-auto lg:h-20"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
