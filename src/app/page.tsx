import { TopBar } from "@/components/TopBar";
import { RouteCard } from "@/components/RouteCard";
import { routes } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
            ตารางเดินรถ
          </span>
          <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
            รถตู้สายไหน มาถึงตอนไหน รู้ก่อนเดิน
          </h1>
          <p className="mt-3 text-muted">
            ดูเวลาออกรถแบบเรียลไทม์ จำนวนที่นั่งว่าง เส้นทาง
            และค่าโดยสารของทุกสายก่อนออกจากตึก — พร้อมยืนยันตัวตนคนขับและรถ
            ก่อนขึ้นทุกครั้ง
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} />
          ))}
        </div>
      </main>
      <footer className="border-t border-border-strong px-6 py-8 text-center text-xs text-muted">
        CampusVan Live เป็นเดโมสำหรับนำเสนอแนวคิดฟีเจอร์เท่านั้น
        ข้อมูลทั้งหมดเป็นข้อมูลจำลอง
      </footer>
    </>
  );
}
