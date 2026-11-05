import { profile } from '../data/portfolio.js';
import Introduction from './Introduction.jsx';

export default function Cover({ className }) {
  return (
    <div className={className}>
      <div className="face cvr">
        <div className="emb" />
        <div className="cv-label">
          <span className="label t3">{profile.coverLabel}</span>
          <h1 className="cover-name">{profile.nameLower}</h1>
          <div className="cover-subtitle">{profile.degree}</div>
          <div className="cover-subtitle">{profile.classLabel}</div>
        </div>
        <div className="cv-hint">tap the red corner to open</div>
      </div>
      <Introduction className="pg face back" />
    </div>
  );
}
