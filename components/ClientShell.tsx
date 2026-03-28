"use client";

import React from "react";
import { PulseProvider } from "./PulseEngine";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return <PulseProvider>{children}</PulseProvider>;
}
