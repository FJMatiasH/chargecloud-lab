import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import "../globals.css";

export const metadata: Metadata = {
  title: "chargecloud",
  description: "Discover simple, reliable EV charging with chargecloud.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteFrame lang="en">{children}</SiteFrame>;
}
