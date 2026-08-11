"use client"
import { Card } from "sabalong-ui";

export default function CardDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <Card
        title="User Statistics"
        subtitle="This week's data"
        footer={<button className="cursor-pointer text-sm text-blue-500 hover:text-blue-400">View details</button>}
      >
        Active users are up <span className="text-emerald-400">12.5%</span> compared to last week.
      </Card>
      <Card
        title="System Update"
        subtitle="Changelog v4.1.0"
        footer={<button className="cursor-pointer text-sm text-blue-500 hover:text-blue-400">Read changelog</button>}
      >
        Added 10 new components, redesigned Notification, and fixed the dev server.
      </Card>
    </div>
  );
}
