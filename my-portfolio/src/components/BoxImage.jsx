import "./css/ProjectBox.css";


const BoxImage = ({ image }) => {
    return (
        <div className="box-image">
            <img src={image} alt="Project preview" />
        </div>
    );
};

export default BoxImage;
