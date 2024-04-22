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
				data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
				setRepos(data)
			} catch (error) {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				)
			}
		}
		fetchRepos()
	}, [])

	//Filter through only repos with deployed website.
	const filteredRepos = repos.filter((repo) => repo.homepage)

	return (
		<div className='project-container'>
			<h2>Featured Projects</h2>
			{filteredRepos.map((repo) => {
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
