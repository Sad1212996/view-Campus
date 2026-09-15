import { Star, Phone, IdentificationCard, SealCheck } from "@phosphor-icons/react/dist/ssr";
import type { Driver } from "@/lib/types";
import { Avatar } from "./Avatar";

export function DriverVerifyCard({
  driver,
  accentHex,
}: {
  driver: Driver;
  accentHex: string;
}) {
  return (
    <div className="glass-panel p-6" style={{ borderRadius: 28 }}>
      <div className="flex items-center gap-4">
        <Avatar
          initials={driver.initials}
          accentHex={accentHex}
          photoSrc={driver.photoSrc}
        />
        <div>
          <h3 className="text-lg font-semibold">{driver.name}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-sm text-muted">
            <Star size={14} weight="fill" className="text-tertiary" />
            {driver.rating.toFixed(1)} · {driver.totalTrips.toLocaleString()}{" "}
            เที่ยว · สมาชิกตั้งแต่ {driver.memberSince}
          </div>
        </div>
      </div>

      {driver.verified && (
        <span
          className="mt-4 inline-flex items-center gap-1 bg-secondary-tint px-3 py-1 text-xs font-medium"
          style={{ color: "var(--success-text)", borderRadius: 9999 }}
        >
          <SealCheck size={14} weight="fill" />
          ยืนยันตัวตนแล้วโดยมหาวิทยาลัย
        </span>
      )}

      <dl className="mt-5 space-y-2.5 border-t border-border pt-4 text-sm">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-1.5 text-muted">
            <Phone size={15} />
            เบอร์ติดต่อ
          </dt>
          <dd>{driver.phoneMasked}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-1.5 text-muted">
            <IdentificationCard size={15} />
            เลขใบอนุญาตขับขี่
          </dt>
          <dd>{driver.licenseIdMasked}</dd>
        </div>
      </dl>
    </div>
  );
}
