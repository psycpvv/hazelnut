import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortableSmallListComponent = {
  listItem: {
    bullet: ({ children }: any) => (
      <div className="flex gap-2.5 text-base/6 items-first-baseline">
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

export default PortableSmallListComponent
