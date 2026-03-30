import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { StatsStrip } from "@/components/home/stats-strip";
import { WorldMapGraphic } from "@/components/home/world-map-graphic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="metric-section space-y-10">
      <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-6">
          <Badge className="bg-metric-green/15 text-metric-green" variant="secondary">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            Advocacy + Education Platform
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-metric-deep sm:text-5xl lg:text-6xl dark:text-white">
            The US Is The Last One Standing
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Almost every nation speaks SI. The United States, Myanmar, and Liberia remain the primary non-metric holdouts. MetricUS makes the case for practical, modern adoption.
          </p>
          <Button asChild size="lg" className="gap-2 bg-metric-deep text-white hover:bg-metric-deep/90">
            <Link href="/why">
              See Why It Matters
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <WorldMapGraphic />
      </section>

      <StatsStrip />
    </div>
  );
}

