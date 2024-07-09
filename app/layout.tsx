import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navigation/navbar'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Eltarzi Portfolio',
  description: 'Created on NextJS, a fully responsive webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>

      </head>
      <body>
      <Providers>
        <Navbar />
          { children }
          </Providers>
      </body>
    </html>
  )
}
