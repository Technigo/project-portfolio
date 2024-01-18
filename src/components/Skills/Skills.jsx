import './Skills.css';

export const Skills = () => {
  return (
    <div className="skills-wrapper">
            <h1>Skills</h1>
        <div className="skills-grid">
            <div className="skills-column">
                <h3 className='code-heading'>Code</h3>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>React Hooks</p>
                <p>Zustand</p>
                <p>Node.js</p>
                <p>Web accessibility</p>
                <p>Flutter</p>
            </div>
            <div className="skills-column">
                <h3 className='toolbox-heading'>Toolbox</h3>
                <p>VSCode</p>
                <p>Github</p>
                <p>Lighthouse</p>
                <p>Postman</p>
                <p>Netlify</p>
                <p>Figma</p>
                <p>Developer tools</p>
            </div>
            <div className="skills-column">
                <h3 className='upcoming-heading'>Upcoming</h3>
                <p>Python</p>
                <p>TypeScript</p>
                <p>Redux</p>
                <p>WebAssembly</p>
                <p></p>
            </div>
            <div className="skills-column">
                <h3 className='more-heading'>More</h3>
                <p>API:s</p>
                <p>Vite</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
  )
}
