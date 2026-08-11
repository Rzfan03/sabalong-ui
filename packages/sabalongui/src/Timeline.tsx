export interface TimelineItem {
  title: string;
  description?: string;
  time?: string;
  active?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <ol className={`flex w-full flex-col ${className}`}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <li key={i} className="flex gap-3.5">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${
                  item.active ? "bg-blue-500" : "bg-zinc-600"
                }`}
              />
              {!last && <span className="w-px flex-1 bg-zinc-800" />}
            </div>
            <div className={last ? "" : "pb-6"}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-zinc-100">{item.title}</span>
                {item.time && <span className="text-xs text-zinc-500">{item.time}</span>}
              </div>
              {item.description && (
                <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
