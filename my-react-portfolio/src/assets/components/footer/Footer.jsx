import "./footer.css"

export const Footer = () => {
  return (
    <footer className="ticker-tape">
      {/* <p>Trista Shan · Fronted Developer · Trista Shan · Fronted Developer · Trista Shan · Fronted Developer · </p> */}
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="item-collection-1">
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
          </span>
          <span className="item-collection-2">
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
            <span className="item">Trista Shan · Fronted Developer ·</span>
          </span>
        </div>
      </div>
    </footer>
  );
};