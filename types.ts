
export interface Module {
  id: string;
  title: string;
  description: string;
  isQuiz?: boolean;
  content: React.ReactNode;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}
