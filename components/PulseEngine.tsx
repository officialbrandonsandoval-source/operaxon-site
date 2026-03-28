"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

/* ─── Types ─── */
export interface PulseMetrics {
  revenue: number;       // 0–1 normalized
  leads: number;         // 0–1 normalized
  messages: number;      // 0–1 normalized
  conversions: number;   // 0–1 normalized
}

export interface PulseState {
  intensity: number;     // 0–1 global animation intensity
  velocity: number;      // 0–1 particle speed multiplier
  glow: number;          // 0–1 glow strength
  metrics: PulseMetrics;
  isLive: boolean;       // true if receiving real data
}

interface PulseContextType {
  pulse: PulseState;
  updateMetric: (key: keyof PulseMetrics, value: number) => void;
}

const DEFAULT_PULSE: PulseState = {
  intensity: 0.3,
  velocity: 0.25,
  glow: 0.2,
  metrics: { revenue: 0, leads: 0, messages: 0, conversions: 0 },
  isLive: false,
};

const PulseContext = createContext<PulseContextType>({
  pulse: DEFAULT_PULSE,
  updateMetric: () => {},
});

export const usePulse = () => useContext(PulseContext);

/* ─── Ambient Simulator ─── */
// When no live data is available, simulate a subtle breathing pulse
function useAmbientSimulator(isLive: boolean) {
  const [ambient, setAmbient] = useState(0.3);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (isLive) return;

    const tick = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      // Multi-frequency breathing: slow primary + subtle secondary
      const primary = Math.sin(elapsed * 0.4) * 0.15;
      const secondary = Math.sin(elapsed * 1.1) * 0.05;
      const tertiary = Math.sin(elapsed * 0.17) * 0.08;
      setAmbient(0.3 + primary + secondary + tertiary);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isLive]);

  return ambient;
}

/* ─── Smoothing Utility ─── */
function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

/* ─── Provider ─── */
export function PulseProvider({ children }: { children: React.ReactNode }) {
  const [metrics, setMetrics] = useState<PulseMetrics>(DEFAULT_PULSE.metrics);
  const [isLive, setIsLive] = useState(false);
  const smoothedRef = useRef<PulseState>(DEFAULT_PULSE);
  const [pulse, setPulse] = useState<PulseState>(DEFAULT_PULSE);
  const ambient = useAmbientSimulator(isLive);

  const updateMetric = useCallback((key: keyof PulseMetrics, value: number) => {
    const clamped = Math.max(0, Math.min(1, value));
    setMetrics((prev) => ({ ...prev, [key]: clamped }));
    setIsLive(true);
  }, []);

  // Smooth state updates at 60fps
  useEffect(() => {
    let frame: number;
    const smoothFactor = 0.08; // Lower = smoother

    const tick = () => {
      const target = isLive
        ? {
            intensity:
              metrics.revenue * 0.4 +
              metrics.leads * 0.25 +
              metrics.messages * 0.15 +
              metrics.conversions * 0.2,
            velocity:
              metrics.leads * 0.4 +
              metrics.messages * 0.3 +
              metrics.conversions * 0.3,
            glow: metrics.revenue * 0.5 + metrics.conversions * 0.3 + 0.2,
          }
        : { intensity: ambient, velocity: ambient * 0.6, glow: ambient * 0.7 };

      const prev = smoothedRef.current;
      const next: PulseState = {
        intensity: lerp(prev.intensity, target.intensity, smoothFactor),
        velocity: lerp(prev.velocity, target.velocity, smoothFactor),
        glow: lerp(prev.glow, target.glow, smoothFactor),
        metrics,
        isLive,
      };

      smoothedRef.current = next;
      setPulse({ ...next });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [metrics, isLive, ambient]);

  // Try to connect to WebSocket for real data (graceful fallback)
  useEffect(() => {
    // Attempt WebSocket connection — falls back to ambient if unavailable
    const wsUrl =
      typeof window !== "undefined" &&
      (window as unknown as Record<string, unknown>).__PULSE_WS_URL
        ? String((window as unknown as Record<string, unknown>).__PULSE_WS_URL)
        : null;

    if (!wsUrl) return;

    let ws: WebSocket;
    try {
      ws = new WebSocket(wsUrl);
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.revenue !== undefined) updateMetric("revenue", data.revenue);
          if (data.leads !== undefined) updateMetric("leads", data.leads);
          if (data.messages !== undefined) updateMetric("messages", data.messages);
          if (data.conversions !== undefined) updateMetric("conversions", data.conversions);
        } catch {
          // Invalid data — ignore
        }
      };
      ws.onerror = () => ws.close();
    } catch {
      // WebSocket not available — ambient mode
    }

    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, [updateMetric]);

  return (
    <PulseContext.Provider value={{ pulse, updateMetric }}>
      {children}
    </PulseContext.Provider>
  );
}
