import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"

interface UserHoverCardProps {
  avatarUrl: string
  fullName: string
  username: string
  bio: string
  joinedAt: string
}

export function UserHoverCard({ avatarUrl, username, fullName, bio, joinedAt }: UserHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex sm:gap-2 cursor-pointer flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-primary font-semibold">{fullName}</span>
          <span className="text-muted-foreground text-sm">@{username}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72" sideOffset={12}>
        <div className="flex flex-col gap-4">
          <header className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h4 className="text-secondary-foreground font-semibold">{fullName}</h4>
              <span className="text-muted-foreground text-sm">{username}</span>
            </div>
          </header>

          <div className="flex flex-col gap-2">
            <span className="text-sm">{bio}</span>
            <div className="flex items-center pt-2 gap-1">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Entrou em {joinedAt}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
