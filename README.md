# Stephanie’s Portfolio

My personal portfolio, built with React and Vite. 

https://stephaniecaoportfolio.vercel.app/

## Features

- Book layout with animated page turns.
- Toggle between Book and Plain views.
- Sections for About, Experience, Projects, Reading, Travel, and Contact.
- Illustrated travel scrapbook.
- Decorative patches and washi tape that visitors can place on the pages.
- Responsive layouts for desktop and smaller screens.

## Tech Stack

- React 19
- Vite 7
- JavaScript and JSX
- CSS

## Getting Started

Requires **Node.js 22.12 or newer** and npm.

```bash
git clone https://github.com/stephmimi27/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Open the local URL printed in the terminal. Changes to the source update automatically while the development server is running.

## Project Structure

| File or folder | Purpose |
|---|---|
| `src/App.jsx` | Main application and view selection |
| `src/components/` | Shared components, including the cover, header, cards, and patch tray |
| `src/components/pages/` | Individual journal spreads |
| `src/data/portfolio.js` | Portfolio text, experience, projects, books, and travel content |
| `src/data/patches.js` | Available patches and tape |
| `src/hooks/useJournal.js` | Page-turning and patch-placement logic |
| `src/styles/` | Fonts, global styles, journal layout, and plain view |
| `public/assets/` | Artwork, cursor, and font assets |
| `index.html` | Browser entry point |
| `vite.config.js` | Vite configuration |

## Editing the Portfolio

Update `src/data/portfolio.js` to change the personal information and content used by both views.

Edit the components in `src/components/pages/` to change individual journal sections. Appearance and animations are managed separately in `src/styles/`.

The project uses normal source files and can be edited in Codex, VS Code, or another code editor.

## Production Build

Create the production build:

```bash
npm run build
```

The generated files are written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Data and Storage

Portfolio content is maintained in the source files. Stickers are stored in the current page’s React state and reset when the page is refreshed.

The application does not require a backend or database.

## Font Licenses

The bundled Inter font’s license is included in `public/assets/fonts/OFL.txt`.
