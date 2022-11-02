import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import '../styles/globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html className={montserrat.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js</title>
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
