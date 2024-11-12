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
  const hazelnuts = [
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    4.86 * totalTokens() * rate,
    14.36 * totalTokens() * rate,
    24.13 * totalTokens() * rate,
    27.38 * totalTokens() * rate,
    29.8 * totalTokens() * rate,
    14.91 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.69 * totalTokens() * rate,
    13.68 * totalTokens() * rate,
  ]
  const co2 = [
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.0 * totalTokens() * rate,
    0.82 * totalTokens() * rate,
    1.37 * totalTokens() * rate,
    1.44 * totalTokens() * rate,
    1.52 * totalTokens() * rate,
    1.74 * totalTokens() * rate,
    0.91 * totalTokens() * rate,
    1.6 * totalTokens() * rate,
    1.68 * totalTokens() * rate,
    1.76 * totalTokens() * rate,
    1.85 * totalTokens() * rate,
    1.95 * totalTokens() * rate,
    2.04 * totalTokens() * rate,
    2.15 * totalTokens() * rate,
    2.26 * totalTokens() * rate,
    2.37 * totalTokens() * rate,
    3.51 * totalTokens() * rate,
    3.69 * totalTokens() * rate,
    3.87 * totalTokens() * rate,
    4.07 * totalTokens() * rate,
    4.27 * totalTokens() * rate,
    4.49 * totalTokens() * rate,
    4.71 * totalTokens() * rate,
    4.95 * totalTokens() * rate,
    5.19 * totalTokens() * rate,
    5.45 * totalTokens() * rate,
    5.72 * totalTokens() * rate,
    6.01 * totalTokens() * rate,
    6.31 * totalTokens() * rate,
    6.63 * totalTokens() * rate,
    6.96 * totalTokens() * rate,
    7.3 * totalTokens() * rate,
    7.67 * totalTokens() * rate,
    8.05 * totalTokens() * rate,
    8.45 * totalTokens() * rate,
    8.87 * totalTokens() * rate,
  ]
  return (
    <div>
      <Typography variant="subtitle2" className="text-center">
        Return structure from Hazelnuts and Carbon Credits over the Treesury
        Tree lifetime
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
                    `Hazelnuts: ${value1_final}`,
                    `Carbon Credits (CO2): ${value2_final}`,
                    `Total: ${total_final}`,
                  ]
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
              label: 'Hazelnuts',
              data: hazelnuts,
              barPercentage: 0.65,
              categoryPercentage: 0.65,
              backgroundColor: '#31468c',
            },
            {
              label: 'Carbon Credits (CO2)',
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
