import "./Image.css";
import imgLeft from "../assets/img-left.png";
import imgMiddle from "../assets/img-middle.png";
import imgRight from "../assets/img-right.png";

export const ImagesComponent = () => {
	return (
		<div className="image-container">
			<img src={imgLeft} alt="Left Image" className="image image-left" />
			<img src={imgMiddle} alt="Middle Image" className=" image image-middle" />
			<img src={imgRight} alt="Right Image" className="image image-right" />

		</div>
	);
};
