---
name: Premium Finboom iOS
colors:
  surface: '#fcf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fcf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44464e'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4c5e86'
  primary: '#00081e'
  on-primary: '#ffffff'
  primary-container: '#0a1f44'
  on-primary-container: '#7687b2'
  inverse-primary: '#b4c6f4'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#150500'
  on-tertiary: '#ffffff'
  tertiary-container: '#391700'
  on-tertiary-container: '#b37c59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b4c6f4'
  on-primary-fixed: '#041a3f'
  on-primary-fixed-variant: '#34466d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbc7'
  tertiary-fixed-dim: '#f8b992'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#673c1e'
  background: '#fcf8fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
  royal-navy: '#0A1F44'
  champagne-gold: '#D4AF37'
  system-red: '#FF3B30'
  system-green: '#34C759'
  surface-gray: '#F2F2F7'
  border-gray: '#C6C6C8'
  glass-bg: rgba(255, 255, 255, 0.7)
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 41px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeric-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  card-gap: 24px
---

## Brand & Style

The design system is engineered to evoke the prestige and reliability of a high-end private banking application. It draws heavily from the **Corporate / Modern** aesthetic, specifically following the Apple Human Interface Guidelines (HIG) to provide an immediate sense of familiarity and "native" performance to iOS users.

The brand personality is **Elite yet Accessible**. It balances the deep, authoritative presence of Royal Navy with the aspirational quality of Champagne Gold. The visual narrative is built on precision, privacy, and clarity, ensuring that complex financial data feels managed rather than overwhelming. High-end touches like glassmorphism and squircle geometries differentiate the product from standard fintech competitors.

## Colors

The palette is anchored by **Royal Navy**, used for primary actions and deep background headers to establish trust. **Champagne Gold** is reserved for premium tier indicators (Pro), success states, and high-value accents, used sparingly to maintain its luxury impact.

The system utilizes a refined gray scale for structural elements:
- **Surface Primary:** `#FFFFFF` for main canvas areas.
- **Surface Subtle:** `#F2F2F7` (iOS System Gray 6) for background grouping and secondary card layers.
- **Semantic Feedback:** Standardized iOS Red and Green are used exclusively for financial performance indicators (Loss/Profit).
- **Glassmorphism:** A semi-transparent white background with a heavy backdrop-blur (20px-30px) is used for the navigation bar and floating headers to create depth.

## Typography

This design system uses **Inter** as a highly legible alternative to SF Pro, maintaining the clean, geometric appearance essential for financial data. 

- **Dynamic Scaling:** Headlines use negative letter-spacing to appear tighter and more professional at larger scales.
- **Financial Focus:** The `numeric-xl` role is dedicated to Net Worth and primary balance displays, utilizing bold weights and tighter tracking to command attention.
- **Hierarchy:** Large Page Titles (Display LG) transition to a smaller, centered navigation title on scroll, mimicking the iOS large-header behavior.
- **Labels:** Small caps with increased letter spacing are used for secondary data labels (e.g., "ASSET CLASS" or "LAST UPDATED").

## Layout & Spacing

The system follows a strict **8pt grid**, ensuring all dimensions, padding, and margins are multiples of 8.

- **Layout Model:** A fluid-width container for mobile and tablet, switching to a centered max-width (1200px) for desktop dashboards.
- **Grid Strategy:** A 12-column grid is used for desktop widgets, where cards typically span 4 or 6 columns. On mobile, all widgets collapse to a single-column stack.
- **Safe Areas:** Adheres to iOS safe area insets for notched devices.
- **Dashboard Rhythm:** Vertical spacing between distinct functional groups (e.g., "Net Worth Summary" vs "Investment Breakdown") is set to 48px to allow for a breathable, high-end feel.

## Elevation & Depth

Hierarchy is achieved through a combination of **Tonal Layers** and **Ambient Shadows**:

- **Level 0 (Base):** The system background (`#F2F2F7`).
- **Level 1 (Cards):** Surface color (`#FFFFFF`) with a very soft, multi-layered shadow (0px 4px 12px rgba(0,0,0,0.05)) and no border.
- **Level 2 (Active/Floating):** Used for modals and floating action buttons. Uses a more pronounced shadow (0px 8px 24px rgba(0,0,0,0.12)).
- **Glassmorphism:** Navigation bars and tab bars use backdrop filters (`blur(20px)`) over a semi-transparent surface to maintain context of the content scrolling beneath.

## Shapes

The design system adopts the **iOS Squircle** aesthetic. 
- **Large Components (Cards, Dashboard Widgets):** Use a 24px radius to feel friendly and modern.
- **Medium Components (Buttons, Input Fields):** Use a 12px radius.
- **Small Components (Chips, Badges):** Use a fully rounded pill shape (999px) for distinct visual categorization.
- **Consistency:** Ensure all nested elements (e.g., a progress bar inside a card) have a radius that is proportionally smaller to maintain visual concentricity.

## Components

- **Buttons:** Primary buttons use Royal Navy background with white text. Secondary buttons use a subtle gray background. Premium (Pro) buttons use a Champagne Gold gradient or solid fill.
- **Cards:** The core of the dashboard. Every card must have a 24px padding and a 24px border-radius. Headlines within cards use `headline-md`.
- **Tab Bar:** A frosted glass bottom bar with centered icons. Active states are indicated by Royal Navy tinting.
- **Chips:** Used for filtering asset classes. Neutral chips use a light gray background; active chips use Royal Navy with white text.
- **Input Fields:** Large, 56px height inputs with 12px radius. Placeholder text uses `body-lg` in a subtle gray.
- **Dashboard Widgets:** Specialized cards containing Sparkline charts. These utilize the Royal Navy for the line color, with a subtle gradient fill underneath.
- **Pro Badge:** A small pill-shaped badge using Champagne Gold background and Royal Navy text, placed in the top right of premium feature cards.