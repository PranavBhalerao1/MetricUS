"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { metricChartData } from "@/lib/site-data";

export function MetricAdoptionChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="metric-glass h-[320px] p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-metric-deep dark:text-white">Global Metric Adoption</h3>
      <p className="mt-1 text-sm text-muted-foreground">Countries using metric versus countries not fully metric.</p>
      <div className="mt-6 h-[220px] w-full">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metricChartData} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={0}
                angle={0}
                tickMargin={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} width={36} />
              <Tooltip
                cursor={{ fill: "rgba(34, 197, 94, 0.08)" }}
                contentStyle={{ borderRadius: "0.75rem", border: "1px solid #d1d5db" }}
              />
              <Bar dataKey="value" fill="#22c55e" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full animate-pulse rounded-xl bg-muted/70" />
        )}
      </div>
    </div>
  );
}

