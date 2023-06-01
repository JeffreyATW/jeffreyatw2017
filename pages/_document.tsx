import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TMZ5D1VQVD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TMZ5D1VQVD');
          `}
        </Script>
        <meta content="Jeffrey Carl Faden's personal website." name="Description" />
        <meta content="Jeffrey Carl Faden" name="author" />
        <meta
          content="JeffreyATW, web development, front-end, blog, links"
          name="Keywords"
        />
        <link
          href="//jeffreyatw.com/feed"
          rel="alternate"
          title="RSS"
          type="application/rss+xml"
        />
        <link
          href="//jeffreyatw.com/blog/feed/atom"
          rel="alternate"
          title="Atom"
          type="application/atom+xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap" rel="stylesheet"></link>

        <meta property="og:title" content="JeffreyATW" />
        <meta
          property="og:description"
          content="Jeffrey Carl Faden's personal website."
        />
        <meta property="og:image" content="https://jeffreyatw.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JeffreyATW" />
        <meta name="twitter:creator" content="@JeffreyATW" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}