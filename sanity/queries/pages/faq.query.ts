import { groq } from 'next-sanity'

import { Slug } from '@/sanity/types'

export type FaqItem = {
  _id: string
  title: string
  slug: Slug
  templatedDescription?: string
  description: any
}

export type FaqItems = FaqItem[]

export type FaqListItem = {
  _id: string
  title: string
  faqItems: FaqItems
}

export type FaqList = FaqListItem[]

export type FaqType = {
  _id: string
  title: string
  subtitle: any
  faqList: FaqList
}

export const faqQuery = groq`
*[_type == "faqPage"][0] {
  ...,
  faqList[]->{
    ...,
    faqItems[]->
  }
}
`
