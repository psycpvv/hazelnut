import {
  faFacebookF,
  faLinkedin,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Button } from '@/components/atoms/button'
import { IconButton } from '@/components/atoms/icon-button'
import { Input } from '@/components/atoms/input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'

export default function Contack() {
  return (
    <div className="bg-primary px-4 py-20">
      <div className="flex flex-col gap-4 text-white">
        <Typography variant="h2">
          Want to ask us a question that is not in our FAQ? Get in touch via the
          contact form
        </Typography>
        <Typography variant="subtitle1">
          Join our vibrant online community today!
        </Typography>
      </div>
      <div className="flex gap-5 py-5">
        <Link href="https://www.facebook.com/treesuryinc" target="_blank">
          <IconButton buttonColor="secondary">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </IconButton>
        </Link>
        <Link href="https://www.facebook.com/treesuryinc" target="_blank">
          <IconButton buttonColor="secondary">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </IconButton>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Input placeholder="Enter Your First Name" />
        <Input placeholder="Enter Your Last Name" />
        <Input placeholder="Enter Your Email" type="email" />
        <div className="text-lg text-white">
          <div className="">I am:</div>
          <div className="-ml-2.5 flex gap-10 text-white">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="html"
              >
                <input
                  name="type"
                  type="radio"
                  className="border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity before:content-empty checked:border-white checked:before:bg-white hover:before:opacity-10"
                  id="html"
                  checked
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light"
                htmlFor="html"
              >
                Individual
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  name="type"
                  type="radio"
                  className="border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity before:content-empty checked:border-white checked:before:bg-white hover:before:opacity-10"
                  id="react"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light"
                htmlFor="react"
              >
                Business
              </label>
            </div>
          </div>
        </div>
        <Textarea placeholder="Enter message" rows={8} />
        <Button buttonColor="secondary" className="mt-8">
          SEND
        </Button>
      </div>
    </div>
  )
}
