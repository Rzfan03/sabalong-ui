import type { MouseEventHandler } from "react"

type ButtonVariant = "dark" | "light" | "danger" | "success" | "warn" | "primary"

interface ButtonProps {
  title: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  variant?: ButtonVariant
  className?: string
}

export function Button({ title, href, variant = "dark", onClick, className = "" }: ButtonProps) {
  const variants = {
    dark: "bg-zinc-900 border-zinc-700 text-zinc-200 inset-shadow-sm inset-shadow-zinc-800",
    light: "bg-white border-zinc-200 text-zinc-600",
    danger: "bg-red-600 border-red-500 text-white",
    success: "bg-emerald-600 border-emerald-500 text-white",
    warn: "bg-amber-500 border-amber-400 text-white",
    primary: "bg-blue-600 border-blue-500 text-white",
  }

  const btnClass = `border w-fit py-2 px-4 rounded-lg text-sm no-underline transition-all hover:opacity-80 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={btnClass}>
        {title}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  )
}
