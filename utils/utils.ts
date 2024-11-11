import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number | string) {
  return String(n)
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatCurrency(n: number) {
  return (
    String(n)
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00'
  )
}

export function convertNumber(v: string) {
  return Number(v.slice(0, -3).replace(/,/g, ''))
}
export function formatDisplayNumber(inputVal: string | number) {
  if (typeof inputVal === 'number') inputVal = inputVal.toString()
  if (inputVal === '') return
  if (inputVal.indexOf('.') >= 0) {
    let decimal_pos = inputVal.indexOf('.')
    let left_side = inputVal.substring(0, decimal_pos)
    let right_side = inputVal.substring(decimal_pos)
    left_side = formatNumber(left_side)
    right_side = formatNumber(right_side)
    right_side = right_side.substring(0, 2)
    inputVal = left_side + '.' + right_side
  } else {
    inputVal = formatNumber(inputVal)
    inputVal = inputVal
  }
  return inputVal
}

const defaults = { nonTextBehavior: 'remove' }

export function blocksToText(blocks: any, opts = {}) {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`
      }

      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n') as string
}

export function mapSeo(seo: Sanity.Seo) {
  if (!seo) return {}
  const mappedSeo: Metadata = {
    robots: {
      follow: seo?.robotsNoFollow,
      index: seo?.robotsNoIndex,
    },
  }
  if (seo.title) mappedSeo.title = seo.title
  if (seo.description) mappedSeo.description = seo.description
  if (seo.keywords?.length) mappedSeo.keywords = seo.keywords
  if (seo.description) mappedSeo.description = seo.description
  return mappedSeo
}
