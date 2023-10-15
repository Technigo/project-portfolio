import Container from "../container/Container";
import Article from "./Article";
import data from "./data.json";
import styles from "./Articles.module.css";

const Articles = () => {
    return (
        <div className="relative">
            <div className={styles.squiggle} />
            <Container className="bg-technigo-salmon">
                <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-technigo-pink">{data.title}</h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
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

export default Articles;