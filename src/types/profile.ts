import { Database } from "./database";

export type DatabaseProfile = Database["public"]["Tables"]["profiles"]["Row"];

export interface Profile {
  avatarUrl: string | null;
  bio: string | null;
  fullName: string | null;
  id: string;
  username: string | null;
  updatedAt: string | null;
}
