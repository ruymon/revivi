"use server"

import { formatProfileData } from "@/dto/profileDto"
import { createSupabaseServerClient } from "@/lib/database/server"
import { Profile } from "@/types/profile"
import { cookies } from "next/headers"
import { cache } from "react"

export const getProfile = cache(async (): Promise<Profile> => {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not found')
  }

  const { data: profileData } = await supabase.from('profiles').select(`*`).eq('id', user.id).single()

  if (!profileData) {
    throw new Error('Profile not found')
  }

  return formatProfileData(profileData);
})