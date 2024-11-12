import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stegaClean } from 'next-sanity'
import { Fragment } from 'react'

import { IconLink } from '@/components/atoms/icon-link'
import { LinkButton } from '@/components/atoms/link-button'

export default function Ctas({ cta }: { cta: Sanity.Button[] }) {
  return (
    <>
      {cta.map((cta, index) => (
        <Fragment key={index}>
          {cta.icon ? (
            <IconLink
              effect="pulse"
              buttonColor={cta.color}
              href={cta.link}
              variant={stegaClean(cta.variant)}
              target={stegaClean(cta.newTab) ? '_blank' : '_self'}
            >
              <FontAwesomeIcon icon={faPlay} width={14} />
            </IconLink>
          ) : (
            <LinkButton
              buttonColor={stegaClean(cta.color)}
              variant={stegaClean(cta.variant)}
              size={stegaClean(cta.size)}
              href={cta.link}
              target={stegaClean(cta.newTab) ? '_blank' : '_self'}
            >
              {cta.text}
            </LinkButton>
          )}
        </Fragment>
      ))}
    </>
  )
}
