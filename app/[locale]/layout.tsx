import '../globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans, Roboto } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'

import ScrollToTopButton from '@/components/molecules/scroll-to-top'
import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { routing } from '@/i18n/routing'
import { fetchLayoutData } from '@/sanity/services/layout/layout.service'
import { cn } from '@/utils/utils'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'TREESURY',
  description: 'TREESURY',
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }>,
) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  const layout = await fetchLayoutData()
  return (
    <html lang={locale}>
      <body
        className={cn(roboto.className, roboto.variable, nunitoSans.variable)}
      >
        <NextIntlClientProvider messages={messages}>
          <Header {...layout.header} />
          <div className="pt-[73px]">{children}</div>
          <Footer {...layout.footer} />
          <ScrollToTopButton />
        </NextIntlClientProvider>
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
