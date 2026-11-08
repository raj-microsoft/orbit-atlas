# Orbit Atlas design system

## Built visual world
A planetarium print portfolio with full-bleed colored plates, geometric orbit diagrams, broad Archivo lettering and quiet scientific annotation. No starfield, card grid or photographic planets. The first viewport shows eight orbits rather than pitching an imaginary product.

## Typography
Self-hosted Archivo variable, expanded 120% headings, 700 weight, tracking -0.035em, maximum 96px. Body 16px / 1.55, story 15–16px / 1.65. Functional metadata floor 11px. Numeric facts use tabular figures. Sources are visibly underlined.

## Palette
Base Prussian blue #142f4b / ice #e5edf4; index and process #dfe8ef. Mercury orange #df713e / plum #291e37; Venus pink #e8b8cd / #48213f; Earth seafoam #bed9d5 / #123e4a; Mars coral #e28773 / #482335; Jupiter lavender #c9c1e3 / #352e56; Saturn gold #e9cf87 / #423c2c; Uranus sky #b3d6e5 / #183f58; Neptune cobalt #354a9a / #e9e9fa.

## Layout
56px poster insets on desktop, 20px on mobile. Horizontal planet heading, full-width film, three-column annotation strip. On narrow screens the facts become a two-column pair above full-width prose. Eight-link index is four columns then two. Width comparison uses equal chart cells with circle diameters scaled to NASA rounded ratios.

## Motion and accessibility
Nine eight-second MP4s authored as seekable HyperFrames/GSAP timelines. Lazy load only visible films. Offscreen videos pause. Static SVG always underneath. Explicit play/pause button; prefers-reduced-motion starts static and may be opted into. Semantic headings, anchor navigation, visible keyboard focus, skip link, themed selection.

## Asset provenance
All SVGs in design/ and docs/assets/ are original synthetic geometric compositions authored for this project. MP4s are rendered from corresponding motion/<name>/index.html using HyperFrames 0.9.25, 1280×720, H.264, 24fps. No photographs, third-party illustrations, or image-generation services. Archivo is SIL OFL, with bundled license. Diagrams label stylization and are not ephemerides.

## Finish review
Reviewed desktop 1440px and mobile 390px Edge screenshots, hero and Saturn section, and representative decoded film frames. No overflow or clipped copy. Eight planets and eight NASA citations present. Play/pause, reduced-motion default and manual override passed. Impeccable detector after spacing/label fixes: [] (no findings). HyperFrames main check passed with no runtime, layout, motion or craft issues; composition lint carries two nonblocking Studio-editability/subcomposition advisories. Verdict: ready for static publishing; motion is deliberately illustrative, not physically synchronized.
