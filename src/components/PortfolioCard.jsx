export default function PortfolioCard({ item }) {
  return (
    <div className="card">
      <div className="tile">
        <div
          className="sp ic"
          style={{ backgroundPosition: `${(item.patchIndex * 100) / 7}% 0` }}
        />
      </div>
      <div>
        <span className={`label ${item.labelClass}`}>{item.label}</span>
        <h3>{item.role || item.name}</h3>
        <p>{item.bookDescription}</p>
      </div>
    </div>
  );
}
