import Image from 'next/image'
import React from 'react'

export default function FaqWhyHazeluts() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2">
        <div className="flex">
          <div className="w-2/3 bg-[#fbfbfb] pl-4 text-[11px] text-xs sm:w-1/2 md:w-2/3 md:shadow-none lg:w-1/2 xl:w-1/3">
            <div className="flex h-24 items-end md:py-5">PARAMETERS</div>
            {[
              'HAIL PROTECTION NET REQUIRED',
              'FIRST YIELD (YEARS)',
              'FULL YIELD (YEARS)',
              'FARM LIFESPAN (YEARS)',
              'NUMBER OF STANDARD CHEMICAL TREATMENTS',
              'HARVESTING METHOD',
              'LABOR: NO. OF HOURS PER YEAR/HA (WITHOUT HARVEST)',
              'HARVESTING: NO. OF HOURS PER YEAR/HA',
            ].map((asset, key) => (
              <div key={key} className="flex h-16 items-center">
                {asset}
              </div>
            ))}
          </div>
          <div className="grid w-1/3 grid-cols-1 sm:w-1/2 sm:grid-cols-2 md:w-1/3 md:grid-cols-1 lg:w-1/2 lg:grid-cols-2 xl:w-2/3 xl:grid-cols-3">
            <div className="flex flex-col px-2 shadow-why-tree">
              <div className="flex h-24 flex-col items-center justify-end border-b text-primary md:py-5">
                <div className="flex items-end text-sm">HAZELNUT</div>
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                No
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-red-500">
                4-5
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-red-500">
                9
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                40
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                4-5
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                Mechanical
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                78-86
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                28-35
              </div>
            </div>
            <div className="hidden flex-col px-2 sm:flex md:hidden lg:flex">
              <div className="flex h-24 flex-col items-center justify-end border-b text-primary md:py-5">
                <div className="flex items-end text-sm">APPLE</div>
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-red-500">
                Yes
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                2
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                5
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                20
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                20-30
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                Manual
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                500-800
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                400-600
              </div>
            </div>
            <div className="hidden flex-col px-2 xl:flex">
              <div className="flex h-24 flex-col items-center justify-end border-b text-primary md:py-5">
                <div className="flex items-end text-sm">BLUEBERRY</div>
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                Yes
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b text-secondary">
                2
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                5
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                30
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                6-10
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                Manual
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                200-400
              </div>
              <div className="flex h-16 flex-col items-center justify-center border-b">
                1200-1500
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/Environmental.png"
          className="pt-8"
          width={768}
          height={690}
          alt="env"
        />
      </div>
    </div>
  )
}
