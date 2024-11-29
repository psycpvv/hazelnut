'use client'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('Modules.calculator')
  return (
    <div className="w-full md:w-1/3">
      <Image
        src={`/assets/img/calculator/${calcImageSrc()}`}
        width={1156}
        height={68}
        alt="Calculater Image"
        className="w-full"
      />
      <div className="flex items-center justify-center py-6 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-primary px-4 py-1.5 text-[11px] uppercase leading-3 text-white shadow-xl"
        >
          {t('show-my-offsets')}
        </button>
      </div>
      <div className="hidden md:block">
        <div className="mt-2">
          <p className="font-bold">
            {t('you-are-offsetting-carbon-emissions-equivalent-to')}:
          </p>
          <ul className="flex list-disc flex-col pl-7 pt-4 marker:text-2xl marker:text-secondary">
            <li>
              {t('driving-a-passenger-car-for-drivingmiles-miles', {
                drivingMiles: drivingMiles(),
              })}
            </li>
            <li>
              {t(
                'taking-flights-round-trip-flight-from-new-york-to-los-angeles',
                { flights: flights() },
              )}
            </li>
            {/* Modules.calculator. */}
            <li>
              {t(
                'heating-a-typical-us-home-for-approximately-heatingtext-days',
                heatingText(),
              )}
            </li>
            {tokens >= 10 && (
              <>
                <li>
                  {t(
                    'yearly-carbon-emissions-of-a-city-of-approximately-people-people',
                    { people: people() },
                  )}
                </li>
                <li>{t('cows-cows-per-year', { cows: cows() })}</li>
              </>
            )}
          </ul>
        </div>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center md:items-center md:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:my-8 md:w-full md:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 md:p-6 md:pb-4">
                    <div className="md:flex md:items-start">
                      <div className="mt-2">
                        <p className="font-bold">
                          {t(
                            'you-are-offsetting-carbon-emissions-equivalent-to',
                          )}
                          :
                        </p>
                        <ul className="flex list-disc flex-col pl-7 pt-4 marker:text-2xl marker:text-secondary">
                          <li>
                            {t(
                              'driving-a-passenger-car-for-drivingmiles-miles',
                              {
                                drivingMiles: drivingMiles(),
                              },
                            )}
                          </li>
                          <li>
                            {t(
                              'taking-flights-round-trip-flight-from-new-york-to-los-angeles',
                              { flights: flights() },
                            )}
                          </li>
                          <li>
                            {t(
                              'heating-a-typical-us-home-for-approximately-heatingtext-days',
                              heatingText(),
                            )}
                          </li>
                          {tokens >= 10 && (
                            <>
                              <li>
                                {t(
                                  'yearly-carbon-emissions-of-a-city-of-approximately-people-people',
                                  { people: people() },
                                )}
                              </li>
                              <li>
                                {t('cows-cows-per-year', { cows: cows() })}
                              </li>
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
