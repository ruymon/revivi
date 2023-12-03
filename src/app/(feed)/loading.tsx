import { PostSkeleton } from "@/components/skeletons/PostSkeleton";

export default function HomeLoadingPage() {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
};
