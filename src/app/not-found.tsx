import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { TopBar } from "@/components/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-6 py-24">
        <span className="text-xs text-muted">404</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          ไม่พบสายรถนี้
        </h1>
        <p className="mt-2 text-sm text-muted">
          สายรถที่คุณค้นหาอาจถูกยกเลิกหรือไม่มีอยู่ในระบบ
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-semibold text-white active:scale-[0.98]"
          style={{ borderRadius: 9999 }}
        >
          <ArrowLeft size={16} /> กลับไปหน้าสายรถทั้งหมด
        </Link>
      </main>
    </>
  );
}
