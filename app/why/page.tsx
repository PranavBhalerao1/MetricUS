import { MetricAdoptionChart } from "@/components/why/metric-adoption-chart";
import { WhyTabsSection } from "@/components/why/why-tabs-section";

export default function WhyPage() {
  return (
    <div className="metric-section space-y-8">
      <section className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-metric-deep sm:text-4xl dark:text-white">
          Why Metric?
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          A single measurement language improves science, streamlines trade, strengthens education, and reduces safety-critical errors.
        </p>
      </section>

      <WhyTabsSection />

      <MetricAdoptionChart />
    </div>
  );
}

