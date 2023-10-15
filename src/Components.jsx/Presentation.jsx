import "./Presentation.css";

// My presentation page with text, image and arrow //
export const Presentation = () => {
  return (
    <div className="presentation">
      <h2>Hi, I'm Emmy!</h2>
      <h1>Web developer student</h1>
      <p>
        I'm a preschool teacher that "accidently" fell over Tjejer Kodar's email
        course in coding. I was going to give it a try, just for fun and to see
        if I could get some kind of understanding for it. Surprisingly I found
        it really fun! So I am a total beginner at coding. It's really hard, but
        at the same time it's super fun! I'm looking forward to keep learning
        new things. Everyone's a beginner at first, right?
      </p>
      <div className="image">
        <img src="./src/pictures/me.jpg" alt="" />
      </div>
      <div className="Arrow">
        <img src="./src/Icons/Vector.png" />
      </div>
    </div>
  );
};
