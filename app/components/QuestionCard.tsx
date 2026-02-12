'use client';

import { useQuizStore } from '@/app/store/quizStore';

export default function QuestionCard() {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    isAnswerChecked,
    selectAnswer,
    checkAnswer,
    nextQuestion
  } = useQuizStore();
  
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) return null;
  
  // Mapeo de letras para las opciones (siempre A, B, C, D)
  const optionLetters = ['A', 'B', 'C', 'D'];
  
  const getOptionStyle = (optionId: string, isCorrect: boolean) => {
    if (!isAnswerChecked) {
      return selectedAnswer === optionId
        ? 'border-purple-500 bg-purple-500/10'
        : 'border-slate-700 hover:border-slate-600';
    }
    
    // Después de comprobar
    if (selectedAnswer === optionId) {
      return isCorrect
        ? 'border-green-500 bg-green-500/10'
        : 'border-red-500 bg-red-500/10';
    }
    
    return 'border-slate-700 opacity-50';
  };
  
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      <div className="w-full max-w-3xl space-y-6">
        {/* Progreso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Pregunta */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl text-slate-100 leading-relaxed">
            {currentQuestion.text}
          </h2>
        </div>
        
        {/* Opciones */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const letter = optionLetters[index];
            const isSelected = selectedAnswer === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                disabled={isAnswerChecked}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 
                           ${getOptionStyle(option.id, option.isCorrect)}
                           ${isAnswerChecked ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}
                           ${isSelected && !isAnswerChecked ? 'transform scale-[1.02]' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Radio button visual */}
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5
                                  ${isSelected 
                                    ? isAnswerChecked
                                      ? option.isCorrect
                                        ? 'border-green-500 bg-green-500'
                                        : 'border-red-500 bg-red-500'
                                      : 'border-purple-500 bg-purple-500'
                                    : 'border-slate-500'}`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  
                  {/* Texto de la opción */}
                  <div className="flex-1">
                    <span className="font-semibold text-purple-400 mr-2">{letter}.</span>
                    <span className="text-slate-200">{option.text}</span>
                  </div>
                  
                  {/* Icono de resultado */}
                  {isAnswerChecked && isSelected && (
                    <div className="flex-shrink-0">
                      {option.isCorrect ? (
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Botón de acción */}
        <div className="pt-4">
          {!isAnswerChecked ? (
            <button
              onClick={checkAnswer}
              disabled={!selectedAnswer}
              className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-200
                         ${selectedAnswer
                           ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] active:scale-95'
                           : 'bg-slate-700 text-slate-400 cursor-not-allowed'}`}
            >
              Comprobar
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="w-full py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                       hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/50 
                       transform hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
