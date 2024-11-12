import { Metadata } from 'next'

import Modules from '@/components/modules'
import { fetchHomeData } from '@/sanity/services/pages/home.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/utils'

// export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
//   const params = await props.params

//   const { locale } = params

//   const { seo } = await fetchHomeData(locale)
//   return mapSeo(seo)
// }

export default async function Page(props: LocaleProps) {
  const params = await props.params

  const { locale } = params

  const page = await fetchHomeData(locale)
  return <Modules modules={page?.modules} />
}
