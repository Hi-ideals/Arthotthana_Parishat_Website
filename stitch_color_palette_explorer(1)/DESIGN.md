---
name: Prestigious Institutional System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777f'
  outline-variant: '#c4c6d0'
  surface-tint: '#455f8a'
  primary: '#000e24'
  on-primary: '#ffffff'
  primary-container: '#00234b'
  on-primary-container: '#718bb9'
  inverse-primary: '#adc7f8'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#0c0d14'
  on-tertiary: '#ffffff'
  tertiary-container: '#22232a'
  on-tertiary-container: '#8a8a93'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f8'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2c4771'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: newsreader
    fontSize: 30px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: workSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style

This design system is built upon the pillars of institutional trust, legacy, and unwavering reliability. It targets an audience that values discretion, expertise, and a high level of service—typically within the finance, legal, or high-end consulting sectors. 

The aesthetic is **Corporate / Modern** with a refined editorial influence. It balances the austerity of traditional professional services with the clarity of contemporary digital interfaces. The visual language favors intentionality over decoration, using "White Space" as a luxury asset to permit content to breathe and signify importance. The emotional response should be one of calm confidence and absolute security.

## Colors

The palette is anchored by **Classic Navy**, providing a deep, stable foundation that evokes authority and intelligence. This is complemented by **Crisp White** backgrounds to maintain a sense of cleanliness and modern precision.

**Gold Accents** are used sparingly as a signal of prestige and "Premium" status. Gold is reserved for high-value calls to action, active states in navigation, or subtle divider highlights. The neutral palette leans toward cool slates and soft grays to maintain the professional atmosphere without introducing the harshness of pure black.

## Typography

The typographic strategy utilizes a "Serif-over-Sans" pairing to achieve a balanced, prestigious look. 

**Newsreader** is the primary serif for all headlines and display text. Its traditional, literary proportions communicate an authoritative and intellectual tone. **Work Sans** serves as the functional workhorse for body copy and UI labels; its neutral, grounded character ensures maximum legibility in data-heavy or complex interfaces. 

For mobile, display sizes are scaled down to maintain readability while preserving the elegant high-contrast ratio of the serif strokes. Label styles frequently use uppercase with increased tracking to create a sense of organized, institutional structure.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to create a centered, "anchored" experience that feels intentional and composed. A 12-column system is used for page layouts, with content usually restricted to a refined 1280px container.

Spacing follows a strict 8px rhythmic scale. Generous vertical margins between sections reinforce the premium positioning of the brand. On mobile devices, the grid transitions to a single-column fluid layout with reduced margins, while internal component padding remains consistent to preserve the "touch-friendly" but professional feel.

## Elevation & Depth

Depth in this design system is conveyed through **Low-Contrast Outlines** and **Tonal Layers** rather than aggressive shadows. This maintains a "flat-but-sophisticated" appearance.

- **Surface Levels:** The base background is always Crisp White (#FFFFFF). Secondary sections or sidebars use a soft Neutral Slate (#F8FAFC) to create a subtle separation of concerns.
- **Outlines:** Cards and containers use 1px solid borders in a light gray (#E2E8F0). 
- **Shadows:** When necessary for temporary overlays (like dropdowns or modals), use a very diffused, low-opacity ambient shadow (Blur: 12px, Color: Primary Navy at 5% opacity).
- **Gold Accents:** A 2px Gold bottom-border may be used on a "Base" card to denote a featured or "Pro" tier status.

## Shapes

The shape language is conservative and disciplined. A **Soft (0.25rem)** corner radius is applied to buttons, input fields, and cards. This slight rounding takes the edge off the "brutality" of a sharp-cornered professional interface without appearing overly casual or playful. 

Interactive elements like chips or tags may use slightly more rounding, but the overall system avoids large radii or pill shapes to keep the aesthetic aligned with traditional architectural and editorial standards.

## Components

- **Buttons:** Primary buttons are Solid Navy with White text. Secondary buttons use a Navy outline with Navy text. The "Prestigious" CTA uses a Solid Gold background with Navy text for maximum contrast and importance.
- **Inputs:** Fields use 1px light gray borders that transition to a 1px Navy border on focus. Labels are always positioned above the field in the `label-caps` style.
- **Cards:** White backgrounds with 1px borders. For high-priority content, a Gold top-accent-bar (4px) may be added.
- **Lists:** Data lists use thin horizontal dividers (1px) in a light gray. Row hover states should use a very pale tint of Navy (2% opacity) to provide feedback without cluttering the UI.
- **Status Indicators:** Use Gold for "Pending" or "Premium," Navy for "Active," and a muted Slate for "Inactive." Avoid bright "traffic light" colors (red/green) unless absolutely necessary for safety or critical error reporting, preferring a more monochromatic approach to status.