import '../styles/globals.css'
import {LinkProvider} from '../context/LinkContext'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'
/* import {LinkContext} from '../database/data' */

function MyApp({ Component, pageProps }) {
  
  return (
      <ThemeProvider attribute="class">
        <LinkProvider>
        <Layout>
          <Component {...pageProps} />  
        </Layout>
        </LinkProvider>
      </ThemeProvider>   

  )

}

export default MyApp
