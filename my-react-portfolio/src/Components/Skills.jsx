
import "./Skills.css";

export const Skills = () => {

	const codeSkills = ["HTML5", "CSS3", "JavaScript ES6", "React", "Ruby", "Github"];
	const toolboxSkills = [
		"VS Code", "Atom", "Postman", "Figma", "Adobe Photoshop", "Adobe Illustrator",
		"Adobe Indesign", "Adobe XD", "Sketch", "Affinity Designer", "Keynote", "Office 365",
		"Slack", "Notion"
	];
	const upcomingSkills = ["Node.js", "Typescript", "Svelte", "Flutter"];
	const moreSkills = [
		"Concept development", "Art direction", "UX/UI", "Agile methodology",
		"Scrum master", "Product owner", "Digital producer", "Workshop facilitator",
		"Design sprints", "Design thinking", "Project management", "Team lead"
	];

	return (
		<section className="skills">
			<div className="skillwrapper">
				<div className="skills-header">
					<h2>Skills</h2>
				</div>
				<div className="code container">
					<h3>Code</h3>
					{codeSkills.map((skill, index) => (
						<p key={index}>{skill}</p>
					))}
				</div>
				<div className="toolbox container">
					<h3>Toolbox</h3>
					{toolboxSkills.map((skill, index) => (
						<p key={index}>{skill}</p>
					))}
				</div>
				<div className="upcoming container">
					<h3>Upcoming</h3>
					{upcomingSkills.map((skill, index) => (
						<p key={index}>{skill}</p>
					))}
				</div>
				<div className="more container">
					<h3>More</h3>
					{moreSkills.map((skill, index) => (
						<p key={index}>{skill}</p>
					))}
				</div>
			</div>
		</section>
	);
}
