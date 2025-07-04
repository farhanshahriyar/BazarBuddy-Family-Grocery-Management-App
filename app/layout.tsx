import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'BazarBuddy - Family Grocery Management App',
  description: 'A grocery list app that helps you plan your shopping trips and manage your pantry.',
  generator: 'Next.js 13',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
