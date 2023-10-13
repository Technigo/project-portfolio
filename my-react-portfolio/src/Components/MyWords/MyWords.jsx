import "./MyWords.css";

export const MyWords = () => {
  return (
    <div className="my-words-container">
      <h1>My Words</h1>
      <div className="my-words-box">
        <div className="my-words-column">
          <img
            src="\Assets\featured-projects-temp.jpg"
            alt="image placer for my words"
          />
          <h2>Article One</h2>
          <span style={{ backgroundColor: "black", color: "white" }}>
            &nbsp;August 2023&nbsp;
          </span>
          <p>
            Diam sit amet nisl suscipit adipiscing bibendum. Id aliquet risus
            feugiat in. Facilisi nullam vehicula ipsum a arcu cursus vitae
            congue mauris. Lacus suspendisse faucibus interdum posuere lorem.
            Sit amet massa vitae tortor condimentum lacinia.
          </p>
          <img
            className="read-article-button"
            src="/assets/Read-On-Medium.png"
            alt="read article"
          />
        </div>
        <div className="my-words-column">
          <img
            src="\Assets\featured-projects-temp.jpg"
            alt="image placer for my words"
          />
          <h2>Article Two</h2>
          <span style={{ backgroundColor: "black", color: "white" }}>
            &nbsp;June 2023&nbsp;
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus et. Nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque.
          </p>
          <img
            className="read-article-button"
            src="/assets/Read-On-Medium.png"
            alt="read article"
          />
        </div>
      </div>
    </div>
  );
};
