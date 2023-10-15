import Container from "../container/Container";
import data from "./data.json";

const Tech = () => {
    return (
        <Container className="bg-technigo-blue">
            <div className="flex flex-col text-center gap-20 md:text-left md:items-center md:flex-row">
                <h2 className="text-6xl font-bold text-white">{data.title}</h2>
                <p className="text-white font-semibold">{data.content}</p>
            </div>
        </Container>
    );
}

export default Tech;