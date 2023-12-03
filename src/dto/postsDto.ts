import { DatabasePostQueryResponse, Post } from "@/types/posts";

export function formatPostsList(posts: DatabasePostQueryResponse[]): Post[] {
  const formattedPosts = posts.map((post) => {
    return {
      id: post.id,
      content: post.content,
      createdAt: post.created_at,
      author: {
        id: post.profiles.id,
        username: post.profiles.username,
        fullName: post.profiles.full_name,
        avatarUrl: post.profiles.avatar_url,
        bio: post.profiles.bio,
      },
    };
  });

  return formattedPosts;
}
