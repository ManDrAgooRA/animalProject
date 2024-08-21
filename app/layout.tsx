import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/Header/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Animal breads',
    default: 'Animal breads',
  },
  description: 'This is test animal breads application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
