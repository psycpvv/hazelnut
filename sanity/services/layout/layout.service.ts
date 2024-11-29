import { routing } from '@/i18n/routing'
import { fetchSanity, groq } from '@/sanity/fetch'

export const fetchLayoutData = (locale: string = routing.defaultLocale) =>
  fetchSanity<Sanity.Layout>(
    groq`
      {
        "header": *[_type == "header" && language == $locale][0] {
            ...
        },
        "footer": *[_type == "footer" && language == $locale][0] {
            ...
        },
        }
    `,
    { tags: ['layout'], params: { locale } },
  )
