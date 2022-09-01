import '../styles/globals.css'
import {LinkProvider} from '../context/LinkContext'
import {ThemeProvider} from 'next-themes'
/* import {LinkContext} from '../database/data' */

function MyApp({ Component, pageProps }) {
  
  return (
      <ThemeProvider attribute="class">
        <LinkProvider>
          <Component {...pageProps} />  
        </LinkProvider>
      </ThemeProvider>   

  )

}

export default MyApp
