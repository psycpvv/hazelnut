'use client'

import './style.scss'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Faq from 'react-faq-component'

import { faqs } from './constants'

export default function FaqContent() {
  const [rows1, setRows1] = useState<any>(null)
  const [rows2, setRows2] = useState<any>(null)
  const [rows3, setRows3] = useState<any>(null)
  const [rows4, setRows4] = useState<any>(null)

  useEffect(() => {
    if (rows) {
      // setTimeout(() => {
      //   rows[0].expand()
      // }, 2500)

      // setTimeout(() => {
      //   rows[0].close()
      // }, 5000)

      setTimeout(() => {
        rows[9].scrollIntoView()
        rows[9].expand()
        // rows[0].scrollIntoView(true);
      }, 1000)
    }
  }, [rows])
  return (
    <div className="container px-3">
      {/* <button onClick={}>aaa</button> */}
      <div className="faq-style-wrapper">
        {faqs.map((faqItem, key) => (
          <Faq
            key={key}
            data={faqItem}
            config={{
              expandIcon: <FontAwesomeIcon icon={faPlus} width={16} />,
              collapseIcon: <FontAwesomeIcon icon={faMinus} width={16} />,
            }}
            getRowOptions={(...props: any) => {
              ;[`setRows${key + 1}`](...props)
            }}
          />
        ))}
      </div>
    </div>
  )
}
