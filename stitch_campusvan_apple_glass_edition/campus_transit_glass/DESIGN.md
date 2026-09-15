---
name: Campus Transit Glass
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#414754'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#717786'
  outline-variant: '#c0c6d6'
  surface-tint: '#005db8'
  primary: '#005ab3'
  on-primary: '#ffffff'
  primary-container: '#0073e0'
  on-primary-container: '#fefcff'
  inverse-primary: '#aac7ff'
  secondary: '#006e28'
  on-secondary: '#ffffff'
  secondary-container: '#6ffb85'
  on-secondary-container: '#00732a'
  tertiary: '#845000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a66600'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468d'
  secondary-fixed: '#72fe88'
  secondary-fixed-dim: '#53e16f'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531c'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb868'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#faf9fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 54px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 21px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  metric-timer:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
  label-interactive:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system expresses the precision, calm authority, and spatial clarity of high-end Apple hardware interfaces. Built specifically for collegiate transit and safety tracking, the design pairs the crystalline optical depth of visionOS with the rapid, tactile ergonomics of iOS. 

### Brand Personality & Emotional Target
- **Instant Optical Legibility:** Zero cognitive load during rushed commutes across campus, nocturnal walks, or harsh outdoor glare.
- **Calm Reassurance:** Academic transit can be stressful; the interface presents soft, fluid physics, predictable mechanics, and pristine optical transparency that projects absolute security and punctuality.
- **Physical Spatiality:** Interfaces behave like grounded optical glass sheets suspended in real space, reacting with natural inertia, specular light reflections, and authentic kinetic mass.

### Design Movement: Fluid Glassmorphism & Spatial Utility
The system fuses frosted glassmorphism with Cupertino-grade micro-structure. Interfaces are built from translucent frosted substrates (`rgba(255, 255, 255, 0.72)` with deep gaussian backdrop blurs) bound by specular top-lit borders. Real-time dynamic components (live vehicles, spatial radars, pulsing ETA rings) puncture the glass layer with vivid, saturated photon emitters against the muted light-gray canvas.

## Colors

The palette establishes an optical hierarchy between ambient physical environment layers and high-priority transit telemetry:

- **Primary (`#0A84FF`):** Electric iOS/visionOS blue. Reserved exclusively for actionable controls, active vehicle vectors, real-time route pathing, live map pins, and primary selections.
- **Secondary (`#34C759`):** Apple system emerald green. Signals verified driver authentication, validated student digital passes, operational safety checks, and on-time adherence.
- **Tertiary (`#FF9F0A`):** Apple system amber. Communicates capacity warnings (e.g., >85% full), traffic bottlenecks, weather detours, and live arrival delays.
- **Neutral (`#8E8E93`):** Apple system secondary label gray. Provides structural balance across unselected states, secondary tabular metadata, route track backgrounds, and structural divider lines.

### Substrate & Atmospheric Gradients
- **Canvas Base:** Soft, non-glare Apple light gray (`#F2F2F7`).
- **Surface Translucency:** Frosted Glass Primary (`rgba(255, 255, 255, 0.72)`), Frosted Glass Elevated (`rgba(255, 255, 255, 0.85)`), and Glass Inset (`rgba(118, 118, 128, 0.12)`).
- **Glass Specular Bounds:** Top edge highlight `rgba(255, 255, 255, 0.8)` tapering down to `rgba(255, 255, 255, 0.35)`.
- **Text & Content Tone:** Primary Label (`#000000` / `#1C1C1E`), Secondary Label (`#3C3C43` with 60% alpha), Tertiary Muted Label (`#3C3C43` with 30% alpha).

## Typography

Typography relies on geometric clarity, soft terminals, and crisp, Apple-like tracking:

- **Numeral Display (`metric-timer`):** Numerals for live countdown timers (e.g., `04:18 MIN`), vehicle speed telemetry, and arrival clocks receive widened letter spacing (`+0.04em`) and tabular figure settings to prevent jitter when ticks occur every second.
- **Micro Labels (`label-caps`):** Sub-station badges, capacity ratios, and status tickers use strict uppercase treatment with generous tracking (`0.08em`) to guarantee absolute optical definition at small sizes.
- **Hierarchy & Weight:** Strict division between `800` (hero arrival targets), `600/700` (stop waypoints, actionable sheet headers), and `400` (contextual route itineraries and safety manifests).

## Layout & Spacing

The interface applies a bottom-up, thumb-driven fluid layout model tailored for rapid handheld interaction.

### Layout Mechanics & Breakpoints
- **Mobile (< 768px):** Full-screen dynamic vector map viewport overlaid with a fluid, multi-detent floating glass sheet (`bottom: 0`, margin: `1rem` floating or docked bottom safe-area). Controls, seat reservation grids, and tracker rings remain within reachable thumb sweeps.
- **Tablet / Split Screen (768px - 1024px):** Floating spatial navigation rail on the left; active shuttle dispatch and telemetry pane pinned in a frosted floating modal alongside the live map surface.
- **Desktop / Terminal (> 1024px):** Max-width bounded multi-column layout with 24-column internal tracking matrices for fleet coordinators and student dispatcher views.

### Rhythmic Padding Rules
Internal glass containers standardise on `space-md` (16px) for interior chip padding and `space-lg` (24px) for master card boundaries. Element separation follows multiples of 4px, ensuring all touch targets stay at or above the iOS standard 44×44pt bounding box.

## Elevation & Depth

Visual depth is achieved through optical refraction, specular highlights, and ambient light distribution, rather than stark drop shadows:

1. **Substrate Level 0 (Map & Ambient Canvas):** Base rendering engine map tiles with desaturated soft contrast, allowing overlays to dominate.
2. **Glass Level 1 (Surface Sheets & Dynamic Cards):**
   - Backdrop filter: `blur(24px) saturate(180%)`.
   - Fill: `rgba(255, 255, 255, 0.72)`.
   - Border: 1px solid with a linear gradient from `rgba(255, 255, 255, 0.8)` at the top edge to `rgba(255, 255, 255, 0.3)` at the bottom edge.
   - Shadow: Ambient diffuse `0 8px 32px 0 rgba(0, 0, 0, 0.06)`, `0 1px 2px 0 rgba(0, 0, 0, 0.04)`.
3. **Glass Level 2 (Modals, Overlays, Pill Controllers):**
   - Backdrop filter: `blur(36px) saturate(200%)`.
   - Fill: `rgba(255, 255, 255, 0.86)`.
   - Specular Rim: 1px continuous border with `rgba(255, 255, 255, 0.95)` zenith reflection.
   - Shadow: `0 16px 40px -8px rgba(10, 132, 255, 0.12)`, `0 12px 24px -4px rgba(0, 0, 0, 0.08)`.
4. **Active Emitters (Live Vehicles & Beacons):**
   - Saturated glowing rings: `0 0 16px rgba(10, 132, 255, 0.6)`.

## Shapes

The system implements continuous Apple-style rounded forms (squircle continuity) with a primary rating of `3` (Pill-shaped / High Smoothness):

- **Master Pill Containers:** Bottom control islands, action triggers, and primary search bars utilize complete capsule geometry (`border-radius: 9999px`).
- **Telemetry & Route Cards:** Rendered with `28px` to `36px` smooth corner smoothing (`corner-smoothing: 60%`), mirroring modern iPadOS/iOS widgets.
- **Seat Matrix Nodes:** Ergonomic soft capsules (`border-radius: 10px`) sized for touch accuracy.
- **Live State Chips:** Pure mini-capsules (`border-radius: 9999px`).

## Components

### 1. Primary & Pill Buttons
- **Visuals:** Pure pill shape (`roundedness: 3`). Solid primary fills (`#0A84FF`) feature a subtle specular interior glow at the upper hemisphere (`inset 0 1px 0 rgba(255,255,255,0.35)`). Secondary variants use translucent glass (`rgba(255,255,255,0.8)`) with primary-colored labels.
- **Micro-Interactions & Physics:** On pointer down/touch, the button compresses smoothly (`scale(0.96)`) using a spring curve (`tension: 400, friction: 25`). On release, it settles with an overshoot (`scale(1.0)`) and triggers haptic feedback.

### 2. Vehicle Telemetry & Glass Cards
- **Structure:** Floating glass panels displaying ETA, van capacity, driver credential rating, and GPS coordinates.
- **Highlights:** Features a 1px top edge specular hairline (`rgba(255, 255, 255, 0.8)`), providing a glass lip illusion that catches overhead light.
- **Dynamic Content:** Nested live badges for occupancy rates (e.g., `8/12 SEATS`) that automatically shift from Neutral/Secondary to Amber (`#FF9F0A`) when capacity passes 80%.

### 3. Interactive Seat Matrix
- **Layout:** Orthographic seat layout of the shuttle (driver cab + passenger rows).
- **Seat States:**
  - *Available:* Semi-transparent glass disc (`rgba(118, 118, 128, 0.12)`) with a fine border.
  - *Occupied:* Muted opaque slate with low contrast (`#E5E5EA`).
  - *Selected:* Saturated `#0A84FF` fill with a subtle pulse animation and glowing ambient shadow (`0 0 12px rgba(10, 132, 255, 0.4)`).
  - *Reserved / Safety Accessible:* Marked with emerald green `#34C759` wheelchair or verified icon overlay.

### 4. Live Map Tracker Pins & Waypoints
- **Van Pin:** Saturated electric blue circular node encircled by two expanding, semi-transparent radar waves that pulse using spring damping. The center houses a directional navigation arrow oriented to the vehicle's heading.
- **Stop Indicators:** Translucent white glass dots rimmed with dark graphite, connecting to the route path via an active neon-blue polyline (`stroke-width: 4px`, `drop-shadow: 0 2px 8px rgba(10,132,255,0.5)`).

### 5. Verified Security Badges & Chips
- **Visuals:** Mini-pill badge displaying a shield or lock icon alongside verified text (e.g., "CAMPUS POLICE MONITORED" or "VERIFIED OPERATOR").
- **Tonal Treatment:** Background in soft emerald glass tint (`rgba(52, 199, 89, 0.14)`), 1px stroke (`rgba(52, 199, 89, 0.3)`), and text in Apple System Green (`#34C759`).

### 6. Fluid Detent Sheets (Bottom Drawers)
- **Gestures:** Draggable drawer supporting three rest states (Peek: 120px, Split: 420px, Fullscreen: 92vh) that snaps smoothly via iOS spring physics.
- **Handle:** Frosted pill grab bar (`rgba(60, 60, 67, 0.3)`) nested at the top center.

### 7. Form Controls & Toggle Filters
- **Switches:** Apple system toggle style (51×31pt), active state filled with `#0A84FF` and a floating pure white circular knob backed by a soft drop shadow.
- **Segmented Controls:** Frosted inset container with an active white glass pill that slides behind selected choices using spring-driven horizontal translation.