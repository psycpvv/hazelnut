import { create } from 'zustand'

import { formatNumber } from '@/utils/utils'

type State = {
  rate: number
  tokens: number
  tokenPrice: number
  co2PerToken: number
}

type CalculatorState = State & {
  setTokens: (val: number) => void
  setTokenPrice: (val: number) => void
  totalInvestment: () => number
  bonusTokens: () => number
  totalTokens: () => number
  bonusAmount: () => number
  discountedTokenPrice: () => string
  yieldAveragePerYear40Years: () => string
  bonus: () => number
  paybackYears: () => number
  reachAmount: () => number
  drivingMiles: () => string
  flights: () => string
  heatingText: () => string
  people: () => string
  cows: () => number
  totalInvestorsReturn40: () => number
  totalReturn40: () => number
  totalCo240YearsMt: () => string
  totalCo2AveragePerYearMt: () => string
  calcImageSrc: () => string
}

const INITIAL_STATE: State = {
  rate: 0.925,
  tokens: 1,
  tokenPrice: 102,
  co2PerToken: 6342,
}

const useCalculatorStore = create<CalculatorState>()((set, get) => ({
  ...INITIAL_STATE,
  totalInvestorsReturn40: () => get().rate * 653.97,
  totalReturn40: () => get().totalInvestorsReturn40() * get().totalTokens(),
  bonus: () => {
    const tokens = get().tokens
    if (tokens < 10) return 0
    if (tokens < 100) return 0.1
    if (tokens < 1000) return 0.12
    if (tokens < 5000) return 0.15
    return 0.2
  },
  totalInvestment: () => get().tokens * get().tokenPrice,
  bonusTokens: () => Math.trunc(get().tokens * get().bonus()),
  bonusAmount: () => Math.trunc(get().totalInvestment() * get().bonus()),
  totalTokens: () => get().tokens + get().bonusTokens(),
  discountedTokenPrice: () =>
    (get().totalInvestment() / (get().tokens + get().bonusTokens())).toFixed(2),
  yieldAveragePerYear40Years: () =>
    (
      ((get().totalReturn40() / get().totalInvestment() - 1) / 40) *
      100
    ).toFixed(2),
  paybackYears: () => {
    const tokens = get().tokens
    if (tokens < 10) return 10.16
    if (tokens < 100) return 9.76
    if (tokens < 1000) return 9.71
    if (tokens < 5000) return 9.63
    return 9.5
  },
  reachAmount: () => {
    const tokens = get().tokens
    if (tokens > 7 && tokens < 10) return 10 - tokens
    if (tokens > 90 && tokens < 100) return 100 - tokens
    if (tokens > 900 && tokens < 1000) return 1000 - tokens
    if (tokens > 4500 && tokens < 5000) return 5000 - tokens
    return 0
  },
  calcImageSrc: () => {
    const tokens = get().tokens
    if (tokens < 10) return 'calc-1.png'
    if (tokens < 100) return 'calc-2.png'
    if (tokens < 1000) return 'calc-3.png'
    if (tokens < 2000) return 'calc-4.png'
    if (tokens < 3000) return 'calc-5.png'
    if (tokens < 4000) return 'calc-6.png'
    if (tokens < 5000) return 'calc-7.png'
    return 'calc-8.png'
  },
  drivingMiles: () =>
    String(871 * get().tokens)
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  flights: () => (get().tokens / 1.57).toFixed(0),
  heatingText: () => {
    const tokens = get().tokens
    const heating = tokens * 17
    const heating_years = Math.trunc(heating / 365)
    return heating_years < 1 ? heating + ' days' : heating_years + ' years'
  },
  people: () => formatNumber(Math.trunc(get().tokens * 818.18)),
  cows: () => Math.trunc(get().tokens * 0.72),
  totalCo240YearsMt: () =>
    ((get().totalTokens() * get().co2PerToken) / 1000).toFixed(2),
  totalCo2AveragePerYearMt: () =>
    ((get().totalTokens() * get().co2PerToken) / 40 / 1000).toFixed(2),
  setTokens: tokens => set({ tokens }),
  setTokenPrice: tokenPrice => set({ tokenPrice }),
}))

export default useCalculatorStore
