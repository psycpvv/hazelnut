import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
  namespace Sanity {
    // documents

    // pages

    type PageBase = SanityDocument<{
      title?: string
      seo: Seo
    }>

    type Page = PageBase & {
      readonly _type: 'page'
      modules?: Module[]
    }

    // miscellaneous

    // objects

    type Image = SanityImageObject &
      Partial<{
        alt: string
        loading: 'lazy' | 'eager'
      }>

    type Seo = {
      description: string
      keywords: string[]
      metaImage: ImageProps
      robotsNoFollow: boolean
      robotsNoIndex: boolean
      title: string
    }

    type Banner = {
      title: string
      subtitle: string
      bgimage: Image
      cta?: Button[]
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
    }

    type TextWithCards = {
      title: string
      subtitle: string
      cards: {
        logo: ImageProps
        title: string
        description: string
        link: string
      }[]
      cta?: Button[]
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
      invertColor?: boolean
      title: string
      subtitle: string
      cta?: Button[]
      description: any
    }

    type Calculator = {
      totalTokens: number
      reservedTokens: number
      basePrice: number
      cta?: Button[]
      description?: any
    }

    type TextWithImage = {
      invertColor?: boolean
      image: ImageProps
      imagePosition?: boolean
      note?: string
      title: string
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
      image: ImageProps
    }

    type Team = {
      title: string
      subtitle: string
      team: {
        avatar: ImageProps
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
      image: ImageProps
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
