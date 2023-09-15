import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReduxProviders } from '@/redux/Providers'
import { Toaster } from '@/components/ui/toaster'
import ModalProvider from '@/providers/ModalProvider'
import { ThemeProvider } from '@/providers/theme-provider'

const primaryFont = localFont({
  src: '../public/fonts/FarsiFont.woff2',
  variable: '--font-sans',
})
const numericFont = localFont({
  src: '../public/fonts/FarsiAdad.woff2',
  variable: '--font-adad',
})
const numericBoldFont = localFont({
  src: '../public/fonts/FarsiAdad-Bold.woff2',
  variable: '--font-adad-bold',
})
const numericRegularFont = localFont({
  src: '../public/fonts/FarsiAdad-Regular.woff2',
  variable: '--font-adad-reg',
})
export const metadata: Metadata = {
  title: ' || فروشگاه',
  description: 'فروشگاه',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${primaryFont.variable} font-farsi adad  antialiased`}>
        <ReduxProviders>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider />
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </ThemeProvider>
        </ReduxProviders>
      </body>
    </html>
  )
}
