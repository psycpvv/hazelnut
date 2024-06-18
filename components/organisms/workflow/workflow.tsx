import Image from 'next/image'

import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'
import WorkflowBox from '@/components/molecules/workflow-box'
import { WorkFlow } from '@/sanity/queries/components/workFlowCardProps'
import { cn } from '@/utils/utils'

type WorkflowProps = {
  data: WorkFlow
  className?: string
}

export default function Workflow({
  data: { title, subtitle, workFlowCards },
  className,
}: WorkflowProps) {
  return (
    <>
      <div
        className={cn(
          'relative flex w-full flex-col items-center justify-center bg-primary px-4 py-12',
          className,
        )}
      >
        <Image
          src="/assets/img/upper-curve.svg"
          width={1920}
          height={64}
          alt="upper-curve"
          className="absolute left-0 top-0"
        />
        <div className="container flex flex-col items-center">
          <Typography
            variant="h2"
            textColor="white"
            className="pb-4 pt-6 text-center"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            className="pb-14 text-center"
            textColor="white"
          >
            {subtitle}
          </Typography>
          <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap md:gap-0">
            {workFlowCards.map((box, key) => (
              <div className="md:w-1/2 md:p-3 lg:w-1/4 lg:flex-1" key={key}>
                <WorkflowBox data={box} />
              </div>
            ))}
          </div>
          <InvestButton
            buttonColor="secondary"
            className="mt-12 md:w-[200px]"
          />
        </div>
      </div>
      <Image
        src="/assets/img/bottom-curve.png"
        width={1920}
        height={64}
        alt="upper-curve"
      />
    </>
  )
}
