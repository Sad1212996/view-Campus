import { Van, SealCheck, Users } from "@phosphor-icons/react/dist/ssr";
import type { Vehicle } from "@/lib/types";

export function VehicleVerifyCard({
  vehicle,
  accentHex,
}: {
  vehicle: Vehicle;
  accentHex: string;
}) {
  return (
    <div className="glass-panel p-6" style={{ borderRadius: 28 }}>
      <div className="flex items-center gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center border-2"
          style={{
            backgroundColor: `${accentHex}14`,
            color: accentHex,
            borderColor: `${accentHex}55`,
            borderRadius: 18,
          }}
        >
          <Van size={28} weight="bold" />
        </div>
        <div>
          <h3 className="text-2xl tracking-wide">{vehicle.plate}</h3>
          <p className="mt-1 text-sm text-muted">
            {vehicle.model} · สี{vehicle.color}
          </p>
        </div>
      </div>

      {vehicle.verified && (
        <span
          className="mt-4 inline-flex items-center gap-1 bg-secondary-tint px-3 py-1 text-xs font-medium"
          style={{ color: "var(--success-text)", borderRadius: 9999 }}
        >
          <SealCheck size={14} weight="fill" />
          ผ่านการตรวจสภาพรถแล้ว
        </span>
      )}

      <dl className="mt-5 space-y-2.5 border-t border-border pt-4 text-sm">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-1.5 text-muted">
            <Users size={15} />
            ความจุผู้โดยสาร
          </dt>
          <dd>{vehicle.capacity} ที่นั่ง</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted">ตรวจสภาพล่าสุด</dt>
          <dd>{vehicle.lastInspection}</dd>
        </div>
      </dl>
    </div>
  );
}
