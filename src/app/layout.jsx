import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
