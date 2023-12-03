
import { NewPostSkeleton } from "@/components/skeletons/NewPostSkeleton";
import { PostSkeleton } from "@/components/skeletons/PostSkeleton";
import { Separator } from "@/components/ui/Separator";

export default function HomeLoadingPage() {
  return (
    <>
      <NewPostSkeleton />
      <Separator />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
};
