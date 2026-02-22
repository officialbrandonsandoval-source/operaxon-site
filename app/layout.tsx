import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
