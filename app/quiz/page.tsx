import { QuizEngine } from "@/components/quiz/quiz-engine";

export default function QuizPage() {
  return (
    <div className="metric-section space-y-8">
      <section className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-metric-deep sm:text-4xl dark:text-white">
          Metric Knowledge Quiz
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Test your SI fundamentals and US metric history knowledge with 10 multiple-choice questions.
        </p>
      </section>

      <QuizEngine />
    </div>
  );
}

