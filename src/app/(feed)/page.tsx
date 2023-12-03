import { getPosts } from "@/actions/postActions";
import { getProfile } from "@/actions/profileActions";
import { NewPost } from "@/components/app/posts/NewPost";
import { Post } from "@/components/app/posts/Post";
import { Separator } from "@/components/ui/Separator";

export default async function AppHomePage() {
  const [posts, profile] = await Promise.all([
    getPosts(),
    getProfile()
  ]);

  return (
    <>
      {profile && (
        <div className="flex flex-col gap-6">
          <NewPost avatarUrl={profile.avatarUrl ?? ''} fullName={profile.fullName ?? ''} />
          <Separator />
        </div>
      )}
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
};
