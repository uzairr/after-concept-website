"use client";

/**
 * Product Assembly Morph Animation
 * 5 glassmorphic UI widget cards scatter outward → merge together to form
 * a dashboard/PC-screen layout → hold → scatter into a glowing circle → repeat.
 *
 * Widget cards:
 *   1. Header bar  (wide, top — text lines + dot indicator)
 *   2. Content card (left column — blue accent bar + gray line)
 *   3. Chart card   (right column — bar chart)
 *   4. Button card  (bottom center — blue button bar)
 *   5. Dot badge    (small circle indicator, top-right)
 *
 * 12s continuous loop. Pure CSS keyframes.
 */

export function ProductMorphArt() {
  return (
    <div
      className="product-morph-container relative h-full w-full flex items-center justify-center"
      aria-hidden
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .pma-scene {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Shared card style — glassmorphic dark ── */
        .pma-card {
          position: absolute;
          border-radius: 8px;
          border: 1px solid rgba(37,99,235,0.18);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          will-change: transform, opacity;
        }

        /* ── Ambient glow rings (pulse during scatter phase) ── */
        .pma-glow-ring {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(37,99,235,0.08);
          pointer-events: none;
          animation: pma-ring-glow 12s ease-in-out infinite;
        }
        .pma-glow-ring-1 { width: 240px; height: 240px; margin: -120px 0 0 -120px; animation-delay: 0s; }
        .pma-glow-ring-2 { width: 290px; height: 290px; margin: -145px 0 0 -145px; animation-delay: 0.25s; }
        .pma-glow-ring-3 { width: 330px; height: 330px; margin: -165px 0 0 -165px; animation-delay: 0.45s; }

        @keyframes pma-ring-glow {
          0%, 8%   { opacity: 0.5; border-color: rgba(37,99,235,0.12); transform: scale(1); }
          /* Assembling — rings dim */
          25%, 50% { opacity: 0.08; border-color: rgba(37,99,235,0.06); transform: scale(0.9); }
          /* Scatter — rings glow */
          68%      { opacity: 0.6; border-color: rgba(0,229,255,0.35); transform: scale(1.06);
                     box-shadow: 0 0 24px rgba(0,229,255,0.08); }
          78%      { opacity: 0.75; border-color: rgba(0,229,255,0.45); transform: scale(1.08);
                     box-shadow: 0 0 36px rgba(0,229,255,0.12); }
          92%      { opacity: 0.4; border-color: rgba(0,229,255,0.2); transform: scale(1.02); }
          100%     { opacity: 0.5; border-color: rgba(37,99,235,0.12); transform: scale(1); }
        }

        /* ── Center radial glow ── */
        .pma-center-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 55%);
          pointer-events: none;
          animation: pma-cg 12s ease-in-out infinite;
        }
        @keyframes pma-cg {
          0%, 10%  { opacity: 0.4; transform: scale(0.95); }
          35%, 50% { opacity: 0.8; transform: scale(1.05); }
          68%, 82% { opacity: 1; transform: scale(1.12); }
          100%     { opacity: 0.4; transform: scale(0.95); }
        }

        /* ============================================================
           CARD 1 — Header bar (wide)
           ============================================================ */
        .pma-card-header {
          width: 250px;
          height: 42px;
          top: 50%; left: 50%;
          margin: -21px 0 0 -125px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 6px;
          animation: pma-c1 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .pma-header-lines {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .pma-hline {
          height: 2.5px;
          border-radius: 2px;
          background: rgba(255,255,255,0.25);
        }
        .pma-hline-1 { width: 70%; }
        .pma-hline-2 { width: 45%; background: rgba(255,255,255,0.15); }
        .pma-header-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(37,99,235,0.85);
          box-shadow: 0 0 6px rgba(37,99,235,0.5);
          flex-shrink: 0;
        }

        @keyframes pma-c1 {
          /* Scattered */
          0%   { transform: translate(0px, -120px); opacity: 0.75;
                 box-shadow: 0 0 12px rgba(37,99,235,0.15); }
          5%   { transform: translate(0px, -120px); opacity: 0.85;
                 box-shadow: 0 0 16px rgba(37,99,235,0.2); }
          /* Assembled */
          22%  { transform: translate(0px, -64px); opacity: 1;
                 box-shadow: 0 0 8px rgba(37,99,235,0.1); }
          50%  { transform: translate(0px, -64px); opacity: 1;
                 box-shadow: 0 0 8px rgba(37,99,235,0.1); }
          /* Scatter to circle */
          65%  { transform: translate(0px, -140px) scale(0.92); opacity: 0.9;
                 box-shadow: 0 0 28px rgba(0,229,255,0.25), 0 0 56px rgba(37,99,235,0.1); }
          80%  { transform: translate(0px, -140px) scale(0.95); opacity: 0.95;
                 box-shadow: 0 0 36px rgba(0,229,255,0.3), 0 0 72px rgba(37,99,235,0.12); }
          92%  { transform: translate(0px, -130px) scale(0.93); opacity: 0.85;
                 box-shadow: 0 0 20px rgba(37,99,235,0.18); }
          100% { transform: translate(0px, -120px); opacity: 0.75;
                 box-shadow: 0 0 12px rgba(37,99,235,0.15); }
        }


        /* ============================================================
           CARD 2 — Content card (left)
           ============================================================ */
        .pma-card-content {
          width: 120px;
          height: 66px;
          top: 50%; left: 50%;
          margin: -33px 0 0 -60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 12px;
          gap: 6px;
          animation: pma-c2 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .pma-cline {
          height: 2.5px;
          border-radius: 2px;
        }
        .pma-cline-1 { width: 80%; background: rgba(37,99,235,0.7); box-shadow: 0 0 4px rgba(37,99,235,0.3); }
        .pma-cline-2 { width: 55%; background: rgba(255,255,255,0.18); }

        @keyframes pma-c2 {
          /* Scattered */
          0%   { transform: translate(-135px, 0px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
          5%   { transform: translate(-135px, 0px); opacity: 0.8;
                 box-shadow: 0 0 16px rgba(37,99,235,0.18); }
          /* Assembled */
          22%  { transform: translate(-65px, 0px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          50%  { transform: translate(-65px, 0px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          /* Scatter to circle */
          65%  { transform: translate(-150px, 0px) scale(0.92); opacity: 0.9;
                 box-shadow: 0 0 28px rgba(0,229,255,0.25), 0 0 56px rgba(37,99,235,0.1); }
          80%  { transform: translate(-150px, 0px) scale(0.95); opacity: 0.95;
                 box-shadow: 0 0 36px rgba(0,229,255,0.3), 0 0 72px rgba(37,99,235,0.12); }
          92%  { transform: translate(-140px, 0px) scale(0.93); opacity: 0.82;
                 box-shadow: 0 0 18px rgba(37,99,235,0.15); }
          100% { transform: translate(-135px, 0px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
        }


        /* ============================================================
           CARD 3 — Chart card (right)
           ============================================================ */
        .pma-card-chart {
          width: 120px;
          height: 66px;
          top: 50%; left: 50%;
          margin: -33px 0 0 -60px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0 12px 10px;
          gap: 5px;
          animation: pma-c3 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .pma-chart-bar {
          width: 10px;
          border-radius: 2px 2px 0 0;
          background: rgba(37,99,235,0.55);
          box-shadow: 0 0 4px rgba(37,99,235,0.2);
        }
        .pma-cb-1 { height: 16px; }
        .pma-cb-2 { height: 24px; }
        .pma-cb-3 { height: 12px; }
        .pma-cb-4 { height: 30px; }
        .pma-cb-5 { height: 20px; }
        .pma-cb-6 { height: 34px; }

        @keyframes pma-c3 {
          /* Scattered */
          0%   { transform: translate(135px, 0px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
          5%   { transform: translate(135px, 0px); opacity: 0.8;
                 box-shadow: 0 0 16px rgba(37,99,235,0.18); }
          /* Assembled */
          22%  { transform: translate(65px, 0px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          50%  { transform: translate(65px, 0px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          /* Scatter to circle */
          65%  { transform: translate(150px, -10px) scale(0.92); opacity: 0.9;
                 box-shadow: 0 0 28px rgba(0,229,255,0.25), 0 0 56px rgba(37,99,235,0.1); }
          80%  { transform: translate(150px, -10px) scale(0.95); opacity: 0.95;
                 box-shadow: 0 0 36px rgba(0,229,255,0.3), 0 0 72px rgba(37,99,235,0.12); }
          92%  { transform: translate(140px, -5px) scale(0.93); opacity: 0.82;
                 box-shadow: 0 0 18px rgba(37,99,235,0.15); }
          100% { transform: translate(135px, 0px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
        }


        /* ============================================================
           CARD 4 — Button card (bottom)
           ============================================================ */
        .pma-card-button {
          width: 250px;
          height: 36px;
          top: 50%; left: 50%;
          margin: -18px 0 0 -125px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pma-c4 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .pma-btn-inner {
          width: 70px;
          height: 3px;
          border-radius: 2px;
          background: rgba(37,99,235,0.75);
          box-shadow: 0 0 6px rgba(37,99,235,0.35);
        }

        @keyframes pma-c4 {
          /* Scattered */
          0%   { transform: translate(0px, 120px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
          5%   { transform: translate(0px, 120px); opacity: 0.8;
                 box-shadow: 0 0 16px rgba(37,99,235,0.18); }
          /* Assembled */
          22%  { transform: translate(0px, 61px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          50%  { transform: translate(0px, 61px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.08); }
          /* Scatter to circle */
          65%  { transform: translate(0px, 140px) scale(0.92); opacity: 0.9;
                 box-shadow: 0 0 28px rgba(0,229,255,0.25), 0 0 56px rgba(37,99,235,0.1); }
          80%  { transform: translate(0px, 140px) scale(0.95); opacity: 0.95;
                 box-shadow: 0 0 36px rgba(0,229,255,0.3), 0 0 72px rgba(37,99,235,0.12); }
          92%  { transform: translate(0px, 130px) scale(0.93); opacity: 0.82;
                 box-shadow: 0 0 18px rgba(37,99,235,0.15); }
          100% { transform: translate(0px, 120px); opacity: 0.7;
                 box-shadow: 0 0 12px rgba(37,99,235,0.12); }
        }


        /* ============================================================
           CARD 5 — Dot badge (small)
           ============================================================ */
        .pma-card-dot {
          width: 28px;
          height: 28px;
          top: 50%; left: 50%;
          margin: -14px 0 0 -14px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pma-c5 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .pma-dot-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(37,99,235,0.9);
          box-shadow: 0 0 8px rgba(37,99,235,0.5);
        }

        @keyframes pma-c5 {
          /* Scattered */
          0%   { transform: translate(145px, -100px); opacity: 0.8;
                 box-shadow: 0 0 10px rgba(37,99,235,0.15); }
          5%   { transform: translate(145px, -100px); opacity: 0.9;
                 box-shadow: 0 0 14px rgba(37,99,235,0.2); }
          /* Assembled */
          22%  { transform: translate(125px, -85px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.1); }
          50%  { transform: translate(125px, -85px); opacity: 1;
                 box-shadow: 0 0 6px rgba(37,99,235,0.1); }
          /* Scatter to circle */
          65%  { transform: translate(160px, -120px) scale(0.92); opacity: 0.9;
                 box-shadow: 0 0 22px rgba(0,229,255,0.3), 0 0 44px rgba(37,99,235,0.12); }
          80%  { transform: translate(160px, -120px) scale(0.98); opacity: 1;
                 box-shadow: 0 0 30px rgba(0,229,255,0.4), 0 0 60px rgba(37,99,235,0.15); }
          92%  { transform: translate(150px, -110px) scale(0.94); opacity: 0.85;
                 box-shadow: 0 0 16px rgba(37,99,235,0.18); }
          100% { transform: translate(145px, -100px); opacity: 0.8;
                 box-shadow: 0 0 10px rgba(37,99,235,0.15); }
        }

        /* ── Orbiting particles (visible during scatter/glow phase) ── */
        .pma-particle {
          position: absolute;
          top: 50%; left: 50%;
          margin: -1.5px 0 0 -1.5px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          pointer-events: none;
        }
        .pma-p1 {
          background: rgba(0,229,255,0.7);
          box-shadow: 0 0 6px rgba(0,229,255,0.5);
          animation: pma-orb1 12s linear infinite;
        }
        .pma-p2 {
          background: rgba(37,99,235,0.7);
          box-shadow: 0 0 6px rgba(37,99,235,0.5);
          animation: pma-orb2 12s linear infinite;
        }
        .pma-p3 {
          background: rgba(139,122,237,0.6);
          box-shadow: 0 0 5px rgba(139,122,237,0.4);
          animation: pma-orb3 12s linear infinite;
        }

        @keyframes pma-orb1 {
          0%, 50%  { opacity: 0; transform: rotate(0deg) translateX(0px); }
          65%      { opacity: 0.8; transform: rotate(30deg) translateX(145px); }
          100%     { opacity: 0.3; transform: rotate(390deg) translateX(145px); }
        }
        @keyframes pma-orb2 {
          0%, 50%  { opacity: 0; transform: rotate(120deg) translateX(0px); }
          65%      { opacity: 0.7; transform: rotate(150deg) translateX(135px); }
          100%     { opacity: 0.3; transform: rotate(510deg) translateX(135px); }
        }
        @keyframes pma-orb3 {
          0%, 50%  { opacity: 0; transform: rotate(240deg) translateX(0px); }
          65%      { opacity: 0.6; transform: rotate(270deg) translateX(140px); }
          100%     { opacity: 0.2; transform: rotate(630deg) translateX(140px); }
        }
      `}} />

      <div className="pma-scene scale-100 min-[1920px]:scale-125 min-[2560px]:scale-150 transform transition-transform duration-500 origin-center">
        {/* Glow rings */}
        <div className="pma-glow-ring pma-glow-ring-1" />
        <div className="pma-glow-ring pma-glow-ring-2" />
        <div className="pma-glow-ring pma-glow-ring-3" />

        {/* Center glow */}
        <div className="pma-center-glow" />

        {/* Orbiting particles */}
        <div className="pma-particle pma-p1" />
        <div className="pma-particle pma-p2" />
        <div className="pma-particle pma-p3" />

        {/* Card 1 — Header bar */}
        <div className="pma-card pma-card-header">
          <div className="pma-header-lines">
            <div className="pma-hline pma-hline-1" />
            <div className="pma-hline pma-hline-2" />
          </div>
          <div className="pma-header-dot" />
        </div>

        {/* Card 2 — Content card */}
        <div className="pma-card pma-card-content">
          <div className="pma-cline pma-cline-1" />
          <div className="pma-cline pma-cline-2" />
        </div>

        {/* Card 3 — Chart card */}
        <div className="pma-card pma-card-chart">
          <div className="pma-chart-bar pma-cb-1" />
          <div className="pma-chart-bar pma-cb-2" />
          <div className="pma-chart-bar pma-cb-3" />
          <div className="pma-chart-bar pma-cb-4" />
          <div className="pma-chart-bar pma-cb-5" />
          <div className="pma-chart-bar pma-cb-6" />
        </div>

        {/* Card 4 — Button card */}
        <div className="pma-card pma-card-button">
          <div className="pma-btn-inner" />
        </div>

        {/* Card 5 — Dot badge */}
        <div className="pma-card pma-card-dot">
          <div className="pma-dot-inner" />
        </div>
      </div>
    </div>
  );
}