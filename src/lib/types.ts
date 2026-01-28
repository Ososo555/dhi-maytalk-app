export type Mood = 'worst' | 'bad' | 'neutral' | 'good' | 'best';

export interface DiaryEntry {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  questionCount: 1 | 2 | 3;
  answers: {
    questionId: number;
    title: string;
    summary: string;
    detail: string;
  }[];
  mood: Mood;
}

export type Screen = 'home' | 'dialog' | 'settings';
export type QuestionFlowState = 'initial' | 'selecting' | 'answering' | 'completed';
