import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Remarkable UK Study Visa: Fearless Steps To Take',
  description: 'Get UK Student Visa - Discover essential details on UK study visa requirements, fees, and processing times for Indian students .CONTACT US FOR MORE DETAILS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
