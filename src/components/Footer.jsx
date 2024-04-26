import './Heading.css'

const footerBorder = 'Sofie Ferrari Strahl ∙ Frontend Developer '

export const Footer = () => {
	return (
		<>
			<section className='footer-wrapper'>
				<div className="footer">
					<h3>{footerBorder}</h3>
				</div>
			</section>
		</>
	)
}
