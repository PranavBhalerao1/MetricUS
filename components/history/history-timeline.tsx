"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { timelineEvents } from "@/lib/site-data";
import { TimelineImpact } from "@/lib/types";

const impactStyles: Record<TimelineImpact, string> = {
  positive: "bg-metric-green/15 text-metric-green",
  negative: "bg-red-500/15 text-red-500",
  neutral: "bg-slate-500/15 text-slate-500 dark:text-slate-300",
};

export function HistoryTimeline() {
  return (
    <section className="relative pl-6 sm:pl-10">
      <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-metric-green via-metric-deep to-slate-400" />
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.article
            key={event.year + event.title}
            className="relative rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm dark:bg-slate-900/50"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <div className="absolute -left-[2.1rem] top-7 h-3 w-3 rounded-full border-2 border-white bg-metric-green shadow dark:border-slate-950 sm:-left-[2.65rem]" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-metric-deep dark:text-white">{event.year}</p>
              <Badge className={impactStyles[event.impact]} variant="secondary">
                {event.impact}
              </Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

