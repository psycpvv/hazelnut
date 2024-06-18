import AboutSection from '@/components/organisms/about-section'
import Banner from '@/components/organisms/banner'
import Basiness1 from '@/components/organisms/business1'
import Calculator from '@/components/organisms/calculator'
import CalculatorBlue from '@/components/organisms/calculator-blue'
import Contact from '@/components/organisms/contact'
import EscWhite from '@/components/organisms/esc-white'
import Features from '@/components/organisms/features'
import Income from '@/components/organisms/income'
import Partners from '@/components/organisms/partners'
import Prices from '@/components/organisms/prices'
import Roadmap from '@/components/organisms/roadmap'
import Team from '@/components/organisms/team'
import TrackRecord from '@/components/organisms/track-record'
import WhyTreesupy from '@/components/organisms/why-treesupy'
import Workflow from '@/components/organisms/workflow'
import { HomeType } from '@/sanity/queries/pages/home.query'

type HomeProps = { data: HomeType }

export default function Home({ data }: HomeProps) {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <Banner data={data.banner} />
      <Basiness1 data={data.howItWorks} />
      <Workflow data={data.passiveIncome} />
      <Prices data={data.prices} />
      <Workflow data={data.EarnPayOptions} />
      <EscWhite data={data.secApprovedWhitepaper} />
      <CalculatorBlue data={data.investmentPlanner} />
      <Calculator data={data.calculator} />
      <AboutSection data={data.aboutSection} />
      <Workflow data={data.whatToExpect} />
      <Features data={data.features} />
      <Income data={data.income} />
      <WhyTreesupy data={data.whyTreesupy} />
      <Roadmap data={data.roadmap} />
      <Partners data={data.partners} />
      <Team data={data.team} />
      <TrackRecord data={data.trackRecord} />
      <Contact data={data.contact} />
    </main>
  )
}
