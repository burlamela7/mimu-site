import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mimu — 手工 · 轻奢</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mimu：手工轻奢展示网站" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
