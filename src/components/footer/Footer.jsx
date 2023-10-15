import data from "./data.json";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className="bg-technigo-pink py-4">
            <p className={`text-white font-medium whitespace-nowrap ${styles.scroll}`}>{data.tags.join(' • ')}</p>
        </div>
    );
}

export default Footer;
