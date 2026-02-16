"use client"

import { ReactNode, useState } from 'react';

export type AlertBoxTypes = {
  title?: string;
  children?: React.ReactNode;
}

export default function AlertBox({title, children}: AlertBoxTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log("Data dihapus");
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-red-600 px-4 text-sm inset-shadow-sm inset-shadow-red-400 cursor-pointer py-2 text-white hover:bg-red-700 transition-colors"
      >
        Delete Item
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900 border dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {children}
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}