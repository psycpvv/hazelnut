import { Button } from '@/components/atoms/button'
import { Typography } from '@/components/atoms/typography'

export default function EscWhite() {
  return (
    <div
      className="container flex w-full flex-col gap-4 px-4 py-14"
      id="esc-white"
    >
      <Typography variant="h2" textColor="primary" className="text-center">
        SEC APPROVED WHITEPAPER
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        Digital tokens are regulated by the Digital Property Act. Our whitepaper
        has been approved by the Republic of Serbia Securities Commission.
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
