import Head from 'next/head'
import { about } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import "../app/globals.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{about.name || 'Portfolio'}</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
