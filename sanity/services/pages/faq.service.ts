import { fetchSanity } from '@/sanity/fetch'
import { faqQuery, FaqType } from '@/sanity/queries/pages/faq.query'

export const fetchFaqData = () =>
  fetchSanity<FaqType>(faqQuery, { tags: ['faqPage'] })
