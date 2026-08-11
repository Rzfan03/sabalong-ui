"use client"
import { Dropdown } from "sabalong-ui";

export default function DropdownDemo() {
  return (
    <Dropdown
      label="Actions"
      items={[
        { label: "Edit" },
        { label: "Duplicate" },
        { label: "Delete", danger: true },
      ]}
    />
  );
}
