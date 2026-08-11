"use client"
import { useState } from "react";
import { RadioGroup } from "sabalong-ui";

const plans = [
  { label: "Starter — Free", value: "starter" },
  { label: "Pro — $12/month", value: "pro" },
  { label: "Team — $24/month", value: "team" },
  { label: "Enterprise (coming soon)", value: "enterprise", disabled: true },
];

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

export function RadioGroupVertical() {
  const [plan, setPlan] = useState("pro");

  return (
    <div className="w-full max-w-sm">
      <RadioGroup label="Choose a plan" options={plans} value={plan} onChange={setPlan} />
    </div>
  );
}

export function RadioGroupHorizontal() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="w-full max-w-sm">
      <RadioGroup label="Theme settings" options={themes} value={theme} onChange={setTheme} direction="horizontal" />
    </div>
  );
}
