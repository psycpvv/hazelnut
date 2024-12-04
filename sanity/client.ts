import { createClient } from 'next-sanity'

import { env } from '@/env'

export default createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV !== 'development',
  stega: {
    enabled: false,
    studioUrl: env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
