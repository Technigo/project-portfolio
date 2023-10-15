import data from "./data.json";

const Contact = () => {
    return (
        <div className="container mx-auto py-40 px-8 md:px-40">
            <h2 className="text-6xl font-bold text-blue-700 text-center mb-16">{data.title}</h2>
        </div>
    );
}

export default Contact;