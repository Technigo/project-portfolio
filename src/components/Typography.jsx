import "./css/Typography.css";


// H1-komponent
export const H1 = ({ heading, spacing }) => <h1 className={`title-h1 ${spacing}`}>{heading}</h1>;

// H2-komponent
export const H2 = ({ children }) => <h2 className="title-h2">{children}</h2>;

// H3-komponent
export const H3 = ({ children }) => <h3 className="title-h3">{children}</h3>;

// P-komponent
export const P = ({ children }) => <p className="body-p">{children}</p>;
