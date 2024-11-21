/* eslint-disable react/no-unescaped-entities */
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

import useMedia from '@/hooks/useMedia'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ArcElement,
)

export default function HazelnutMarketSizeChart2() {
  const { isMd } = useMedia()
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[500px] w-[500px] py-12">
        <Pie
          data={{
            labels: ['Confectionery Industry', 'Bakery Industry', 'Retail'],
            datasets: [
              {
                data: [55, 35, 10],
                backgroundColor: ['#FF6384', '#31468c', '#c7cb50'],
                hoverBackgroundColor: ['#FF6384', '#31468c', '#c7cb50'],
              },
            ],
          }}
          options={{
            maintainAspectRatio: isMd,
            responsive: isMd,
            height: isMd ? 500 : 300,
            title: {
              display: true,
              text: 'Hazelnut Market Breakdown',
            },
            tooltips: {
              enabled: true,
              intersect: false, // Show tooltips without requiring hover
              mode: 'single',
              callbacks: {
                // @ts-ignore
                label: (tooltipItem, data) => {
                  const label = data.labels[tooltipItem.index]
                  const value = data.datasets[0].data[tooltipItem.index]
                  return label + ': ' + value + '%'
                },
              },
            },
            plugins: {
              // @ts-ignore
              labels: {
                // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                render: 'percentage',
                fontColor: 'white',
                // font size, default is defaultFontSize
                fontSize: 18,
              },
            },
          }}
        />
      </div>
    </div>
  )
}
