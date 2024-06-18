import Home from '@/components/templates/home/home'
import { fetchHomeData } from '@/sanity/services/pages/home.service'

export default async function Page() {
  const data = await fetchHomeData()

  return <Home data={data} />
}
