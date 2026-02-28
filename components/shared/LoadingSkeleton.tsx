/**
 * @component LoadingSkeleton
 * @part-of Web3School — Shared Components
 * @design Skeleton loading component with navy theme
 */
import { cn } from "@/lib/utils/cn";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "avatar" | "button" | "full-page";
  count?: number;
  className?: string;
}

export function LoadingSkeleton({
  variant = "text",
  count = 1,
  className,
}: LoadingSkeletonProps) {
  if (variant === "full-page") {
    return (
      <div className="min-h-screen bg-navy-deep p-6 space-y-6 animate-pulse">
        <Skeleton className="h-8 w-48 bg-navy-light" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 bg-navy-light rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-64 bg-navy-light rounded-2xl" />
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={cn("space-y-4", className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-navy-mid border border-border rounded-2xl p-6 space-y-3"
          >
            <Skeleton className="h-5 w-3/4 bg-navy-light" />
            <Skeleton className="h-4 w-full bg-navy-light" />
            <Skeleton className="h-4 w-2/3 bg-navy-light" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "avatar") {
    return <Skeleton className={cn("h-10 w-10 rounded-full bg-navy-light", className)} />;
  }

  if (variant === "button") {
    return <Skeleton className={cn("h-10 w-32 rounded-xl bg-navy-light", className)} />;
  }

  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4 bg-navy-light"
          style={{ width: `${Math.max(40, 100 - i * 15)}%` }}
        />
      ))}
    </div>
  );
}
