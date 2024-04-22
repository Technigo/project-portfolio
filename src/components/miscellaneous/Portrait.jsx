import portraitNathalie from "../../assets/418309-Nathalie-TuFAV2.jpg"
import "./Portrait.css"

export const PortraitHeader = () => {
	return (
		<img
			className='portrait'
			src={portraitNathalie}
			alt='Image of Nathalie Tu'
		/>
	)
}

export const PortraitContact = () => {
	return (
		<img
			className='portrait'
			id='portrait'
			src={portraitNathalie}
			alt='Image of Nathalie Tu'
		/>
	)
}
