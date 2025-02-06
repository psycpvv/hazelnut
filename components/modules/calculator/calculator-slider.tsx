'use client'
import 'nouislider/dist/nouislider.css'
import './nouislider.css'

import Nouislider from 'nouislider-react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import useMedia from '@/hooks/useMedia'
import useCalculatorStore from '@/store/calculatorStore'
import { formatCurrency } from '@/utils/utils'

export default function CalculatorSlider() {
  const { tokens, setTokens, tokenPrice, setInvestmentAmount } =
    useCalculatorStore(state => state)
  const ref = useRef<any>(null)
  const { isMd } = useMedia()
  const setUiSlider = useDebouncedCallback(
    _tokens => ref.current.noUiSlider.set(_tokens),
    500,
  )
  useEffect(() => {
    if (ref && ref.current) setUiSlider(tokens)
  }, [setUiSlider, tokens])

  useLayoutEffect(() => {
    window.document
      .querySelector('#slider .noUi-handle')
      ?.setAttribute('aria-label', 'Calculator slider')
  }, [])

  function updateHandler(value: number) {
    setTokens(value)
    setInvestmentAmount(formatCurrency(value * tokenPrice))
  }

  return (
    <Nouislider
      instanceRef={instance => {
        if (instance) {
          ref.current = instance
        }
      }}
      id="slider"
      clickablePips
      range={{
        min: 1,
        '15%': 10,
        '40%': 100,
        '70%': 1000,
        '90%': 5000,
        max: 6000,
      }}
      tooltips={isMd ? true : false}
      pips={{
        mode: 'values',
        values: [1, 10, 100, 1000, 5000, 6000],
        density: 2.5,
      }}
      start={0}
      onSlide={(_render, _handle) =>
        updateHandler(Math.ceil(Number(_render[0])))
      }
      onUpdate={(_render, _handle) =>
        updateHandler(Math.ceil(Number(_render[0])))
      }
      connect
      behaviour="tap"
    />
  )
}
