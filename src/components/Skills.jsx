import "../styling/Skills.css"

export const MySkills = () => {
	const categories = [
		{
			heading: "Code",
			text: "HTML5\nCSS3\nJavascript ES6\nReact\nNode.js\nTailwindCSS\nStyled Components\nGitHub\nMongoose",
		},
		{
			heading: "Toolbox",
			text: "Figma\nSlack\nNotion\nPostman\nMongoDB\nCloudinary",
		},
		{
			heading: "Upcomming",
			text: "Redux\nJava\nC#",
		},
		{
			heading: "More",
			text: "Communication\nProblem solver\nAnalytic",
		},
	]

	return (
		<>
			<div className="skill-section">
				<h1>Skills</h1>
				<div className="skills">
					{categories.map((category, index) => (
						<div className="skill-category" key={index}>
							<h2>{category.heading}</h2>
							<p>{category.text}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
