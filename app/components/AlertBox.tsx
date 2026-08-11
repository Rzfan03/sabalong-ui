"use client"
import { useState } from "react";
import { AlertBox } from "sabalong-ui";

export default function AlertBoxDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm text-white transition-colors hover:bg-red-700"
      >
        Delete Item
      </button>
      <AlertBox
        open={open}
        title="Confirm Delete"
        onClose={() => setOpen(false)}
        onConfirm={() => {
          console.log("Data deleted");
          setOpen(false);
        }}
      >
        Are you sure you want to delete this?
      </AlertBox>
    </div>
  );
}
