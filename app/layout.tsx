import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import ClientShell from "../components/ClientShell";
import "./globals.css";

const geist = localFont({
  src: [{ path: "./fonts/GeistVF.woff", style: "normal" }],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Operaxon — Your business, operated by AI.",
  description:
    "A dedicated AI operator — running 24/7 on hardware you own — that delivers daily intelligence, competitive monitoring, and content directly to your phone.",
  openGraph: {
    title: "Operaxon — Your business, operated by AI.",
    description:
      "A dedicated AI operator — running 24/7 on hardware you own — that delivers daily intelligence, competitive monitoring, and content directly to your phone.",
    url: "https://operaxon.com",
    siteName: "Operaxon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ClientShell>{children}</ClientShell>
        <Analytics />
      </body>
    </html>
  );
}
