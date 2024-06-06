import Image from 'next/image'
import React from 'react'

export default function CalcImage() {
  return (
    <div className="w-full">
      <Image
        src="/assets/img/calculator/calc-1.png"
        width={1156}
        height={68}
        alt="Calculater Image"
        className="w-full"
      />
    </div>
  )
}
