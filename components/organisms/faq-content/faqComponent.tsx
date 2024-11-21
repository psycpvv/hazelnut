import { PortableTextReactComponents, stegaClean } from 'next-sanity'

import specialFaqItem from './special-faq-item'

export const faqComponent: Partial<PortableTextReactComponents> = {
  types: {
    'Custom Widget': ({ value }) =>
      specialFaqItem[stegaClean(value.customWidget)],
  },
}
