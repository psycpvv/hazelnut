import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IconButton } from '@/components/atoms/icon-button'

export default function Footer() {
  return (
    <div>
      <div className="grid px-6">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/img/treesury-logo.svg"
            width={183}
            height={150}
            alt="Logo"
            className="w-[250px]"
          />
        </div>
        <div className="text-primary">
          <h3 className="py-5 text-lg font-bold">Quick links</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#services">How it Works</Link>
            </li>
            <li>
              <Link href="/#calculator">Calculator</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="text-primary">
          <h3 className="py-5 text-lg font-bold">Have more questions?</h3>
          <div className="text-lg font-light">Email Us</div>
          <a href="mailto:info@treesury.com" className="font-bold">
            info@treesury.com
          </a>
        </div>
        <div className="">
          <h3 className="py-5 text-lg font-bold text-primary">
            Subscribe to our Newsletter
          </h3>
          <div className="flex items-center justify-between">
            <input
              type="text"
              className="border-b-2 border-primary outline-none"
              placeholder="Enter Your Email"
            />
            <button className="rounded-full bg-primary px-3 py-1 text-white">
              Subscribe
            </button>
          </div>
          <div className="text-sm font-light">No spam, we promise!</div>
          <div className="flex gap-5 py-5">
            <Link href="https://www.facebook.com/treesuryinc" target="_blank">
              <IconButton>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </IconButton>
            </Link>
            <Link href="https://www.facebook.com/treesuryinc" target="_blank">
              <IconButton>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5">
        <Image
          src="/assets/img/fondbigbanner.png"
          width={1615}
          height={197}
          alt="fondbigbanner"
        />
      </div>
      <div className="p-5 text-sm/6 font-light text-primary">
        The project is financed by the Innovation Fund from the European Union
        Pre-Accession Assistance and from the budget of the Republic of Serbia,
        the line of the Ministry of Science, Technological Development and
        Innovation.
      </div>
      <div className="mt-14 grid justify-center gap-4 border-t py-5 text-primary">
        <div className="flex justify-center gap-8">
          <Link href="#">Privacy policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>
        <div>Copyright © 2023. All Rights Reserved</div>
      </div>
    </div>
  )
}
