"use client"
import { useState } from "react";
import { Modal } from "sabalong-ui";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
      >
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Title"
        footer={
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
          >
            Close
          </button>
        }
      >
        This is the modal content. Press ESC, click the backdrop, or the close button to dismiss it.
      </Modal>
    </div>
  );
}
