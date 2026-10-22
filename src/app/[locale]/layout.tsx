import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFrame from "@/components/layout/SiteFrame";
import "../globals.css";

export const metadata: Metadata = {
  title: "chargecloud",
  description: "Discover simple, reliable EV charging with chargecloud.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "es") notFound();

  return <SiteFrame lang={locale}>{children}</SiteFrame>;
}
