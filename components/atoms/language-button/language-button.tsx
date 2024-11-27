'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/routing'

export default function LanguageButton() {
  const router = useRouter()
  const locale = useLocale()
  const revertedLocale = locale === 'en' ? 'rs' : 'en'
  const pathname = usePathname()

  function toggleLocale() {
    const queryString = window.location.search
    router.replace(pathname + queryString, {
      locale: revertedLocale,
    })
  }
  return (
    <button className="current_lang-btn horizontalAnim" onClick={toggleLocale}>
      <span className="current_lang">
        <Image
          src={`/assets/img/${revertedLocale}.svg`}
          alt=""
          width={25}
          height={25}
          className="lang_img img-fluid"
        />
      </span>
    </button>
  )
}
