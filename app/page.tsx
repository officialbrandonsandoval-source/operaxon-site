/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Operaxon — Your Business, Run by an Intelligence That Never Sleeps",
  description:
    "Operaxon deploys Autonomous Operating Intelligence — an agent with identity, memory, and mission built into your business. Not a tool. Not a chatbot. A living operator.",
  openGraph: {
    title: "Operaxon — Your Business, Run by an Intelligence That Never Sleeps",
    description:
      "Operaxon deploys Autonomous Operating Intelligence — an agent with identity, memory, and mission built into your business. Not a tool. Not a chatbot. A living operator.",
    url: "https://operaxon.com",
    siteName: "Operaxon",
  },
};

export default function Home() {
  return <HomeClient />;
}
