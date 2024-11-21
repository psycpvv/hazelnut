import { PortableText } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'
import FaqContent from '@/components/organisms/faq-content'
import { fetchFaqData } from '@/sanity/services/pages/faq.service'

export default async function Page() {
  const data = await fetchFaqData()
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden pb-20">
      <div className="flex w-full flex-col items-center bg-primary px-4 py-16 lg:py-28">
        <div className="container flex flex-col items-center justify-center gap-4 text-center text-white">
          <Typography variant="h2">{data.title}</Typography>
          <Typography variant="subtitle1">
            <PortableText value={data.description} />
          </Typography>
        </div>
      </div>
      <FaqContent list={data.list} />
      <div className="container px-3 pt-20">
        <PortableText
          value={data.note}
          components={{
            block: {
              h4: ({ children }) => (
                <div className="pb-8 text-lg">{children}</div>
              ),
            },
          }}
        />
      </div>
    </main>
  )
}
