import { getPosts } from "@/actions/postActions";
import { getProfile } from "@/actions/profileActions";
import { NewPost } from "@/components/app/Posts/NewPost";
import { Post } from "@/components/app/Posts/Post";
import { Separator } from "@/components/ui/Separator";

export default async function AppHomePage() {
  const [posts, profile] = await Promise.all([
    getPosts(),
    getProfile()
  ]);

  return (
    <>
      <NewPost avatarUrl={profile.avatarUrl ?? ''} fullName={profile.fullName ?? ''} />
      <Separator />
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
};
