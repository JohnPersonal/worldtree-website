import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-foreground font-bold text-2xl">worldtree.ai</div>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#" className="text-foreground hover:text-primary">Company</a>
                  <a href="#" className="text-foreground hover:text-primary">Solutions</a>
                  <a href="#" className="text-foreground hover:text-primary">Team</a>
                </div>
              </div>
            </nav>
          </header>
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}