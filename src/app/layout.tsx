import { ClientProviders } from '@/components/providers/ClientProviders'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Ruy Monteiro",
      url: "https://github.com/ruymon",
    },
  ],
  creator: "Ruy Monteiro",
}

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen",
        GeistSans.variable,
        GeistMono.variable
      )}>
        <ClientProviders>
          <main className='min-h-screen gap-8 px-6 sm:px-8 md:px-20'>{children}</main>
        </ClientProviders>
      </body>
    </html>
  )
}
