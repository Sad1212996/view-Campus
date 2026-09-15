"use client";

import { useState } from "react";
import { CurrencyCircleDollar, Money } from "@phosphor-icons/react";
import type { Route } from "@/lib/types";
import { calcFare } from "@/lib/fare";

export function FareCalculator({ route }: { route: Route }) {
  const [originId, setOriginId] = useState(route.stops[0].id);
  const [destId, setDestId] = useState(route.stops[route.stops.length - 1].id);
  const fare = calcFare(route, originId, destId);

  return (
    <div className="glass-panel p-6" style={{ borderRadius: 28 }}>
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <CurrencyCircleDollar size={20} weight="bold" className="text-primary" />
        คำนวณค่าโดยสาร
      </h3>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">ขึ้นที่</span>
          <select
            value={originId}
            onChange={(e) => setOriginId(e.target.value)}
            className="mt-1 w-full border border-transparent px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ borderRadius: 14, background: "var(--glass-inset)" }}
          >
            {route.stops.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-muted">ลงที่</span>
          <select
            value={destId}
            onChange={(e) => setDestId(e.target.value)}
            className="mt-1 w-full border border-transparent px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ borderRadius: 14, background: "var(--glass-inset)" }}
          >
            {route.stops.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-muted">ค่าโดยสารรวม</span>
        {originId === destId ? (
          <span className="text-sm text-muted">
            เลือกจุดลงให้ต่างจากจุดขึ้น
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1 bg-secondary-tint px-3 py-1 text-sm font-bold"
            style={{ borderRadius: 9999, color: "var(--success-text)" }}
          >
            <Money size={14} weight="bold" />
            {fare} บาท
          </span>
        )}
      </div>
    </div>
  );
}
