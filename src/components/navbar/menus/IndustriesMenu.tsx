"use client";

import { MegaMenuShell } from "../MegaMenuShell";
import { MegaMenuColumn } from "../MegaMenuColumn";
import { industriesColumns, industriesFooter } from "@/data/navigation/industries";

export const IndustriesMenu = () => {
  return (
    <MegaMenuShell footer={industriesFooter}>
      <div className="grid grid-cols-6 gap-6">
        {industriesColumns.map((col) => (
          <MegaMenuColumn key={col.id} column={col} />
        ))}
      </div>
    </MegaMenuShell>
  );
};