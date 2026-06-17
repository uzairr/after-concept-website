"use client";

import { useEffect, useRef } from "react";

/** Neural network / data-stream palette */
const COLORS = {
  base: "#0d0f1a",
  edge: "#1e3a5f",
  edgeGlow: "rgba(30, 58, 95, 0.5)",
  node: "rgba(200, 184, 154, 0.35)",
  nodeCore: "#c8b89a",
  stream: "rgba(200, 184, 154, 0.25)",
};

function seededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

type Node = { x: number; y: number; r: number };

export default function ServicesHeroArt() {
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

      const rand = seededRandom(54321);

      ctx.fillStyle = COLORS.base;
      ctx.fillRect(0, 0, w, h);

      /* Flow field — curved “data streams” */
      ctx.strokeStyle = COLORS.edge;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 0.6;
      for (let f = 0; f < 18; f++) {
        let x = rand() * w;
        let y = rand() * h;
        ctx.beginPath();
        ctx.moveTo(x, y);
        for (let s = 0; s < 12; s++) {
          const nx = x + (rand() - 0.3) * 90;
          const ny = y + Math.sin(s * 0.7 + f) * 45 + (rand() - 0.5) * 30;
          ctx.quadraticCurveTo(x + (nx - x) * 0.5, y, nx, ny);
          x = Math.max(0, Math.min(w, nx));
          y = Math.max(0, Math.min(h, ny));
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Neural nodes */
      const nodes: Node[] = [];
      for (let i = 0; i < 55; i++) {
        nodes.push({
          x: rand() * w,
          y: rand() * h,
          r: 1.2 + rand() * 2.2,
        });
      }

      /* Synaptic edges + curved bundles */
      ctx.strokeStyle = COLORS.edge;
      ctx.lineWidth = 0.45;
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 95 && rand() > 0.82) {
            const mx = (nodes[i].x + nodes[j].x) / 2 + (rand() - 0.5) * 40;
            const my = (nodes[i].y + nodes[j].y) / 2 + (rand() - 0.5) * 40;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.quadraticCurveTo(mx, my, nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      /* Accent “pulse” strokes along a few paths */
      ctx.strokeStyle = COLORS.nodeCore;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 0.8;
      for (let p = 0; p < 14; p++) {
        const a = nodes[Math.floor(rand() * nodes.length)];
        const b = nodes[Math.floor(rand() * nodes.length)];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(
          (a.x + b.x) / 2 + (rand() - 0.5) * 60,
          (a.y + b.y) / 2 + (rand() - 0.5) * 60,
          b.x,
          b.y,
        );
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* Dashed “packet” flow on random segments */
      ctx.setLineDash([3, 6]);
      ctx.strokeStyle = COLORS.stream;
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 0.5;
      for (let d = 0; d < 25; d++) {
        const n1 = nodes[Math.floor(rand() * nodes.length)];
        const n2 = nodes[Math.floor(rand() * nodes.length)];
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      /* Node rings */
      for (const n of nodes) {
        ctx.fillStyle = COLORS.node;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = COLORS.nodeCore;
        ctx.globalAlpha = 0.5 + rand() * 0.35;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      /* Sparse grid hint (very faint) */
      ctx.strokeStyle = COLORS.edgeGlow;
      ctx.globalAlpha = 0.08;
      ctx.lineWidth = 0.5;
      const g = 48;
      for (let x = 0; x < w; x += g) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += g) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
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
