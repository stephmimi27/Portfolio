import { profile, places } from '../../data/portfolio.js';
import TravelPhoto from '../TravelPhoto.jsx';

export default function TravelSpread() {
  return (
    <>
      <div className="pg gp">
        <svg className="fp" viewBox="0 0 480 680" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M18 210 C 130 120, 230 330, 330 250 S 430 170, 452 196"
            fill="none"
            stroke="#7a9a6e"
            strokeWidth="1.6"
            strokeDasharray="4 7"
            opacity=".6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          style={{ transform: 'rotate(78deg)', left: '92%', top: '26%' }}
          className="plane"
        >
          <path
            d="M12 2 L14 10 L22 14 L22 16 L14 14 L13 20 L16 22 L16 23 L12 22 L8 23 L8 22 L11 20 L10 14 L2 16 L2 14 L10 10 Z"
            fill="#5f7a56"
            opacity=".85"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="44"
          height="44"
          style={{ transform: 'rotate(-14deg)', right: '36px', top: '34px' }}
          className="plane"
        >
          <path
            d="M2 11 L22 3 L15 21 L11 13 Z M11 13 L22 3"
            fill="#fff"
            stroke="#4a3f35"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
        <span className="label t1">05 / travel</span>
        <h2>places I’ve been</h2>
        <div className="scrap">
          {places.slice(0, 4).map((place) => (
            <TravelPhoto key={place.name} place={place} />
          ))}
          <div
            className="sp"
            style={{
              position: 'absolute',
              zIndex: '2',
              right: '0',
              top: '46%',
              width: '40px',
              height: '40px',
              backgroundPosition: '71.43% 0',
              transform: 'rotate(12deg)',
            }}
          />
        </div>
      </div>
      <div className="pg gp">
        <svg className="fp" viewBox="0 0 480 680" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M14 560 C 120 470, 240 640, 340 540 S 430 450, 456 476"
            fill="none"
            stroke="#7a9a6e"
            strokeWidth="1.6"
            strokeDasharray="4 7"
            opacity=".6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          style={{ transform: 'rotate(78deg)', left: '93%', top: '68%' }}
          className="plane"
        >
          <path
            d="M12 2 L14 10 L22 14 L22 16 L14 14 L13 20 L16 22 L16 23 L12 22 L8 23 L8 22 L11 20 L10 14 L2 16 L2 14 L10 10 Z"
            fill="#5f7a56"
            opacity=".85"
          />
        </svg>
        <span className="label t2">scrapbook</span>
        <div className="bpass">
          <div className="m">
            <div className="k">BOARDING PASS</div>
            <div className="v">{profile.name.toUpperCase()}</div>
            <div className="r">{places.map((place) => place.airport).join(' · ')}</div>
          </div>
          <div className="s">
            <div className="k">PASSENGER</div>
            <div className="bar" />
          </div>
        </div>
        <div className="scrap" style={{ marginTop: '22px' }}>
          {places.slice(4).map((place) => (
            <TravelPhoto key={place.name} place={place} />
          ))}
          <div
            className="sp"
            style={{
              position: 'absolute',
              zIndex: '2',
              left: '0',
              top: '44%',
              width: '44px',
              height: '44px',
              backgroundPosition: '85.71% 0',
              transform: 'rotate(-10deg)',
            }}
          />
          <div
            className="sp"
            style={{
              position: 'absolute',
              zIndex: '2',
              right: '0',
              top: '50%',
              width: '40px',
              height: '40px',
              backgroundPosition: '28.57% 0',
              transform: 'rotate(14deg)',
            }}
          />
        </div>
      </div>
    </>
  );
}
