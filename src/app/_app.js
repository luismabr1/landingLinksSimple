import '../styles/globals.css';
import { LinkProvider } from '../context/LinkContext';
import { useRouter } from 'next/router';
import Layout from './layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
          <LinkProvider>
            <Component key={router.asPath} {...pageProps} />
          </LinkProvider>
      </Layout>
  );
}

export default MyApp;
