import { groq } from 'next-sanity'

import { CommonSection } from '@/sanity/types'

import {
  ImageProps,
  imageProps,
  withImageProps,
} from '../components/imageProps'
import { WorkFlow, workFlowCardsField } from '../components/workFlowCardProps'

export type AboutSection = {
  title: string
  subtitle: string
  caption: string
  hint: string
  image: ImageProps
}

export type Banner = {
  title: string
  subtitle: string
  image: ImageProps
}

export type Calculator = {
  availableTokens: number
  basePrice: number
  description: any
  reservedTokens: number
  totalTokens: number
}

export type Features = {
  title: string
  description: any
  image: ImageProps
}

export type HowItWorks = {
  title: string
  subtitle: string
  step1: {
    subtitle: string
    lottieFile: string
    title: string
  }
  step2: {
    subtitle: string
    lottieFile: string
    title: string
  }
  step3: {
    title: string
    subtitle: string
    lottieFile: string
  }
}

export type Income = {
  title: string
  subtitle: string
  image: ImageProps
}

export type Partners = {
  title: string
  partners: {
    domain: string
    image: ImageProps
  }[]
}

export type Prices = {
  description: string
  earlyBirdPrice: number
  regularPrice: number
  title: string
  year1: number
  year2: number
  year3: number
  year4: number
}
export type Roadmap = {
  title: string
  subtitle: string
  plans: {
    _id: string
    timeline: string
    item: string[]
  }[]
}

export type TeamMember = {
  _id: string
  linkedin: string
  name: string
  role: string
  image: ImageProps
}

export type TeamMembers = TeamMember[]

export type Team = {
  title: string
  subtitle: string
  teamMembers: TeamMembers
}
export type TrackRecord = {
  title: string
  subtitle: string
  description: any
  image1: ImageProps
  image2: ImageProps
}
export type WhyTreesupy = {
  title: string
  subtitle: string
  description: any
}

export type HomeType = {
  _id: string
  title: string
  aboutSection: AboutSection
  banner: AboutSection
  calculator: Calculator
  contact: CommonSection
  features: Features
  howItWorks: HowItWorks
  income: Income
  investmentPlanner: CommonSection
  partners: Partners
  passiveIncome: WorkFlow
  prices: Prices
  EarnPayOptions: WorkFlow
  roadmap: Roadmap
  secApprovedWhitepaper: CommonSection
  team: Team
  trackRecord: TrackRecord
  whatToExpect: WorkFlow
  whyTreesupy: WhyTreesupy
}

export const homeQuery = groq`
*[_type == "home"][0] {
  ..., 
  aboutSection ${withImageProps},
  banner ${withImageProps},
  features ${withImageProps},
  howItWorks {
    ...,
    step1 {
      ...,
      "lottieFile": lottieFile.asset->url
    },
    step2 {
      ...,
      "lottieFile": lottieFile.asset->url
    },
    step3 {
      ...,
      "lottieFile": lottieFile.asset->url
    }
  },
  income ${withImageProps},
  partners {
    ...,
    partners[]-> ${withImageProps}
  },
  passiveIncome ${workFlowCardsField},
  EarnPayOptions ${workFlowCardsField},
  roadmap {
    ...,
    plans[]->
  },
  team {
    ...,
    teamMembers[]-> ${withImageProps}
  },
  trackRecord {
    ...,
    "image1": image.asset-> ${imageProps},
    "image2": image.asset-> ${imageProps}
  },
  whatToExpect ${workFlowCardsField}
}
`
