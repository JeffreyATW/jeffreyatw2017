import { useState } from 'react'
import Content from '@/components/Content';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div>
      <Head>
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

        <meta property="og:title" content="JeffreyATW" />
        <meta
          property="og:description"
          content="Jeffrey Carl Faden's personal website."
        />
        <meta property="og:image" content="https://jeffreyatw.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JeffreyATW" />
        <meta name="twitter:creator" content="@JeffreyATW" />

        <title>JeffreyATW</title>
      </Head>
      <Header currentSection={currentSection} />
      <Content currentSection={currentSection} setSection={setCurrentSection} />
    </div>
  )
}
