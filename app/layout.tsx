import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans, Roboto } from 'next/font/google'

import Header from '@/components/organisms/header'
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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(roboto.className, roboto.variable, nunitoSans.variable)}
      >
        <Header />
        <div className="pt-[73px]" suppressHydrationWarning={true}>
          {children}
        </div>
      </body>
    </html>
  )
}
