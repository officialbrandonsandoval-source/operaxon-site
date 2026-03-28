"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePulse } from "./PulseEngine";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** If true, card glows in response to pulse engine */
  pulseSensitive?: boolean;
  /** Delay for stagger animations */
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  pulseSensitive = false,
  delay = 0,
  hover = true,
}: GlassCardProps) {
  const { pulse } = usePulse();

  const dynamicGlow = pulseSensitive
    ? `0 0 ${20 + pulse.glow * 40}px rgba(99, 102, 241, ${0.05 + pulse.glow * 0.15})`
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={hover ? { y: -3, transition: { duration: 0.3 } } : undefined}
      className={`control-panel rounded-2xl ${className}`}
      style={dynamicGlow ? { boxShadow: dynamicGlow } : undefined}
    >
      {children}
    </motion.div>
  );
}
