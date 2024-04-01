import './Heading.css'
import myImage from '../assets/image.me.png'
import { TbArrowNarrowDown } from 'react-icons/tb'

export const Introduction = () => {
	return (
		<>
			<div className="wrapper">
				<div className="introtext">
					<h2 className="heading-name">Hi, I'm Sofie Ferrari Strahl</h2>
					<h1 className="heading-title">Frontend Developer</h1>
				</div>
				<div className="image">
					<img src={myImage} alt="Picture of Sofie"></img>
				</div>
				<p className="image-text">
					With a background in speech pathology, I combine my passion for
					learning new skills and technology with great communication,
					problem-solving abilities, and an analytical mind with a keen
					attention to detail.
				</p>
			</div>
			<div className="arrow">
				<TbArrowNarrowDown />
			</div>
		</>
	)
}
