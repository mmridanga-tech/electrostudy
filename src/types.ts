export type Language = 'en' | 'hi' | 'bn';

export type Theme = 'light' | 'dark';

export type MultilingualText = Record<Language, string>;
export type MultilingualList = Record<Language, string[]>;

export interface FormulaVariable {
  symbol: string;
  name: MultilingualText;
}

export interface FormulaItem {
  id?: string;
  name?: MultilingualText;
  symbol?: string;
  expression?: string;
  formula?: string;
  title?: MultilingualText;
  description: MultilingualText;
  variables?: FormulaVariable[];
}

export interface LessonSection {
  id: string;
  title: MultilingualText;
  content: MultilingualText;
  schematicId?: string;
  keyEquations?: string[];
}

export interface LessonDiagram {
  id: string;
  title: MultilingualText;
  caption: MultilingualText;
  svgType?: string;
}

export interface SolvedExample {
  id?: string;
  title?: MultilingualText;
  problem: MultilingualText;
  solution?: MultilingualText;
  givenValues?: Record<string, string>;
  finalAnswer?: MultilingualText;
  formula?: MultilingualText | string;
  substitution?: MultilingualText;
  calculation?: MultilingualText;
  required?: MultilingualText;
}

export interface MCQOption {
  id: string;
  text: MultilingualText;
}

export interface MCQQuestion {
  id: string;
  question: MultilingualText;
  options: MCQOption[];
  correctOptionId: string;
  explanation: MultilingualText;
}

export interface PracticeQuestion {
  id?: string;
  question: MultilingualText;
  hint?: MultilingualText;
  answerKey?: MultilingualText;
}

export interface QuizQuestion {
  question: MultilingualText;
  options: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  correctAnswer: number;
  explanation: MultilingualText;
}

export interface Flashcard {
  term: MultilingualText;
  definition: MultilingualText;
}

export interface Lesson {
  id: string;
  topicId: string;
  chapterId?: string;
  order?: number;
  title: MultilingualText;
  description?: MultilingualText;
  estimatedMinutes?: number;
  easyExplanation?: MultilingualText;
  detailedExplanation?: MultilingualText;
  formulas: FormulaItem[];
  sections?: LessonSection[];
  diagrams?: LessonDiagram[];
  solvedExamples?: SolvedExample[];
  workedExamples?: SolvedExample[];
  practicalApplications?: MultilingualList | MultilingualText[] | Record<string, string[]>;
  importantPoints?: MultilingualList | MultilingualText[] | Record<string, string[]>;
  keyTakeaways?: MultilingualList | MultilingualText[] | Record<string, string[]>;
  commonMistakes?: MultilingualList | MultilingualText[] | Record<string, string[]>;
  mcqs?: MCQQuestion[];
  mcqQuestions?: MCQQuestion[];
  practiceQuestions?: PracticeQuestion[];
  quiz?: QuizQuestion[];
  flashcards?: Flashcard[];
}

export interface Topic {
  id: string;
  chapterId: string;
  order: number;
  title: MultilingualText;
  description?: MultilingualText;
  level?: string;
  lesson?: Lesson;
}

export interface Chapter {
  id: string;
  subjectId: string;
  order: number;
  title: MultilingualText;
  topics: Topic[];
}

export interface DetailedSubject {
  id: string;
  slug: string;
  icon: string;
  title: MultilingualText;
  description: MultilingualText;
  chapters: Chapter[];
}

export interface SubjectItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  topicsCount: number;
  badge?: string;
  color: string;
}

export interface ToolItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  category: string;
  formula: string;
}

export interface PracticeItem {
  id: string;
  title: Record<Language, string>;
  questionsCount: number;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  difficultyLabel: Record<Language, string>;
  icon: string;
  topics: string[];
}

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  region: string;
  flagText: string;
  description: string;
}

