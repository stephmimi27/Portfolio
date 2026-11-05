import { profile } from '../../data/portfolio.js';

export default function ContactSpread() {
  return (
    <>
      <div className="pg">
        <span className="label t1">06 / contact</span>
        <h2>get in touch</h2>
        <div className="card" style={{ maxWidth: 340 }}>
          <div className="tile" style={{ width: 60, height: 60 }}>
            <div className="sp" style={{ width: 44, height: 44, backgroundPosition: '42.86% 0' }} />
          </div>
          <div>
            <span className="label t3">WRITE TO ME</span>
            <p style={{ margin: '8px 0 2px' }}>{profile.email}</p>
            <p style={{ margin: '2px 0' }}>{profile.linkedIn}</p>
          </div>
        </div>
      </div>
      <div className="pg dotpg">
        <span className="label t2">notes</span>
        <h2>leave a mark</h2>
        <p style={{ maxWidth: '20em', margin: '4px 0' }}>
          This page is blank on purpose. Pick a patch below and decorate it.
        </p>
      </div>
    </>
  );
}
