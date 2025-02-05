import { draftMode } from 'next/headers'
import type { QueryParams, ResponseQueryOptions } from 'next-sanity'

import client from './client'

export { default as groq } from 'groq'

export async function fetchSanity<T = any>(
  query: string,
  {
    params = {},
    ...next
  }: {
    params?: QueryParams
  } & ResponseQueryOptions['next'] = {},
) {
  const preview =
    process.env.NODE_ENV === 'development' || (await draftMode()).isEnabled

  return client.fetch<T>(
    query,
    params,
    preview
      ? {
          // stega: true,
          perspective: 'previewDrafts',
          useCdn: false,
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: 'published',
          useCdn: true,
          next: {
            revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE) || false,
            ...next,
          },
        },
  )
}
