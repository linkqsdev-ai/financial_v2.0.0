---
name: Premium Finboom iOS
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444650'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#685d4a'
  on-secondary: '#ffffff'
  secondary-container: '#eddec5'
  on-secondary-container: '#6c614e'
  tertiary: '#1d1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#362500'
  on-tertiary-container: '#ad8a46'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#f0e0c8'
  secondary-fixed-dim: '#d3c5ad'
  on-secondary-fixed: '#221b0b'
  on-secondary-fixed-variant: '#4f4533'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-display:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-main: 1.25rem
  gutter: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 1.5rem
---

## Brand & Style

This design system is engineered for a high-net-worth audience focused on FIRE (Financial Independence, Retire Early) objectives. The brand personality is authoritative yet encouraging—blending the reliability of a traditional private bank with the velocity of a modern fintech accelerator. 

The visual style is **Corporate Modern** with a focus on **Tonal Layering**. It prioritizes clarity and precision, utilizing a refined color palette to signal status and progress without visual clutter. The interface should feel expensive, utilizing ample whitespace and intentional "Champagne Gold" accents to denote premium features and successful milestones.

## Colors

The core identity is anchored by **Royal Navy** (#002366), used for primary actions, navigation headers, and grounding elements. **Champagne Gold** (#F7E7CE) and its deeper variant **Gold Leaf** (#C5A059) are reserved for "Premium" states, progress indicators, and call-to-action highlights.

To support FIRE tracking, a semantic status system is implemented:
- **Success (Emerald Deep):** Used for savings rates exceeding 50% and "on-track" goal status.
- **Warning (Amber):** Indicates portfolio allocation deviation or falling 5-10% behind savings targets.
- **Critical (Crimson):** High-priority alerts for insurance gaps or emergency fund depletion.

The background utilizes a soft neutral off-white to reduce eye strain during long sessions of data analysis.

## Typography

The typography system is split to balance elegance with functional density. 
- **Manrope** is used for headlines to provide a modern, stable feel.
- **Hanken Grotesk** serves as the primary body face, offering high legibility for educational content and financial news.
- **JetBrains Mono** is introduced specifically for financial figures and tabular data. The monospaced nature ensures that decimal points align vertically in lists, making comparison of balances and savings rates instantaneous.

For iOS optimization, the `headline-lg` scales to 28px on mobile devices to preserve screen real estate for data visualizations.

## Layout & Spacing

The layout follows a 4-column grid for mobile and an 8-column grid for tablet (iPad) views. 

- **Horizontal Margins:** A standard 20px (1.25rem) margin is applied to the outer edges of the screen to ensure content does not hit the bezel.
- **Vertical Rhythm:** Elements are spaced using an 8px base unit. Cards containing financial metrics should use "stack-md" (16px) internal padding to maintain a sense of openness despite high data density.
- **Component Density:** Lists of transactions use a "compact" vertical padding (12px) to allow more records to be visible at once without scrolling.

## Elevation & Depth

This design system adopts a **Material 3-inspired Tonal Elevation** model. Depth is not communicated through heavy shadows, but through surface color shifts and subtle, high-diffusion shadows.

- **Level 0 (Surface):** The main background color (#F8F9FA).
- **Level 1 (Cards):** Slightly elevated using a 4% primary color tint overlay and a soft shadow (Blur: 8px, Y: 2px, Opacity: 4% Navy).
- **Level 2 (Interactive/Active):** Higher elevation for elements currently being interacted with, using an 8% tint and a more pronounced shadow (Blur: 16px, Y: 4px, Opacity: 8% Navy).

Avoid using borders for cards; use the subtle tonal difference to define boundaries.

## Shapes

The shape language is sophisticated and approachable. A **Rounded** corner radius (0.5rem) is the standard for primary containers and buttons. Large dashboard cards (e.g., Net Worth Overview) should use `rounded-xl` (1.5rem) to create a distinct, modern container feel. Smaller elements like input fields and tags use the base 0.5rem to maintain a clean, professional profile.

## Components

### FIRE Success Cards
Dashboard cards specifically for FIRE tracking must feature a 4px left-accent border using the semantic status colors (Success, Warning, Critical). The top-right corner of these cards should display the specific "percentage of goal" using the `data-display` typography.

### Buttons
- **Primary:** Royal Navy background with White text.
- **Secondary:** Transparent background with a 1px Royal Navy border.
- **Premium:** Champagne Gold background with Royal Navy text.

### Input Fields
Underlined or subtly boxed with a 1px border in a light-neutral shade. When focused, the border transitions to Royal Navy. Labels should use the `data-label` style for a technical, precise feel.

### Progress Bars
Track background should be a 10% opacity version of the primary color. The filler should use a gradient transition from Gold Leaf to Champagne Gold for "Premium" goals, or solid Status colors for "Savings Rate" metrics.

### Chips & Tags
Small, pill-shaped indicators for asset classes (e.g., "S&P 500", "Real Estate"). Use a light gray background with Navy text to keep the focus on the primary data.