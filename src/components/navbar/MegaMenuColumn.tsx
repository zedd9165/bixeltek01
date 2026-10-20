"use client";

import Link from "next/link";
import type { NavColumn } from "@/data/navigation/types";

interface MegaMenuColumnProps {
  column: NavColumn;
  onNavigate?: () => void; // used on mobile to close the menu after a click
}

export const MegaMenuColumn = ({ column, onNavigate }: MegaMenuColumnProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 text-black">
        {column.icon && <span className="text-[#670ef7]">{column.icon}</span>}
        <h4 className="font-semibold text-sm tracking-wide">{column.title}</h4>
      </div>
      <ul className="space-y-1">
        {column.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              onClick={onNavigate}
              className="flex items-center justify-between text-sm text-gray-600 hover:text-[#670ef7] rounded-md px-2 py-1.5 -mx-2 hover:bg-gray-50 transition"
            >
              <span>{item.name}</span>
              {item.badge && (
                <span className="text-[10px] font-medium text-[#670ef7] bg-purple-50 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};