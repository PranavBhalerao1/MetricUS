import { PrefixTable } from "@/components/units/prefix-table";
import { SIUnitGrid } from "@/components/units/si-unit-grid";
import { UnitConverter } from "@/components/units/unit-converter";

export default function UnitsPage() {
  return (
    <div className="metric-section space-y-8">
      <section className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-metric-deep sm:text-4xl dark:text-white">
          SI Unit Explorer
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Explore the seven SI base units, understand prefix scaling, and instantly convert between systems.
        </p>
      </section>

      <SIUnitGrid />

      <PrefixTable />

      <UnitConverter />
    </div>
  );
}

