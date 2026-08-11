"use client"
import { useState } from "react";
import { Progress } from "sabalong-ui";

export function ProgressControlled() {
  const [value, setValue] = useState(65);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setValue(Math.max(0, value - 10))}
          className="cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:bg-zinc-800"
        >
          -10
        </button>
        <button
          onClick={() => setValue(Math.min(100, value + 10))}
          className="cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:bg-zinc-800"
        >
          +10
        </button>
        <span className="ml-auto text-sm text-zinc-400">{value}%</span>
      </div>
      <Progress value={value} showLabel />
    </div>
  );
}

export function ProgressSuccess() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={75} variant="success" showLabel />
    </div>
  );
}

export function ProgressInfo() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={45} variant="info" showLabel />
    </div>
  );
}

export function ProgressWarn() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={60} variant="warn" showLabel />
    </div>
  );
}

export function ProgressDanger() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={85} variant="danger" showLabel />
    </div>
  );
}

export function ProgressIndeterminate() {
  return (
    <div className="w-full max-w-sm">
      <Progress indeterminate variant="danger" />
    </div>
  );
}
