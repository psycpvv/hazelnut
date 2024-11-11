import createNextIntlPlugin from 'next-intl/plugin'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'components')],
  },
}

export default withNextIntl(nextConfig)
