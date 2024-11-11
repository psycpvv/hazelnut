import Faq from '@/components/templates/faq'
import { fetchFaqData } from '@/sanity/services/pages/faq.service'

export default async function Page() {
  const data = await fetchFaqData()
  return <Faq data={data} />
}
