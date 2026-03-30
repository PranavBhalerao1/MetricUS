import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-white/80 py-8 backdrop-blur-xl dark:bg-slate-950/70">
      <div className="metric-section flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Built to advocate for SI adoption in the United States.</p>
        <Link
          href="https://usma.org"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-metric-deep hover:text-metric-green dark:text-metric-green"
        >
          Learn more at usma.org
        </Link>
      </div>
    </footer>
  );
}

