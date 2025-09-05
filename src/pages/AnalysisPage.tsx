import Toggle from "@components/common/Toggle";
import Card from "@components/common/Card";
import Daily from "@components/analysis/Daily";
import Monthly from "@components/analysis/Monthly";
import { useState } from "react";

export default function AnalysisPage() {
  const [selectedLabel, setSelectedLabel] = useState<"일별" | "월별">("일별");

  return (
    <div className="bg-bg pt-[72px] flex flex-col items-center gap-5 overflow-y">
      <Toggle
        options={["일별", "월별"]}
        value={selectedLabel}
        onChange={(v) => setSelectedLabel(v as typeof selectedLabel)}
      />
      <Card>{selectedLabel === "일별" ? <Daily /> : <Monthly />}</Card>
    </div>
  );
}
