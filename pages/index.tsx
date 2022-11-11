import { useState } from 'react'
import Content from '@/components/Content';
import Header from '@/components/Header';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div>
      <Header currentSection={currentSection} />
      <Content currentSection={currentSection} setSection={setCurrentSection} />
    </div>
  )
}
