'use client'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      disable: 'mobile',
    })
  }, [])

  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./favicon.ico'
          type='image/x-icon'
          sizes='32x32'
        />
      </head>
      <body className=''>
        <Providers>
          <main className='full_wrapper relative'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
