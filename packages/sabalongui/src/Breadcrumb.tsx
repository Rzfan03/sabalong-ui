import { IoChevronForward } from "react-icons/io5";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <a
                  href={item.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {item.label}
                </a>
              ) : (
                <span className={`text-sm ${last ? "font-medium text-zinc-100" : "text-zinc-400"}`}>
                  {item.label}
                </span>
              )}
              {!last && <IoChevronForward className="text-xs text-zinc-600" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
