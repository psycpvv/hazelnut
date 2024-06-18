import { groq } from 'next-sanity'

import { ImageProps, imageProps } from './imageProps'

export type WorkFlowCard = {
  _id: string
  title: string
  subtitle: string
  icon: ImageProps
  link: string
}

export type WorkFlowCards = WorkFlowCard[]

export type WorkFlow = {
  title: string
  subtitle: string
  workFlowCards: WorkFlowCards
}
export const workFlowCardsField = groq`
{
  ...,
  workFlowCards[]->{
    ...,
    "icon": 
      icon.asset-> ${imageProps}
  }
}`
