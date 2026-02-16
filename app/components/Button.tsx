"use client"

import Link from "next/link"
import { MouseEventHandler } from "react"

type ButtonVariant = "dark" | "light" | "danger" | "success" | "warn" | "primary"

interface ButtonProps {
  title: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  variant: ButtonVariant
}

export default function Button({ title, href, variant, onClick }: ButtonProps) {
  const variants = {
    dark: "bg-zinc-900 border-zinc-700 text-zinc-200",
    light: "bg-white border-zinc-200 text-zinc-600",
    danger: "bg-red-600 border-red-500 text-white",
    success: "bg-emerald-600 border-emerald-500 text-white",
    warn: "bg-amber-500 border-amber-400 text-white",
    primary: "bg-blue-600 border-blue-500 text-white",
  }

  const className = `inline-block border w-fit py-2 px-4 rounded-lg text-sm no-underline transition-all hover:opacity-80 ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} onClick={onClick as any} className={className}>
        {title}
      </Link>
    )
  }

  return (
    <button onClick={onClick as any} className={className} type="button">
      {title}
    </button>
  )
}