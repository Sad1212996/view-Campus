import Link from "next/link";
import { ArrowLeft, Warning } from "@phosphor-icons/react/dist/ssr";
import type { Route } from "@/lib/types";
import { accentClasses } from "@/lib/accent";
import { TopBar } from "@/components/TopBar";
import { DriverVerifyCard } from "@/components/DriverVerifyCard";
import { VehicleVerifyCard } from "@/components/VehicleVerifyCard";

export function VerifyView({ route }: { route: Route }) {
  const accent = accentClasses[route.accent];

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Link
          href={`/route/${route.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} /> กลับไปหน้า{route.code}
        </Link>

        <div className="reveal mt-4">
          <span
            className={`inline-block px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] ${accent.bg} ${accent.text}`}
            style={{ borderRadius: 2 }}
          >
            {route.code}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight">
            ยืนยันตัวตนคนขับและรถก่อนขึ้น
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            เปรียบเทียบชื่อคนขับและทะเบียนรถด้านล่างกับที่ปรากฏจริงหน้ารถ
            ก่อนขึ้นทุกครั้งเพื่อความปลอดภัย
          </p>
        </div>

        <div className="reveal mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <DriverVerifyCard driver={route.driver} accentHex={accent.hex} />
          <VehicleVerifyCard vehicle={route.vehicle} accentHex={accent.hex} />
        </div>

        <div
          className="reveal mt-6 flex items-start gap-3 border p-5 text-sm"
          style={{
            backgroundColor: "var(--warning-bg)",
            color: "var(--warning-text)",
            borderColor: "var(--warning-text)",
          }}
        >
          <Warning size={18} weight="bold" className="mt-0.5 shrink-0" />
          <p>
            หากทะเบียนรถ ชื่อคนขับ หรือหน้าตาไม่ตรงกับที่แสดงในแอป
            โปรดหลีกเลี่ยงการขึ้นรถและแจ้งเจ้าหน้าที่ทันที
          </p>
        </div>
      </main>
    </>
  );
}
