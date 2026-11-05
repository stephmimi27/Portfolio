import Cover from './Cover.jsx';
import Patch from './Patch.jsx';
import StickerTray from './StickerTray.jsx';
import AboutSpread from './pages/AboutSpread.jsx';
import ExperienceSpread from './pages/ExperienceSpread.jsx';
import ProjectsSpread from './pages/ProjectsSpread.jsx';
import ReadingSpread from './pages/ReadingSpread.jsx';
import TravelSpread from './pages/TravelSpread.jsx';
import ContactSpread from './pages/ContactSpread.jsx';
import { patchKinds } from '../data/patches.js';

const spreads = [
  AboutSpread,
  ExperienceSpread,
  ProjectsSpread,
  ReadingSpread,
  TravelSpread,
  ContactSpread,
];

export default function BookJournal({ journal }) {
  const { spread, previous, goTo } = journal;
  const coverTurning = previous !== null && (spread === 0 || previous === 0);
  const leafClass = `leaf ${spread === 0 ? 'closed' : 'open'}${coverTurning ? ' lift' : ''}`;

  function turnPage(event, nextSpread) {
    event.stopPropagation();
    goTo(nextSpread);
  }

  return (
    <div className="wrap">
      <div className={`book${spread === 0 ? ' closed' : ''}`} onClick={journal.placePatch}>
        <svg className="grain" aria-hidden="true">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        {(spread > 0 || (previous !== null && previous > 0)) && <div className="spine" />}
        <div className="stage">
          <Cover className={leafClass} />
          {spreads.map((Page, index) => {
            const page = index + 1;
            if (page !== spread && page !== previous) return null;
            return (
              <div key={page} className={journal.spreadClass(page)}>
                <Page />
              </div>
            );
          })}
        </div>
        {journal.placedPatches
          .filter((patch) => patch.spread === spread)
          .map((placed) => (
            <Patch
              key={placed.id}
              patch={patchKinds.find((patch) => patch.id === placed.kind)}
              position={placed}
            />
          ))}
        {spread > 0 && (
          <button
            type="button"
            className="corner cl"
            aria-label="Turn back a page"
            onClick={(event) => turnPage(event, spread - 1)}
          >
            <span>Back</span>
          </button>
        )}
        {spread < spreads.length && (
          <button
            type="button"
            className="corner cr"
            aria-label="Turn to the next page"
            onClick={(event) => turnPage(event, spread + 1)}
          >
            <span>Next</span>
          </button>
        )}
      </div>
      <StickerTray
        selected={journal.selectedPatch}
        onSelect={journal.togglePatch}
        onClear={journal.clearPatches}
      />
    </div>
  );
}
