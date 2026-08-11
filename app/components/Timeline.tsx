"use client"
import { Timeline } from "sabalong-ui";

export default function TimelineDemo() {
  return (
    <div className="w-full max-w-sm">
      <Timeline
        items={[
          { title: "Order placed", description: "Order received and added to the queue.", time: "10:02" },
          { title: "Packing", description: "Item is being prepared by the warehouse.", time: "10:41", active: true },
          { title: "Shipped", description: "On its way to the destination address.", time: "—" },
          { title: "Delivered", description: "Order arrived and was received.", time: "—" },
        ]}
      />
    </div>
  );
}
