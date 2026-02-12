'use client';

import { useQuizStore } from '@/app/store/quizStore';

export default function StartScreen() {
  const startQuiz = useQuizStore(state => state.startQuiz);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Título principal */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Quiz Certificación Técnica
          </h1>
          <p className="text-xl text-slate-300">ATC Fibra Claro VTR 2026</p>
        </div>
        
        {/* Descripción */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <p className="text-slate-300 leading-relaxed">
            Prepárate para demostrar tus conocimientos técnicos sobre instalaciones de fibra óptica, 
            protocolos de atención al cliente y mejores prácticas en el campo.
          </p>
        </div>
        
        {/* Botón comenzar */}
        <button
          onClick={startQuiz}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl 
                     hover:from-blue-600 hover:to-purple-700 
                     transform hover:scale-105 active:scale-95 
                     transition-all duration-200 
                     shadow-lg hover:shadow-purple-500/50"
        >
          <span className="relative z-10">Comenzar</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
        </button>
      </div>
    </div>
  );
}
