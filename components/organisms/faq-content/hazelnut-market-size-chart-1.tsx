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
import { Bar } from 'react-chartjs-2'

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

export default function HazelnutMarketSizeChart1() {
  const { isMd } = useMedia()
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full py-12">
        <Bar
          options={{
            maintainAspectRatio: isMd,
            responsive: isMd,
            height: isMd ? 500 : 300,
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                  drawOnChartArea: false,
                },
                beginAtZero: true,
              },
              x: {
                ticks: {
                  // @ts-ignore
                  fontSize: 12,
                  autoSkip: !isMd, // disable auto skip
                  maxRotation: 40, // rotate the label to prevent overlap
                  minRotation: 40, // rotate the label to prevent overlap
                },
                display: true, // always display the x-axis
              },
            },
            plugins: {
              title: {
                display: true,
                text: 'World Production and Average Prices',
              },
            },
          }}
          data={{
            datasets: [
              {
                label: 'Average prices (USD)',
                // @ts-ignore
                type: 'line',
                data: [
                  1.12, 2.0, 3.67, 4.07, 2.54, 3.38, 2.41, 3.15, 3.17, 3.96,
                  2.9, 3.7, 6.43, 4.56, 3.99, 3.1, 2.95, 3.36, 3.43, 2.92,
                ],
                borderColor: 'rgba(255, 99, 132, 1)', // Line color
                fill: false,
                yAxisID: 'y1', // Assign the line dataset to the line Y-axis
              },
              {
                label: 'World production (kTons)',
                data: [
                  850, 718, 626, 780, 1064, 765, 1172, 779, 854, 734, 965, 908,
                  744, 1017, 855, 1103, 1048, 1120, 1067, 1040,
                ],
                backgroundColor: 'rgba(49, 70, 140, 0.50)', // Bar color
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
            labels: [
              '02/03',
              '03/04',
              '04/05',
              '05/06',
              '06/07',
              '07/08',
              '08/09',
              '09/10',
              '10/11',
              '11/12',
              '12/13',
              '13/14',
              '14/15',
              '15/16',
              '16/17',
              '17/18',
              '18/19',
              '19/20',
              '20/21',
              '21/22',
            ],
          }}
        />
      </div>
    </div>
  )
}
