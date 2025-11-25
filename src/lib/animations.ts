/**
 * Sistema de constantes para animaciones profesionales
 * Mantiene consistencia en duraciones, easing y delays en todo el proyecto
 */

// Easing functions profesionales
export const easings = {
  // Suave y elegante - para la mayoría de elementos
  smooth: [0.4, 0, 0.2, 1] as const,
  // Entrada suave - para elementos que aparecen
  easeIn: [0.4, 0, 1, 1] as const,
  // Salida suave - para elementos que desaparecen
  easeOut: [0, 0, 0.2, 1] as const,
  // Entrada y salida - para transiciones
  easeInOut: [0.4, 0, 0.2, 1] as const,
  // Spring suave - para interacciones naturales
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
  // Spring más suave - para elementos grandes
  springGentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
  },
} as const;

// Duraciones estándar (en segundos)
export const durations = {
  fast: 0.2,      // 200ms - micro-interacciones
  normal: 0.3,    // 300ms - hover states
  medium: 0.4,   // 400ms - transiciones estándar
  slow: 0.6,      // 600ms - entradas importantes
  slower: 0.8,    // 800ms - elementos destacados
} as const;

// Delays para stagger effects
export const delays = {
  tiny: 0.03,     // 30ms - stagger muy rápido
  small: 0.05,    // 50ms - stagger estándar
  medium: 0.1,    // 100ms - stagger medio
  large: 0.15,    // 150ms - stagger lento
} as const;

// Variantes de animación reutilizables
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Transiciones estándar
export const transitions = {
  default: {
    duration: durations.medium,
    ease: easings.smooth,
  },
  fast: {
    duration: durations.fast,
    ease: easings.smooth,
  },
  slow: {
    duration: durations.slow,
    ease: easings.smooth,
  },
  spring: easings.spring,
  springGentle: easings.springGentle,
} as const;

// Hover effects estándar
export const hoverEffects = {
  lift: {
    scale: 1.02,
    y: -2,
  },
  liftStrong: {
    scale: 1.05,
    y: -4,
  },
  scale: {
    scale: 1.05,
  },
  scaleSubtle: {
    scale: 1.02,
  },
} as const;

// Tap effects estándar
export const tapEffects = {
  press: {
    scale: 0.98,
  },
  pressStrong: {
    scale: 0.95,
  },
} as const;

