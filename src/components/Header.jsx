import { profile } from '../data/portfolio.js';
import { LAST_SPREAD } from '../hooks/useJournal.js';

const navigation = ['About', 'Experience', 'Projects', 'Reading', 'Travel', 'Contact'];

export default function Header({ mode, onModeChange, spread }) {
  const book = mode === 'book';
  return (
    <header className="hdr">
      <span className={book ? 'brand-b' : 'brand-p'}>
        {book ? profile.nameLower : profile.name}
      </span>
      {book ? (
        <span className="label t2">
          {spread === 0 ? 'cover' : `page ${spread} / ${LAST_SPREAD}`}
        </span>
      ) : (
        <nav className="nav-p" aria-label="Portfolio sections">
          {navigation.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
      )}
      <div className="vt" role="group" aria-label="Choose version">
        {['plain', 'book'].map((version) => (
          <button
            key={version}
            type="button"
            className={mode === version ? 'on' : ''}
            aria-pressed={mode === version}
            onClick={() => onModeChange(version)}
          >
            {version === 'book' ? 'Book' : 'Plain'}
          </button>
        ))}
      </div>
    </header>
  );
}
