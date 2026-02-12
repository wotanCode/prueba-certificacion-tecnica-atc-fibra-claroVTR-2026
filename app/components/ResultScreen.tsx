'use client';

import { useQuizStore } from '@/app/store/quizStore';

export default function ResultScreen() {
  const { questions, correctAnswers, resetQuiz } = useQuizStore();
  
  const totalQuestions = questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPassed = percentage >= 75;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
            ¡Quiz Completado!
          </h1>
          <p className="text-slate-400">Has respondido todas las preguntas</p>
        </div>
        
        {/* Resultado principal */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-slate-700 text-center space-y-6">
          {/* Porcentaje circular */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              {/* Círculo de fondo */}
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-slate-700"
                />
                {/* Círculo de progreso */}
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                  className={isPassed ? 'text-green-500' : 'text-red-500'}
                  strokeLinecap="round"
                />
              </svg>
              {/* Texto del porcentaje */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
                    {percentage}%
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {correctAnswers}/{totalQuestions}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Estado de aprobación */}
          <div className="space-y-3">
            <div className={`text-3xl font-bold ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
              {isPassed ? '✓ APROBADO' : '✗ REPROBADO'}
            </div>
            <p className="text-slate-300">
              {isPassed 
                ? '¡Excelente trabajo! Has demostrado un gran conocimiento.' 
                : 'Necesitas al menos 75% para aprobar. ¡Sigue estudiando!'}
            </p>
          </div>
        </div>
        
        {/* Detalles */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-green-500">{correctAnswers}</div>
            <div className="text-sm text-slate-400">Correctas</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-red-500">{totalQuestions - correctAnswers}</div>
            <div className="text-sm text-slate-400">Incorrectas</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-blue-500">{totalQuestions}</div>
            <div className="text-sm text-slate-400">Total</div>
          </div>
        </div>
        
        {/* Botón reiniciar */}
        <button
          onClick={resetQuiz}
          className="w-full py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                   hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 
                   transform hover:scale-[1.02] active:scale-95 transition-all duration-200"
        >
          Reiniciar Cuestionario
        </button>
      </div>
    </div>
  );
}
