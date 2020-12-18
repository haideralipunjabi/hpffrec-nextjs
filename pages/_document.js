import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script data-goatcounter="https://hpffrec.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>          
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" crossOrigin={true}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}