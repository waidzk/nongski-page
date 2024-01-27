import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nongski',
  description: 'Nongski bukanlah sebuah kelompok, komunitas apalagi organisasi, nongski hanyalah sebuah tempat untuk orang-orang berusaha menjadi lebih baik dan bermanfaat bagi orang-orang membutuhkan. NEVER STOP BEING KIND is our tagline. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={`${inter.className} bg-[#F5F5F5]`}>{children}</body>
    </html>
  )
}
