import "./Presentation.css";

// My presentation page with text, image and arrow //
export const Presentation = () => {
  return (
    <div className="presentation">
      <h2>Hi, I'm Emmy!</h2>
      <h1>Frontend developer</h1>
      <p>
        At first I was a preschool teacher that "accidently" fell over Tjejer
        Kodar's email course in coding. I was going to give it a try, just for
        fun and to see if I could get some kind of understanding for it.
        Surprisingly I found it really fun so I applied to Technigos web
        developer boot camp the fall of 2023 - and got in. It've been ups and
        downs, super fun, and super hard but I managed to complete the boot camp
        and now I'm a frontend developer looking forward to new experiences in
        coding and keep on learning!
      </p>
      <div className="image">
        <img src="../public/me.jpg" alt="" />
      </div>
      <div className="Arrow">
        <img src="../public/Vector.png" />
      </div>
    </div>
  );
};
