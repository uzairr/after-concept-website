"use client";

import React from "react";
import { motion } from "framer-motion";

// ── BULTRA BANK DASHBOARD VISUAL ──
export function BultraVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />

      {/* Main dashboard frame */}
      <div className="relative w-full max-w-[280px] rounded-xl border border-blue-500/15 bg-[#0B1220]/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-blue-500/10 pb-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-blue-500/60" />
            <div className="h-1.5 w-12 rounded bg-blue-500/20" />
          </div>
          <div className="h-3 w-8 rounded bg-blue-500/10" />
        </div>

        {/* Dashboard Content */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {/* Sidebar */}
          <div className="col-span-1 flex flex-col gap-2 border-r border-blue-500/10 pr-2">
            <div className="h-2 w-full rounded bg-blue-500/35" />
            <div className="h-2 w-3/4 rounded bg-blue-500/15" />
            <div className="h-2 w-5/6 rounded bg-blue-500/15" />
            <div className="h-2 w-1/2 rounded bg-blue-500/15" />
          </div>

          {/* Main Area */}
          <div className="col-span-2 flex flex-col gap-3 pl-1">
            {/* Stat Box */}
            <div className="rounded border border-blue-500/10 bg-[#111827]/40 p-2">
              <div className="h-1.5 w-8 rounded bg-blue-500/30" />
              <div className="mt-1.5 h-3.5 w-14 rounded bg-blue-500/60" />
            </div>

            {/* Line Chart */}
            <div className="relative h-14 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                {/* Grid lines */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5" />

                {/* Gradient area */}
                <defs>
                  <linearGradient id="bultraChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 35 Q 25 15, 50 25 T 100 5 L 100 40 L 0 40 Z"
                  fill="url(#bultraChartGrad)"
                />

                {/* Line */}
                <motion.path
                  d="M0 35 Q 25 15, 50 25 T 100 5"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />

                {/* End point dot */}
                <circle cx="100" cy="5" r="2.5" fill="#60A5FA" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── EVT SAAS ORBIT / AI VISUAL ──
export function EvtVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.06)_0%,transparent_60%)]" />

      {/* SVG Orbit */}
      <div className="relative h-44 w-44">
        <svg viewBox="0 0 160 160" className="h-full w-full overflow-visible">
          {/* Outer Ring */}
          <circle
            cx="80"
            cy="80"
            r="60"
            fill="none"
            stroke="rgba(96, 165, 250, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {/* Middle Ring */}
          <circle
            cx="80"
            cy="80"
            r="42"
            fill="none"
            stroke="rgba(96, 165, 250, 0.15)"
            strokeWidth="1"
          />
          {/* Inner Ring */}
          <circle
            cx="80"
            cy="80"
            r="24"
            fill="none"
            stroke="rgba(96, 165, 250, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 3"
          />

          {/* Central Glow Node */}
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="16" fill="url(#centerGlow)" />
          <circle cx="80" cy="80" r="4" fill="#FFFFFF" />

          {/* Orbiting particles */}
          {/* Particle 1 on Outer Ring */}
          <motion.circle
            cx="80"
            cy="80"
            r="3"
            fill="#60A5FA"
            animate={{
              cx: [80 + 60 * Math.cos(0), 80 + 60 * Math.cos(2 * Math.PI)],
              cy: [80 + 60 * Math.sin(0), 80 + 60 * Math.sin(2 * Math.PI)]
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity
            }}
          />
          
          {/* Particle 2 on Middle Ring */}
          <motion.circle
            cx="80"
            cy="80"
            r="2"
            fill="#FFFFFF"
            animate={{
              cx: [80 + 42 * Math.cos(Math.PI), 80 + 42 * Math.cos(Math.PI + 2 * Math.PI)],
              cy: [80 + 42 * Math.sin(Math.PI), 80 + 42 * Math.sin(Math.PI + 2 * Math.PI)]
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity
            }}
          />

          {/* Connective lines */}
          <line x1="80" y1="20" x2="80" y2="140" stroke="rgba(96, 165, 250, 0.04)" strokeWidth="1" />
          <line x1="20" y1="80" x2="140" y2="80" stroke="rgba(96, 165, 250, 0.04)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

// ── MERCATO PLATFORM BAR CHART VISUAL ──
export function MercatoVisual() {
  const barHeights = [24, 38, 52, 45, 68, 80];

  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.07)_0%,transparent_60%)]" />

      {/* Chart wrapper */}
      <div className="relative flex h-32 w-full max-w-[200px] items-end justify-between gap-2.5 px-2">
        {/* Grid lines */}
        <div className="absolute inset-x-0 bottom-0 top-2 flex flex-col justify-between pointer-events-none">
          <div className="w-full border-t border-blue-500/5" />
          <div className="w-full border-t border-blue-500/5" />
          <div className="w-full border-t border-blue-500/5" />
          <div className="w-full border-t border-blue-500/5" />
        </div>

        {/* Bars */}
        {barHeights.map((height, i) => (
          <div
            key={i}
            className="relative w-full rounded-t-sm bg-gradient-to-t from-blue-600/30 to-blue-500/80 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
            style={{ height: `${height}%` }}
          >
            {/* Animated top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#60A5FA]" />
          </div>
        ))}

        {/* Overlay trend line */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <svg className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 12 100 L 45 84 L 78 70 L 112 77 L 145 54 L 188 40"
              fill="none"
              stroke="url(#trendGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
