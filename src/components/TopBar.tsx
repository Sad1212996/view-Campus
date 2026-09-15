import Link from "next/link";
import Image from "next/image";
import { SosButton } from "./SosButton";

export function TopBar() {
  return (
    <header className="glass-panel sticky top-0 z-20 border-x-0 border-t-0" style={{ borderRadius: 0 }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/campusvan-logo.png"
            alt="CampusVan"
            width={512}
            height={144}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2">
          <SosButton />
          <span className="hidden items-center gap-1.5 bg-primary-tint px-3 py-1.5 text-xs font-medium text-primary sm:flex" style={{ borderRadius: 9999 }}>
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            ทุกสายวิ่งตามตาราง
          </span>
        </div>
      </div>
    </header>
  );
}
