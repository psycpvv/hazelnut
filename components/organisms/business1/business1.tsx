'use client'
import Lottie from 'react-lottie'

import { Button } from '@/components/atoms/button'
import { Typography } from '@/components/atoms/typography'

import lottie1 from './lottie1.json'
import lottie2 from './lottie2.json'
import lottie3 from './lottie3.json'

export default function Basiness1() {
  return (
    <div className="flex flex-col items-center px-4 py-20">
      <Typography variant="h2" textColor="primary" className="pb-4 text-center">
        HOW IT WORKS?
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        We plant and nurture trees with care, cultivating their growth and
        selling the produce. <br />
        You, in turn, reap the returns.
      </Typography>
      <div className="w-[200px] py-12">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie1,
          }}
        />
      </div>
      <Typography variant="h3" textColor="primary" className="pb-5 text-center">
        STEP 1
        <div className="font-roboto text-xl">GET INVOLVED AS AN INVESTOR</div>
      </Typography>
      <Typography variant="subtitle1" className="px-6 text-center">
        Begin your investment journey by choosing the desired number of trees to
        invest in. As a new investor, you will receive a comprehensive contract
        that guarantees your entitlement to a share in the profits generated
        from the plantation.
      </Typography>
      <div className="w-[200px] py-12">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie2,
          }}
        />
      </div>
      <Typography variant="h3" textColor="primary" className="pb-5 text-center">
        STEP 2<div className="font-roboto text-xl">FOLLOW PROGRESS</div>
      </Typography>
      <Typography variant="subtitle1" className="px-6 text-center">
        Sit back and monitor your investment’s progress. Our proficient team of
        Agri Specialists takes charge of every facet of orchard care, diligently
        managing the entire journey from planting to harvesting, and effectively
        navigating the supply chain for selling.
      </Typography>
      <div className="w-[200px] py-12">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie3,
          }}
        />
      </div>
      <Typography variant="h3" textColor="primary" className="pb-5 text-center">
        STEP 3<div className="font-roboto text-xl">HARVEST THE RETURNS</div>
      </Typography>
      <Typography variant="subtitle1" className="px-6 text-center">
        Collect profits from crop sales after produce is harvested and sold.
      </Typography>
      <div className="flex w-full justify-between py-8">
        <Button>INVEST NOW</Button>
        <Button variant="outlined">
          <div className="px-3">
            DOWNLOAD <br /> WHITEPAPER
          </div>
        </Button>
      </div>
    </div>
  )
}
