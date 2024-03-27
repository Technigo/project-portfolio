export const Tags = ({ topics }) => {
	if (!topics) return
	return (
		<div className='tag-container'>
			{topics.map((topic) => (
				<div className='tag' key={topic}>
					{topic}
				</div>
			))}
		</div>
	)
}
