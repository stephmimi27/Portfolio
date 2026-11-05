import { profile } from '../data/portfolio.js';

export default function Introduction({ className = 'pg lp1' }) {
  return (
    <div className={className}>
      <span className="ts ring" style={{ top: 30, right: 40, transform: 'rotate(-10deg)' }}>
        <b style={{ fontSize: 9 }}>VANCOUVER</b>YVR
      </span>
      <span className="label t3">{profile.coverLabel}</span>
      <h1 className="intro-name">{profile.nameLower}</h1>
      <p className="intro-description">{profile.introduction}</p>
      <span className="label t4">{profile.classLabel}</span>
      <div className="polaroid">
        <div className="tape" />
        <div className="photo">{profile.photoPlaceholder}</div>
        <div className="cap">{profile.nameLower}</div>
      </div>
    </div>
  );
}
