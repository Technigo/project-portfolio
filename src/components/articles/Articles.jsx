import Article from "./Article";
import data from "./data.json";

const Articles = () => {
    return (
        <div className="bg-red-100">
            <div className="container mx-auto py-40">
                <h2 className="text-center md:text-left text-5xl font-bold mb-16 text-rose-400">{data.title}</h2>
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
            </div>
        </div>
    )
}

export default Articles;