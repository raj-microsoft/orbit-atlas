# Orbit Atlas

An original motion-poster atlas of the eight planets, built for guide 05: **Claude Design + HyperFrames Pipeline**, by Ashok Sangireddy. [Guide](https://linkdm.co/ashoksangireddyy/Ln9U--0KjV) · [Library](https://raj-microsoft.github.io/ai-web-design-library/).

## Method
1. Read the guide and [HyperFrames introduction](https://hyperframes.heygen.com/introduction), [GSAP contract](https://hyperframes.heygen.com/guides/gsap-animation), and CLI documentation.
2. Substitute original static SVG compositions for sign-in-only Claude Design. `design/` holds the editable exports; `docs/design-export.zip` is the exported design handoff.
3. Finish locally with an AI coding agent. `build.mjs` generates semantic static HTML, SVG posters, and nine HyperFrames compositions.
4. Install project-local HyperFrames (0.9.25). Each composition exposes a finite, paused GSAP timeline under `window.__timelines`, matching its composition ID.
5. Render nine eight-second 1280×720 / 24fps MP4s using HyperFrames CLI; embed the videos in a static site, with static SVG fallbacks and reduced-motion handling.

No paid services, account sign-ups or API keys. NASA links are evidence, not an endorsement. Eight real NASA mission images are combined with original schematic geometry. No AI images or Veo. Film speeds, orbital spacing and poster planet sizes are illustrative; photographic processing is labelled and the separate width chart uses rounded NASA comparisons. Full mission credits, source captions, crop coordinates and reuse terms are in `image-sources.json` and beside each planet on the page.

## Rebuild
```
npm ci
python prepare-photos.py
node build.mjs
node render-posters.mjs
node render-films.mjs
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

## Photographic pass — 9 November 2026
Eight NASA mission releases: MESSENGER Mercury (PIA15162), Galileo Venus (PIA00072), Suomi NPP Blue Marble Earth (PIA18033), Viking Mars (PIA00407), Cassini Jupiter (PIA02873), Cassini Saturn (PIA06077), and Voyager 2 Uranus (PIA00032, LEFT true-colour panel only) / Neptune (PIA02210). Galileo Venus was chosen instead of a third-party-processed Mariner release to keep a direct NASA/JPL credit.

These are real observations, including mission-produced photographic mosaics and globe projections, not generated planets. Venus is colourized violet-filter data; Mars and Neptune are enhanced colour. We preserve source colours. Cropping, circular masks, resizing and q78 WebP compression are the only local photographic transformations. The original source frames are not shipped; `prepare-photos.py` reproducibly downloads them with Pillow required. Poster WebPs are 960/1280px; nine 8-second H.264 films have 768px mobile variants. Videos loop, not scroll-scrub, and are intersection-loaded. No generative video fallback was necessary.

Rights: caption-specific credit lines were checked against NASA/JPL media terms. No selected caption identifies ESA ownership or a separately copyrighted third-party processing product. NASA images are generally not subject to US copyright; JPL permits reuse with credit/no endorsement. MESSENGER explicitly permits this educational/public-information use. We do not falsely guarantee that all NASA-hosted assets are unconditionally public domain. See the linked per-image policies in the manifest.
