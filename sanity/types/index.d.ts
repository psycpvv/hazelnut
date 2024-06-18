import { ImageProps } from '../queries/components/imageProps'

export type Slug = {
  current: string
  _type: 'slug'
}

export type CommonSection = {
  title: string
  subtitle: string
  _key?: string
}

export type TeamMembers = TeamMember[]
