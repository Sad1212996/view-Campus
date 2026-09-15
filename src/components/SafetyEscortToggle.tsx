"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "@phosphor-icons/react";

export function SafetyEscortToggle() {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border border-border bg-surface p-5" style={{ borderRadius: 20 }}>
      <div className="flex items-start gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center"
          style={{
            borderRadius: 9999,
            background: on ? "var(--secondary-tint)" : "var(--surface-muted)",
            color: on ? "var(--secondary)" : "var(--muted)",
          }}
        >
          <ShieldCheck size={20} weight={on ? "fill" : "regular"} />
        </span>
        <div>
          <p className="text-sm font-medium">โหมดติดตามความปลอดภัย</p>
          <p className="mt-0.5 text-xs text-muted">
            {on
              ? "กำลังแชร์ตำแหน่งการเดินทางนี้กับผู้ติดต่อฉุกเฉินของคุณ"
              : "เปิดเพื่อแชร์ตำแหน่งการเดินทางนี้กับผู้ติดต่อฉุกเฉิน"}
          </p>
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className="relative shrink-0"
        style={{
          width: 51,
          height: 31,
          borderRadius: 9999,
          background: on ? "var(--primary)" : "var(--surface-muted)",
          border: on ? "none" : "1px solid var(--border-strong)",
        }}
      >
        <motion.span
          className="absolute top-[2px] block bg-white"
          style={{ width: 27, height: 27, borderRadius: 9999, boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
          animate={{ left: on ? 22 : 2 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
        />
      </button>
    </div>
  );
}
