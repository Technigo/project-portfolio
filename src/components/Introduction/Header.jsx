import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>
                Hi there, I’m <br />
                <span className="highlight">Jacqueline Kelly Hunt</span>
            </h1>
            <p className="tagline">
                Creative Frontend Developer with a Background in Product Management & Quality Assurance
            </p>
        </header>
    );
};

export default Header;
