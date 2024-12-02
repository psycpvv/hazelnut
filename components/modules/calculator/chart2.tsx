'use client'
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useTranslations } from 'next-intl'
import { Bar } from 'react-chartjs-2'

import { Typography } from '@/components/atoms/typography'
import useCalculatorStore from '@/store/calculatorStore'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
export default function Chart2() {
  const { totalTokens, rate } = useCalculatorStore(state => state)
  const tokens = totalTokens()
  const t = useTranslations('Modules.calculator')

  const data = [
    { year: 1, value: 0.0 * tokens * rate },
    { year: 2, value: 0.0 * tokens * rate },
    { year: 3, value: 0.0 * tokens * rate },
    { year: 4, value: 0.0 * tokens * rate },
    { year: 5, value: 0.0 * tokens * rate },
    { year: 6, value: 5.68 * tokens * rate },
    { year: 7, value: 21.41 * tokens * rate },
    { year: 8, value: 46.98 * tokens * rate },
    { year: 9, value: 75.87 * tokens * rate },
    { year: 10, value: 107.41 * tokens * rate },
    { year: 11, value: 123.23 * tokens * rate },
    { year: 12, value: 138.52 * tokens * rate },
    { year: 13, value: 153.89 * tokens * rate },
    { year: 14, value: 169.34 * tokens * rate },
    { year: 15, value: 184.87 * tokens * rate },
    { year: 16, value: 200.5 * tokens * rate },
    { year: 17, value: 216.24 * tokens * rate },
    { year: 18, value: 232.07 * tokens * rate },
    { year: 19, value: 248.01 * tokens * rate },
    { year: 20, value: 264.06 * tokens * rate },
    { year: 21, value: 281.26 * tokens * rate },
    { year: 22, value: 298.64 * tokens * rate },
    { year: 23, value: 316.2 * tokens * rate },
    { year: 24, value: 333.96 * tokens * rate },
    { year: 25, value: 351.91 * tokens * rate },
    { year: 26, value: 370.09 * tokens * rate },
    { year: 27, value: 388.48 * tokens * rate },
    { year: 28, value: 407.12 * tokens * rate },
    { year: 29, value: 426.0 * tokens * rate },
    { year: 30, value: 445.13 * tokens * rate },
    { year: 31, value: 464.54 * tokens * rate },
    { year: 32, value: 484.24 * tokens * rate },
    { year: 33, value: 504.24 * tokens * rate },
    { year: 34, value: 524.56 * tokens * rate },
    { year: 35, value: 545.19 * tokens * rate },
    { year: 36, value: 566.18 * tokens * rate },
    { year: 37, value: 587.54 * tokens * rate },
    { year: 38, value: 609.28 * tokens * rate },
    { year: 39, value: 631.42 * tokens * rate },
    { year: 40, value: 653.97 * tokens * rate },
  ]
  const hazelnuts = [
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    4.9 * tokens * rate,
    14.43 * tokens * rate,
    24.23 * tokens * rate,
    27.49 * tokens * rate,
    27.47 * tokens * rate,
    16.32 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.74 * tokens * rate,
    13.73 * tokens * rate,
  ]
  const co2 = [
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.0 * tokens * rate,
    0.73 * tokens * rate,
    1.23 * tokens * rate,
    1.29 * tokens * rate,
    1.36 * tokens * rate,
    1.43 * tokens * rate,
    0.89 * tokens * rate,
    1.43 * tokens * rate,
    1.51 * tokens * rate,
    1.58 * tokens * rate,
    1.66 * tokens * rate,
    1.75 * tokens * rate,
    1.84 * tokens * rate,
    1.93 * tokens * rate,
    2.03 * tokens * rate,
    2.13 * tokens * rate,
    3.16 * tokens * rate,
    3.32 * tokens * rate,
    3.48 * tokens * rate,
    3.66 * tokens * rate,
    3.84 * tokens * rate,
    4.03 * tokens * rate,
    4.24 * tokens * rate,
    4.45 * tokens * rate,
    4.67 * tokens * rate,
    4.9 * tokens * rate,
    5.15 * tokens * rate,
    5.41 * tokens * rate,
    5.68 * tokens * rate,
    5.96 * tokens * rate,
    6.26 * tokens * rate,
    6.57 * tokens * rate,
    6.9 * tokens * rate,
    7.24 * tokens * rate,
    7.6 * tokens * rate,
    7.98 * tokens * rate,
  ]
  return (
    <div>
      <Typography variant="subtitle2" className="text-center">
        {t(
          'return-structure-from-hazelnuts-and-carbon-credits-over-the-treesury-tree-lifetime',
        )}
      </Typography>
      <Bar
        className="!w-full"
        height={200}
        options={{
          plugins: {
            tooltip: {
              displayColors: false,
              callbacks: {
                labelColor: function () {
                  return {
                    borderColor: 'rgba(0, 0, 0, 0)', // Remove the border color
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Remove the background color
                    display: false,
                  }
                },
                label: function (tooltipItem) {
                  var value1 = co2[tooltipItem.dataIndex]
                  var value2 = hazelnuts[tooltipItem.dataIndex]
                  var total = value1 + value2
                  var value1_final = value1.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'EUR',
                  })
                  var value2_final = value2.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'EUR',
                  })
                  var total_final = total.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'EUR',
                  })
                  return [
                    `${t('hazelnuts')}: ${value1_final}`,
                    `${t('carbon-credits-co2')}: ${value2_final}`,
                    `${t('total')}: ${total_final}`,
                  ]
                },
                title: function (tooltipItems) {
                  return `${t('year')}: ` + tooltipItems[0].label
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
              stacked: true,
            },
            x: {
              ticks: {},
              display: true, // always display the x-axis
              suggestedMin: 0, // set a fixed minimum value for the axis
              suggestedMax: 6, // set a fixed maximum value for the axis
              stacked: true,
            },
          },
        }}
        data={{
          labels: data.map(item => item.year),
          datasets: [
            {
              label: t('hazelnuts'),
              data: hazelnuts,
              barPercentage: 0.65,
              categoryPercentage: 0.65,
              backgroundColor: '#31468c',
            },
            {
              label: t('carbon-credits-co2'),
              data: co2,
              barPercentage: 0.65,
              categoryPercentage: 0.65,
              backgroundColor: '#c7cb50',
            },
          ],
        }}
      />
    </div>
  )
}
