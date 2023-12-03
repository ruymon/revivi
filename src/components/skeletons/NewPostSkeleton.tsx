import { Button } from "../ui/Button";
import { Skeleton } from "../ui/Skeleton";

export function NewPostSkeleton() {
  return (
    <div className="flex gap-4">
      <Skeleton className="rounded-full h-10 w-10" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="w-full h-20" />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-7 w-7" />
          </div>

          <Button disabled>Publicar</Button>
        </div>
      </div>
    </div>
  );
};
