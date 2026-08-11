"use client"
import { Skeleton } from "sabalong-ui";

export default function SkeletonDemo() {
  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-9 w-32" />
    </div>
  );
}
