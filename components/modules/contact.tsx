'use client'
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { PortableText } from 'next-sanity'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/atoms/button'
import { IconButton } from '@/components/atoms/icon-button'
import { Input } from '@/components/atoms/input'
import { Textarea } from '@/components/atoms/textarea'
import { Link } from '@/i18n/routing'
import { api } from '@/trpc/react'
import { notifySuccess } from '@/utils/toast'

export default function Contact(data: Partial<Sanity.Contact>) {
  const tCommon = useTranslations('Common')
  const t = useTranslations('Modules.contact')
  const sendContact = api.onesignal.sendContact.useMutation({
    onSuccess: () => {
      reset()
      notifySuccess(t('success'))
    },
  })
  const requiredMsg = tCommon('form.required')
  const schema = z.object({
    firstName: z.string().min(1, requiredMsg),
    lastName: z.string().min(1, requiredMsg),
    email: z.string().email(tCommon('form.email')).min(1, requiredMsg),
    message: z.string().min(1, requiredMsg),
    type: z.string().min(1, requiredMsg),
  })
  type FormType = z.infer<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: FormType) => {
    sendContact.mutate(data)
  }

  return (
    <div className="relative flex w-full flex-col items-center bg-primary py-16 md:pb-[100px] md:pt-[120px]">
      <div className="absolute -top-[73px] md:-top-[79px]" id="contact"></div>
      <div className="container grid md:grid-cols-2 md:gap-8">
        <div>
          <div className="flex flex-col gap-4 text-lg font-light text-white">
            <PortableText
              value={data.description}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="font-nunito text-[28px] font-bold leading-[3rem] md:text-4xl [&>a]:text-secondary">
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
                <IconButton
                  buttonColor="secondary"
                  size="small"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </IconButton>
              </Link>
            )}
            {data.instagram && (
              <Link href={data.instagram} target="_blank">
                <IconButton
                  buttonColor="secondary"
                  size="small"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </IconButton>
              </Link>
            )}
            {data.facebook && (
              <Link href={data.facebook} target="_blank">
                <IconButton
                  buttonColor="secondary"
                  size="small"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </IconButton>
              </Link>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 md:grid-cols-2 md:gap-6">
            <div>
              <Input
                placeholder={t('enter-your-first-name')}
                {...register('firstName')}
              />
              {errors.firstName && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <Input
                placeholder={t('enter-your-last-name')}
                {...register('lastName')}
              />
              {errors.lastName && (
                <span className="text-red-600">{errors.lastName.message}</span>
              )}
            </div>
            <div>
              <Input
                placeholder={t('enter-your-email')}
                type="email"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div>
              <div className="text-lg text-white">
                <div>{t('i-am')}:</div>
                <div className="-ml-3 -mt-2 flex gap-10 text-white">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="contact-form-individual"
                    >
                      <input
                        type="radio"
                        value={t('individual')}
                        className="border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity before:content-empty checked:border-white checked:before:bg-white hover:before:opacity-10"
                        aria-label="Individual"
                        {...register('type')}
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
                      htmlFor="contact-form-individual"
                    >
                      {t('individual')}
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="contact-form-business"
                    >
                      <input
                        type="radio"
                        className="border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity before:content-empty checked:border-white checked:before:bg-white hover:before:opacity-10"
                        id="contact-form-business"
                        value={t('business')}
                        aria-label="Business"
                        {...register('type')}
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
                      htmlFor="contact-form-business"
                    >
                      {t('business')}
                    </label>
                  </div>
                </div>
              </div>
              {errors.type && (
                <span className="text-red-600">{errors.type.message}</span>
              )}
            </div>
          </div>
          <Textarea
            placeholder={t('enter-message')}
            rows={8}
            className="md:mt-4"
            {...register('message')}
          />
          {errors.message && (
            <span className="text-red-600">{errors.message.message}</span>
          )}
          <div className="w-full">
            <Button
              buttonColor="secondary"
              size="small"
              className="mt-12 w-full md:w-[145px]"
              disabled={sendContact.isPending}
            >
              {sendContact.isPending ? t('sending') : t('send')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
