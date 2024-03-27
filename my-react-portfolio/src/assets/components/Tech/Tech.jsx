import { PageTopic } from '../smallComps/PageTopic'
import './Tech.css'

export const Tech = () => {
    return (
        <div className="tech-wrapper">
            <div className='tech-title'>
                <PageTopic className={'tech'} pageTopic={'TECH'} />
            </div>
            <div className='tech-details'>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
              <p>React</p>
              <p>JSX</p>
              <p>React Hooks</p>
              <p>Web Accessibility</p>
              <p>APIs</p>
              <p>mob-programming</p>
              <p>pair-programming</p>
              <p>GitHub</p>
              <p>Git</p>
              <p>Node.js</p>
              <p>Mongo DB</p> 
            </div>  
        </div>
    )
}