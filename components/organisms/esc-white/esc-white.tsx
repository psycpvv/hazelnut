import { Button } from '@/components/atoms/button'
import { Typography } from '@/components/atoms/typography'
import { CommonSection } from '@/sanity/types'

type EscWhiteProps = { data: CommonSection }

export default function EscWhite({ data }: EscWhiteProps) {
  return (
    <div className="container relative flex w-full flex-col gap-4 px-4 py-14">
      <div className="absolute -top-[73px] md:-top-[79px]" id="esc-white"></div>
      <Typography variant="h2" textColor="primary" className="text-center">
        {data.title}
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        {data.subtitle}
      </Typography>
      <div className="flex w-full justify-between gap-8 py-8 md:justify-center">
        <Button>DOWNLOAD WHITEPAPER</Button>
        <Button variant="outlined">
          <div className="px-3">LICENSE NUMBER</div>
        </Button>
      </div>
    </div>
  )
}
