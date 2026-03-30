"use client";

import {
  Atom,
  Binary,
  BookOpenText,
  BrainCircuit,
  Cross,
  Factory,
  FlaskConical,
  Globe2,
  GraduationCap,
  Plane,
  Rocket,
  Ship,
  Wallet,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { whyTabs } from "@/lib/site-data";

const iconMap = {
  FlaskConical,
  Atom,
  Binary,
  Wallet,
  Ship,
  Factory,
  GraduationCap,
  BookOpenText,
  BrainCircuit,
  Rocket,
  Cross,
  Plane,
  Globe2,
} as const;

export function WhyTabsSection() {
  return (
    <Tabs defaultValue={whyTabs[0].key} className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 gap-1 md:grid-cols-4">
        {whyTabs.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key} className="text-xs sm:text-sm">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {whyTabs.map((tab) => (
        <TabsContent key={tab.key} value={tab.key}>
          <div className="mb-4 mt-2 rounded-xl border border-border/70 bg-white/70 p-4 text-sm text-muted-foreground dark:bg-slate-950/40">
            {tab.summary}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tab.cards.map((card) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Globe2;
              return (
                <Card key={card.id} className="h-full border-border/70 bg-white/80 shadow-sm dark:bg-slate-900/50">
                  <CardHeader className="space-y-3">
                    <div className="w-fit rounded-lg bg-metric-green/10 p-2 text-metric-green">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-metric-deep dark:text-white">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

