import { patchKinds } from '../data/patches.js';
import Patch from './Patch.jsx';

export default function StickerTray({ selected, onSelect, onClear }) {
  const current = patchKinds.find((patch) => patch.id === selected);
  const status = current
    ? `Placing: ${current.name}. Tap the page. Tap it here again to stop.`
    : 'Tap a patch, then tap the page to place it.';

  return (
    <div className="tray">
      <div>
        <div className="tray-title">patches and tape</div>
        <div className="tray-status" role="status">
          {status}
        </div>
      </div>
      <div className="tools">
        {patchKinds.map((patch) => (
          <button
            key={patch.id}
            type="button"
            className={`tool${selected === patch.id ? ' selected' : ''}`}
            aria-label={patch.label}
            aria-pressed={selected === patch.id}
            onClick={() => onSelect(patch.id)}
          >
            <Patch patch={patch} scale={patch.frame === null ? 0.5 : 0.7} />
          </button>
        ))}
      </div>
      <button type="button" className="btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
