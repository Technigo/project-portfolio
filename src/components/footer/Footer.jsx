import data from "./data.json";

const Footer = () => {
    return (
        <div className="bg-red-400 py-4 text-center">
            <p className="text-white font-medium">{data.tags.join(' • ')}</p>
        </div>
    );
}

export default Footer;
