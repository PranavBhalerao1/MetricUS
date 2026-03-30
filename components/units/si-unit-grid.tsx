import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siBaseUnits } from "@/lib/site-data";

export function SIUnitGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {siBaseUnits.map((unit) => (
        <Card key={unit.id} className="h-full border-border/70 bg-white/80 shadow-sm dark:bg-slate-900/50">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg capitalize text-metric-deep dark:text-white">{unit.name}</CardTitle>
              <Badge variant="secondary" className="font-mono text-sm">
                {unit.symbol}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Measures <span className="font-semibold text-foreground">{unit.measures}</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">{unit.example}</p>
            <p className="text-xs font-medium text-metric-green">
              Officially defined in {unit.definitionYear}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

