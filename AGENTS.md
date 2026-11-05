# Working on this portfolio

This is a client-side React application built with Vite. The source was converted from Stephanie’s exported journal portfolio so it can be edited as a normal project.

## Project map

- `src/data/portfolio.js` contains shared portfolio content for Book and Plain modes.
- `src/components/pages/` contains the six journal spreads.
- `src/hooks/useJournal.js` controls page turns and patch placement.
- `src/styles/` contains ordinary CSS, separated by purpose.
- `public/assets/` contains the original artwork and font asset.

Keep source editable as normal modules. Do not put application code, base64 archives, or serialized templates back into `index.html`. It should remain a small entry point.

## Development

Run `npm ci` to install the lockfile, `npm run dev` to work locally, and `npm run build` to validate production output. Do not commit `node_modules/` or `dist/`.

## Editing guidance

Preserve the uploaded design and content unless Stephanie requests a change. Prefer shared data exports for personal information used in both views. Keep each spread in its own component. Retain font notices with font assets.

After interaction changes, check Book and Plain switching, forward/back page turns, patch placement, and Clear. Check narrow layouts when changing layout styles. Existing patches intentionally reset on reload; do not change storage behaviour as part of an unrelated edit.
