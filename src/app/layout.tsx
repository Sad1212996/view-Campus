import type { Metadata } from "next";
import { Geist_Mono, Sarabun, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const body = Sarabun({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heading = Noto_Serif_Thai({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CampusVan Live — Prototype",
  description: "ม็อกอัประบบติดตามรถตู้ภายในมหาวิทยาลัยแบบเรียลไทม์",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${body.variable} ${geistMono.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
