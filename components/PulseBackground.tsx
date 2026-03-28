"use client";

import React from "react";
import { usePulse } from "./PulseEngine";

/** A subtle pulsing radial glow background driven by the Pulse Engine */
export default function PulseBackground({
  className = "",
  color = "indigo",
}: {
  className?: string;
  color?: "indigo" | "violet" | "cyan";
}) {
  const { pulse } = usePulse();

  const colors = {
    indigo: "99, 102, 241",
    violet: "139, 92, 246",
    cyan: "6, 182, 212",
  };

  const rgb = colors[color];
  const baseOpacity = 0.06 + pulse.intensity * 0.12;
  const size = 600 + pulse.intensity * 400;

  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      aria-hidden="true"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: `${size}px`,
        height: `${size * 0.7}px`,
        background: `radial-gradient(ellipse at center, rgba(${rgb}, ${baseOpacity}) 0%, transparent 70%)`,
        filter: "blur(60px)",
        transition: "all 2s ease-out",
      }}
    />
  );
}
