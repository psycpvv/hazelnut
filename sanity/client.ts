import { createClient } from 'next-sanity'

import { dataset, dev } from '@/env'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  apiVersion: '2024-05-01',
  useCdn: !dev,
  stega: {
    enabled: false,
    studioUrl: dev
      ? 'http://localhost:3335'
      : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
