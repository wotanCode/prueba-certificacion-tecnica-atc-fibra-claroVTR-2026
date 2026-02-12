export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-gradient-to-t from-slate-900 to-transparent">
      <p className="text-center text-sm text-slate-400">
        Creado con ❤️ por{' '}
        <a 
          href="https://github.com/wotanCode/prueba-certificacion-tecnica-atc-fibra-claroVTR-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold hover:from-purple-300 hover:to-pink-300 transition-all duration-200 hover:scale-105 inline-block"
        >
          Pedro Yanez
        </a>
      </p>
    </footer>
  );
}
