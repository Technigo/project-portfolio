import "./Ticker.css";

export const Ticker = () => {
  const items = [
    { text: "Kathinka Sewell" },
    { text: "Frontend Developer" },
  ];

  return (
    <div>
      <div className="styling ticker-container">
        {/* first I created an array with space for 200 items and map over it to display the content of items array 200 times  - to avoid having to write the same text over and over again and give the illusion of a never ending ticker
        */
        }
        <div className="ticker">
          {Array.from({ length: 200 }).map(() =>
            items.map((item, index) => (
              <div key={index}>
                <span>{item.text}</span>
                <span> ・ </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
