"use client";

import { motion } from "framer-motion";

const continents = [
  "M130 140 L180 120 L230 130 L250 160 L220 190 L170 190 Z",
  "M265 175 L305 170 L330 205 L315 252 L282 264 L260 235 Z",
  "M380 120 L452 102 L540 124 L566 162 L522 202 L446 196 L390 162 Z",
  "M520 214 L560 220 L582 262 L556 298 L512 284 L500 246 Z",
  "M640 228 L712 212 L768 236 L786 272 L736 300 L674 292 L636 258 Z",
];

const holdoutMarkers = [
  { x: 202, y: 148, label: "US" },
  { x: 642, y: 220, label: "Myanmar" },
  { x: 432, y: 238, label: "Liberia" },
];

export function WorldMapGraphic() {
  return (
    <div className="metric-glass relative overflow-hidden p-5 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(30,58,95,0.2),transparent_38%)]" />
      <motion.svg
        viewBox="0 0 860 420"
        className="relative z-10 h-full w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-label="World map showing the primary non-metric countries in red"
      >
        <defs>
          <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2540" />
          </linearGradient>
        </defs>

        <ellipse cx="430" cy="210" rx="400" ry="180" fill="url(#ocean)" opacity="0.95" />
        <g>
          {continents.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="#22c55e"
              opacity="0.95"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
            />
          ))}
        </g>

        {holdoutMarkers.map((marker, index) => (
          <g key={marker.label}>
            <motion.circle
              cx={marker.x}
              cy={marker.y}
              r="7"
              fill="#ef4444"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [1, 1.35, 1], opacity: 1 }}
              transition={{
                delay: 0.5 + index * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.2,
                duration: 1.1,
              }}
            />
            <text x={marker.x + 10} y={marker.y - 10} fill="#ffffff" fontSize="12" fontWeight="700">
              {marker.label}
            </text>
          </g>
        ))}

        <text x="430" y="384" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">
          Green = SI standard | Red = Primary holdouts
        </text>
      </motion.svg>
    </div>
  );
}

