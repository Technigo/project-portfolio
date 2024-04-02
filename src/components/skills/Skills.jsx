import "./Skills.css"

export const Skills = () => {
	return (
		<div className='skill-container'>
			<h2>Skills</h2>
			<div className='skills-block'>
				<div id='skill-box' className='code-container'>
					<h3>
						<span>Code</span>
					</h3>
					<div className='skill-keywords'>
						<p>HTML5</p>
						<p>CSS3</p>
						<p>JavaScript ES6</p>
						<p>React</p>
						<p>Styled Components</p>
					</div>
				</div>
				<div id='skill-box' className='toolbox-container'>
					<h3>
						<span>Toolbox</span>
					</h3>
					<div className='skill-keywords'>
						<p>Visual Studio Code</p>
						<p>Github</p>
						<p>GA4</p>
						<p>Google Search Console</p>
						<p>ScreamingFrog</p>
						<p>Sistrix</p>
						<p>Google Tools</p>
					</div>
				</div>
				<div id='skill-box' className='upcoming-container'>
					<h3>
						<span>Upcoming</span>
					</h3>
					<div className='skill-keywords'>
						<p>Node.js</p>
						<p>Express.js</p>
						<p>MongoDB</p>
						<p>Typescript</p>
					</div>
				</div>
				<div id='skill-box' className='more-container'>
					<h3>
						<span>More</span>
					</h3>
					<div className='skill-keywords'>
						<p>SEO</p>
						<p>Keyword Research</p>
						<p>Core Web Vitals</p>
						<p>Website Relaunch</p>
						<p>E-commerce</p>
					</div>
				</div>
			</div>
		</div>
	)
}
