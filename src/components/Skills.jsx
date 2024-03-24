import "../styling/skills.css"

export const Skills = () => {
	return (
		<div className='skill-container'>
			<h2>Skills</h2>
			<div className='code-container'>
				<h3>Code</h3>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript ES6</li>
					<li>React</li>
					<li>Styled Components</li>
				</ul>
			</div>
			<div>
				<h3>Toolbox</h3>
				<ul>
					<li>Visual Studio Code</li>
					<li>Github</li>
					<li>GA4</li>
					<li>Google Search Console</li>
					<li>ScreamingFrog</li>
					<li>Sistrix</li>
					<li>Google Tools</li>
				</ul>
			</div>
			<div>
				<h3>Upcoming</h3>
				<ul>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MongoDB</li>
					<li>Typescript</li>
				</ul>
			</div>
			<div>
				<h3>More</h3>
				<ul>
					<li>Search Engine Optimization</li>
					<li>Keyword Research</li>
					<li>Core Web Vitals</li>
					<li>Website Relaunch</li>
					<li>E-commerce</li>
				</ul>
			</div>
		</div>
	)
}
