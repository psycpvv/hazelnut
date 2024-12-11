import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { IconButton } from '@/components/atoms/icon-button'
import { Link } from '@/i18n/routing'

export default function Footer(footer: Sanity.Layout['footer']) {
  const t = useTranslations('Footer')
  return (
    <div className="flex w-full flex-col items-center px-2 pt-8 lg:pt-16">
      <div className="container flex flex-col items-center">
        <div className="grid w-full gap-6 md:grid-cols-4 md:px-6">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Image
              src="/assets/img/treesury-logo.svg"
              width={183}
              height={150}
              alt="Logo"
              className="w-[250px]"
            />
          </div>
          <div className="text-primary">
            <h3 className="py-5 text-lg font-bold">{t('quickLinks')}</h3>
            <ul className="flex flex-col gap-4">
              {footer.quickLinks.map(nav => (
                <li key={nav._key}>
                  <Link
                    href={nav.link}
                    target={nav.newTab ? '_blank' : '_self'}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-primary">
            <h3 className="py-5 text-lg font-bold">{t('haveMoreQuestions')}</h3>
            <div className="text-lg font-light">{t('emailUs')}</div>
            <a href="mailto:info@treesury.com" className="font-bold">
              info@treesury.com
            </a>
          </div>
          <div>
            <h3 className="py-5 text-lg font-bold text-primary">
              {t('subscribeToOurNewsletter')}
            </h3>
            <div className="relative flex items-center justify-between gap-4 lg:flex-col xl:flex-row">
              <input
                type="text"
                className="w-full border-b-2 border-primary py-1 outline-none"
                placeholder={t('enter-your-email')}
              />
              <button className="absolute right-0 top-0 rounded-full bg-primary px-3 py-0.5 text-white">
                {t('subscribe')}
              </button>
            </div>
            <div className="py-2 text-sm font-light text-primary">
              {t('noSpamWePromise')}
            </div>
            <div className="flex gap-5 py-5">
              <a
                href="https://www.linkedin.com/company/treesury/"
                target="_blank"
              >
                <IconButton size="small">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/treesury/" target="_blank">
                <IconButton size="small">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </IconButton>
              </a>
              <a
                href="https://www.facebook.com/TreesuryOfficial"
                target="_blank"
              >
                <IconButton size="small">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
        <div className="px-5 md:pt-16">
          <Image
            src="/assets/img/fondbigbanner.png"
            width={1080}
            height={132}
            alt="fondbigbanner"
          />
        </div>
        <div className="py-5 md:text-center text-sm/6 font-light text-primary md:w-2/3 md:px-5">
          {t('fundingInfo')}
        </div>
        <div className="flex w-full flex-col justify-center gap-6 border-t px-8 py-5 text-sm text-primary md:mt-14 lg:flex-row-reverse lg:justify-between">
          <div className="flex justify-center gap-8">
            <Link href="/privacy-policy">{t('privacyPolicy')}</Link>
            <Link href="/disclaimer">{t('disclaimer')}</Link>
          </div>
          <div className="text-center">
            {t('copyright', { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
    </div>
  )
}
