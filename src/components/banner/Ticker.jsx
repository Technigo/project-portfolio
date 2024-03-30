import "./Ticker.css"

export const Ticker = () => {
	const tickerContent = "NATHALIE · SEO CONSULTANT & JUNIOR WEB DEVELOPER · "

	return (
		<div className='ticker-band'>
			<span className='ticker'>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
			</span>
			<span className='ticker'>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
			</span>
			<span className='ticker'>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
				<span>{tickerContent}</span>
			</span>
		</div>
	)
}
