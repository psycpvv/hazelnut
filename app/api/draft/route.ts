import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import client from '@/sanity/client'

const clientWithToken = client.withConfig({
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  draftMode().enable()

  redirect(redirectTo)
}
