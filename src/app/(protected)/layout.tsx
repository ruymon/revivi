import { Navbar } from "@/components/app/Navbar/Navbar";
import { AUTH_LOGIN_ROUTE } from "@/constants/auth";
import { ERROR_MESSAGES } from "@/constants/errors";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedRootLayoutProps {
  children: ReactNode
};

export default async function ProtectedRootLayout({ children }: ProtectedRootLayoutProps) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    permanentRedirect(`${AUTH_LOGIN_ROUTE}?message=${ERROR_MESSAGES.AUTH.NOT_AUTHORIZED}`)
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}