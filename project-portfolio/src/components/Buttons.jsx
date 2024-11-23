import "./Buttons.css";

export const Buttons = ({ buttons }) => {
	const handleButtonClick = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="button-container">
			{buttons.map((button, index) => (
				<button
					key={index}
					onClick={() => handleButtonClick(button.url)}
					className={`button ${button.className || ""}`} // Add dynamic class for button
				>
					<img
						src={button.icon}
						alt={`${button.text} Icon`}
						className={`icon ${button.iconClass || ""}`} // Add dynamic class for icon
					/>
					{button.text}
				</button>
			))}
		</div>
	);
};
