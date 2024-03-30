import "./Tags.css"

export const Tags = ({ tags }) => {
	return (
		<ul className='tag-container'>
			{tags.map((topic) => (
				<li className='tag' key={topic}>
					{topic.toUpperCase()}
				</li>
			))}
		</ul>
	)
}
