"use client"
import { Divider } from "sabalong-ui";

export function DividerPlain() {
  return <Divider />;
}

export function DividerLabeled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm text-zinc-300">
      <p>Or continue with</p>
      <Divider label="Other options" />
      <p>Further below</p>
    </div>
  );
}

export function DividerVertical() {
  return (
    <div className="flex items-center gap-5 text-sm text-zinc-300">
      <span>Home</span>
      <Divider orientation="vertical" />
      <span>Docs</span>
      <Divider orientation="vertical" variant="info" />
      <span>API</span>
    </div>
  );
}

export function DividerVariants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Divider variant="success" />
      <Divider variant="danger" />
      <Divider variant="warn" />
      <Divider variant="info" />
    </div>
  );
}
