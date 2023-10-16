// Importing necessary components and styles
import Container from "../container/Container";
import Article from "./Article";
import data from "./data.json";
import styles from "./Articles.module.css";

// Creating a functional component named Articles
const Articles = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        <div className="relative">
            {/* Adding a decorative squiggle element */}
            <div className={styles.squiggle} />
            {/* Using a Container component with a specific background color */}
            <Container className="bg-technigo-salmon">
                {/* Displaying a large title */}
                <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-technigo-pink">{data.title}</h2>
                {/* Creating a grid layout with a gap */}
                <div className="grid gap-24 grid-cols-1 md:grid-cols-2">
                    {/* Mapping over an array of articles and rendering an Article component for each */}
                    {data.articles.map((article, index) => (
                        <Article
                            key={index}
                            title={article.title}
                            preview={article.preview}
                            imageUrl={article.imageUrl}
                            imageAlt={article.imageAlt}
                            createdAt={article.createdAt}
                            articleUrl={article.articleUrl}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

// Exporting the Articles component to be used in other files
export default Articles;
