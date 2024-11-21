'use client'

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableText } from 'next-sanity'

import { Button } from '@/components/atoms/button'
import { IconButton } from '@/components/atoms/icon-button'
import { Input } from '@/components/atoms/input'
import { Textarea } from '@/components/atoms/textarea'
import { Link } from '@/i18n/routing'

export default function Contact(data: Partial<Sanity.Contact>) {
  return (
    <div className="relative flex w-full flex-col items-center bg-primary px-4 py-20">
      <div className="absolute -top-[73px] md:-top-[79px]" id="contact"></div>
      <div className="container grid md:grid-cols-2 md:gap-8">
        <div className="">
          <div className="flex flex-col gap-4 text-white">
            <PortableText
              value={data.description}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="font-nunito text-4xl font-bold leading-[3rem] [&>a]:text-secondary">
                      {children}
                    </h2>
                  ),
                },
              }}
            />
          </div>
          <div className="flex gap-5 py-5">
            {data.linkedin && (
              <Link href={data.linkedin} target="_blank">
                <IconButton buttonColor="secondary" size="small">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </IconButton>
              </Link>
            )}
            {data.instagram && (
              <Link href={data.instagram} target="_blank">
                <IconButton buttonColor="secondary" size="small">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </IconButton>
              </Link>
            )}
            {data.facebook && (
              <Link href={data.facebook} target="_blank">
                <IconButton buttonColor="secondary" size="small">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </IconButton>
              </Link>
            )}
          </div>
        </div>
        <div className="">
          <div className="grid gap-2 md:grid-cols-2 md:gap-6">
            <Input placeholder="Enter Your First Name" />
            <Input placeholder="Enter Your Last Name" />
            <Input placeholder="Enter Your Email" type="email" />
            <div className="text-lg text-white">
              <div className="">I am:</div>
              <div className="-ml-3 -mt-2 flex gap-10 text-white">
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
                      onChange={() => {}}
                      checked
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
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
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
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
          </div>
          <Textarea placeholder="Enter message" rows={8} className="md:mt-4" />
          <div className="w-full">
            <Button
              buttonColor="secondary"
              size="small"
              className="mt-8 w-full md:w-[145px]"
            >
              SEND
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
