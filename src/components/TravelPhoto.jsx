export default function TravelPhoto({ place }) {
  return (
    <div className="ph" style={place.frameStyle}>
      <div className="tp" />
      <div className="pic" style={place.pictureStyle}>
        <div className="sun" style={place.sunStyle} />
        <div className="sil" style={place.skylineStyle} />
      </div>
      <div className="cap">{place.name}</div>
      <div className="cc">{place.code}</div>
    </div>
  );
}
