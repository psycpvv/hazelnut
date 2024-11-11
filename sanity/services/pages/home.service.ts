import { routing } from '@/i18n/routing'
import { fetchSanity, groq } from '@/sanity/fetch'
import { modulesQuery, seo } from '@/sanity/queries'

export const fetchHomeData = (locale: string = routing.defaultLocale) =>
  fetchSanity<Sanity.Page>(
    groq`
    *[_type == "page" && slug.current == 'index' && language == $locale][0] {
      ...,
			${modulesQuery},
      ${seo}
    }`,
    { tags: ['homePage'], params: { locale } },
  )
