import { Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { defaultShareMessage } from "@/lib/site-data";

const websiteUrl = "https://metricus.vercel.app";

const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultShareMessage)}&url=${encodeURIComponent(websiteUrl)}`;
const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(websiteUrl)}`;

export function ShareMessage() {
  return (
    <section className="metric-glass space-y-4 p-5 sm:p-6">
      <div>
        <h3 className="text-xl font-semibold text-metric-deep dark:text-white">Share the Message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Help normalize SI usage by posting a clear, practical message in your network.
        </p>
      </div>

      <div className="rounded-xl border border-border/70 bg-white/70 p-4 text-sm dark:bg-slate-950/50">
        {defaultShareMessage}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline" className="gap-2">
          <a href={xShareUrl} target="_blank" rel="noreferrer">
            <Share2 className="h-4 w-4" />
            Share on X
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <a href={linkedInShareUrl} target="_blank" rel="noreferrer">
            <Share2 className="h-4 w-4" />
            Share on LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}

