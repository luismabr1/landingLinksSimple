import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <body className="font-Montserrat dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Head>
    </Html>
  )
}