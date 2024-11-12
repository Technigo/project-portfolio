/* eslint-disable react/prop-types */
import "./Typography.css";

// components/ui/Typography.jsx
import "./Typography.css";

export const H1 = ({ children }) => <h1 className="heading1">{children}</h1>;

export const H2 = ({ children }) => <h2 className="heading2">{children}</h2>;

export const H3 = ({ children }) => <h3 className="heading3">{children}</h3>;

export const BodyText = ({ children }) => <p className="bodytext">{children}</p>;

export const BodyTextMedium = ({children}) => <p className="bodytext-medium">{children}</p>

export const BodyTextLarge = ({ children }) => <p className="bodytext-large">{children}</p> 