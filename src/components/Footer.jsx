import './Heading.css'

const footerBorder = 'Sofie Ferrari Strahl ∙ Frontend Developer ∙ '

export const Footer = () => {
	return (
		<>
			<div className="footer">
				<h3>
					{footerBorder} {footerBorder}
					{footerBorder}
				</h3>
			</div>
		</>
	)
}
