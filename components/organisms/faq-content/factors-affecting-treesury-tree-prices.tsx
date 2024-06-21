/* eslint-disable react/no-unescaped-entities */
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { Typography } from '@/components/atoms/typography'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
export default function FactorsAffectingTreesuryTreePrices() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div>
        Each year, Treesury sets the price for initial offering of Treesury
        Trees based on a comprehensive evaluation. However, once the tokens
        enter the secondary market, their value is determined by the principles
        of supply and demand in the free market. The Treesury Tree derives its
        worth from the cash flow generated through the economic utilization of
        the tokenized asset, which is the hazelnut tree.
        <br />
        <br />
        Several factors can influence the token price, with the primary drivers
        being the revenues generated from the sale of hazelnut produce and
        carbon credits, as well as costs associated with the Treesury Tree's
        farm. Let's explore these factors and how they can affect the token's
        value:
        <br />
        <br />
        Hazelnut Market Prices: Fluctuations in hazelnut market prices can have
        a direct impact on the token value. Higher prices can increase revenues
        and potentially boost the token price, while lower prices can influence
        a decrease in the token price.
        <br />
        <br />
        Carbon Credit Market Prices: Following the same logic as hazelnut market
        prices, changes in environmental regulations and market demand can cause
        variations in the value of carbon credits. As carbon credits play a
        significant role in the token's cash flow, fluctuations in their price
        can impact the token value.
        <br />
        <br />
        Adoption of Greenhouse Gas/Carbon Offsetting Schemes: The increasing
        adoption of greenhouse gas and carbon offsetting schemes can drive the
        demand for carbon credits. This growing demand has the potential to
        positively affect the token value. Conversely, slower adoption may have
        an adverse impact on the tokens.
        <br />
        <br />
        Regulatory Requirements: Changes in regulations related to environmental
        sustainability, carbon emissions, or agricultural practices can
        influence the profitability of the hazelnut farm. Compliance with new
        regulations may lead to additional costs or operational adjustments,
        which can subsequently influence the token price. On the other hand,
        such regulations may significantly impact the demand for carbon offsets
        and consequently positively affect the price of carbon credits.
        <br />
        <br />
        Weather Conditions: Despite employing precision agriculture methods,
        hazelnut production is somewhat susceptible to weather patterns,
        including temperature, rainfall, and climate conditions. Adverse or
        favorable weather events can impact crop yield, which in turn affects
        revenues and ultimately influences the token value. To mitigate this
        risk, we provide insurance coverage for the yield.
        <br />
        <br />
        Economic Cycles: Economic cycles can influence consumer demand for
        hazelnuts and carbon credits, among other products. Different economic
        effects may lead to either favorable or adverse consequences for the
        token price, depending on their impact on the token's cash flow.
        <br />
        <br />
        It's important to note that during the early years of token issuance,
        early investors benefit from discounts offered by Treesury, which
        contribute to an initial boost in the token price on the secondary
        market. Additionally, investors enjoy full payback priority of their
        initial investment until Treesury starts to share in the profits.
        However, as the token's lifespan is tied to the economic exploitation of
        the hazelnut tree (40 years), the price may gradually decline over time.
        <br />
        <br />
        While we believe in the potential for capital gains due to the projected
        increase in Treesury Tree prices and the long-term opportunity for
        passive income through the profit-sharing scheme, it's essential to
        understand that investing in tokens carries inherent risks. The value of
        tokens can fluctuate, and past performance is not indicative of future
        results. Therefore, we strongly encourage investors to carefully
        evaluate the risks involved and conduct thorough research before making
        any investment decisions.
        <br />
        <br />
        Investing in Treesury Trees should be considered with the understanding
        that token prices can be influenced by a multitude of factors, both
        internal and external. While we have highlighted some of the key factors
        that can impact token value, it's important to note that there may be
        additional elements that can come into play.
        <br />
        <br />
        At Treesury, we are committed to providing transparency and offering an
        attractive investment opportunity. However, we cannot guarantee specific
        outcomes or the precise trajectory of token prices. The token market is
        subject to market forces and can be influenced by various economic,
        environmental, and regulatory factors that are beyond our control.
        <br />
        <br />
        By investing in Treesury Trees, investors have the opportunity to
        contribute to sustainable practices and participate in the growth of the
        agroforestry industry while potentially benefiting from capital gains
        and/or long-term passive income. Nevertheless, we strongly advise
        investors to consult with financial professionals, conduct their own
        research, and carefully assess their investment goals and risk
        tolerance.
        <br />
        <br />
        Please remember that this information is provided for informational
        purposes only and should not be considered as financial or investment
        advice. Each individual's financial situation is unique, and it's
        important to make investment decisions based on personal circumstances
        and consultation with qualified professionals.
        <br />
        <br />
        Together, we can create a greener future while recognizing the inherent
        uncertainties of the market and making informed investment choices.
      </div>
      <div className="w-full max-w-[1000px]">
        <Line
          options={{
            maintainAspectRatio: true,
            responsive: true,
            height: 500,
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
              },
              x: {
                ticks: {
                  // @ts-ignore
                  fontSize: 12,
                  autoSkip: true, // disable auto skip
                  maxRotation: 40, // rotate the label to prevent overlap
                  minRotation: 40, // rotate the label to prevent overlap
                },
                display: true, // always display the x-axis
              },
            },
            plugins: {
              title: {
                display: true,
                text: 'Projected Token Value Over the Years *',
              },
              tooltip: {
                titleMarginBottom: 0,
                displayColors: false,
                callbacks: {
                  // @ts-ignore
                  title: function () {
                    return false
                  },
                  label: function (tooltipItem) {
                    let label = tooltipItem.dataset.label || ''

                    if (label) {
                      label += ' ' + tooltipItem.parsed.x + ': '
                    }
                    if (tooltipItem.parsed.y !== null) {
                      label += new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(tooltipItem.parsed.y)
                    }
                    return label
                  },
                },
              },
            },
          }}
          data={{
            datasets: [
              {
                label: 'Year',
                data: [
                  ,
                  113.66,
                  125.5,
                  138.58,
                  153.02,
                  168.96,
                  181.23,
                  184.92,
                  179.36,
                  169.96,
                  159.52,
                  147.9,
                  148.42,
                  148.93,
                  149.4,
                  149.84,
                  150.22,
                  150.54,
                  150.8,
                  150.97,
                  151.06,
                  150.0,
                  148.66,
                  147.16,
                  145.14,
                  142.72,
                  139.82,
                  136.39,
                  132.37,
                  127.69,
                  122.26,
                  115.99,
                  108.79,
                  100.53,
                  91.09,
                  80.35,
                  68.13,
                  54.28,
                  38.6,
                  20.88,
                  0.91,
                ],
                backgroundColor: 'rgba(49, 70, 140, 0.50)', // Bar color
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
            labels: [
              '',
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
              '24',
              '25',
              '26',
              '27',
              '28',
              '29',
              '30',
              '31',
              '32',
              '33',
              '34',
              '35',
              '36',
              '37',
              '38',
              '39',
              '40',
            ],
          }}
        />
      </div>
      <Typography variant="text">
        * This projection is for a Year 1 The projected token value provided is
        based on current market analysis, trends, assumptions, and other
        relevant factors, specifically for the Year 1 - Early Bird Offering
        token. However, please note that projections are subject to inherent
        uncertainties and market volatility. The actual value of the tokens may
        vary and could be higher or lower than the projected value. Investments
        in tokens involve risks, and past performance is not indicative of
        future results. We advise investors to conduct their own research and
        exercise caution when making investment decisions.
      </Typography>
    </div>
  )
}
