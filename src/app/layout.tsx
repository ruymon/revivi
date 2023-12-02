import { ClientProviders } from '@/components/providers/ClientProviders'
import { cn } from '@/lib/utils'
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Revivi',
  description: 'Lembre-se das coisas boas',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen",
        GeistSans.variable,
        GeistMono.variable
      )}>
        <ClientProviders>
          <header>
            <nav className="nav container">
              <h1 className="text-display-3">KindeAuth</h1>
              <div>
                {!(await isAuthenticated()) ? (
                  <>
                    <LoginLink className="btn btn-ghost sign-in-btn">
                      Sign in
                    </LoginLink>
                    <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                  </>
                ) : (
                  <div className="profile-blob">
                    {user?.picture ? (
                      <img
                        className="avatar"
                        src={user?.picture}
                        alt="user profile avatar"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="avatar">
                        {user?.given_name?.[0]}
                        {user?.family_name?.[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-heading-2">
                        {user?.given_name} {user?.family_name}
                      </p>

                      <LogoutLink className="text-subtle">Log out</LogoutLink>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  )
}
