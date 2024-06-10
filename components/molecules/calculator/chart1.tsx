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
  const { totalTokens, rate } = useCalculatorStore(state => state)
  const data = [
    { year: 1, value: 0.0 * totalTokens() * rate },
    { year: 2, value: 0.0 * totalTokens() * rate },
    { year: 3, value: 0.0 * totalTokens() * rate },
    { year: 4, value: 0.0 * totalTokens() * rate },
    { year: 5, value: 0.0 * totalTokens() * rate },
    { year: 6, value: 5.68 * totalTokens() * rate },
    { year: 7, value: 21.41 * totalTokens() * rate },
    { year: 8, value: 46.98 * totalTokens() * rate },
    { year: 9, value: 75.87 * totalTokens() * rate },
    { year: 10, value: 107.41 * totalTokens() * rate },
    { year: 11, value: 123.23 * totalTokens() * rate },
    { year: 12, value: 138.52 * totalTokens() * rate },
    { year: 13, value: 153.89 * totalTokens() * rate },
    { year: 14, value: 169.34 * totalTokens() * rate },
    { year: 15, value: 184.87 * totalTokens() * rate },
    { year: 16, value: 200.5 * totalTokens() * rate },
    { year: 17, value: 216.24 * totalTokens() * rate },
    { year: 18, value: 232.07 * totalTokens() * rate },
    { year: 19, value: 248.01 * totalTokens() * rate },
    { year: 20, value: 264.06 * totalTokens() * rate },
    { year: 21, value: 281.26 * totalTokens() * rate },
    { year: 22, value: 298.64 * totalTokens() * rate },
    { year: 23, value: 316.2 * totalTokens() * rate },
    { year: 24, value: 333.96 * totalTokens() * rate },
    { year: 25, value: 351.91 * totalTokens() * rate },
    { year: 26, value: 370.09 * totalTokens() * rate },
    { year: 27, value: 388.48 * totalTokens() * rate },
    { year: 28, value: 407.12 * totalTokens() * rate },
    { year: 29, value: 426.0 * totalTokens() * rate },
    { year: 30, value: 445.13 * totalTokens() * rate },
    { year: 31, value: 464.54 * totalTokens() * rate },
    { year: 32, value: 484.24 * totalTokens() * rate },
    { year: 33, value: 504.24 * totalTokens() * rate },
    { year: 34, value: 524.56 * totalTokens() * rate },
    { year: 35, value: 545.19 * totalTokens() * rate },
    { year: 36, value: 566.18 * totalTokens() * rate },
    { year: 37, value: 587.54 * totalTokens() * rate },
    { year: 38, value: 609.28 * totalTokens() * rate },
    { year: 39, value: 631.42 * totalTokens() * rate },
    { year: 40, value: 653.97 * totalTokens() * rate },
  ]
  return (
    <div>
      <Typography variant="subtitle2" className="text-center">
        Cumulative return of your investment over the Treesury Tree lifetime
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
              display: false,
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
              label:
                'Cumulative return of your investment over the Treesury Tree lifetime',
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
