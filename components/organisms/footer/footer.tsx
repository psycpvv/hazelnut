import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { IconButton } from '@/components/atoms/icon-button'
import { Link } from '@/i18n/routing'

export default function Footer(footer: Sanity.Layout['footer']) {
  const t = useTranslations('Footer')
  return (
    <div className="flex w-full flex-col items-center py-8 lg:py-16">
      <div className="container flex flex-col items-center">
        <div className="grid px-6 md:grid-cols-4 md:gap-4">
          <div className="flex items-center justify-center md:items-start">
            <Image
              src="/assets/img/treesury-logo.svg"
              width={183}
              height={150}
              alt="Logo"
              className="w-[250px]"
            />
          </div>
          <div className="text-primary">
            <h3 className="py-5 text-lg font-bold">{t('nav.quickLinks')}</h3>
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
          <div className="">
            <h3 className="py-5 text-lg font-bold text-primary">
              {t('subscribeToOurNewsletter')}
            </h3>
            <div className="flex items-center justify-between gap-4 lg:flex-col xl:flex-row">
              <input
                type="text"
                className="w-full border-b-2 border-primary outline-none"
                placeholder="Enter Your Email"
              />
              <button className="w-full rounded-full bg-primary px-3 py-1 text-white">
                {t('subscribe')}
              </button>
            </div>
            <div className="text-sm font-light">{t('noSpamWePromise')}</div>
            <div className="flex gap-5 py-5">
              <Link href="https://www.facebook.com/treesuryinc" target="_blank">
                <IconButton>
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </IconButton>
              </Link>
              <Link href="https://www.facebook.com/treesuryinc" target="_blank">
                <IconButton>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5">
          <Image
            src="/assets/img/fondbigbanner.png"
            width={1615}
            height={197}
            alt="fondbigbanner"
          />
        </div>
        <div className="p-5 text-center text-sm/6 font-light text-primary md:w-2/3">
          {t('fundingInfo')}
        </div>
        <div className="mt-14 flex w-full flex-col justify-center gap-4 border-t px-8 py-5 text-primary lg:flex-row-reverse lg:justify-between">
          <div className="flex justify-center gap-8">
            <Link href="/privacy-policy">{t('privacyPolicy')}</Link>
            <Link href="/disclaimer">{t('disclaimer')}</Link>
          </div>
          <div>{t('copyright', { year: new Date().getFullYear() })}</div>
        </div>
      </div>
    </div>
  )
}
