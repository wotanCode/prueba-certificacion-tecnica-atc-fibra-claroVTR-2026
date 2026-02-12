# 📚 Aplicación de Práctica - Certificación Técnica ATC Fibra Claro VTR 2026

> ⚠️ **IMPORTANTE: ESTA ES UNA APLICACIÓN DE PRÁCTICA**
>
> Esta NO es la certificación oficial de Claro VTR. Es una quiz de **EJEMPLO Y PRÁCTICA** creada para ayudar a los técnicos a prepararse y estudiar para la certificación técnica oficial de ATC Fibra Claro VTR 2026.

---

## 📖 ¿Qué es este proyecto?

Esta es una **aplicación web interactiva de cuestionario** diseñada como **herramienta de estudio y práctica** para quienes se preparan para la certificación técnica de ATC Fibra Claro VTR 2026.

### 🎯 Propósito

- ✅ **Practicar** con preguntas similares a las de la certificación oficial
- ✅ **Estudiar** los temas técnicos de fibra óptica, instalación y reparación
- ✅ **Autoevaluarse** para identificar áreas de mejora
- ✅ **Familiarizarse** con el formato de preguntas tipo quiz

---

## 🚀 Características de la Aplicación

### Funcionalidades

- **98 preguntas** basadas en el material de estudio
- **Orden aleatorio** de preguntas en cada sesión
- **Respuestas mezcladas** (excepto preguntas Verdadero/Falso)
- **Validación instantánea** con feedback visual (verde ✅ / rojo ❌)
- **Resultados detallados** al finalizar el cuestionario
- **Umbral de aprobación del 75%** (similar al examen real)
- **Interfaz moderna y responsive** para todos los dispositivos
- **Posibilidad de reintentar** cuantas veces quieras

### Tipos de Preguntas

1. **Verdadero/Falso**: Preguntas con dos opciones
2. **Opción Múltiple**: Preguntas con 4 opciones (a, b, c, d)

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con tecnologías web modernas:

| Tecnología            | Propósito                                          | Versión |
| --------------------- | -------------------------------------------------- | ------- |
| **React**             | Biblioteca de UI para construir la interfaz        | 18.x    |
| **Vite**              | Build tool y servidor de desarrollo ultrarrápido   | 7.x     |
| **Tailwind CSS**      | Framework de CSS para estilos modernos             | 3.x     |
| **Zustand**           | Librería de gestión de estado global (lightweight) | 5.x     |
| **JavaScript (ES6+)** | Lenguaje de programación                           | -       |

### ¿Por qué estas tecnologías?

- **React**: Permite crear una interfaz interactiva y dinámica
- **Vite**: Proporciona un desarrollo rápido con hot reload instantáneo
- **Tailwind CSS**: Facilita crear diseños modernos con efectos glassmorphism y gradientes
- **Zustand**: Maneja el estado del quiz de forma simple y eficiente

---

## 📦 Instalación y Ejecución Local

### Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)

### Paso 1: Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/wotanCode/prueba-certificacion-tecnica-atc-fibra-claroVTR-2026.git

# Entrar a la carpeta del proyecto
cd prueba-certificacion-tecnica-atc-fibra-claroVTR-2026
```

### Paso 2: Instalar Dependencias

```bash
# Entrar a la carpeta de la aplicación
cd quiz-app

# Instalar todas las dependencias
npm install
```

⏱️ _Este proceso puede tomar 1-2 minutos dependiendo de tu conexión a internet_

### Paso 3: Ejecutar en Modo Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

### Paso 4: Abrir en el Navegador

Abre tu navegador favorito y ve a:

```
http://localhost:3000
```

¡Listo! La aplicación debería estar funcionando.

---

## 🎮 Cómo Usar la Aplicación

1. **Pantalla de Bienvenida**: Haz clic en "Iniciar cuestionario"
2. **Responder Preguntas**:
   - Lee cada pregunta cuidadosamente
   - Selecciona una opción (radio button)
   - Haz clic en "Comprobar"
3. **Ver Feedback**:
   - Verde ✅ = Respuesta correcta
   - Rojo ❌ = Respuesta incorrecta
4. **Continuar**: Haz clic en "Siguiente pregunta"
5. **Resultados Finales**: Al terminar verás:
   - Porcentaje obtenido
   - Total de respuestas correctas
   - Total de respuestas incorrectas
   - Estado: Aprobado ✅ (≥75%) o Reprobado ❌ (<75%)
6. **Reintentar**: Puedes volver a intentar cuantas veces quieras

---

## 📁 Estructura del Proyecto

```
quiz-app/
├── src/
│   ├── components/              # Componentes de React
│   │   ├── WelcomeScreen.jsx   # Pantalla inicial
│   │   ├── QuizScreen.jsx      # Pantalla del cuestionario
│   │   ├── ResultsScreen.jsx   # Pantalla de resultados
│   │   └── Footer.jsx          # Footer con créditos
│   ├── store/
│   │   └── quizStore.js        # Estado global (Zustand)
│   ├── data/
│   │   └── questions.json      # 98 preguntas del quiz
│   ├── App.jsx                 # Componente raíz
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── public/                     # Archivos estáticos
├── index.html                 # HTML principal
├── package.json              # Dependencias del proyecto
├── tailwind.config.js        # Configuración de Tailwind
├── postcss.config.js         # Configuración de PostCSS
└── vite.config.js           # Configuración de Vite
```

---

## 🎨 Diseño y Experiencia de Usuario

La aplicación cuenta con un diseño moderno que incluye:

- **Glassmorphism**: Efectos de cristal esmerilado translúcido
- **Gradientes vibrantes**: Colores púrpura, rosa y azul
- **Animaciones suaves**: Transiciones y efectos hover
- **Barra de progreso**: Muestra tu avance en tiempo real
- **Responsive Design**: Se adapta a móviles, tablets y desktop
- **Feedback visual inmediato**: Colores verde/rojo para respuestas

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo (puerto 5173)

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza el build de producción

# Otros
npm run lint         # Ejecuta el linter de código
```

---

## 📚 Contenido del Cuestionario

Las 98 preguntas cubren temas como:

- ✅ Protocolo de atención al cliente
- ✅ Procedimientos de instalación FTTH
- ✅ Reparación de servicios (ONT offline, ONT no enciende)
- ✅ Mediciones eléctricas y ópticas
- ✅ Herramientas y equipos técnicos
- ✅ Seguridad y prevención de riesgos
- ✅ Componentes de red (CTO, splitters, ONT, OLT)
- ✅ Fibra óptica y tecnología GPON
- ✅ Confección de conectores
- ✅ Tendido de cable y normativas

---

## 🤝 Contribuir

Si deseas mejorar esta herramienta de práctica:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MejoraNueva`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/MejoraNueva`)
5. Abre un Pull Request

---

## ⚖️ Descargo de Responsabilidad

Esta aplicación es un **proyecto educativo de práctica** creado de forma independiente. No está afiliada, respaldada ni certificada por Claro VTR. El contenido se basa en material de estudio disponible y tiene fines exclusivamente de práctica y preparación personal.

**Para la certificación oficial**, consulta con tu supervisor o el departamento de capacitación de Claro VTR.

---

## 👨‍💻 Autor

**Pedro Yanez**

- GitHub: [@wotanCode](https://github.com/wotanCode)
- Repositorio: [prueba-certificacion-tecnica-atc-fibra-claroVTR-2026](https://github.com/wotanCode/prueba-certificacion-tecnica-atc-fibra-claroVTR-2026)

---

## 📝 Licencia

MIT

---

<div align="center">

**¡Buena suerte en tu preparación! 🚀**

_Creado con ❤️ para ayudar a los técnicos en su preparación_

</div>
