import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';

// Initialize Inter font
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Digital Marketing Assessment | Sandler Digital Advisory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}