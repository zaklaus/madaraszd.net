import Document, {Head, Main, NextScript} from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class PersonalDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head />
            <body>
              <Main />
              <NextScript />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
                }}
              />
            </body>
          </html>
        )
    }
}
