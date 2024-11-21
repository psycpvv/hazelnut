import { fetchSanity, groq } from '@/sanity/fetch'

export const fetchLayoutData = () =>
  fetchSanity<Sanity.Layout>(
    groq`
      {
        "header": *[_type == "header"][0] {
            ...
        },
        "footer": *[_type == "footer"][0] {
            ...
        },
        }
    `,
    { tags: ['faqPage'] },
  )
