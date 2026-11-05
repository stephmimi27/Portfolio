import PortfolioCard from '../PortfolioCard.jsx';
import { interests, projects } from '../../data/portfolio.js';

export default function ProjectsSpread() {
  return (
    <>
      <div className="pg dotpg">
        <span className="ts ring" style={{ top: 30, right: 40, transform: 'rotate(8deg)' }}>
          <b style={{ fontSize: 9 }}>NEW YORK</b>NYC
        </span>
        <span className="label t1">03 / projects</span>
        <h2>things I’ve made</h2>
        {projects.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pg dotpg">
        <span className="ts tag" style={{ top: 42, right: 34, transform: 'rotate(3deg)' }}>
          HONG KONG HKG
        </span>
        <span className="label t2">interests</span>
        <h2>currently into</h2>
        {interests.map((item) => (
          <div className="card" key={item.title}>
            <div className="tile" style={{ width: 60, height: 60 }}>
              <div
                className="sp"
                style={{
                  width: 44,
                  height: 44,
                  backgroundPosition: `${(item.patchIndex * 100) / 7}% 0`,
                }}
              />
            </div>
            <h3 style={{ alignSelf: 'center', margin: 0 }}>{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
