import { fetchSanity, groq } from '@/sanity/fetch'

export const fetchFaqData = () =>
  fetchSanity<Sanity.FaqPage>(
    groq`
      *[_type == "faqPage"][0] {
        ...,
        list[]{
          ...,
          item[]->{
            ...
          }
        }
      }
    `,
    { tags: ['faqPage'] },
  )
