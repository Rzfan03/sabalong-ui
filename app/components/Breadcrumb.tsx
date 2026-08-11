"use client"
import { Breadcrumb } from "sabalong-ui";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
        { label: "Components", href: "/docs/components" },
        { label: "Breadcrumb" },
      ]}
    />
  );
}
