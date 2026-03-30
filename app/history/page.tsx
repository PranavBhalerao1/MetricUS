import { HistoryTimeline } from "@/components/history/history-timeline";

export default function HistoryPage() {
  return (
    <div className="metric-section space-y-8">
      <section className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-metric-deep sm:text-4xl dark:text-white">
          US Metric History Timeline
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          The United States has a long, uneven relationship with SI. These moments show how policy momentum advanced and stalled.
        </p>
      </section>

      <HistoryTimeline />
    </div>
  );
}

