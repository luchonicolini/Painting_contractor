---
name: Florida Coastal Craft
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#43474d'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#220e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#401f00'
  on-tertiary-container: '#d77503'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
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

The emotional tone balances institutional trustworthiness, generational craft, and effortless tropical sophistication. Layouts prioritize crisp boundaries, immaculate white space, and deliberate contrasts. Architectural photography anchors the interface, balanced by deep nautical foundations, sun-baked earth accents for decisive actions, and subtle marine undertones.

## Colors

- **Deep Navy (`#0F2942` - Primary):** Serves as the authoritative backbone. Used for high-level branding, prominent headlines, dark container states, footers, and key navigational surfaces.
- **Coastal Teal (`#0D9488` - Secondary):** A restrained, salt-air accent used for trust badges, warranty seals, subtle metric rings, and quiet interactive states.
- **Terracotta Amber (`#D97706` - Tertiary / Conversion Accent):** Evokes South Florida clay tiles and golden hour warmth. Strictly allocated to critical calls-to-action (e.g., "Request an Estimate", "Schedule Color Consultation"), active indicators, and high-priority notices.
- **Slate Gray (`#475569` - Neutral):** Calibrated for long-form readability, metadata, and secondary UI labels on light backgrounds.
- **Alabaster Canvas (`#F8FAFC` - Background Base):** An off-white, light-reflective base that provides a gallery-level canvas for photography.
- **Surface Crisp White (`#FFFFFF`):** High-level elevation surface for cards, modals, and input fields.
- **Subtle Coastal Border (`#E2E8F0`):** Fine architectural line-work that defines compartments without visual heaviness.

## Typography

The typographical hierarchy mirrors modern architectural monograph design. Headings in Plus Jakarta Sans provide sculpted, geometric confidence with slightly tightened tracking, establishing authority. The body typography in Inter ensures uncompromised legibility for service breakdowns, scope outlines, and project estimates. 

Uppercase treatments are reserved exclusively for `label-sm` category headers, location markers (e.g., `CORAL GABLES · FORT LAUDERDALE`), and technical specifications.

## Layout & Spacing

A 12-column fluid grid system governs desktop views with a maximum container boundary of `1280px`. Breakpoints are established at:
- **Mobile:** `< 768px` (4-column grid, `margin: 1.25rem`, `gutter: 1rem`)
- **Tablet:** `768px – 1023px` (8-column grid, `margin: 2rem`, `gutter: 1.5rem`)
- **Desktop:** `≥ 1024px` (12-column grid, `margin: 3rem`, `gutter: 2rem`)

Layout rhythm prioritizes generous breathing room between thematic case studies, project galleries, and quoting forms. High-density grids are prohibited; white space functions as an active structural luxury material.

## Elevation & Depth

Visual hierarchy combines low-contrast hairline borders with soft ambient illumination, reminiscent of bright Florida daylight. Heavy, muddy drop shadows are strictly avoided.

- **Level 0 (Flat Surface):** `#F8FAFC` base with `#E2E8F0` hairline borders.
- **Level 1 (Cards, Rested UI):** `#FFFFFF` fill with `1px solid #E2E8F0` and subtle ambient shadow: `0px 4px 20px -2px rgba(15, 41, 66, 0.05)`.
- **Level 2 (Hover States, Floating Selectors):** Subtle displacement (`translate-y: -2px`) paired with expanded shadow: `0px 12px 28px -4px rgba(15, 41, 66, 0.08)`.
- **Level 3 (Sticky Estimate Bars, Modals):** Crisp border retained, reinforced by directional diffusion: `0px 20px 40px -8px rgba(15, 41, 66, 0.12)`.

## Shapes

The system uses a calibrated `roundedness: 2` scale to achieve structured elegance without harsh utility:
- Small controls (inputs, secondary pills): `8px` (`0.5rem`)
- Standard cards, interactive tiles: `12px` to `16px` (`rounded-lg` to `rounded-xl`)
- Full-bleed portfolio media: Corner radius matches container boundary (`16px`)
- Circular geometry is reserved strictly for status chips, numerical steps, and icon containers.

## Components

- **Buttons:**
  - *Primary (Conversion):* Terracotta fill (`#D97706`), crisp white text, `8px` radius, hover state shifts to deeper amber (`#B45309`) with a `0px 4px 12px rgba(217, 119, 6, 0.25)` glow.
  - *Secondary (Architectural):* Deep Navy fill (`#0F2942`), crisp white text, subtle hover lift.
  - *Outline (Exploration):* Transparent background, `1.5px` border in `#0F2942`, text in `#0F2942`.
- **Cards (Service & Portfolio):**
  - Solid `#FFFFFF` background, `16px` radius, encapsulated by a `1px solid #E2E8F0` border. Portfolio cards feature high-resolution imagery with an integrated coastal teal tag (`#0D9488` tint) denoting the project locality (e.g., "Pinecrest Estate", "Las Olas Modern").
- **Inputs & Form Controls:**
  - Standard height `48px`, background `#FFFFFF`, border `1px solid #CBD5E1`. Focus state transitions to a `2px` ring in Deep Navy (`#0F2942`) with zero offset. Field labels sit above in `label-md` weight using Deep Navy.
- **Checkboxes & Radios:**
  - `20px` custom controls with `6px` radius (checkbox) or full circle (radio). Active state fills with Deep Navy (`#0F2942`) with a crisp white interior glyph.
- **Chips & Badges:**
  - Height `28px`, `6px` radius, subtle background tint (`#0D9488` at 10% opacity) with `#0D9488` text for quality guarantees (e.g., "Licensed & Insured", "Sherwin-Williams Emerald Partner").
- **Before / After Comparison Slider:**
  - High-precision interactive image slider encased in a `16px` radius card, utilizing a hairline `#FFFFFF` divider handle with a floating circular control.
- **Instant Estimate Floating Drawer:**
  - Anchored bottom interface with Level 3 elevation, presenting real-time pricing tiers and immediate consultation triggers.