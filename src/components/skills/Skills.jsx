import Container from "../container/Container";
import data from "./data.json";

const Skills = () => {
    const colors = [
        "bg-technigo-light-pink",
        "bg-technigo-light-blue",
        "bg-technigo-green",
        "bg-technigo-light-yellow"
    ];

    const text = [
        "text-white",
        "text-white",
        "text-white",
        "text-technigo-blue",
    ];

    return (
        <Container className="bg-technigo-blue">
            <h2 className="text-6xl font-bold text-white text-center mb-16">{data.title}</h2>
            <div className="grid gap-8 text-center md:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {data.categories.map((category, index) => (
                    <div key={category.title}>
                        <h3 className={`text-2xl font-medium inline-block px-1 ${text[index % 4]} mb-4 ${colors[index % 4]}`}>{category.title}</h3>
                        {category.skills.map((skill) => (
                            <p key={skill} className="text-white mb-1 pl-1">{skill}</p>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Skills;