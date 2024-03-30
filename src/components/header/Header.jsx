import "./Header.css"
import { PortraitHeader } from "../miscellaneous/Portrait"
import arrowDown from "../../assets/Vector 1.png"

export const Header = () => {
	return (
		<div className='header-container'>
			<div className='portrait-wrapper'>
				<PortraitHeader />
			</div>
			<div className='header-titles'>
				<p>Hi, I&apos;m Nathalie.</p>
				<h1>SEO Consultant & Junior Web Developer</h1>
			</div>
			<p className='intro-text'>
				Currently, I work as an SEO Consultant and participate in a boot camp
				for web development. I am a hands-on learning type and want to broaden
				my horizons in digital marketing. My goal is to transfer from a simple
				marketing girl to a front-end developer.
			</p>
			<img className='arrow' src={arrowDown} alt='Arrow pointing down' />
		</div>
	)
}
