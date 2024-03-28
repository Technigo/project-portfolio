import "./Tags.css"

export const Tags = ({ tags }) => {
	return (
		<div className='tag-container'>
			{tags.map((topic) => (
				<li className='tag' key={topic}>
					{topic.toUpperCase()}
				</li>
			))}
		</div>
	)
}
