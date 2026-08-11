"use client"
import { useState } from "react";
import { Pagination } from "sabalong-ui";

export default function PaginationDemo() {
  const [page, setPage] = useState(3);

  return (
    <div className="flex flex-col items-center gap-4">
      <Pagination page={page} totalPages={12} onChange={setPage} />
      <p className="text-sm text-zinc-400">
        Page <span className="text-zinc-200">{page}</span> of 12
      </p>
    </div>
  );
}
