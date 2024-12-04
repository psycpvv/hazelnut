import Banner from './banner'
import Calculator from './calculator'
import Contact from './contact'
import HowItWorks from './how-it-works'
import ItemsWithImage from './items-with-image'
import NoteList from './note-list/note-list'
import Partners from './partners'
import Pricing from './pricing'
import RichText from './rich-text'
import StoStatus from './sto-status'
import Team from './team'
import TextWithCards from './text-with-cards'
import TextWithImage from './text-with-image'
import Timeline from './timeline'
import WhyTreesury from './why-treesury'

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
  return (
    <>
      {modules?.map(module => {
        switch (module._type) {
          // case 'banner':
          //   return <Banner {...module} key={module._key} />
          // case 'sto-status':
          //   return <StoStatus {...module} key={module._key} />
          // case 'calculator':
          //   return <Calculator {...module} key={module._key} />
          case 'contact':
            return <Contact {...module} key={module._key} />
          // case 'how-it-works':
          //   return <HowItWorks {...module} key={module._key} />
          // case 'items-with-image':
          //   return <ItemsWithImage {...module} key={module._key} />
          // case 'partners':
          //   return <Partners {...module} key={module._key} />
          // case 'pricing':
          //   return <Pricing {...module} key={module._key} />
          // case 'rich-text':
          //   return <RichText {...module} key={module._key} />
          // case 'team':
          //   return <Team {...module} key={module._key} />
          // case 'text-with-cards':
          //   return <TextWithCards {...module} key={module._key} />
          // case 'text-with-image':
          //   return <TextWithImage {...module} key={module._key} />
          // case 'timeline':
          //   return <Timeline {...module} key={module._key} />
          // case 'why-treesury':
          //   return <WhyTreesury {...module} key={module._key} />
          // case 'note-list':
          //   return <NoteList {...module} key={module._key} />

          default:
            return <div data-type={module._type} key={module._key} />
        }
      })}
    </>
  )
}
