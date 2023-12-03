import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { getRelativeTime } from "@/lib/date";
import { Post } from "@/types/posts";
import { UserHoverCard } from "../UserHoverCard";
import { PostActionButton } from "./PostActionButton";

type PostProps = Post; 

export function Post({ author, content, createdAt }: PostProps) {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={author.avatarUrl ?? ''} />
        <AvatarFallback>
          RM
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-row items-center justify-between">
          <UserHoverCard 
            avatarUrl={author.avatarUrl ?? ''}
            fullName={author.fullName ?? ''}
            username={author.username ?? ''}
            bio={author.bio ?? ''}
            joinedAt="2021-08-01"
          />
          <span className="text-muted-foreground text-sm">{getRelativeTime(createdAt)}</span>
        </div>

        <span>{content}</span>

        <div className="flex items-center gap-4 mt-4 -translate-x-2">
          <PostActionButton variant="like" disabled />
          <PostActionButton variant="comment" disabled/>
          <PostActionButton variant="share" disabled/>
        </div>
      </div>
    </div>
  );
};
