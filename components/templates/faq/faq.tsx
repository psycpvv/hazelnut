import FaqContent from '@/components/organisms/faq-content'
import FaqSubheader from '@/components/organisms/faq-subheader'
import FaqTitle from '@/components/organisms/faq-title'

export default function Faq() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden pb-20">
      <FaqTitle />
      <FaqSubheader />
      <FaqContent />
    </main>
  )
}
