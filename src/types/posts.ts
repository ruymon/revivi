export interface DatabasePostQueryResponse {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    username: string | null;
    full_name: string | null;
    avatar_url: string | null;
    bio: string | null;
  }
};

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string | null;
    username: string | null;
    fullName: string | null;
    avatarUrl: string | null;
    bio: string | null;
  }
};