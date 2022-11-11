import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@/components/Backgrounds/Backgrounds.scss';
import '@/components/Content/Content.scss';
import '@/components/Header/Header.scss';
import '@/components/MoreMenu/MoreMenu.scss';
import '@/components/Showcase/Showcase.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
