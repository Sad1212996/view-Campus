"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CaretRight,
  ClockCountdown,
  MapPin,
  Users,
} from "@phosphor-icons/react";
import type { Route } from "@/lib/types";
import { accentClasses } from "@/lib/accent";
import { useLiveRoute } from "@/hooks/useLiveRoute";
import { TopBar } from "@/components/TopBar";
import { SeatMap } from "@/components/SeatMap";
import { FareCalculator } from "@/components/FareCalculator";
import { SafetyEscortToggle } from "@/components/SafetyEscortToggle";

const MapView = dynamic(
  () => import("@/components/MapView").then((m) => m.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-muted">
        กำลังโหลดแผนที่…
      </div>
    ),
  }
);

export function RouteDetailView({ route }: { route: Route }) {
  const { countdownLabel, waiting, onboard } = useLiveRoute(route);
  const accent = accentClasses[route.accent];
  const available = route.vehicle.capacity - onboard;

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> สายรถทั้งหมด
        </Link>

        <div className="reveal mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <span
              className={`inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] ${accent.bg} ${accent.text}`}
              style={{ borderRadius: 9999 }}
            >
              {route.code}
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {route.name}
            </h1>
            <p className="mt-1 text-sm text-muted">
              คนขับ {route.driver.name} · รถ {route.vehicle.plate}
            </p>
          </div>
          <motion.div whileTap={{ scale: 0.96 }} transition={{ type: "spring", bounce: 0, duration: 0.3 }}>
            <Link
              href={`/route/${route.id}/verify`}
              className="inline-flex shrink-0 items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              style={{ borderRadius: 9999 }}
            >
              ยืนยันตัวตนคนขับ/รถ
              <CaretRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="reveal mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="glass-panel p-6" style={{ borderRadius: 24 }}>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <ClockCountdown size={16} />
              ออกรถในอีก
            </span>
            <div className="mt-2 text-4xl font-bold text-primary" style={{ letterSpacing: "0.02em" }}>
              {countdownLabel}
            </div>
            <p className="mt-1 text-xs text-muted">
              ทุก {route.departureIntervalMin} นาที
            </p>
          </div>
          <div className="glass-panel p-6" style={{ borderRadius: 24 }}>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <Users size={16} weight="bold" />
              รอขึ้นรถ
            </span>
            <div className="mt-2 text-4xl font-bold">{waiting}</div>
            <p className="mt-1 text-xs text-muted">คนที่ป้ายรอปัจจุบัน</p>
          </div>
        </div>

        <div className="reveal mt-4">
          <SafetyEscortToggle />
        </div>

        <div className="reveal mt-4 glass-panel p-6" style={{ borderRadius: 28 }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold">ผังที่นั่งภายในรถ</h2>
            <span className="text-sm text-muted">
              ว่าง <span className="text-foreground">{available}</span> ·
              {" "}เต็ม <span className="text-foreground">{onboard}</span> /
              {" "}{route.vehicle.capacity}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">แตะเพื่อเลือกและจองที่นั่งของคุณ</p>
          <div className="mt-5 overflow-x-auto">
            <SeatMap
              capacity={route.vehicle.capacity}
              onboard={onboard}
              size="lg"
              interactive
            />
          </div>
        </div>

        <div className="reveal mt-4 h-72 overflow-hidden sm:h-96" style={{ borderRadius: 28 }}>
          <MapView stops={route.stops} accentHex={accent.hex} />
        </div>

        <div className="reveal mt-4">
          <FareCalculator route={route} />
        </div>

        <div className="reveal mt-8">
          <h2 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-muted">
            <MapPin size={15} /> จุดจอดตามเส้นทาง
          </h2>
          <ol className="mt-3">
            {route.stops.map((stop, i) => (
              <li
                key={stop.id}
                className="flex items-center gap-3 border-b border-border py-3 last:border-none"
              >
                <span className="text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    backgroundColor: accent.hex,
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                  }}
                />
                <span className="text-sm">{stop.name}</span>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
