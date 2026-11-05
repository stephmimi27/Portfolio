import Introduction from '../Introduction.jsx';
import { about } from '../../data/portfolio.js';

export default function AboutSpread() {
  return (
    <>
      <Introduction />
      <div className="pg dotpg">
        <span className="ts tag" style={{ top: 42, right: 34, transform: 'rotate(4deg)' }}>
          SEATTLE SEA
        </span>
        <span className="label t1">01 / about</span>
        <h2>about me</h2>
        {about.book.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="callout">
          <span className="dot" />
          <span>Turn the page with the red corner at the bottom right.</span>
        </div>
      </div>
    </>
  );
}
