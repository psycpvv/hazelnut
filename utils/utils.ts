import { type ClassValue, clsx } from 'clsx'
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
