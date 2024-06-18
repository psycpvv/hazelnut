'use client'

import './style.scss'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Faq from 'react-faq-component'

import { faqs } from './constants'

export default function FaqContent() {
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
          />
        ))}
      </div>
    </div>
  )
}
