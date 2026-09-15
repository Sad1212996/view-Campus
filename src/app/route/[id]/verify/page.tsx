import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRoute, routes } from "@/lib/mock-data";
import { VerifyView } from "@/components/VerifyView";

export function generateStaticParams() {
  return routes.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const route = getRoute(id);
  return {
    title: route ? `ยืนยันตัวตน · ${route.code}` : "ไม่พบสายรถ",
  };
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = getRoute(id);
  if (!route) notFound();

  return <VerifyView route={route} />;
}
