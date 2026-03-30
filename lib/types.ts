export type SourceCitation = {
  label: string;
  url: string;
  note?: string;
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  citation: SourceCitation;
}

export type WhyCategory = "science" | "commerce" | "education" | "safety";

export interface WhyCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyTab {
  key: WhyCategory;
  label: string;
  summary: string;
  cards: WhyCard[];
}

export interface SIUnit {
  id: string;
  name: string;
  symbol: string;
  measures: string;
  example: string;
  definitionYear: number;
}

export interface PrefixItem {
  id: string;
  name: string;
  symbol: string;
  factor: string;
  example: string;
}

export type TimelineImpact = "positive" | "negative" | "neutral";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impact: TimelineImpact;
}

export interface HabitItem {
  id: string;
  label: string;
  description: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

