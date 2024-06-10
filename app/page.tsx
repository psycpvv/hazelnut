import Image from 'next/image'

import AboutSection from '@/components/molecules/about-section'
import Calculator from '@/components/molecules/calculator'
import CalculatorBlue from '@/components/molecules/calculator-blue'
import Contact from '@/components/molecules/contact'
import EscWhite from '@/components/molecules/esc-white'
import Features from '@/components/molecules/features'
import Income from '@/components/molecules/income'
import Partners from '@/components/molecules/partners'
import Roadmap from '@/components/molecules/roadmap'
import Team from '@/components/molecules/team'
import TrackRecord from '@/components/molecules/track-record'
import WhyTreesupy from '@/components/molecules/why-treesupy'
import Banner from '@/components/organisms/banner'
import Basiness1 from '@/components/organisms/business1'
import Prices from '@/components/organisms/prices'
import Workflow from '@/components/organisms/workflow'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <Banner />
      <Basiness1 />
      <Workflow
        data={{
          title: 'EARN PASSIVE INCOME',
          subTitle:
            'Create a long-term passive income that will allow you to invest your time where it matters the most.',
          workflowBoxes: [
            {
              title: 'SECURITY',
              subtitle:
                'Security tokens representing real-world assets on fully managed farms with long-term supply chain contracts.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/img/security-shield.svg"
                  width={50}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'Flexibility',
              subtitle: (
                <>
                  Maximize control over your financial liquidity with the
                  freedom to buy and sell at your discretion.*
                  <div className="pt-2 text-[.625em] leading-5">
                    *Subject to regulatory holding requirements and secondary
                    market listing. Terms and Conditions apply
                  </div>
                </>
              ),
              href: '/faq#sell_treesury_tree',
              icon: (
                <Image
                  src="/assets/img/liquidity.svg"
                  width={50}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'SUSTAINABILITY',
              subtitle:
                'Contribute to a more sustainable future by investing in a nature-based solution for carbon removal.',
              href: '/faq#return_on_carbon_credits',
              icon: (
                <Image
                  src="/assets/img/work-4-1.svg"
                  width={101}
                  height={100}
                  alt="security-shield"
                  className="py-1"
                />
              ),
            },
          ],
        }}
      />
      <Prices />
      <Workflow
        data={{
          title: 'EARN & PAY: FLEXIBLE OPTIONS',
          subTitle:
            'Refer and earn! Get rewarded for spreading the word about Treesury while enjoying flexible payment options',
          workflowBoxes: [
            {
              title: 'BONUS - REFERRAL SCHEME',
              subtitle:
                'Earn rewards by referring friends or family! Recommend Treesury to others and receive bonuses.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/referral.svg"
                  width={65}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'GIFT VOUCHERS',
              subtitle:
                'Give the gift of investment! Purchase gift vouchers for your loved ones to start earning and building the greener future.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/gift.svg"
                  width={65}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'PAYMENT IN INSTALLMENTS',
              subtitle:
                'Enjoy flexibility! Split your payments into manageable installments for a stress-free investment experience.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/installments.svg"
                  width={65}
                  height={100}
                  alt="security-shield"
                  className="py-1"
                />
              ),
            },
          ],
        }}
      />
      <EscWhite />
      <CalculatorBlue />
      <Calculator />
      <AboutSection />
      <Workflow
        data={{
          title: 'WHAT TO EXPECT',
          subTitle: 'We differentiate ourselves from other farm managers by:',
          investBtn: true,
          workflowBoxes: [
            {
              title: 'Full transparency.',
              href: '/faq#monitor_investment',
              icon: (
                <Image
                  src="/assets/img/full-transparency-new.svg"
                  width={50}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'Streamlined & cost-effective investment procedure.',

              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/img/simple-low-cost-investment-process-new.svg"
                  width={50}
                  height={100}
                  alt="security-shield"
                  className="py-5"
                />
              ),
            },
            {
              title: 'Precision farming guided by data-driven insights.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/img/data-driven-precision-farming-new.svg"
                  width={66}
                  height={40}
                  alt="security-shield"
                  className="py-1"
                />
              ),
            },
            {
              title: 'Sustainable and regenerative farming practices.',
              href: '/faq#hazelnut_experience',
              icon: (
                <Image
                  src="/assets/img/responsible-regenerative-farming-practices.svg"
                  width={50}
                  height={50}
                  alt="security-shield"
                  className="py-1"
                />
              ),
            },
          ],
        }}
      />
      <Features />
      <Income />
      <WhyTreesupy />
      <Roadmap />
      <Partners />
      <Team />
      <TrackRecord />
      <Contact />
    </main>
  )
}
