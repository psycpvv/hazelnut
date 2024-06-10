import Image from 'next/image'

import InvestButton from '@/components/atoms/invest-button'
import { Typography } from '@/components/atoms/typography'
import WorkflowBox from '@/components/molecules/workflow-box'
import { WorkflowBoxProps } from '@/components/molecules/workflow-box/workflow-box'

type WorkflowProps = {
  data: {
    title: string
    subTitle: string
    workflowBoxes: WorkflowBoxProps[]
    investBtn?: boolean
  }
}

export default function Workflow({
  data: { title, subTitle, workflowBoxes, investBtn },
}: WorkflowProps) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center bg-primary px-4 py-12">
        <Image
          src="/assets/img/upper-curve.svg"
          width={1920}
          height={64}
          alt="upper-curve"
          className="absolute left-0 top-0"
        />
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
          {subTitle}
        </Typography>
        <div className="flex flex-col gap-10">
          {workflowBoxes.map((box, key) => (
            <WorkflowBox key={key} data={box} />
          ))}
        </div>
        {investBtn && <InvestButton className="mt-12" />}
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
