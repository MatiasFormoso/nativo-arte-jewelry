# 🎯 Guía Mobile-Responsive para Hero, Header y Botones Flotantes

Esta guía contiene las configuraciones probadas que funcionan perfectamente en todos los dispositivos.

## 📱 HERO SECTION - Configuración Full Screen

### HTML/JSX Structure
```jsx
<section id="hero" className="relative overflow-hidden">
  <Image
    src="/hero-image.jpg"
    alt="Hero background"
    fill
    priority
    className="object-cover"
    quality={90}
    sizes="100vw"
  />
  {/* Overlay y contenido aquí */}
</section>
```

### CSS Global (globals.css)
```css
#hero {
  position: relative;
  overflow: hidden;
  height: 100dvh;
  min-height: 100dvh;
  max-height: 100dvh;
}

#hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Mobile fix */
@media (max-width: 768px) {
  #hero {
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
    position: relative;
    overflow: hidden;
  }
  
  #hero img {
    height: 100% !important;
    min-height: 100% !important;
    max-height: 100% !important;
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
}

/* iOS Fix */
@supports (-webkit-touch-callout: none) {
  #hero {
    will-change: transform;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  
  @media (max-width: 768px) {
    #hero {
      height: 100dvh !important;
      min-height: 100dvh !important;
      max-height: 100dvh !important;
    }
  }
}

@supports not (height: 100dvh) {
  #hero {
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
  }
}
```

### Tipografía Responsive
```jsx
// Badge
className="text-sm sm:text-base"

// Título principal
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8"

// Subtitle
className="text-sm sm:text-base md:text-lg"

// Espaciado
className="mb-10 md:mb-16"
```

---

## 🎴 HEADER - Configuración Dinámica

### Altura Responsive
```jsx
<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="flex items-center justify-between h-20 sm:h-24">
      {/* Contenido */}
    </div>
  </div>
</nav>
```

### Logo Responsive
```jsx
<Link className="text-xl sm:text-2xl transition-all duration-200">
  Logo
</Link>
```

### Detección de Scroll con IntersectionObserver
```jsx
useEffect(() => {
  const heroElement = document.getElementById('hero');
  if (!heroElement || !isOnHero) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setHasScrolled(!entry.isIntersecting);
      });
    },
    {
      root: null,
      rootMargin: '-80px 0px 0px 0px', // Offset para el header
      threshold: 0
    }
  );
  
  observer.observe(heroElement);
  
  return () => observer.disconnect();
}, [isOnHero]);
```

### Estilos Dinámicos
```jsx
const showWhiteHeader = hasScrolled || !isOnHero;

<nav className={
  showWhiteHeader 
    ? 'bg-white backdrop-blur-md border-b shadow-sm' 
    : 'bg-white/5 backdrop-blur-md border-b border-white/10'
}>
```

---

## 💬 BOTÓN FLOTANTE WHATSAPP

### Configuración
```jsx
<motion.a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, scale: 0.8, y: 0 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ 
    type: "spring", 
    stiffness: 300, 
    damping: 30,
    duration: 0.4
  }}
>
  <MessageCircle className="w-6 h-6 text-white" />
</motion.a>
```

### Mostrar/Ocultar con Scroll
```jsx
const [hasScrolled, setHasScrolled] = useState(false);

useEffect(() => {
  const heroElement = document.getElementById('hero');
  if (!heroElement) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setHasScrolled(!entry.isIntersecting);
      });
    },
    { root: null, rootMargin: '0px', threshold: 0 }
  );
  
  observer.observe(heroElement);
  return () => observer.disconnect();
}, []);

// Renderizar solo cuando hasScrolled es true
<AnimatePresence mode="wait">
  {hasScrolled && <Button />}
</AnimatePresence>
```

---

## 🎨 BREAKPOINTS ESTÁNDAR

```css
/* Tailwind CSS */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
```

---

## ✅ CHECKLIST DE BEST PRACTICES

### Hero
- ✅ Usar `100vh` o `100dvh` para altura
- ✅ `position: absolute` para imagen
- ✅ `object-fit: cover` para la imagen
- ✅ Fixes específicos para iOS
- ✅ Padding responsive en contenido: `px-4 sm:px-6 lg:px-8`
- ✅ Tipografía escalable con Tailwind responsive classes

### Header
- ✅ Altura responsive: `h-20 sm:h-24`
- ✅ IntersectionObserver para detección de scroll
- ✅ Transiciones suaves con `transition-all duration-300`
- ✅ z-index alto: `z-50`
- ✅ Backdrop blur para efecto glassmorphism

### Botones Flotantes
- ✅ Posición fija: `fixed bottom-8 right-8`
- ✅ Tamaño consistente: `w-14 h-14`
- ✅ Animación spring de Framer Motion
- ✅ Mostrar/ocultar con IntersectionObserver
- ✅ Min height para touch targets: `min-h-[48px]`

### Botones Interactivos
- ✅ Min height para accesibilidad: `min-h-[48px]`
- ✅ Hover states con `hover:` classes
- ✅ Transiciones en hover: `transition-all duration-200`
- ✅ Hover scale: `hover:scale-105` (1.05x)
- ✅ Active scale: `active:scale-95` (0.95x)

---

## 📝 PROMPT PARA NUEVOS PROYECTOS

```
Necesito implementar un sistema mobile-responsive completo que incluya:

1. HERO SECTION con altura full screen (100vh) que funcione en:
   - Desktop
   - Mobile
   - iOS Safari (con fixes específicos)
   - Usar Tailwind classes: text-4xl sm:text-5xl md:text-6xl lg:text-7xl

2. HEADER dinámico con:
   - Altura responsive: h-20 sm:h-24
   - IntersectionObserver para detectar scroll
   - Cambio de estilos cuando el usuario scrollea
   - z-index 50 y backdrop blur

3. BOTÓN FLOTANTE de WhatsApp que:
   - Se muestre solo después del scroll (oculto en hero)
   - Use Framer Motion con animación spring
   - Tamaño fijo: w-14 h-14
   - Posición: fixed bottom-8 right-8
   - Color: bg-[#25D366]

4. BOTONES principales con:
   - Min height 48px para accesibilidad
   - Hover scale 1.05
   - Active scale 0.95
   - Transiciones suaves

Usar IntersectionObserver en todos los casos para mejor performance.
```

---

## 🎯 RECURSOS CLAVE

- **Tailwind Breakpoints**: https://tailwindcss.com/docs/responsive-design
- **Framer Motion Spring**: https://www.framer.com/motion/transition/
- **Intersection Observer**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **iOS Viewport Fix**: https://benfrain.com/preventing-mobile-browser-auto-zoom-input-focus/

