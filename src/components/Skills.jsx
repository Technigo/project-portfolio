import './Skills.css'

export const MySkills = () => {
	return (
		<>
			<div className="skill-section">
				<h1>Skills</h1>
				<div className="skills">
					<h3 className="code">Code</h3>
					<h3 className="toolbox">Toolbox</h3>
					<h3 className="upcomming">Upcomming</h3>
					<h3 className="more">More</h3>

					<ul className="tech-skills-code">
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript ES6</li>
						<li>React</li>
						<li>Styled Components</li>
						<li>Github</li>
					</ul>
				</div>
				<div>
					<ul className="tech-skills-toolbox">
						<li>Figma</li>
						<li>Postman</li>
						<li>Slack</li>
						<li>Notion</li>
					</ul>
				</div>
				<div>
					<ul className="tech-skills-upcomming">
						<li>Node.js</li>
						<li>Python</li>
						<li>C#</li>
					</ul>
				</div>
				<div>
					<ul className="tech-skills-more"></ul>
				</div>
			</div>
		</>
	)
}
