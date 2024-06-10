'use client'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'

import useCalculatorStore from '@/store/calculatorStore'

export default function CalcInfo() {
  const [open, setOpen] = useState(false)
  const {
    calcImageSrc,
    drivingMiles,
    flights,
    heatingText,
    people,
    cows,
    tokens,
  } = useCalculatorStore(state => state)
  return (
    <div className="w-full">
      <Image
        src={`/assets/img/calculator/${calcImageSrc()}`}
        width={1156}
        height={68}
        alt="Calculater Image"
        className="w-full"
      />
      <div className="flex items-center justify-center py-6">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-primary px-4 py-1.5 text-[11px] uppercase leading-3 text-white shadow-xl"
        >
          Show my offsets
        </button>
      </div>

      <Image
        src="/assets/img/calculator/calc-1.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-2.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-3.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-4.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-5.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-6.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-7.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Image
        src="/assets/img/calculator/calc-8.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="h-0 w-full opacity-0"
        priority
      />
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-2">
                        <p className="font-bold">
                          You are offsetting carbon emissions equivalent to:
                        </p>
                        <ul className="flex list-disc flex-col pl-7 pt-4 marker:text-2xl marker:text-secondary">
                          <li>
                            Driving a passenger car for {drivingMiles()} miles
                          </li>
                          <li>
                            Taking {flights() === '1' ? 'a' : flights()}{' '}
                            round-trip flight from New York to Los Angeles
                          </li>
                          <li>
                            Heating a typical US home for approximately{' '}
                            {heatingText()} days
                          </li>
                          {tokens >= 10 && (
                            <>
                              <li>
                                Yearly carbon emissions of a city of
                                approximately {people()} people
                              </li>
                              <li>{cows()} cows per year</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
