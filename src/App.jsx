import bild from './bild.jpg'
import napkin from './napkin.jpg'
import vatten from './vatten.jpg'
import happy from './happy.png'

export const App = () => {
    return <form>
      <div style={{backgroundImage: `url(${bild})`, padding: '100px', color: 'yellow'}}>
      <h3>So Youn Choi</h3>
      <h1>Frontend Developer</h1>
      <h4>I make web</h4>
      <p style={{color: 'yellow'}}>when i was little, i played with web. kids at that time are just thrown to new virtual world called web. we were happy there and adventureous. while this journey, i wanted to remember that. i was willing to create things that i loved. we were communicating while making web and providing safe place to each other. we all had different situation and different interest, but because we could gather we could grow up together. i wanted to remember that, again, and continue my live at same mood. because my whole journey is saving myself, i wanted to make others feel same as me. we are still growing in some way, and we will do that together, with our own environment created by ourself!</p></div>
      <div style={{backgroundImage: `url(${napkin})`, padding: `100px`, color: 'yellow'}}>
        <h1>what i want to do while we work together</h1>
        <p>HTML, CSS, JavaScript, React, mob-programming, pair-programming</p>
      </div>
      <div style={{backgroundImage: `url(${vatten})`, padding: `100px`, color: 'yellow'}}>
        <h1>what i did while i learn</h1>
        <h2>project happy</h2>
        <img src={happy} alt="screenshot from project happy" width="50%" height="50%" />
        <p>i tried to gather happy thoughts from people. user can write things here while they are having happy moment. by doing that, user can think again about their happy moments, and get to know how others feel happy in their life. by liking each other, they can send minor signal which means they are thinking same each other, and the list of liked idea is even saving at the very last part of list, so user can easily collect happy moments!</p>
      </div>
      </form>
};
