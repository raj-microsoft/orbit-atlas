# Orbit Atlas design system

## Built visual world
A planetarium print portfolio with full-bleed colored plates, geometric orbit diagrams, broad Archivo lettering and quiet scientific annotation. No starfield or card grid. NASA mission photographs now occupy circular masks beneath the original linework. The first viewport shows eight orbits rather than pitching an imaginary product.

## Typography
Self-hosted Archivo variable, expanded 120% headings, 700 weight, tracking -0.035em, maximum 96px. Body 16px / 1.55, story 15–16px / 1.65. Functional metadata floor 11px. Numeric facts use tabular figures. Sources are visibly underlined.

## Palette
Base Prussian blue #142f4b / ice #e5edf4; index and process #dfe8ef. Mercury orange #df713e / plum #291e37; Venus pink #e8b8cd / #48213f; Earth seafoam #bed9d5 / #123e4a; Mars coral #e28773 / #482335; Jupiter lavender #c9c1e3 / #352e56; Saturn gold #e9cf87 / #423c2c; Uranus sky #b3d6e5 / #183f58; Neptune cobalt #354a9a / #e9e9fa.

## Layout
56px poster insets on desktop, 20px on mobile. Horizontal planet heading, full-width film, three-column annotation strip. On narrow screens the facts become a two-column pair above full-width prose. Eight-link index is four columns then two. Width comparison uses equal chart cells with circle diameters scaled to NASA rounded ratios.

## Motion and accessibility
Nine eight-second MP4s authored as seekable HyperFrames/GSAP timelines. Lazy load only visible films. Offscreen videos pause. Responsive static WebP posters always underneath. Explicit play/pause button; prefers-reduced-motion starts static and may be opted into. Semantic headings, anchor navigation, visible keyboard focus, skip link, themed selection.

## Asset provenance
Eight real NASA mission image releases, individually credited on-page and in image-sources.json. Colourized/enhanced products are labelled, Uranus uses only the source’s true-colour left panel. No generated images or video, no recolouring. Original SVG geometry remains intentionally schematic; the photographic discs are not a physical orbital model. Nine HyperFrames/GSAP timelines render local H.264 films, with small mobile encodes and static responsive WebP stills. Archivo remains SIL OFL.

## Finish review
Reviewed desktop 1440px and mobile 390px Edge screenshots, hero and Saturn section, and representative decoded film frames. No overflow or clipped copy. Eight planets and eight NASA citations present. Play/pause, reduced-motion default and manual override passed. Impeccable detector after spacing/label fixes: [] (no findings). HyperFrames main check passed with no runtime, layout, motion or craft issues; composition lint carries two nonblocking Studio-editability/subcomposition advisories. Verdict: ready for static publishing; motion is deliberately illustrative, not physically synchronized.
