import "./Skills.css";

export const Skills = () => {
	return (
		<section>
			<div className="skills">
				<h2 className="skills-header">Skills</h2>
				<div className="skills-list">
					<p className="skills-tag">Code</p>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript ES6</li>
						<li>React</li>
						<li>Styled Components</li>
						<li>GitHub</li>
					</ul>
					<p className="skills-tag">Toolbox </p>
					<ul>
						<li>Atom</li>
						<li>Postman</li>
						<li>Adobe Photoshop</li>
						<li>Adobe Illustrator</li>
						<li>Figma</li>
						<li>Keynote</li>
						<li>Slack</li>
					</ul>
					<p className="skills-tag">Upcoming</p>
					<ul>
						<li>Node.js</li>
					</ul>
					<p className="skills-tag"> More</p>
					<ul>
						<li>Branding</li>
						<li>Strategy</li>
						<li>Process Design</li>
						<li>Concept</li>
						<li>Developement</li>
						<li>Agile methodology</li>
					</ul>
				</div>
			</div>
		</section >
	);
};