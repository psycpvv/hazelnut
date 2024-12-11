import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
  namespace Sanity {
    // documents

    type LinkItem = {
      _key: string
      title: string
      newTab: boolean
      _type: 'item'
      link: string
    }

    type Layout = {
      header: { menu: LinkItem[]; cta?: Button[] }
      footer: { quickLinks: LinkItem[] }
    }

    // pages

    type PageBase = SanityDocument<{
      title?: string
      seo: Seo
    }>

    type Page = PageBase & {
      readonly _type: 'page'
      modules?: Module[]
    }

    type Page = PageBase & {
      readonly _type: 'page'
      modules?: Module[]
    }

    type FaqPage = {
      _id: string
      title: string
      description: any
      note: any
      list: {
        _key: string
        title: string
        item: {
          title: string
          slug: Slug
          description: any
        }[]
      }[]
    }

    // miscellaneous

    // objects

    type Image = SanityImageObject &
      Partial<{
        alt: string
        loading: 'lazy' | 'eager'
      }>

    type Slug = {
      current: string
      _type: 'slug'
    }

    type Seo = {
      description: string
      keywords: string[]
      metaImage: ImageProps
      robotsNoFollow: boolean
      robotsNoIndex: boolean
      title: string
    }

    type Banner = {
      content: any
      bgimage: Image
    }

    type HowItWorks = {
      title: string
      subtitle: string
      bgimage: ImageProps
      steps?: {
        title: string
        subtitle: string
        lottieFile: string
      }[]
      cta?: Button[]
      note?: string
    }

    type StoStatus = {
      soldTokens: number
      successThresholdOfSto: number
      totalTokens: number
      reservedTokens: number
      availableTokens: number
      description: any
      cta?: Button[]
      note?: string
    }

    type TextWithCards = {
      title: string
      subtitle: string
      cards: {
        logo: Image
        title: string
        description: any
        link: string
      }[]
      cta?: Button[]
      note?: string
    }

    type Pricing = {
      title: string
      earlyPrice: number
      regularPrice: number
      subtitle: string
      note: string
      cta?: Button[]
    }

    type RichText = {
      titleWidth?: number
      titleSize?: number
      invertColor?: boolean
      title: any
      subtitle: any
      cta?: Button[]
      description: any
    }

    type Calculator = {
      totalTokens: number
      reservedTokens: number
      basePrice: number
      cta?: Button[]
      note?: string
      description?: any
    }

    type TextWithImage = {
      invertColor?: boolean
      image: Image
      imagePosition?: boolean
      note?: string
      title: any
      titleVariant:
        | 'default'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'subtitle1'
        | 'subtitle2'
        | 'text'
      description: any
      cta?: Button[]
    }

    type WhyTreesury = {
      title: string
      subtitle: string
      description?: any
    }

    type Timeline = {
      title: string
      subtitle: string
      cta?: Button[]
      note?: string
      plans: {
        quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4'
        year:
          | '20'
          | '21'
          | '22'
          | '23'
          | '24'
          | '25'
          | '26'
          | '27'
          | '28'
          | '29'
          | '30'
          | '31'
          | '32'
          | '33'
          | '34'
          | '35'
        items: string[]
      }[]
    }

    type Partners = {
      title: string
      partners: Partner[]
    }

    type Partner = {
      url: string
      image: Image
    }

    type NoteList = {
      title: string
      subtitle: string
      item: {
        _key: string
        title: string
        description: any
      }[]
      cta?: Button[]
      note?: string
    }

    type Team = {
      title: string
      subtitle: string
      team: {
        avatar: Image
        name: string
        role: string
        linkedin: string
      }[]
    }

    type Contact = {
      description: any
      linkedin: string
      instagram: string
      facebook: string
    }

    type ItemsWithImage = {
      image: Image
      title: string
      items: string[]
    }

    type Button = {
      _key: string
      _type: 'button'
      animation?: boolean
      newTab?: boolean
      color: 'default' | 'secondary'
      variant: 'contained' | 'outlined'
      size: 'default' | 'small'
      icon?: string
      link: string
      text?: string
    }

    type Image = SanityImageObject &
      Partial<{
        alt: string
        loading: 'lazy' | 'eager'
      }>

    type Module<T = string> = {
      _type: T
      _key: string
      uid?: string
    }
  }
}
