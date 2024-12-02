'use client'
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useTranslations } from 'next-intl'
import { Line } from 'react-chartjs-2'

import { Typography } from '@/components/atoms/typography'
import useCalculatorStore from '@/store/calculatorStore'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
export default function Chart1() {
  const t = useTranslations('Modules.calculator')

  const { totalTokens, rate } = useCalculatorStore(state => state)
  const tokens = totalTokens()
  const data = [
    { year: 1, value: 0.0 * tokens * rate },
    { year: 2, value: 0.0 * tokens * rate },
    { year: 3, value: 0.0 * tokens * rate },
    { year: 4, value: 0.0 * tokens * rate },
    { year: 5, value: 0.0 * tokens * rate },
    { year: 6, value: 5.63 * tokens * rate },
    { year: 7, value: 21.29 * tokens * rate },
    { year: 8, value: 46.82 * tokens * rate },
    { year: 9, value: 75.66 * tokens * rate },
    { year: 10, value: 104.56 * tokens * rate },
    { year: 11, value: 121.78 * tokens * rate },
    { year: 12, value: 136.95 * tokens * rate },
    { year: 13, value: 152.2 * tokens * rate },
    { year: 14, value: 167.53 * tokens * rate },
    { year: 15, value: 182.93 * tokens * rate },
    { year: 16, value: 198.42 * tokens * rate },
    { year: 17, value: 214.0 * tokens * rate },
    { year: 18, value: 229.67 * tokens * rate },
    { year: 19, value: 245.44 * tokens * rate },
    { year: 20, value: 261.3 * tokens * rate },
    { year: 21, value: 278.2 * tokens * rate },
    { year: 22, value: 295.26 * tokens * rate },
    { year: 23, value: 312.49 * tokens * rate },
    { year: 24, value: 329.89 * tokens * rate },
    { year: 25, value: 347.47 * tokens * rate },
    { year: 26, value: 365.24 * tokens * rate },
    { year: 27, value: 383.22 * tokens * rate },
    { year: 28, value: 401.41 * tokens * rate },
    { year: 29, value: 419.82 * tokens * rate },
    { year: 30, value: 438.46 * tokens * rate },
    { year: 31, value: 457.35 * tokens * rate },
    { year: 32, value: 476.5 * tokens * rate },
    { year: 33, value: 495.92 * tokens * rate },
    { year: 34, value: 515.63 * tokens * rate },
    { year: 35, value: 535.62 * tokens * rate },
    { year: 36, value: 555.93 * tokens * rate },
    { year: 37, value: 576.57 * tokens * rate },
    { year: 38, value: 597.56 * tokens * rate },
    { year: 39, value: 618.9 * tokens * rate },
    { year: 40, value: 640.62 * tokens * rate },
  ]
  return (
    <div>
      <Typography variant="subtitle2" className="text-center">
        {t(
          'cumulative-return-of-your-investment-over-the-treesury-tree-lifetime',
        )}
      </Typography>
      <Line
        height={200}
        className="w-full"
        options={{
          plugins: {
            tooltip: {
              displayColors: false,
              callbacks: {
                label: function (tooltipItem) {
                  return Number(tooltipItem.formattedValue).toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'EUR',
                    },
                  )
                },
                title: function (tooltipItems) {
                  return 'Year: ' + tooltipItems[0].label
                },
              },
            },
            legend: {
              // display: false,
              position: 'bottom',
            },
          },
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  return value.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'EUR',
                  })
                },
              },
            },

            x: {
              ticks: {},
              suggestedMin: 0, // set a fixed minimum value for the axis
              suggestedMax: 6, // set a fixed maximum value for the axis
            },
          },
        }}
        data={{
          labels: data.map(item => item.year),
          datasets: [
            {
              label: t(
                'cumulative-return-of-your-investment-over-the-treesury-tree-lifetime',
              ),
              data: data.map(function (item) {
                return item.value
              }),
              type: 'line',
              borderColor: '#31468c',
              fill: false,
            },
          ],
        }}
      />
    </div>
  )
}
