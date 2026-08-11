"use client"
import { Tabs } from "sabalong-ui";

export default function TabsDemo() {
  return (
    <Tabs
      items={[
        { label: "Overview", content: "Your project overview page." },
        { label: "Analytics", content: "User statistics and app performance." },
        { label: "Settings", content: "Manage account preferences and configuration." },
      ]}
    />
  );
}
