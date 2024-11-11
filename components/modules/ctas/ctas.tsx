import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconButton } from '@/components/atoms/icon-button'
import { LinkButton } from '@/components/atoms/link-button'

export default function Ctas({ cta }: { cta: Sanity.Button[] }) {
  return (
    <div>
      {cta.map((cta, index) => (
        <div key={index}>
          {cta.icon ? (
            <IconButton effect="pulse" buttonColor={cta.color}>
              <FontAwesomeIcon icon={faPlay} width={14} />
            </IconButton>
          ) : (
            <LinkButton
              buttonColor={cta.color}
              variant={cta.variant}
              size={cta.size}
              href={cta.link}
              target={cta.newTab ? '_self' : '_blank'}
            >
              {cta.text}
            </LinkButton>
          )}
        </div>
      ))}
    </div>
  )
}
