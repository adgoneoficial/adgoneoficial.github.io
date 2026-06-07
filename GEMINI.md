# ParZombies - Project Context & Architecture

## Objetivo
Landing page de alto impacto visual para la marca **ParZombies**, inspirada en la cultura urbana, rap underground colombiano y estética DIY/analógica.

## Arquitectura
- **Framework:** React 19 + TypeScript.
- **Build Tool:** Vite 6.
- **Styling:** CSS puro con variables nativas y CSS Modules.
- **Animaciones:** CSS Transitions y Keyframes (60fps garantizados).
- **Despliegue:** Optimizado para GitHub Pages.

## Convenciones y Reglas
1. **Simplicidad:** Prohibido el uso de librerías de componentes o frameworks de CSS (No Tailwind, No Bootstrap).
2. **Rendimiento:** Solo se animan propiedades de composición (`transform`, `opacity`) para evitar *layout thrashing*.
3. **Estética:** Estilo "sucio", CRT, ruido analógico y texturas desgastadas.
4. **Código:**
   - Tipado estricto en TypeScript.
   - Componentes funcionales pequeños.
   - Imports ordenados (React > Terceros > Local).

## Estructura de Carpetas
```text
src/
├── assets/       # Fuentes y texturas locales
├── components/   # Componentes de UI atómicos
├── hooks/        # Lógica de animación/interacción
├── styles/       # CSS Global y variables
└── App.tsx       # Orquestador de la landing
```

## Decisiones Técnicas
- **Zoom de fondo:** Implementado mediante `scale` en el contenedor de imagen fija para evitar repaints.
- **Efecto CRT:** Capa de superposición con scanlines y animación de flicker en el `stage`.
- **Zero Deps:** Se eliminan Three.js, Framer Motion y Tailwind para reducir el bundle en un ~95%.