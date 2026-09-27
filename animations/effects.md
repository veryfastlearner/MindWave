# MindWave Home Page - Scroll Animation Effects Plan

## Overview
Create an immersive "tunnel" scrolling experience where content reveals progressively as the user scrolls down. Effects combine scroll-triggered animations, parallax, and staggered entrance animations.

---

## Core Animation Library
**Recommendation**: Use `framer-motion` (already React-native) + `lenis` for smooth scrolling, or pure CSS Scroll-driven Animations (modern, no JS dependency).

---

## Section-by-Section Animation Plan

### 1. Hero Section (Tunnel Entrance)
**Concept**: User starts "inside" the tunnel - content emerges from depth

| Element | Animation | Trigger | Details |
|---------|-----------|---------|---------|
| Background | Parallax zoom/scale | Scroll 0-100vh | `scale(1) → scale(1.15)`, subtle `translateZ` for depth |
| Hero Title "MindWave" | Fade + Slide Up + Blur → Sharp | On load (0-300ms) | `opacity: 0 → 1`, `translateY: 40px → 0`, `filter: blur(8px) → blur(0)` |
| Hero Description | Staggered fade + slide up | After title (100ms delay) | Same as title, `delay: 150ms` |
| Buttons | Staggered scale + fade | After description (100ms delay) | `scale: 0.9 → 1`, `opacity: 0 → 1` |
| Tunnel Vignette | Radial gradient overlay | Scroll progress | `opacity: 0.6 → 0` as user exits hero |

**CSS Variables for Tunnel**:
```css
:root {
  --tunnel-depth: 100vh;
  --vignette-opacity: 0.5;
}
```

---

### 2. Program Section (Cards Dealt from Sides)
**Concept**: Cards fly in from left/right like a dealer placing cards on a table

| Element | Animation | Direction | Details |
|---------|-----------|-----------|---------|
| Section Title | Fade + slide up | Bottom | Standard reveal |
| Feature Items (3 cards) | **Dealer Card Flip** | Alternating L/R | Card 1: `translateX(-120%) + rotateY(45deg) → 0`<br>Card 2: `translateX(120%) + rotateY(-45deg) → 0`<br>Card 3: `translateX(-120%) + rotateY(45deg) → 0` |
| Feature Icons | Scale pop | On card settle | `scale: 0 → 1` with spring |
| Feature Text | Reveal from bottom | Inside card | `clip-path: inset(100% 0 0 0) → inset(0)` |
| Program Image | Parallax + reveal | Scroll into view | `translateY: 60px → 0`, `opacity: 0 → 1`, slight `scale(1.02)` |
| Quote Box | Float in from bottom-right | After image | `translateX(40px) translateY(40px) → 0`, `opacity: 0 → 1` |

**Stagger Timing**: 120ms between each card

---

### 3. Articles Section (Horizontal Card Spread)
**Concept**: Article cards fan out horizontally like a card spread

| Element | Animation | Details |
|---------|-----------|---------|
| Section Header | Fade + slide up | Standard |
| Article Cards (3) | **Fan Spread** | Card 1: `rotateY(-15deg) translateX(-80px)` → `0`<br>Card 2: `translateY(40px)` → `0` (center)<br>Card 3: `rotateY(15deg) translateX(80px)` → `0` |
| Card Content | Staggered reveal | Tag → Date → Title → Excerpt → Link (50ms each) |
| Card Hover | Lift + glow | `translateY(-8px)`, `box-shadow: 0 20px 40px rgba(0,0,0,0.15)` |

---

### 4. Team Section (Dealer's Final Hand)
**Concept**: Team cards dealt in rapid succession, stacking slightly

| Element | Animation | Details |
|---------|-----------|---------|
| Section Title | Fade + slide up | Standard |
| Member Cards (6) | **Rapid Deal** | Stagger: 80ms each<br>Entry: `translateX(-150%) rotate(-5deg) → 0` with spring bounce |
| Avatars | Scale pop | `scale: 0.5 → 1` on card settle |
| Names | Fade up | `opacity: 0 → 1`, `translateY: 10px → 0` |

---

## Global Scroll Effects (Tunnel Atmosphere)

### Background Parallax Layers
```css
/* Multiple background layers moving at different speeds */
.tunnel-layer-1 { transform: translateY(var(--scroll) * 0.1); }   /* Far */
.tunnel-layer-2 { transform: translateY(var(--scroll) * 0.25); }  /* Mid */
.tunnel-layer-3 { transform: translateY(var(--scroll) * 0.5); }   /* Near */
```

### Scroll Progress Indicator
- Thin line at top: `width: 0% → 100%` based on scroll progress
- Color: `--primary` gradient

### Text Reveal Utility Classes
```css
.reveal-blur { filter: blur(12px); opacity: 0; animation: unblur 0.8s forwards; }
.reveal-slide-left { transform: translateX(-60px); opacity: 0; animation: slideIn 0.8s forwards; }
.reveal-slide-right { transform: translateX(60px); opacity: 0; animation: slideIn 0.8s forwards; }
.reveal-scale { transform: scale(0.85); opacity: 0; animation: scaleIn 0.6s forwards; }
@keyframes unblur { to { filter: blur(0); opacity: 1; } }
@keyframes slideIn { to { transform: translateX(0); opacity: 1; } }
@keyframes scaleIn { to { transform: scale(1); opacity: 1; } }
```

---

## Implementation Approach

### Option A: Framer Motion (Recommended for Complex Sequences)
```jsx
// Example: Dealer card animation
<motion.div
  initial={{ x: -400, rotateY: 45, opacity: 0 }}
  whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
>
  <FeatureCard />
</motion.div>
```

### Option B: CSS Scroll-Driven Animations (Modern, Zero-JS)
```css
@scroll-timeline --section-timeline {
  source: selector(#objectifs);
  axis: block;
}

.feature-item:nth-child(1) {
  animation: deal-left linear;
  animation-timeline: --section-timeline;
  animation-range: entry 0% cover 30%;
}
```

### Option C: IntersectionObserver + CSS Classes (Lightweight)
- Add `.in-view` class when element enters viewport
- CSS handles all transitions

---

## Performance Considerations

1. **Use `transform` & `opacity` only** - No layout thrashing
2. **`will-change: transform, opacity`** on animated elements
3. **Reduce motion** - Respect `prefers-reduced-motion`
4. **GPU layers** - `translateZ(0)` or `will-change` for promotion
5. **Lazy-load images** below fold with `loading="lazy"`

---

## Asset Requirements

### Images Needed for Tunnel Effect
- [ ] Hero background: Dark gradient/abstract tunnel texture (WebP, 1920w)
- [ ] Parallax layer 1: Subtle noise/particles (transparent PNG)
- [ ] Parallax layer 2: Blurred shapes/gradients
- [ ] Program section: Already have `mindlab_landscape.png`

### Image Entrance Animations
| Image | Effect |
|-------|--------|
| Hero bg | Slow zoom (ken burns) on scroll |
| Program img | Slide from right + fade, slight rotation |
| Article card images (if added) | Scale up from center on card reveal |
| Team avatars | Pop-in with spring |

---

## Scroll Trigger Zones

```
Viewport Top ────────────────────────────────────────
│ Hero (0-100vh)          │ Tunnel zoom, title reveal
│ Program (100-200vh)     │ Cards dealt L/R
│ Articles (200-300vh)    │ Fan spread horizontal
│ Team (300-400vh)        │ Rapid deal stack
│ Footer                  │ Fade in
Viewport Bottom ────────────────────────────────────
```

---

## Responsive Adjustments

| Breakpoint | Changes |
|------------|---------|
| Mobile (<640px) | Reduce stagger delays, simpler transforms (no 3D rotateY), vertical card stack |
| Tablet (640-1024px) | 2-column article grid, moderate stagger |
| Desktop (>1024px) | Full 3D card flip, horizontal fan spread |

---

## Accessibility

- All animations respect `prefers-reduced-motion: reduce`
- Focus states visible during animations
- Content readable without animations (progressive enhancement)
- Semantic HTML maintained

---

## File Structure (New)

```
animations/
├── effects.md           # This file
├── scroll-animations.css    # Global scroll-driven keyframes
├── reveal-utils.css         # Utility classes for reveals
└── tunnel-bg.css           # Tunnel background layers
```

---

## Next Steps

1. **Install dependencies**: `npm i framer-motion lenis` (if using Option A)
2. **Create CSS files** in `animations/` folder
3. **Wrap sections** with motion components or add data attributes for IntersectionObserver
4. **Test performance** on low-end devices
5. **Add reduced-motion fallbacks**