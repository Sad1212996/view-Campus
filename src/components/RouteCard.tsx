"use client";

import Link from "next/link";
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

  return (
    <Link
      href={`/route/${route.id}`}
      style={{ "--index": index, borderTopColor: accent.hex } as React.CSSProperties}
      className="reveal group block border border-border border-t-4 bg-surface p-6 transition-colors duration-200 hover:border-primary"
    >
      <div className="flex items-start justify-between">
        <div>
          <span
            className={`inline-block px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] ${accent.bg} ${accent.text}`}
            style={{ borderRadius: 2 }}
          >
            {route.code}
          </span>
          <h3 className="mt-2 font-serif text-lg font-semibold">
            {route.name}
          </h3>
        </div>
        <CaretRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </div>

      <div className="mt-4 flex items-center gap-1.5 font-mono text-2xl">
        <ClockCountdown size={20} className="text-muted" weight="bold" />
        {countdownLabel}
        <span className="ml-1 text-xs font-sans font-normal text-muted">
          จนกว่ารถจะออก
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <Users size={15} weight="bold" />
          รอขึ้นรถ {waiting} คน
        </span>
        <span className="font-mono text-xs">
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
        <span className="font-mono text-foreground">
          {minFare}–{maxFare} บาท
        </span>
      </div>
    </Link>
  );
}
