import { DatabaseProfile, Profile } from "@/types/profile";

export function formatProfileData(profile: DatabaseProfile): Profile {
  return {
    avatarUrl: profile.avatar_url,
    bio: profile.bio,
    fullName: profile.full_name,
    id: profile.id,
    username: profile.username,
    updatedAt: profile.updated_at,
  }
}
