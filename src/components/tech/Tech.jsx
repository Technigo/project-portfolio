import data from "./data.json";

const Tech = () => {
    return (
        <div className="bg-blue-700">
            <div className="container mx-auto py-40 px-8 md:px-40">
                <div className="flex flex-col text-center gap-20 md:text-left md:items-center md:flex-row">
                    <h2 className="text-6xl font-bold text-white">{data.title}</h2>
                    <p className="text-white font-semibold">{data.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Tech;