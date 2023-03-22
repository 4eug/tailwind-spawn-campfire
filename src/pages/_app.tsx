import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/helveticaneueltcom-bdcn-webfont.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/helveticaneueltcom-bdcn-webfont.woff2',
      weight: '900',
    },
  ],
  variable: '--font-helvetica',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={helvetica.className}>
      <Component {...pageProps} />
    </main>
  );
}
