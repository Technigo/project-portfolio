import 'animate.css'

import bild from './bild.jpg'
import mig from './mig.jpg'

export const Intro = () => {
    return(
        <div className="animate__animated animate__zoomInDown" style={{backgroundImage: `url(${bild})`, padding: '100px', color: 'yellow'}}>
        <img src={mig} alt="image of me" width="50%" height="50%" />
      <h3>So Youn Choi</h3>
      <h1>Frontend Developer</h1>
      <h4>I make web</h4>
      <p style={{color: 'yellow'}}>when i was little, i played with web. kids at that time are just thrown to new virtual world called web. we were happy there and adventureous. while this journey, i wanted to remember that. i was willing to create things that i loved. we were communicating while making web and providing safe place to each other. we all had different situation and different interest, but because we could gather we could grow up together. i wanted to remember that, again, and continue my life at the same mood. because my whole journey is saving myself, i wanted to make others feel same as me. we are still growing in some way, and we will do that together, with our own environment created by ourselves!</p></div>    )
}

