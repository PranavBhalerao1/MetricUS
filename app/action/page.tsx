import { HabitTracker } from "@/components/action/habit-tracker";
import { RepresentativeLetter } from "@/components/action/representative-letter";
import { ShareMessage } from "@/components/action/share-message";

export default function ActionPage() {
  return (
    <div className="metric-section space-y-8">
      <section className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-metric-deep sm:text-4xl dark:text-white">
          Take Action
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Change starts with daily practice, civic voice, and public conversation. Pick one action and do it today.
        </p>
      </section>

      <div className="grid gap-5">
        <HabitTracker />
        <RepresentativeLetter />
        <ShareMessage />
      </div>
    </div>
  );
}

