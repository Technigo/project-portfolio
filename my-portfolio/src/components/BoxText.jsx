import "./css/ProjectBox.css";
import { H3, P } from "./Typography"


const BoxText = ({ title, description }) => {
    return (
        <article className="box-content">
            <H3>{title}</H3>
            <P>{description}</P>
        </article>
    );
};

export default BoxText;