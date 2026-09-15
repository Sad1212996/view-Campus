"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CaretRight, ClockCountdown, Users } from "@phosphor-icons/react";
import type { Route } from "@/lib/types";
import { accentClasses } from "@/lib/accent";
import { useLiveRoute } from "@/hooks/useLiveRoute";
import { SeatMap } from "./SeatMap";

export function RouteCard({ route, index }: { route: Route; index: number }) {
  const { countdownLabel, waiting, onboard } = useLiveRoute(route);
  const accent = accentClasses[route.accent];
  const minFare = route.baseFare;
  const maxFare =
    route.baseFare + (route.stops.length - 2) * route.perStopFare;
  const capacityPct = onboard / route.vehicle.capacity;
  const isNearFull = capacityPct >= 0.8;

  return (
    <Link href={`/route/${route.id}`} style={{ "--index": index } as React.CSSProperties} className="reveal group block">
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="glass-panel p-6"
        style={{ borderRadius: 28 }}
      >
        <div className="flex items-start justify-between">
          <div>
            <span
              className={`inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] ${accent.bg} ${accent.text}`}
              style={{ borderRadius: 9999 }}
            >
              {route.code}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{route.name}</h3>
          </div>
          <CaretRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-2xl font-bold" style={{ letterSpacing: "0.02em" }}>
          <ClockCountdown size={20} className="text-primary" weight="bold" />
          {countdownLabel}
          <span className="ml-1 text-xs font-medium text-muted" style={{ letterSpacing: "normal" }}>
            จนกว่ารถจะออก
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Users size={15} weight="bold" />
            รอขึ้นรถ {waiting} คน
          </span>
          <span
            className="px-2 py-0.5 text-xs font-medium"
            style={{
              borderRadius: 9999,
              background: isNearFull ? "var(--tertiary-tint)" : "transparent",
              color: isNearFull ? "var(--warning-text)" : "var(--muted)",
            }}
          >
            {onboard}/{route.vehicle.capacity} ที่นั่ง
          </span>
        </div>

        <div className="mt-3 overflow-x-auto">
          <SeatMap
            capacity={route.vehicle.capacity}
            onboard={onboard}
            size="sm"
            showDriver={false}
            showLegend={false}
          />
        </div>

        <div className="mt-4 border-t border-border pt-3 text-sm text-muted">
          ค่าโดยสารโดยประมาณ{" "}
          <span className="font-semibold text-foreground">
            {minFare}–{maxFare} บาท
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
