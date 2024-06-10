import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type InvestState = State & {
  setIsOpen: (isOpen: boolean) => void
}

const INITIAL_STATE: State = {
  isOpen: false,
}

const useInvestStore = create<InvestState>()(set => ({
  ...INITIAL_STATE,
  setIsOpen: isOpen => set({ isOpen }),
}))

export default useInvestStore
