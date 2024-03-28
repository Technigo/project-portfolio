import "./Projects.css"
import { ProjectElement } from "./ProjectElement.jsx"
import { useEffect, useState } from "react"

export const Projects = () => {
	const [repos, setRepos] = useState([])

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/ohitsnathalie/repos"
				)
				if (!response.ok) {
					throw new Error("Network response was not ok" + response.statusText)
				}
				const data = await response.json()
				setRepos(data)
			} catch (error) {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				)
			}
		}
		fetchRepos()
	}, [repos])

	return (
		<div className='project-container'>
			<h2>Featured Projects</h2>
			{repos &&
				repos.map((repo) => {
					return (
						<ProjectElement
							key={repo.id}
							name={repo.name}
							description={repo.description}
							homepage={repo.homepage}
							githubURL={repo.svn_url}
							topics={repo.topics}
						/>
					)
				})}
		</div>
	)
}
