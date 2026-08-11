"use client"
import { Tooltip } from "sabalong-ui";

const btnClass =
  "cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-800";

export default function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <Tooltip label="Tip on top">
        <button className={btnClass}>Top</button>
      </Tooltip>
      <Tooltip label="Tip below" position="bottom">
        <button className={btnClass}>Bottom</button>
      </Tooltip>
      <Tooltip label="Tip on the left" position="left">
        <button className={btnClass}>Left</button>
      </Tooltip>
      <Tooltip label="Tip on the right" position="right">
        <button className={btnClass}>Right</button>
      </Tooltip>
    </div>
  );
}
