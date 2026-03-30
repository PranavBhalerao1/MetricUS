"use client";

import { useEffect, useMemo, useState } from "react";

import { Progress } from "@/components/ui/progress";
import { dailyMetricHabits } from "@/lib/site-data";

const STORAGE_KEY = "metricus-habit-tracker-v1";

export function HabitTracker() {
  const [checkedHabits, setCheckedHabits] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as string[];
        setCheckedHabits(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedHabits));
  }, [checkedHabits]);

  const progress = useMemo(() => {
    if (!dailyMetricHabits.length) return 0;
    return Math.round((checkedHabits.length / dailyMetricHabits.length) * 100);
  }, [checkedHabits.length]);

  function toggleHabit(habitId: string) {
    setCheckedHabits((prev) =>
      prev.includes(habitId) ? prev.filter((id) => id !== habitId) : [...prev, habitId],
    );
  }

  return (
    <section className="metric-glass space-y-5 p-5 sm:p-6">
      <div>
        <h3 className="text-xl font-semibold text-metric-deep dark:text-white">Use Metric Daily</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Small daily habits build fast intuition. Track your consistency and keep the streak going.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm font-medium">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} aria-label="Daily metric habits progress" />
      </div>

      <ul className="space-y-3">
        {dailyMetricHabits.map((habit) => {
          const checked = checkedHabits.includes(habit.id);
          return (
            <li key={habit.id} className="rounded-xl border border-border/70 bg-white/70 p-3 dark:bg-slate-950/40">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-input text-accent focus:ring-accent"
                  checked={checked}
                  onChange={() => toggleHabit(habit.id)}
                />
                <span>
                  <span className="block text-sm font-medium">{habit.label}</span>
                  <span className="text-xs text-muted-foreground">{habit.description}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

