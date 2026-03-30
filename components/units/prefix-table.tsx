import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { prefixItems } from "@/lib/site-data";

export function PrefixTable() {
  return (
    <section className="metric-glass overflow-hidden p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-metric-deep dark:text-white">SI Prefix Table</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Prefixes let one unit scale from microscopic to planetary distances using powers of ten.
        </p>
      </div>

      <div className="hidden overflow-hidden rounded-xl border border-border/70 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/80 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Prefix</th>
              <th className="px-4 py-3">Symbol</th>
              <th className="px-4 py-3">Factor</th>
              <th className="px-4 py-3">Example</th>
            </tr>
          </thead>
          <tbody>
            {prefixItems.map((prefix) => (
              <tr key={prefix.id} className="border-t border-border/70 bg-white/70 dark:bg-slate-950/40">
                <td className="px-4 py-3 font-semibold capitalize">{prefix.name}</td>
                <td className="px-4 py-3 font-mono">{prefix.symbol}</td>
                <td className="px-4 py-3 font-mono">{prefix.factor}</td>
                <td className="px-4 py-3 text-muted-foreground">{prefix.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {prefixItems.map((prefix) => (
            <AccordionItem key={prefix.id} value={prefix.id}>
              <AccordionTrigger className="capitalize">
                {prefix.name} ({prefix.symbol})
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-mono">Factor: {prefix.factor}</p>
                <p className="mt-1 text-muted-foreground">{prefix.example}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

