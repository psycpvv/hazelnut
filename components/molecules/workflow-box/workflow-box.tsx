import Link from 'next/link'
import { ReactNode } from 'react'

import { Typography } from '@/components/atoms/typography'

export type WorkflowBoxProps = {
  title: string
  subtitle?: ReactNode
  href: string
  icon: ReactNode
}

export default function WorkflowBox({
  data: { title, subtitle, href, icon },
}: {
  data: WorkflowBoxProps
}) {
  return (
    <Link
      href={href}
      className="group relative z-10 flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-solid border-white/10 p-9 before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[0%] before:bg-white before:transition-all before:duration-500 before:ease-out before:content-empty after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-[0%] after:bg-white after:transition-all after:duration-500 after:ease-out after:content-empty hover:before:w-[51%] hover:after:w-[51%]"
    >
      <div className="h-[100px] overflow-hidden">{icon}</div>

      <Typography
        variant="h3"
        className="pb-2.5 pt-5 text-center uppercase text-white transition-all duration-300 group-hover:text-primary"
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className="pb-2 pt-1 text-center text-white transition-all duration-300 group-hover:text-primary"
      >
        {subtitle}
      </Typography>
    </Link>
  )
}
