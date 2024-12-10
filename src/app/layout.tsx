import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorldTree Security',
  description: 'AI and Machine Learning Security Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">worldtree.ai</div>
              </div>
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-blue-500">Company</a>
                <a href="#" className="text-white hover:text-blue-500">Solutions</a>
                <a href="#" className="text-white hover:text-blue-500">Team</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
