import data from "./data.json";

const Skills = () => {
    return (
        <div className="bg-blue-700">
            <div className="container mx-auto py-40 px-8 md:px-40">
                <h2 className="text-6xl font-bold text-white text-center mb-16">{data.title}</h2>
                <div className="grid gap-8 text-center md:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {data.categories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-semibold inline-block px-1 text-white mb-4 bg-red-400">{category.title}</h3>
                            {category.skills.map((skill) => (
                                <p key={skill} className="text-white mb-1 pl-1">{skill}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;