"use client"
import { useState } from "react";
import { Rating } from "sabalong-ui";

export function RatingInteractive() {
  const [value, setValue] = useState(3);

  return (
    <div className="flex flex-col items-center gap-3">
      <Rating value={value} onChange={setValue} size="lg" />
      <p className="text-xs text-zinc-500">{value} / 5 stars</p>
    </div>
  );
}

export function RatingReadOnly() {
  return <Rating value={4} readOnly />;
}

export function RatingSizes() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating defaultValue={2} size="sm" />
      <Rating defaultValue={4} size="md" />
      <Rating defaultValue={5} size="lg" readOnly />
    </div>
  );
}
