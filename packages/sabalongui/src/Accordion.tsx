"use client"
import { useState, type ReactNode } from "react"
import { FiChevronDown } from "react-icons/fi"

export default function Accordion({ title, children, className = "" }: { title?: string, children?: ReactNode, className?: string }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`rounded-lg w-full max-w-md border border-zinc-800 bg-zinc-900 text-zinc-200 ${className}`}>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <FiChevronDown 
          className={`h-5 w-5 transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 text-zinc-400">
          {children}
        </div>
      </div>
    </div>
  )
}