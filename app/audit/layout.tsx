import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Readiness Audit — Operaxon",
  description:
    "Find out where your business stands in 3 minutes. Score your AI readiness 0-100. Get personalized recommendations from AI operations experts.",
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
