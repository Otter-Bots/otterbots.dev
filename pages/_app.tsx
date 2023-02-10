import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-expect-error
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
