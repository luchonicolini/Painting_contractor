---
name: Florida Architectural Sapphire
colors:
  # Foundation — Deep Architectural Navy
  primary: '#0B192C'
  on-primary: '#FFFFFF'
  primary-dark: '#06101E'
  primary-light: '#162842'

  # Conversion accent — Royal Sapphire (the single CTA color)
  secondary: '#1D4ED8'
  on-secondary: '#FFFFFF'
  secondary-hover: '#1E40AF'
  secondary-container: '#EFF6FF'

  # Support accent — Sky / Aegean
  tertiary: '#0284C7'
  on-tertiary: '#FFFFFF'
  tertiary-hover: '#0369A1'
  tertiary-container: '#E0F2FE'

  # Neutrals & surfaces
  background: '#FFFFFF'
  surface: '#FFFFFF'
  surface-container: '#F8FAFC'
  on-surface: '#0B192C'
  on-surface-variant: '#334155'
  outline: '#64748B'
  outline-variant: '#E2E8F0'

  error: '#BA1A1A'
  on-error: '#FFFFFF'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses high-end residential and commercial architectural finishing across South Florida. It combines the tailored precision of modern luxury estates with the warmth and sun-drenched permanence of coastal architecture. The aesthetic diverges sharply from typical trade contractor clichés—avoiding paint rollers, generic splash icons, and aggressive yellow badge bursts—in favor of editorial composition, expansive air, structured geometry, and refined materials.

The emotional tone balances institutional trustworthiness, generational craft, and effortless tropical sophistication. Layouts prioritize crisp boundaries, immaculate white space, and deliberate contrasts. Architectural photography anchors the interface, balanced by a deep nautical foundation and a single decisive Sapphire accent reserved for conversion.

## Colors

- **Deep Architectural Navy (`#0B192C` - Primary):** Serves as the authoritative backbone. Used for high-level branding, prominent headlines, dark container states, footers, and key navigational surfaces.
- **Royal Sapphire (`#1D4ED8` - Secondary / Conversion Accent):** The single, strictly allocated accent for critical calls-to-action (e.g., "Get an Estimate", "Request a Free Quote"), active indicators, and high-priority links. Nothing else competes for this color.
- **Aegean Sky (`#0284C7` - Tertiary / Support Accent):** A restrained, salt-air accent used for trust marks, section eyebrows, location markers, and quiet interactive states.
- **Slate (`#334155`) & Muted (`#64748B` - Neutrals):** Calibrated for long-form readability, metadata, and secondary UI labels on light backgrounds.
- **Alabaster Canvas (`#F8FAFC` - Background Tint):** An off-white, light-reflective base that provides a gallery-level canvas for photography and alternating sections.
- **Surface Crisp White (`#FFFFFF`):** High-level elevation surface for cards, modals, and input fields.
- **Subtle Border (`#E2E8F0`):** Fine architectural line-work that defines compartments without visual heaviness.

> **Note on real yellow/gold:** For genuine amber or gold (star ratings, celebratory accents), use Tailwind's default `amber-*` palette. The brand tokens are blue by design and were once misnamed `amber`/`gold`; those legacy aliases now resolve to Sapphire.

## Typography

The typographical hierarchy mirrors modern architectural monograph design. Headings in Plus Jakarta Sans provide sculpted, geometric confidence with slightly tightened tracking, establishing authority. The body typography in Inter ensures uncompromised legibility for service breakdowns, scope outlines, and project estimates.

Uppercase treatments are reserved exclusively for `label-sm` category headers, location markers (e.g., `HIALEAH · MIAMI-DADE · BROWARD`), and technical specifications.

## Layout & Spacing

A 12-column fluid grid system governs desktop views with a maximum container boundary of `1240px`. Breakpoints are established at:
- **Mobile:** `< 768px` (4-column grid, `margin: 1.25rem`, `gutter: 1rem`)
- **Tablet:** `768px – 1023px` (8-column grid, `margin: 2rem`, `gutter: 1.5rem`)
- **Desktop:** `≥ 1024px` (12-column grid, `margin: 3rem`, `gutter: 2rem`)

Layout rhythm prioritizes generous breathing room between thematic case studies, project galleries, and quoting forms. High-density grids are prohibited; white space functions as an active structural luxury material.

## Elevation & Depth

Visual hierarchy combines low-contrast hairline borders with soft ambient illumination, reminiscent of bright Florida daylight. Heavy, muddy drop shadows are strictly avoided.

- **Level 0 (Flat Surface):** `#F8FAFC` base with `#E2E8F0` hairline borders.
- **Level 1 (Cards, Rested UI):** `#FFFFFF` fill with `1px solid #E2E8F0` and subtle ambient shadow: `0px 4px 20px -2px rgba(11, 25, 44, 0.05)`.
- **Level 2 (Hover States, Floating Selectors):** Subtle displacement (`translate-y: -2px`) paired with expanded shadow: `0px 12px 28px -4px rgba(11, 25, 44, 0.08)`.
- **Level 3 (Sticky Estimate Bars, Modals):** Crisp border retained, reinforced by directional diffusion: `0px 20px 40px -8px rgba(11, 25, 44, 0.12)`.

## Shapes

The system achieves structured elegance without harsh utility:
- Small controls (inputs, secondary pills): `8px` (`0.5rem`)
- Standard cards, interactive tiles: `12px` to `16px` (`rounded-lg` to `rounded-xl`)
- Full-bleed portfolio media: Corner radius matches container boundary (`16px`)
- Circular geometry is reserved strictly for status chips, numerical steps, and icon containers.

## Components

- **Buttons:**
  - *Primary (Conversion):* Royal Sapphire fill (`#1D4ED8`), crisp white text, `12px` radius, hover state shifts to deeper sapphire (`#1E40AF`), with an optional `btn-prestige` light-sweep on hover.
  - *Secondary (Architectural):* Deep Navy fill (`#0B192C`), crisp white text, subtle hover lift to `#162842`.
  - *Outline (Exploration):* Transparent background, `1.5px` border in `#0B192C`, text in `#0B192C`.
- **Cards (Service & Portfolio):**
  - Solid `#FFFFFF` background, `16px` radius, encapsulated by a `1px solid #E2E8F0` border. Portfolio cards feature high-resolution imagery with a Sky (`#0284C7`) locality marker (e.g., "Pinecrest Estate", "Las Olas Modern").
- **Inputs & Form Controls:**
  - Standard height `48px`, background `#FFFFFF`, border `1px solid #E2E8F0`. Focus state transitions to a `2px` ring in Deep Navy (`#0B192C`) with zero offset. Field labels sit above in `label-md` weight using Slate.
- **Checkboxes & Radios:**
  - `16px` custom controls (rendered as `<button>` with an accessible pressed state). Active state fills with Royal Sapphire (`#1D4ED8`) with a crisp white glyph on a `#EFF6FF` container.
- **Chips & Badges:**
  - Height `28px`, subtle tinted background paired with a matching icon color — e.g. `#EFF6FF` / `#1D4ED8` for Sapphire, `#E0F2FE` / `#0284C7` for Sky, and Tailwind `emerald-*` for WhatsApp/verified states.
- **Before / After Comparison Slider:**
  - High-precision interactive image slider encased in a `16px` radius card, using a CSS `clip-path: polygon(...)` divider with a hairline `#FFFFFF` handle and a floating circular control.
- **Mobile Sticky Action Dock:**
  - Level 3 elevation bar pinned to the bottom on mobile, presenting direct Call and WhatsApp actions with safe-area-inset padding.
