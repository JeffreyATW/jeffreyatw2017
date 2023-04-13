import { useState } from 'react'
import Content from '@/components/Content';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <Head>
        <title>JeffreyATW</title>
      </Head>
      <Header currentSection={currentSection} />
      <Content currentSection={currentSection} setSection={setCurrentSection} />
    </>
  )
}
