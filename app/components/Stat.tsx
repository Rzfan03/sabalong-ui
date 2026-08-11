"use client"
import { Stat } from "sabalong-ui";
import { IoPeople, IoRocket, IoDocumentText } from "react-icons/io5";

export default function StatDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
      <Stat label="Total Users" value="12.430" trend="up" trendLabel="+12.5%" icon={<IoPeople />} />
      <Stat label="Active Today" value="1.892" trend="up" trendLabel="+3.2%" icon={<IoRocket />} />
      <Stat label="Published Articles" value="486" trend="down" trendLabel="-1.1%" icon={<IoDocumentText />} />
    </div>
  );
}
