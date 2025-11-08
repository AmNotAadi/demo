import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Regrowth Website Builder',
  description: 'Create shareable websites for your prospects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&family=Open+Sans:wght@400;600;700;800&family=Lato:wght@400;700;900&family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;800;900&family=Raleway:wght@400;600;700;800;900&family=Nunito:wght@400;600;700;800;900&family=Merriweather:wght@400;700;900&family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;600;700&family=Crimson+Text:wght@400;600;700&family=Oswald:wght@400;600;700&family=Bebas+Neue&family=Anton&family=Righteous&family=Fira+Code:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
