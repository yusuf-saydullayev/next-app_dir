import Head from 'next/head'
import '../styles/globals.css'
import { Montserrat } from '@next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
