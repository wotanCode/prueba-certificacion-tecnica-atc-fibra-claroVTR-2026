export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  type: 'boolean' | 'multiple';
  options: QuestionOption[];
}

export interface QuestionsData {
  questions: Question[];
}

export type QuizStatus = 'idle' | 'in-progress' | 'completed';

export interface ShuffledQuestion extends Omit<Question, 'options'> {
  options: QuestionOption[];
  originalOptionsIds: string[];
}
