"use client";

import { useEffect, useRef } from "react";

/** Blueprint / technical drawing palette */
const COLORS = {
  base: "#0d0f1a",
  line: "#1e3a5f",
  accent: "#c8b89a",
  dim: "rgba(30, 58, 95, 0.35)",
};

function seededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function drawDashedLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  dash = 6,
  gap = 4,
) {
  ctx.setLineDash([dash, gap]);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.setLineDash([]);
}

export default function AboutHeroArt() {
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

      const rand = seededRandom(12345);

      ctx.fillStyle = COLORS.base;
      ctx.fillRect(0, 0, w, h);

      /* Orthogonal blueprint grid */
      ctx.strokeStyle = COLORS.line;
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 0.5;
      const major = 64;
      const minor = 16;
      for (let x = 0; x <= w; x += minor) {
        ctx.globalAlpha = x % major === 0 ? 0.35 : 0.12;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += minor) {
        ctx.globalAlpha = y % major === 0 ? 0.35 : 0.12;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Isometric-style diagonal hatch (subtle) */
      ctx.strokeStyle = COLORS.dim;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 0.5;
      for (let d = -h; d < w + h; d += 48) {
        ctx.beginPath();
        ctx.moveTo(d, 0);
        ctx.lineTo(d + h, h);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Construction rectangles (floor-plan feel) */
      ctx.strokeStyle = COLORS.line;
      ctx.lineWidth = 0.55;
      for (let r = 0; r < 14; r++) {
        const rw = 80 + rand() * 220;
        const rh = 60 + rand() * 180;
        const x = rand() * (w - rw);
        const y = rand() * (h - rh);
        ctx.globalAlpha = 0.35 + rand() * 0.25;
        drawDashedLine(ctx, x, y, x + rw, y);
        drawDashedLine(ctx, x + rw, y, x + rw, y + rh);
        drawDashedLine(ctx, x + rw, y + rh, x, y + rh);
        drawDashedLine(ctx, x, y + rh, x, y);
        /* center cross */
        ctx.globalAlpha = 0.2;
        drawDashedLine(ctx, x + rw / 2, y, x + rw / 2, y + rh);
        drawDashedLine(ctx, x, y + rh / 2, x + rw, y + rh / 2);
      }
      ctx.globalAlpha = 1;

      /* Circles / arcs — compass & bearing */
      ctx.strokeStyle = COLORS.line;
      ctx.lineWidth = 0.5;
      for (let c = 0; c < 10; c++) {
        const cx = rand() * w;
        const cy = rand() * h;
        const rad = 40 + rand() * 100;
        ctx.globalAlpha = 0.25 + rand() * 0.2;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, rad * 0.55, rand() * Math.PI, rand() * Math.PI + Math.PI * 0.8);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Right-angle brackets & ticks (dimension marks) */
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 0.6;
      ctx.globalAlpha = 0.45;
      for (let t = 0; t < 36; t++) {
        const x = rand() * w;
        const y = rand() * h;
        const s = 8 + rand() * 12;
        ctx.beginPath();
        if (rand() > 0.5) {
          ctx.moveTo(x, y);
          ctx.lineTo(x + s, y);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + s);
        } else {
          ctx.moveTo(x, y);
          ctx.lineTo(x - s, y);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y - s);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Horizontal dimension lines with end ticks */
      ctx.strokeStyle = COLORS.line;
      ctx.globalAlpha = 0.4;
      for (let d = 0; d < 18; d++) {
        const y = rand() * h;
        const x1 = rand() * (w * 0.3);
        const x2 = x1 + 120 + rand() * (w * 0.4);
        ctx.lineWidth = 0.45;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
        const tick = 5;
        for (const vx of [x1, x2]) {
          ctx.beginPath();
          ctx.moveTo(vx, y - tick);
          ctx.lineTo(vx, y + tick);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      /* Golden ratio / golden spiral approximation (geometric) */
      ctx.strokeStyle = COLORS.accent;
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 0.7;
      let cx = w * 0.72;
      let cy = h * 0.28;
      let radius = Math.min(w, h) * 0.22;
      for (let s = 0; s < 5; s++) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI / 2);
        ctx.stroke();
        radius *= 0.62;
        cx -= radius * 0.4;
        cy += radius * 0.35;
      }
      ctx.globalAlpha = 1;

      /* Blueprint annotations (tiny monospace) */
      ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = COLORS.dim;
      const labels = ["REF-A", "GRID", "N↑", "SCALE 1:1", "AXIS", "PLAN", "§"];
      for (let i = 0; i < 20; i++) {
        ctx.fillText(labels[i % labels.length], rand() * w, rand() * h);
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
