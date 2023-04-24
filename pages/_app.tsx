import Layout from '@/components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'

import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
