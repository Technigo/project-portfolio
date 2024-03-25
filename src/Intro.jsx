import johanna from "./assets/johanna.jpg";
import arrow from "./assets/arrow.svg";

export const Intro = () => {
  return (
    <section className="intro">
      <h1 className="name">Johanna Catalini Smith</h1>
      <p className="role">Frontend Developer</p>
      <img className="avatar" src={johanna} alt="Johanna Catalini Smith" />
      <p className="bio">
        Sara is an exceptional developer known for her innovative solutions and
        exceptional coding abilities. She creates user-friendly applications and
        solves complex issues with ease. Her drive for excellence makes her a
        valuable asset to any project and a standout in the technology field.
      </p>
      <img className="arrow" src={arrow} alt="" />
    </section>
  );
};
