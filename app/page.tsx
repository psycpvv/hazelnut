import Image from 'next/image'

import Calculator from '@/components/molecules/calculator'
import CalculatorBlue from '@/components/molecules/calculator-blue'
import EscWhite from '@/components/molecules/esc-white'
import Banner from '@/components/organisms/banner'
import Basiness1 from '@/components/organisms/business1'
import Prices from '@/components/organisms/prices'
import Workflow from '@/components/organisms/workflow'

export default function Home() {
  return (
    <main className="flex w-full flex-col">
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
              href: '/faq#hazelnut_experience',
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
              href: '/faq#hazelnut_experience',
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
    </main>
  )
}
