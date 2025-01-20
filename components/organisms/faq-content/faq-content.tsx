'use client'

import './style.scss'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableText } from 'next-sanity'
import { useEffect, useRef, useState } from 'react'
import Faq from 'react-faq-component'

import { Link } from '@/i18n/routing'
import { blocksToText } from '@/utils/utils'

import { faqComponent } from './faqComponent'

export default function FaqContent({ list }: { list: Sanity.FaqPage['list'] }) {
  const [searchText, setSearchText] = useState('')
  const rowsObject = useRef<Record<string, any>>({})
  useEffect(() => {
    const slug = window.location.hash.substring(1)
    if (!slug) return
    setTimeout(() => {
      for (const faqList of list) {
        const faqItemIndex = faqList.item.findIndex(
          item => item.slug?.current === slug,
        )
        if (faqItemIndex !== -1) {
          const row = rowsObject.current[faqList._key][faqItemIndex]
          row.expand()
          row.scrollIntoView()
          break
        }
      }
    }, 500)
  }, [list])

  return (
    <>
      <div className="container flex flex-col items-center px-3 py-10">
        <input
          type="search"
          className="w-full max-w-[500px] rounded-sm border px-4 py-2.5 text-lg outline-none"
          placeholder="Search..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <div className="py-10 text-white">
          <div className="grid w-full grid-cols-2 gap-2 md:flex md:justify-center md:gap-4">
            {list.map((list, key) => (
              <Link
                key={key}
                href={`/faq#${list._key}`}
                className="flex h-[50px] w-full items-center justify-center rounded-lg bg-primary px-4 text-center font-bold md:h-auto md:w-auto md:px-2.5 md:py-1"
              >
                {list.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className="faq-style-wrapper">
          {list.map((item, key) => (
            <Faq
              key={key}
              data={{
                title: (
                  <div id={item._key} className="scroll-mt-28">
                    {item.title}
                  </div>
                ),
                rows: item.item
                  .filter(
                    item =>
                      searchText === '' ||
                      item.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                      blocksToText(item.description)
                        .toLowerCase()
                        .includes(searchText.toLowerCase()),
                  )
                  .map(item => ({
                    title: item.title,
                    content: (
                      <PortableText
                        value={item.description}
                        components={faqComponent}
                      />
                    ),
                  })),
              }}
              config={{
                expandIcon: <FontAwesomeIcon icon={faPlus} width={16} />,
                collapseIcon: <FontAwesomeIcon icon={faMinus} width={16} />,
              }}
              getRowOptions={(props: any) => {
                rowsObject.current[item._key] = props
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
