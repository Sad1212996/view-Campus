import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRoute, routes } from "@/lib/mock-data";
import { RouteDetailView } from "@/components/RouteDetailView";

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
  return { title: route ? `${route.code} · ${route.name}` : "ไม่พบสายรถ" };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = getRoute(id);
  if (!route) notFound();

  return <RouteDetailView route={route} />;
}
