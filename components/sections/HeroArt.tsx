"use client";

import { useEffect, useRef } from "react";

const COLORS = {
  base: "#0d0f1a",
  line: "#1e3a5f",
  accent: "#c8b89a",
  dot: "rgba(200,184,154,0.4)",
  code: "rgba(30, 58, 95, 0.45)",
};

function seededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export default function HeroArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w < 1 || h < 1) return;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const rand = seededRandom(42);

      ctx.fillStyle = COLORS.base;
      ctx.fillRect(0, 0, w, h);

      /* Distorted vertical grid */
      ctx.strokeStyle = COLORS.line;
      ctx.globalAlpha = 0.22;
      ctx.lineWidth = 0.5;
      const gxStep = 56;
      for (let gx = 0; gx < w + gxStep; gx += gxStep) {
        ctx.beginPath();
        for (let py = 0; py <= h; py += 3) {
          const wave = Math.sin(py * 0.018 + gx * 0.008) * 4;
          const jitter = Math.sin(py * 0.11 + gx * 0.02) * 1.2;
          const x = gx + wave + jitter;
          if (py === 0) ctx.moveTo(x, py);
          else ctx.lineTo(x, py);
        }
        ctx.stroke();
      }

      /* Horizontal scan lines (subtle) */
      ctx.globalAlpha = 0.08;
      for (let gy = 0; gy < h; gy += 64) {
        const shift = Math.sin(gy * 0.04) * 12;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy + shift);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Constellation */
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i < 90; i++) {
        points.push({ x: rand() * w, y: rand() * h });
      }

      ctx.strokeStyle = COLORS.line;
      ctx.lineWidth = 0.45;
      ctx.globalAlpha = 0.55;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 110 && rand() > 0.72) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = COLORS.dot;
      ctx.globalAlpha = 1;
      for (const p of points) {
        if (rand() > 0.45) {
          const r = rand() * 1.4 + 0.4;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* Orbital arcs */
      ctx.strokeStyle = COLORS.line;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 0.6;
      for (let a = 0; a < 12; a++) {
        const cx = rand() * w;
        const cy = rand() * h;
        const r = 60 + rand() * 180;
        const start = rand() * Math.PI * 2;
        const end = start + (0.4 + rand() * 1.2) * Math.PI;
        ctx.beginPath();
        ctx.arc(cx, cy, r, start, end);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Circuit traces (orthogonal) */
      ctx.strokeStyle = COLORS.line;
      ctx.lineWidth = 0.55;
      ctx.globalAlpha = 0.5;
      for (let c = 0; c < 32; c++) {
        let x = rand() * w;
        let y = rand() * h;
        ctx.beginPath();
        ctx.moveTo(x, y);
        const segs = 4 + Math.floor(rand() * 5);
        for (let s = 0; s < segs; s++) {
          if (rand() > 0.5) {
            x += (rand() - 0.3) * 220;
          } else {
            y += (rand() - 0.3) * 220;
          }
          x = Math.max(0, Math.min(w, x));
          y = Math.max(0, Math.min(h, y));
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Accent sparks */
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 0.9;
      ctx.globalAlpha = 0.75;
      for (let s = 0; s < 48; s++) {
        const x = rand() * w;
        const y = rand() * h;
        const len = 12 + rand() * 48;
        const ang = rand() * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Floating code fragments */
      ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = COLORS.code;
      const snippets = [
        "const",
        "async",
        "return",
        "{ }",
        "0x",
        "fn",
        "map",
        "await",
        "::",
        "≈",
      ];
      for (let t = 0; t < 22; t++) {
        ctx.save();
        ctx.translate(rand() * w, rand() * h);
        ctx.rotate((rand() - 0.5) * 0.5);
        ctx.fillText(snippets[t % snippets.length], 0, 0);
        ctx.restore();
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
