import './MoreButton.css';

const MoreButton = ({ onClick }) => {
    return (
        <button className="more-button" onClick={onClick}>
            See more projects
        </button>
    );
};

export default MoreButton;
