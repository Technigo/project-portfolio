import 'animate.css';

import bild from './bild.jpg';
import mig from './mig.jpg';

export const Intro = (props) => {
  return (
    <div className="animate__animated animate__zoomInDown" style={{backgroundImage: `url(${bild})`, padding: '100px', color: 'yellow'}}>
      <img src={mig} alt="image of me" width="50%" height="50%" />
      <h3>{props.name}</h3>
      <h1>{props.job}</h1>
      <h4>{props.title}</h4>
      <p style={{color: 'yellow'}}>{props.description}</p>
    </div>
  );
};
