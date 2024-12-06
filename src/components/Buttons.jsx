import "./Buttons.css";

export const Buttons = ({ buttons }) => {
	const handleButtonClick = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="button-container">
			{buttons.map((button, index) => {
				const isLiveDemo = button.text === "Live Demo"; // Check if this is the "Live Demo" button
				return (
					<button
						key={index}
						onClick={() => handleButtonClick(button.url)}
						className={`button ${button.className || ""} ${isLiveDemo ? "live-demo-button" : ""}`}
					>
						<img
							src={button.icon}
							alt={`${button.text} Icon`}
							className={`icon ${button.iconClass || ""}`}
						/>
						{button.text}
					</button>
				);
			})}
		</div>
	);
};
