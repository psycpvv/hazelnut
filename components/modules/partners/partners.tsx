import { Typography } from '@/components/atoms/typography'

import Companies from '../../organisms/companies'

export default function Partners(data: Partial<Sanity.Partners>) {
  return (
    <div className="px-4 py-14">
      <div className="flex flex-col gap-4 px-4 pb-12">
        <Typography variant="h2" textColor="primary" className="text-center">
          {data.title}
        </Typography>
      </div>
      <Companies data={data.partners} />
    </div>
  )
}
