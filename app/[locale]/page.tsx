import { Metadata } from 'next'

import Modules from '@/components/modules'
import { fetchHomeData } from '@/sanity/services/pages/home.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/utils'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const { seo } = await fetchHomeData(locale)
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  const page = await fetchHomeData(locale)
  return <Modules modules={page?.modules} />
}
