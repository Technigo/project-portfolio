const Introduction = ({ scrollToTech }) => {
  return (
    <div className="intro-container">
      <img className="intro-image" src="./photo.jpg" />
      <div className="intro-text">
        <p>
          XXX is an exceptional developer known for her innovative solutions and
          exceptional coding abilities. She creates user-friendly applications
          and solves complex issues with ease. Her drive for excellence makes
          her a valuable asset to any project and a standout in the technology
          field.
        </p>
      </div>
      <button onClick={scrollToTech}>🔽</button>
    </div>
  );
};

export default Introduction;
