import Modules from '@/components/modules'
import { fetchHomeData } from '@/sanity/services/pages/home.service'
import { LocaleProps } from '@/types'

// export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
//   const params = await props.params

//   const { locale } = params

//   const { seo } = await fetchHomeData(locale)
//   return mapSeo(seo)
// }

export default async function Page(props: LocaleProps) {
  const { locale } = await props.params
  const page = await fetchHomeData(locale)
  return <Modules modules={page?.modules} />
}
