'use client'

import './style.scss'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stegaClean } from '@sanity/client/stega'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { useEffect, useRef, useState } from 'react'
import Faq from 'react-faq-component'

import { FaqList } from '@/sanity/queries/pages/faq.query'
import { blocksToText } from '@/utils/utils'

import specialFaqItem from './special-faq-item'

type FaqContentProps = {
  data: FaqList
}

export default function FaqContent({ data }: FaqContentProps) {
  const [searchText, setSearchText] = useState('')
  const rowsObject = useRef<Record<string, any>>({})
  useEffect(() => {
    const slug = window.location.hash.substring(1)
    console.log(slug)

    if (!slug) return
    setTimeout(() => {
      for (const faqList of data) {
        const faqItemIndex = faqList.faqItems.findIndex(
          item => item.slug.current === slug,
        )
        if (faqItemIndex !== -1) {
          const row = rowsObject.current[faqList._id][faqItemIndex]
          row.expand()
          console.log(row)

          row.scrollIntoView()
          break
        }
      }
    }, 500)
  }, [data])

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
            {data.map((faq, key) => (
              <Link
                key={key}
                href={`/faq#${faq._id}`}
                className="flex h-[50px] w-full items-center justify-center rounded-lg bg-primary px-4 text-center font-bold md:h-auto md:w-auto md:px-2.5 md:py-1"
              >
                {faq.title}
              </Link>
            ))}
          </div>
        </div>
      </div>{' '}
      <div className="container px-3">
        <div className="faq-style-wrapper">
          {data.map((faqItem, key) => (
            <Faq
              key={key}
              data={{
                title: (
                  <div id={faqItem._id} className="scroll-mt-28">
                    {faqItem.title}
                  </div>
                ),
                rows: faqItem.faqItems
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
                    content: item.templatedDescription ? (
                      specialFaqItem[stegaClean(item.templatedDescription)]
                    ) : (
                      <PortableText value={item.description} />
                    ),
                  })),
              }}
              config={{
                expandIcon: <FontAwesomeIcon icon={faPlus} width={16} />,
                collapseIcon: <FontAwesomeIcon icon={faMinus} width={16} />,
              }}
              getRowOptions={(props: any) => {
                rowsObject.current[faqItem._id] = props
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
