# Orbit Atlas

An original motion-poster atlas of the eight planets, built for guide 05: **Claude Design + HyperFrames Pipeline**, by Ashok Sangireddy. [Guide](https://linkdm.co/ashoksangireddyy/Ln9U--0KjV) · [Library](https://raj-microsoft.github.io/ai-web-design-library/).

## Method
1. Read the guide and [HyperFrames introduction](https://hyperframes.heygen.com/introduction), [GSAP contract](https://hyperframes.heygen.com/guides/gsap-animation), and CLI documentation.
2. Substitute original static SVG compositions for sign-in-only Claude Design. `design/` holds the editable exports; `docs/design-export.zip` is the exported design handoff.
3. Finish locally with an AI coding agent. `build.mjs` generates semantic static HTML, SVG posters, and nine HyperFrames compositions.
4. Install project-local HyperFrames (0.9.25). Each composition exposes a finite, paused GSAP timeline under `window.__timelines`, matching its composition ID.
5. Render nine eight-second 1280×720 / 24fps MP4s using HyperFrames CLI; embed the videos in a static site, with static SVG fallbacks and reduced-motion handling.

No paid services, account sign-ups or API keys. NASA links are evidence, not an endorsement. Artwork is original synthetic geometry, not photographs or physical orbital simulations. Film speeds, orbital spacing, planet sizes and colors are stylized; the separate width chart uses rounded NASA comparisons.

## Rebuild
```
npm ci
node build.mjs
```
Copy `node_modules/gsap/dist/gsap.min.js` into each `motion/<name>/` directory. Then, for each name (atlas, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune):
```
npx hyperframes lint motion/<name>
npx hyperframes render motion/<name> --output docs/assets/<name>.mp4 --fps 24 --workers 2 --quality standard --strict
```
The static site in `docs/` needs no Node runtime or CDN. Only render/build dependencies are installed. Font: Archivo by Omnibus-Type, self-hosted under SIL OFL (license in `docs/assets/FONT-LICENSE.txt`).

## Sources
NASA Science facts checked 9 November 2026:
- https://science.nasa.gov/mercury/facts/ — 88 days, 0.4 AU, 2,440km radius, elliptical orbit.
- https://science.nasa.gov/venus/venus-facts/ — 225 days, 0.72 AU, 243-day rotation, 12,104km diameter.
- https://science.nasa.gov/earth/facts/ — 365.25 days, 1 AU, 12,756km equatorial diameter.
- https://science.nasa.gov/mars/facts/ — 687 days, 1.5 AU, 3,390km radius, unequal seasons.
- https://science.nasa.gov/jupiter/jupiter-facts/ — about 12 years, 5.2 AU, 11 Earth widths, 9.9-hour rotation.
- https://science.nasa.gov/saturn/facts/ — about 29.4 years, 9.5 AU, 9 Earth widths, ice/rock ring particles.
- https://science.nasa.gov/uranus/facts/ — about 84 years, 19 AU, 4 Earth widths, 97.77° tilt.
- https://science.nasa.gov/neptune/neptune-facts/ — about 165 years, 30 AU, 4 Earth widths, first post-discovery orbit completed 2011.

Numbers are the rounded public-page values, not precision ephemerides. Some ratios use rounded dimensions and should not be read as precise measurements. Site has no tracking, forms, or private data.
