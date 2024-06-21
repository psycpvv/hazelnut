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
import { Bar, Pie } from 'react-chartjs-2'

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

export default function HazelnutMarketSize() {
  const { isMd } = useMedia()
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        Over the past two decades, from 2002 to 2021, the hazelnut market has
        shown notable price fluctuations but with a clear positive trend. The
        recorded prices exhibit a range of values, with peaks and declines that
        reflect the dynamics of supply and demand in the industry. One
        significant peak occurred in 2014, which can be attributed to an
        unfavorable climate in Turkey, the largest hazelnut producer. This
        resulted in an extremely poor yield, causing a scarcity of hazelnuts and
        driving prices upward.
      </div>
      <div className="w-full max-w-[1000px] py-12">
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
      <div>
        While a price correction was anticipated following the peak, the
        hazelnut market experienced a further decline in 2020. This decline can
        be attributed to the COVID-19 pandemic and subsequent lockdown measures,
        which heavily impacted the hospitality and wedding industries. These
        industries are major consumers of hazelnuts, particularly through the
        bakery sector. Despite the challenges posed by the pandemic, the price
        decline during this period was relatively small. Furthermore, the price
        rebounded in subsequent years, indicating resilience and an encouraging
        trend for the hazelnut market.
        <br />
        <br />
        The hazelnut market primarily serves industrial sectors, with
        approximately 55% of the supply directed towards the confectionery
        industry, 35% towards the bakery industry, and the remaining 10% for
        direct consumption. This emphasizes the significant role of hazelnuts in
        the production of various confectionery and bakery products. In addition
        to the quantitative deficit, the confectionery industry is often
        affected by the lack of high-quality hazelnuts, as only the best quality
        hazelnuts are used in confectionery production.
      </div>
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
      <div>
        Turkey holds a dominant position in the global hazelnut market, being
        the largest producer and processor of hazelnuts. Despite this, only a
        small percentage of hazelnut farms in Turkey (around 2%) utilize
        intensive cultivation methods with irrigation systems in place. This
        dependency on natural conditions makes Turkey's hazelnut production
        highly susceptible to climate variations and increases volatility in the
        market. Additionally, being susceptible to climate change, Turkey's
        hazelnut production also varies drastically in quality.
        <br />
        <br />
        Apart from Turkey, other notable hazelnut producers include Italy,
        Chile, USA, Azerbaijan, China, France, and Serbia. However, Turkey's
        market share ranges from 60% to 70% of the worldwide hazelnut
        production, highlighting its significant influence in the industry.
        Additionally, it is worth noting that a considerable portion (~25%) of
        the global hazelnut supply is consumed by Ferrero, a major confectionery
        company.
        <br />
        <br />
        In summary, the hazelnut market has experienced price fluctuations
        influenced by factors such as climate conditions, pandemic-related
        disruptions, and the demand from key industries. While Turkey dominates
        hazelnut production, other countries also contribute to the global
        supply. Understanding the dynamics of the hazelnut market is crucial for
        industry stakeholders, enabling them to navigate price volatility and
        capitalize on opportunities in this essential agricultural commodity.
        <br />
        <br />
        The hazelnut market is projected to expand significantly, with the
        global hazelnut market size valued at USD 12.62 billion in 2022. It is
        expected to grow at a CAGR of 9.14% during the forecast period, reaching
        USD 21.34 billion by 2028 (Source: marketwatch.com).
      </div>
    </div>
  )
}
