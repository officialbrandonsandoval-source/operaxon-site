"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { usePulse } from "./PulseEngine";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  hue: number;
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  /** "hero" = dense center glow, "ambient" = sparse drift, "circuit" = grid-aligned flow */
  variant?: "hero" | "ambient" | "circuit";
}

export default function ParticleField({
  className = "",
  particleCount = 80,
  variant = "ambient",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { pulse } = usePulse();
  const pulseRef = useRef(pulse);
  pulseRef.current = pulse;

  const createParticle = useCallback(
    (width: number, height: number, burst = false): Particle => {
      const hueBase = variant === "hero" ? 240 : variant === "circuit" ? 250 : 230;
      const hue = hueBase + Math.random() * 40;

      if (variant === "circuit") {
        // Grid-aligned particles that flow along invisible circuit paths
        const gridSize = 60;
        const col = Math.floor(Math.random() * (width / gridSize));
        const row = Math.floor(Math.random() * (height / gridSize));
        const horizontal = Math.random() > 0.5;
        return {
          x: col * gridSize,
          y: row * gridSize,
          vx: horizontal ? (Math.random() > 0.5 ? 0.5 : -0.5) : 0,
          vy: horizontal ? 0 : (Math.random() > 0.5 ? 0.5 : -0.5),
          size: 1 + Math.random() * 1.5,
          opacity: 0.15 + Math.random() * 0.3,
          life: 0,
          maxLife: 200 + Math.random() * 400,
          hue,
        };
      }

      if (variant === "hero") {
        // Dense cluster toward center with outward drift
        const cx = width / 2;
        const cy = height / 2;
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.min(width, height) * 0.4;
        return {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * (burst ? 2 : 0.3),
          vy: (Math.random() - 0.5) * (burst ? 2 : 0.3),
          size: 1 + Math.random() * 2.5,
          opacity: 0.2 + Math.random() * 0.5,
          life: 0,
          maxLife: 150 + Math.random() * 350,
          hue,
        };
      }

      // Ambient: scattered, slow drift
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.1, // slight upward drift
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.08 + Math.random() * 0.2,
        life: 0,
        maxLife: 300 + Math.random() * 600,
        hue,
      };
    },
    [variant]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      particlesRef.current = Array.from({ length: particleCount }, () =>
        createParticle(width, height)
      );
      // Stagger life so they don't all die at once
      particlesRef.current.forEach((p) => {
        p.life = Math.random() * p.maxLife;
      });
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const p = pulseRef.current;
      const velocityMult = 0.5 + p.velocity * 1.5;
      const glowMult = 0.5 + p.glow;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const pt = particlesRef.current[i];
        pt.life++;

        // Respawn dead particles
        if (pt.life >= pt.maxLife) {
          particlesRef.current[i] = createParticle(width, height);
          continue;
        }

        // Lifecycle fade: ease in, hold, ease out
        const lifeRatio = pt.life / pt.maxLife;
        const fadeIn = Math.min(lifeRatio * 5, 1);
        const fadeOut = Math.min((1 - lifeRatio) * 5, 1);
        const lifeFade = fadeIn * fadeOut;

        // Mouse repulsion (subtle)
        const dx = pt.x - mx;
        const dy = pt.y - my;
        const distSq = dx * dx + dy * dy;
        if (distSq < 10000 && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (100 - dist) * 0.002;
          pt.vx += (dx / dist) * force;
          pt.vy += (dy / dist) * force;
        }

        // Apply velocity with pulse multiplier
        pt.x += pt.vx * velocityMult;
        pt.y += pt.vy * velocityMult;

        // Damping
        pt.vx *= 0.998;
        pt.vy *= 0.998;

        // Wrap around edges
        if (pt.x < -10) pt.x = width + 10;
        if (pt.x > width + 10) pt.x = -10;
        if (pt.y < -10) pt.y = height + 10;
        if (pt.y > height + 10) pt.y = -10;

        // Draw particle
        const alpha = pt.opacity * lifeFade * glowMult;
        if (alpha < 0.01) continue;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${pt.hue}, 80%, 70%, ${alpha})`;
        ctx.fill();

        // Glow halo
        if (pt.size > 1 && alpha > 0.1) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${pt.hue}, 80%, 60%, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      // Draw connection lines between close particles (circuit variant)
      if (variant === "circuit") {
        ctx.strokeStyle = `hsla(250, 70%, 60%, ${0.06 * glowMult})`;
        ctx.lineWidth = 0.5;
        const pts = particlesRef.current;
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const ddx = pts[i].x - pts[j].x;
            const ddy = pts[i].y - pts[j].y;
            const d = ddx * ddx + ddy * ddy;
            if (d < 8000) {
              const alpha = (1 - d / 8000) * 0.15 * glowMult;
              ctx.strokeStyle = `hsla(250, 70%, 60%, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    init();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouse);
    animFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [particleCount, variant, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
