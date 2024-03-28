import './Heading.css'
import myImage from '../assets/image.me.png'
import { GoArrowDown } from 'react-icons/go'

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
				<div className="heading-card">
					<img src={myImage} alt="Sofie" className="my-image"></img>
					<div className="heading-text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							est labore accusantium, iure officia earum, a porro, voluptatum
							quibusdam officiis fugiat explicabo. Magni blanditiis ea debitis
							quasi, omnis iste inventore?
						</p>
					</div>
				</div>
				<div className="arrow">
					<GoArrowDown />
				</div>
			</div>
		</>
	)
}
