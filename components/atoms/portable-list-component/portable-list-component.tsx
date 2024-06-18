import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortableListComponent = {
  listItem: {
    bullet: ({ children }: any) => (
      <div className="flex gap-2.5 font-light items-first-baseline">
        <div>
          <FontAwesomeIcon
            icon={faCheckCircle}
            width={25}
            className="text-secondary"
          />
        </div>
        <div className="-translate-y-1.5">{children}</div>
      </div>
    ),
  },
}

export default PortableListComponent
