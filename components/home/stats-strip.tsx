"use client";

import { Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { homeStats } from "@/lib/site-data";

export function StatsStrip() {
  return (
    <TooltipProvider>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {homeStats.map((stat) => (
          <article key={stat.id} className="metric-glass flex h-full flex-col gap-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="secondary" className="w-fit bg-metric-green/10 text-metric-green">
                Key Data
              </Badge>
              <Tooltip>
                <TooltipTrigger aria-label={`View source for ${stat.label}`}>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="font-medium">{stat.citation.label}</p>
                  {stat.citation.note ? <p className="mt-1">{stat.citation.note}</p> : null}
                  <a
                    href={stat.citation.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[11px] font-medium text-metric-green underline"
                  >
                    Open Source
                  </a>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-2xl font-semibold text-metric-deep dark:text-white">{stat.value}</p>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.detail}</p>
          </article>
        ))}
      </section>
    </TooltipProvider>
  );
}

