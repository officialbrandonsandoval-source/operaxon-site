"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-10 py-4 text-lg font-semibold",
  };

  const baseClasses =
    "relative inline-flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden";

  const variantClasses = {
    primary: `bg-gradient-to-r from-neon-indigo to-neon-violet text-white shadow-neon
      hover:shadow-neon-lg hover:scale-[1.02] active:scale-[0.98]`,
    secondary: `glass border border-white/10 text-white/90
      hover:border-neon-indigo/30 hover:shadow-neon hover:scale-[1.02] active:scale-[0.98]`,
    ghost: `text-white/50 hover:text-white hover:bg-white/5 active:scale-[0.98]`,
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      {...linkProps}
    >
      {variant === "primary" && (
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            animation: "shimmer 2s infinite",
            backgroundSize: "200% 100%",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
