import PortfolioCard from '../PortfolioCard.jsx';
import { experience } from '../../data/portfolio.js';

export default function ExperienceSpread() {
  return (
    <>
      <div className="pg dotpg">
        <span className="ts tag" style={{ top: 42, right: 34, transform: 'rotate(-3deg)' }}>
          TORONTO YYZ
        </span>
        <span className="label t1">02 / experience</span>
        <h2>where I’ve worked</h2>
        {experience.slice(0, 2).map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pg dotpg">
        <span className="ts post" style={{ top: 42, right: 34, transform: 'rotate(4deg)' }}>
          MONTREAL YUL
        </span>
        <span className="label" style={{ background: 'transparent' }} aria-hidden="true">
          &nbsp;
        </span>
        <h2 aria-hidden="true">&nbsp;</h2>
        {experience.slice(2).map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
