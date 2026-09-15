import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { TopBar } from "@/components/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-6 py-24">
        <span className="font-mono text-xs text-muted">404</span>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight">
          ไม่พบสายรถนี้
        </h1>
        <p className="mt-2 text-sm text-muted">
          สายรถที่คุณค้นหาอาจถูกยกเลิกหรือไม่มีอยู่ในระบบ
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 bg-primary px-4 py-2.5 text-sm font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-primary-strong active:scale-[0.98]"
          style={{ borderRadius: 3 }}
        >
          <ArrowLeft size={16} /> กลับไปหน้าสายรถทั้งหมด
        </Link>
      </main>
    </>
  );
}
