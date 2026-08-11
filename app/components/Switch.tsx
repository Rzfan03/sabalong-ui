"use client"
import { Switch } from "sabalong-ui";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Dark Mode" defaultChecked />
      <Switch label="Notifications" />
      <Switch label="Auto Save" defaultChecked />
    </div>
  );
}
