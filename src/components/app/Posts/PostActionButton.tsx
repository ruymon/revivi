import { Button } from "@/components/ui/Button";
import { HeartIcon, ImageIcon, MessageCircleIcon, ShareIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type PostActionButtonVariants = "like" | "comment" | "share" | "addImage";

interface PostActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: PostActionButtonVariants;
};

const PostActionButtonIconVariants: { [key in PostActionButtonVariants]: ReactNode } = {
  like: <HeartIcon size={20} />,
  comment: <MessageCircleIcon size={20} />,
  share: <ShareIcon size={20} />,
  addImage: <ImageIcon size={20} />,
};

export function PostActionButton({ variant, ...props }: PostActionButtonProps) {
  return (
    <Button variant="ghost" size="icon" className="text-muted-foreground hover:enabled:text-secondary-foreground" {...props}>
      {PostActionButtonIconVariants[variant]}
    </Button>
  );
};
