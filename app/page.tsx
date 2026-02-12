'use client';

import { useQuizStore } from '@/app/store/quizStore';
import StartScreen from '@/app/components/StartScreen';
import QuestionCard from '@/app/components/QuestionCard';
import ResultScreen from '@/app/components/ResultScreen';
import Footer from '@/app/components/Footer';

export default function Home() {
  const quizStatus = useQuizStore(state => state.quizStatus);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {quizStatus === 'idle' && <StartScreen />}
      {quizStatus === 'in-progress' && <QuestionCard />}
      {quizStatus === 'completed' && <ResultScreen />}
      
      <Footer />
    </main>
  );
}
