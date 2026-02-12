import { create } from 'zustand';
import type { Question, QuizStatus } from '@/app/types/quiz';
import { shuffle } from '@/app/utils/shuffle';
import questionsData from '@/app/db/questions.json';

interface QuizState {
  // Estado
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  isAnswerChecked: boolean;
  correctAnswers: number;
  quizStatus: QuizStatus;
  
  // Acciones
  startQuiz: () => void;
  selectAnswer: (answerId: string) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  // Estado inicial
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  isAnswerChecked: false,
  correctAnswers: 0,
  quizStatus: 'idle',
  
  // Iniciar el quiz
  startQuiz: () => {
    // Mezclar preguntas
    const shuffledQuestions = shuffle(questionsData.questions as Question[]).map(question => ({
      ...question,
      // Mezclar opciones de cada pregunta
      options: shuffle(question.options)
    }));
    
    set({
      questions: shuffledQuestions,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswerChecked: false,
      correctAnswers: 0,
      quizStatus: 'in-progress'
    });
  },
  
  // Seleccionar una respuesta
  selectAnswer: (answerId: string) => {
    if (!get().isAnswerChecked) {
      set({ selectedAnswer: answerId });
    }
  },
  
  // Comprobar la respuesta seleccionada
  checkAnswer: () => {
    const { questions, currentQuestionIndex, selectedAnswer, correctAnswers } = get();
    if (!selectedAnswer) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.id === selectedAnswer);
    
    if (selectedOption?.isCorrect) {
      set({ 
        isAnswerChecked: true,
        correctAnswers: correctAnswers + 1
      });
    } else {
      set({ isAnswerChecked: true });
    }
  },
  
  // Siguiente pregunta
  nextQuestion: () => {
    const { questions, currentQuestionIndex } = get();
    
    if (currentQuestionIndex < questions.length - 1) {
      set({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedAnswer: null,
        isAnswerChecked: false
      });
    } else {
      // Quiz completado
      set({ quizStatus: 'completed' });
    }
  },
  
  // Reiniciar el quiz
  resetQuiz: () => {
    set({
      questions: [],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswerChecked: false,
      correctAnswers: 0,
      quizStatus: 'idle'
    });
  }
}));
