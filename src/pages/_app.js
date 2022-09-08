import '../styles/globals.css'
import {LinkProvider} from '../context/LinkContext'
import {ThemeProvider} from 'next-themes'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
      <ThemeProvider attribute="class">
        <LinkProvider>
        <Layout>
          <Component key={router.asPath} {...pageProps} />  
        </Layout>
        </LinkProvider>
      </ThemeProvider>   

  )

}

export default MyApp
