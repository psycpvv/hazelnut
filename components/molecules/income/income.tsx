import Image from 'next/image'

import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'

export default function Income() {
  return (
    <div className="flex w-full flex-col items-center bg-primary py-16">
      <div className="container grid items-center justify-center px-8 lg:grid-cols-2">
        <Image
          src="/assets/img/illustration2.svg"
          width={1500}
          height={1176}
          alt="bush only new"
          className="px-12 pb-10"
        />
        <div className="lg flex flex-col gap-5">
          <Typography variant="h2" textColor="white">
            SPEND OR REINVEST INCOME FROM YOUR TREESURY TREE, TO{' '}
            <span className="text-secondary">PAVE THE WAY</span> TOWARDS YOUR
            GOALS.
          </Typography>
          <Typography variant="subtitle1" textColor="white">
            Perhaps you have ambitions to embark on a new venture, provide
            quality education for your children, or attain early retirement. Or
            perhaps you&apos;re still in the process of shaping your goals.
            Regardless of the stage you&apos;re at, everyone harbors dreams and
            aspirations for the future. With as little as one Treesury Tree, you
            gain the privilege of profit sharing from the farm, setting you on
            the path towards realizing your aspirations.
          </Typography>
          <InvestButton className="mt-8 w-full" />
        </div>
      </div>
    </div>
  )
}
