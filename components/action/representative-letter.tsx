"use client";

import { Mail, Copy } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { representativeLetterTemplate } from "@/lib/site-data";

export function RepresentativeLetter() {
  const [copied, setCopied] = useState(false);

  const mailtoLink = useMemo(() => {
    const [subjectLine, ...rest] = representativeLetterTemplate.split("\n");
    const subject = subjectLine.replace("Subject:", "").trim();
    const body = rest.join("\n").trim();
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, []);

  async function copyTemplate() {
    await navigator.clipboard.writeText(representativeLetterTemplate);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="metric-glass space-y-4 p-5 sm:p-6">
      <div>
        <h3 className="text-xl font-semibold text-metric-deep dark:text-white">Write to Your Representative</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Copy this template, personalize it, and send it in under 2 minutes.
        </p>
      </div>

      <pre className="max-h-72 overflow-auto rounded-xl border border-border/70 bg-white/70 p-4 text-xs leading-relaxed dark:bg-slate-950/50">
        {representativeLetterTemplate}
      </pre>

      <div className="flex flex-wrap gap-3">
        <Button onClick={copyTemplate} variant="secondary" className="gap-2">
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy Template"}
        </Button>
        <Button asChild className="gap-2 bg-metric-deep hover:bg-metric-deep/90">
          <a href={mailtoLink}>
            <Mail className="h-4 w-4" />
            Open Email Draft
          </a>
        </Button>
      </div>
    </section>
  );
}

