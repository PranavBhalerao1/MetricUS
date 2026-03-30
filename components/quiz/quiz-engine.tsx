"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions } from "@/lib/site-data";

export function QuizEngine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex];
  const selectedOption = currentQuestion ? answers[currentQuestion.id] : undefined;

  const score = useMemo(
    () =>
      quizQuestions.reduce((count, question) => {
        if (answers[question.id] === question.correctOptionId) return count + 1;
        return count;
      }, 0),
    [answers],
  );

  const isFinished = currentIndex >= totalQuestions;
  const progress = Math.round((Object.keys(answers).length / totalQuestions) * 100);

  function handleAnswer(optionId: string) {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  }

  function nextQuestion() {
    setCurrentIndex((prev) => prev + 1);
  }

  function restartQuiz() {
    setAnswers({});
    setCurrentIndex(0);
  }

  if (isFinished) {
    const percent = Math.round((score / totalQuestions) * 100);
    const summary =
      percent >= 90
        ? "Metric Master"
        : percent >= 70
          ? "SI Supporter"
          : percent >= 50
            ? "Unit Explorer"
            : "Conversion Rookie";

    return (
      <Card className="mx-auto max-w-2xl border-border/70 bg-white/80 shadow-sm dark:bg-slate-900/50">
        <CardHeader className="items-start gap-3">
          <Badge className="bg-metric-green/15 text-metric-green" variant="secondary">
            Results
          </Badge>
          <CardTitle className="text-2xl text-metric-deep dark:text-white">{summary}</CardTitle>
          <p className="text-sm text-muted-foreground">
            You scored {score} out of {totalQuestions} ({percent}%).
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={percent} />
          <p className="text-sm text-muted-foreground">
            Keep sharing metric literacy. Every conversation pushes the culture toward safer, simpler measurement.
          </p>
          <Button onClick={restartQuiz}>Retake Quiz</Button>
        </CardContent>
      </Card>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const isCorrect = selectedOption === currentQuestion.correctOptionId;

  return (
    <Card className="mx-auto max-w-2xl border-border/70 bg-white/80 shadow-sm dark:bg-slate-900/50">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <Badge variant="secondary">Question {currentIndex + 1}</Badge>
          <span className="text-muted-foreground">{progress}% completed</span>
        </div>
        <Progress value={progress} />
        <CardTitle className="text-xl text-metric-deep dark:text-white">{currentQuestion.prompt}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedOption)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                isSelected
                  ? "border-metric-green bg-metric-green/10"
                  : "border-border/70 bg-background hover:border-metric-deep/40"
              }`}
              onClick={() => handleAnswer(option.id)}
            >
              {option.text}
            </button>
          );
        })}

        {selectedOption ? (
          <div className="rounded-xl border border-border/70 bg-muted/40 p-3 text-sm">
            <p className={`font-medium ${isCorrect ? "text-metric-green" : "text-red-500"}`}>
              {isCorrect ? "Correct" : "Not quite"}
            </p>
            <p className="mt-1 text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        ) : null}

        <div className="pt-1">
          <Button onClick={nextQuestion} disabled={!selectedOption}>
            {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

