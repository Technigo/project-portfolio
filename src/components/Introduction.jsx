import './Heading.css'
import myImage from '../assets/image.me.png'
import { TbArrowNarrowDown } from "react-icons/tb"

export const Introduction = () => {
	return (
		<>
			<div className="wrapper">
				<div className="heading-name">
					<h2>Hi, I'm Sofie Ferrari Strahl</h2>
				</div>
				<div className="heading-title">
					<h1>Frontend Developer</h1>
				</div>
				<div className="my-image">
					<img src={myImage} alt="Picture of Sofie" ></img>
						<p>
							With a background in speech pathology, I combine my passion for
							learning new skills and technology with great communication,
							problem-solving abilities, and an analytical mind with a keen
							attention to detail.
						</p>
				</div>
				<div className="arrow">
					<TbArrowNarrowDown />
				</div>
			</div>
		</>
	)
}
