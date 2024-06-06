import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'
import WorkflowBox from '@/components/molecules/workflow-box'
import { WorkflowBoxProps } from '@/components/molecules/workflow-box/workflow-box'

type WorkflowProps = {
  data: {
    title: string
    subTitle: string
    workflowBoxes: WorkflowBoxProps[]
  }
}

export default function Workflow({
  data: { title, subTitle, workflowBoxes },
}: WorkflowProps) {
  return (
    <div className="relative mb-12 flex flex-col items-center justify-center bg-primary px-4 pb-8 pt-16">
      <Image
        src="/assets/img/upper-curve.svg"
        width={1920}
        height={64}
        alt="upper-curve"
        className="absolute left-0 top-0"
      />
      <Typography variant="h2" textColor="white" className="pb-4 pt-6">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className="pb-14 text-center"
        textColor="white"
      >
        {subTitle}
      </Typography>
      {workflowBoxes.map((box, key) => (
        <WorkflowBox key={key} data={box} />
      ))}
      <Image
        src="/assets/img/bottom-curve.png"
        width={1920}
        height={64}
        alt="upper-curve"
        className="absolute -bottom-3 left-0"
      />
    </div>
  )
}
