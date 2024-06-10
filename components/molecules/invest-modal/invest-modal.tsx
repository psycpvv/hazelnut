'use client'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'

import { Typography } from '@/components/atoms/typography'
import useInvestStore from '@/store/investStore'
import { cn } from '@/utils/utils'

export default function InvestModal() {
  const { isOpen, setIsOpen } = useInvestStore(state => state)
  return (
    <Transition show={isOpen}>
      <Dialog className="relative z-10" onClose={() => setIsOpen(false)}>
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
              <DialogPanel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all md:my-8 md:w-full md:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="py-6 md:flex md:items-start">
                    <Typography variant="h3" className="mb-2">
                      GAIN EARLY PRIVILEGES
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      textColor="primary"
                      className="py-4"
                    >
                      We&apos;ll let you know how to get access to agriculture
                      investment with Treesury when we launch.
                    </Typography>
                    <div className="flex flex-col gap-1.5">
                      <input
                        type="text"
                        placeholder="Enter your First Name"
                        className="shadow-primary-input w-full rounded-lg border border-primary px-7 py-3 text-primary placeholder-primary outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter your Last Name"
                        className="shadow-primary-input w-full rounded-lg border border-primary px-7 py-3 text-primary placeholder-primary outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter your Email"
                        className="shadow-primary-input w-full rounded-lg border border-primary px-7 py-3 text-primary placeholder-primary outline-none"
                      />
                      <Menu
                        as="div"
                        className="relative inline-block text-left font-semibold text-primary"
                      >
                        <div>
                          <MenuButton className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-md border border-primary py-3 pl-7 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            €500,000 +
                            <FontAwesomeIcon
                              icon={faCaretDown}
                              height={32}
                              width={32}
                              className="text-primary"
                            />
                          </MenuButton>
                        </div>

                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md border border-primary bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {[
                                '€100,000 - €500,000',
                                '€50,000 - €100,000',
                                '€10,000 - €50,000',
                                'up to €10,000',
                              ].map((v, k) => (
                                <MenuItem key={k}>
                                  {({ focus }) => (
                                    <div
                                      className={cn(
                                        focus ? 'bg-gray-100' : '',
                                        'block cursor-pointer px-4 py-2',
                                      )}
                                    >
                                      {v}
                                    </div>
                                  )}
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        </Transition>
                      </Menu>
                    </div>
                    <Typography
                      variant="text"
                      textColor="primary"
                      className="py-4"
                    >
                      By submitting the form, you are explicitly granting us
                      consent to include you in our exclusive list of
                      prospective customers and contact you once the investment
                      opportunity becomes available.
                    </Typography>
                    <div className="inline-flex items-center pb-4">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full py-3"
                        htmlFor="login"
                        data-ripple-dark="true"
                      >
                        <input
                          id="login"
                          type="checkbox"
                          className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none pl-3 text-gray-700"
                        htmlFor="login"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                    <button className="h-[60px] w-full rounded-md bg-primary font-nunito text-white">
                      Gain Early Privileges
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
