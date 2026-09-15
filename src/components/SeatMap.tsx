"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SteeringWheel, Wheelchair, CheckCircle } from "@phosphor-icons/react";
import { buildSeats } from "@/lib/seat-layout";

const SIZES = {
  sm: { seat: 16, gap: 3, notch: 5, icon: 9 },
  lg: { seat: 36, gap: 8, notch: 12, icon: 16 },
} as const;

type SeatState = "occupied" | "available" | "selected";

function SeatBlock({
  state,
  accessible,
  size,
  interactive,
  onClick,
}: {
  state: SeatState;
  accessible: boolean;
  size: keyof typeof SIZES;
  interactive: boolean;
  onClick?: () => void;
}) {
  const { seat, notch, icon } = SIZES[size];

  const fill =
    state === "selected"
      ? "var(--primary)"
      : state === "occupied"
        ? "var(--surface-muted)"
        : "transparent";
  const border =
    state === "selected" ? "var(--primary)" : "var(--border-strong)";

  return (
    <motion.button
      type="button"
      disabled={!interactive || state === "occupied"}
      onClick={onClick}
      whileTap={interactive && state !== "occupied" ? { scale: 0.88 } : undefined}
      animate={
        state === "selected"
          ? { boxShadow: ["0 0 0 rgba(249,115,22,0.5)", "0 0 14px rgba(249,115,22,0.55)", "0 0 0 rgba(249,115,22,0.5)"] }
          : { boxShadow: "0 0 0 rgba(249,115,22,0)" }
      }
      transition={
        state === "selected"
          ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          : { type: "spring", bounce: 0, duration: 0.3 }
      }
      className="relative shrink-0"
      style={{
        width: seat,
        height: seat,
        borderRadius: size === "lg" ? 10 : 4,
        background: fill,
        border: `2px solid ${border}`,
        cursor: interactive && state !== "occupied" ? "pointer" : "default",
      }}
      aria-label={state === "occupied" ? "ที่นั่งไม่ว่าง" : "ที่นั่งว่าง"}
    >
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: Math.round(seat * 0.16),
          width: notch,
          height: Math.round(seat * 0.22),
          borderRadius: 1,
          background:
            state === "selected" ? "rgba(255,255,255,0.4)" : "var(--border-strong)",
        }}
      />
      {accessible && (
        <Wheelchair
          size={icon}
          weight="bold"
          className="absolute inset-0 m-auto"
          style={{ color: state === "selected" ? "#ffffff" : "var(--secondary)" }}
        />
      )}
    </motion.button>
  );
}

export function SeatMap({
  capacity,
  onboard,
  size = "lg",
  showDriver = true,
  showLegend = true,
  interactive = false,
}: {
  capacity: number;
  onboard: number;
  size?: keyof typeof SIZES;
  showDriver?: boolean;
  showLegend?: boolean;
  interactive?: boolean;
}) {
  const seats = buildSeats(capacity);
  const { seat, gap } = SIZES[size];
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<number | null>(null);

  const rows: typeof seats[] = [];
  let cursor = 0;
  const rowSizes: number[] = [];
  {
    let remaining = capacity;
    if (remaining > 0) {
      rowSizes.push(1);
      remaining -= 1;
    }
    while (remaining > 0) {
      const take = Math.min(3, remaining);
      rowSizes.push(take);
      remaining -= take;
    }
  }
  for (const count of rowSizes) {
    rows.push(seats.slice(cursor, cursor + count));
    cursor += count;
  }

  const selectedSeat = seats.find((s) => s.index === selected);
  const confirmedSeat = seats.find((s) => s.index === confirmed);

  return (
    <div>
      <div className="inline-flex flex-col" style={{ gap }}>
        {showDriver && (
          <div className="mb-1 flex items-center" style={{ gap }}>
            <div
              className="flex items-center justify-center border-2"
              style={{
                width: seat,
                height: seat,
                borderRadius: size === "lg" ? 10 : 4,
                borderColor: "var(--border-strong)",
                background: "var(--surface-muted)",
                color: "var(--muted)",
              }}
              title="คนขับ"
            >
              <SteeringWheel size={Math.round(seat * 0.55)} weight="bold" />
            </div>
            <span className="text-xs text-muted">คนขับ</span>
          </div>
        )}
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex" style={{ gap }}>
            {row.map((s) => {
              const state: SeatState =
                confirmed === s.index || selected === s.index
                  ? "selected"
                  : s.index < onboard
                    ? "occupied"
                    : "available";
              return (
                <SeatBlock
                  key={s.index}
                  state={state}
                  accessible={s.accessible}
                  size={size}
                  interactive={interactive && confirmed === null}
                  onClick={() =>
                    setSelected((cur) => (cur === s.index ? null : s.index))
                  }
                />
              );
            })}
          </div>
        ))}
      </div>

      {interactive && (
        <div className="mt-4 border-t border-border pt-4">
          <AnimatePresence mode="wait">
            {confirmedSeat ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between gap-3 rounded-2xl bg-secondary-tint px-4 py-3"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-[var(--success-text)]">
                  <CheckCircle size={18} weight="fill" />
                  จองที่นั่ง {confirmedSeat.label} แล้ว
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setConfirmed(null);
                    setSelected(null);
                  }}
                  className="text-xs font-medium text-primary underline underline-offset-2"
                >
                  แก้ไขการจอง
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="picker"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-sm text-muted">
                  {selectedSeat
                    ? `เลือกที่นั่ง ${selectedSeat.label}`
                    : "แตะเพื่อเลือกที่นั่ง"}
                </span>
                <motion.button
                  type="button"
                  disabled={!selectedSeat}
                  whileTap={selectedSeat ? { scale: 0.96 } : undefined}
                  onClick={() => selectedSeat && setConfirmed(selectedSeat.index)}
                  className="shrink-0 bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
                  style={{ borderRadius: 9999 }}
                >
                  ยืนยันที่นั่ง
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {showLegend && (
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block border-2 border-border-strong"
              style={{ width: 12, height: 12, borderRadius: 3 }}
            />
            ว่าง
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block border-2 border-border-strong bg-surface-muted"
              style={{ width: 12, height: 12, borderRadius: 3 }}
            />
            มีผู้โดยสาร
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block border-2 border-primary bg-primary"
              style={{ width: 12, height: 12, borderRadius: 3 }}
            />
            เลือกอยู่
          </span>
          <span className="flex items-center gap-1.5">
            <Wheelchair size={14} weight="bold" className="text-secondary" />
            ที่นั่งสำหรับผู้พิการ
          </span>
        </div>
      )}
    </div>
  );
}
