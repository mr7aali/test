import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { headers } from "next/headers"
import { isMobile } from './utils/isMobile';
import Mobile from './components/mobile/nav/Navber';
import Desktop from './components/desktop/nav/Navber';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{mobileCheck ? <Mobile /> : <Desktop/>}</div>
        {children}</body>
    </html>
  )
}
