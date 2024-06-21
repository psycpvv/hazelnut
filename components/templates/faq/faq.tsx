import FaqContent from '@/components/organisms/faq-content'
import FaqTitle from '@/components/organisms/faq-title'
import { FaqType } from '@/sanity/queries/pages/faq.query'

type FaqProps = { data: FaqType }

export default function Faq({ data }: FaqProps) {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden pb-20">
      <FaqTitle title={data.title} subtitle={data.subtitle} />
      <FaqContent data={data.faqList} />
    </main>
  )
}
