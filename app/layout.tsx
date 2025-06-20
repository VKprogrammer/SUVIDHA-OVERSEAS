import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suvidha Oversease',
  description: 'Created by heart',
  generator: 'team.work',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
