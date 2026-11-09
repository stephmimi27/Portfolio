import { books } from '../../data/portfolio.js';

export default function ReadingSpread() {
  return (
    <>
      <div className="pg gp">
        <span className="ts post" style={{ top: '42px', right: '34px', transform: 'rotate(5deg)' }}>
          XI’AN 西安
        </span>
        <span className="label t1">04 / reading</span>
        <h2>things I’m reading</h2>
        <div
          style={{
            display: 'flex',
            gap: '26px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '36px',
          }}
        >
          <div className="pol" style={{ transform: 'rotate(2.5deg)', marginTop: '30px' }}>
            <div className="tp" style={{ backgroundColor: '#cfdcc0' }} />
            <div
              className="cov"
              style={{ background: '#f6efdc', color: '#3f5b39', border: '1px solid #e5dcc0' }}
            >
              <i>essays</i>
              <div
                style={{
                  position: 'absolute',
                  left: '34px',
                  top: '46px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '2px solid #8dbb6d',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '54px',
                  top: '66px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '2px solid #8dbb6d',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '72px',
                  top: '84px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#c0392b',
                }}
              />
              <div style={{ position: 'relative' }}>
                <b>{books[0].title}</b>
                <br />
                <i>{books[0].author}</i>
              </div>
            </div>
            <div className="by">{books[0].author}</div>
          </div>
        </div>
      </div>
      <div className="pg gp">
        <span className="ts tag" style={{ top: '42px', right: '34px', transform: 'rotate(-4deg)' }}>
          SHANGHAI 上海
        </span>
        <span className="label t2">reading list</span>
        <h2>bookmarks</h2>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: '36px',
          }}
        >
          <div className="pol" style={{ transform: 'rotate(2deg)' }}>
            <div className="tp" style={{ backgroundColor: '#f0c9bd' }} />
            <div className="cov" style={{ background: '#8f2d25', color: '#f3e6c4' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  right: '8px',
                  top: '8px',
                  bottom: '8px',
                  border: '1px solid #d9b66a',
                }}
              />
              <i style={{ position: 'relative' }}>a novel</i>
              <div style={{ position: 'relative' }}>
                <b>{books[1].title}</b>
                <br />
                <i>{books[1].author}</i>
              </div>
            </div>
            <div className="by">{books[1].author}</div>
          </div>
          <div
            className="kraft"
            style={{ width: '180px', transform: 'rotate(-2deg)', marginTop: '26px' }}
          >
            <h4>READING LIST</h4>
            <p>{books[0].title}</p>
            <p>{books[1].title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
