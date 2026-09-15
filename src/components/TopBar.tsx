import Link from "next/link";

export function TopBar() {
  return (
    <header className="bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center border-2 border-primary font-serif text-base font-semibold text-primary"
            style={{ borderRadius: 4 }}
          >
            CV
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight">
              CampusVan
            </span>
            <span className="block text-[11px] uppercase tracking-[0.12em] text-muted">
              ระบบขนส่งภายในสถาบัน
            </span>
          </span>
        </Link>
        <span
          className="border border-border-strong px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
          style={{ borderRadius: 2 }}
        >
          ต้นแบบสาธิต
        </span>
      </div>
      <div className="letterhead-rule" />
    </header>
  );
}
