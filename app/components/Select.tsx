"use client"
import { useState } from "react";
import { Select } from "sabalong-ui";

const frameworks = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "next" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

export default function SelectDemo() {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full max-w-sm">
      <Select
        label="Framework"
        placeholder="Choose a framework"
        options={frameworks}
        value={selected}
        onChange={setSelected}
      />
      {selected && <p className="mt-2 text-sm text-zinc-400">You selected: <span className="text-zinc-200">{selected}</span></p>}
    </div>
  );
}
