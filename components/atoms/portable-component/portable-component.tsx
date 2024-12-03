import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableTextReactComponents } from 'next-sanity'

export const PortableSmallListComponent: Partial<PortableTextReactComponents> =
  {
    listItem: {
      bullet: ({ children }) => (
        <div className="flex gap-2.5 items-first-baseline">
          <div>
            <FontAwesomeIcon
              icon={faCheckCircle}
              width={16}
              className="text-secondary"
            />
          </div>
          <div>{children}</div>
        </div>
      ),
    },
  }

export const PortableTitleWithBoldComponent: Partial<PortableTextReactComponents> =
  {
    marks: {
      strong: ({ children }) => (
        <strong className="font-normal text-secondary">{children}</strong>
      ),
    },
  }
