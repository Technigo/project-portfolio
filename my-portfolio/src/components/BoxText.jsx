import "./css/ProjectBox.css";


const BoxText = ({ title, description }) => {
    return (
        <article className="box-content">
            <h3 className="box-title">{title}</h3>
            <p className="box-description">{description}</p>
        </article>
    );
};

export default BoxText;