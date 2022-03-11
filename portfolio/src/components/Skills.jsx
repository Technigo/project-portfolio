import React from "react";

const Skills = () => {
    return (
        <section className="section">
		<div className="container">
			<h2 className="section-heading fw-bold montserrat"><span className="heading-block">SKILLS</span></h2>
			<div className="skills-container fs-normal roboto">
				<div className="s-grid-1">
					<h3 className="fw-bold color-font">CODE</h3>
					<p>React</p>
					<p>HTML5</p>
					<p>CSS3</p>
					<p>JavaScript ES6</p>
					<p>Github</p>
				</div>
				<div>
					<h3 className="fw-bold color-font">TOOLBOX</h3>
					<p>VSCode</p>
					<p>Atom</p>
					<p>Wordpress</p>
					<p>Adobe Photoshop</p>
					<p>Figma</p>
					<p>Zapier</p>
					<p>Airtable</p>
				</div>
				<div className="mobile-hidden">
					<h3 className="fw-bold color-font">MORE</h3>
					<p>Project Management</p>
					<p>Agile Methodology</p>
				</div>
				<div>
					<h3 className="fw-bold color-font">UPCOMING</h3>
					<p>Node.js</p>
					<p>SQL</p>
					<p>MongoDB</p>
					<p>Mongoose</p>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Skills