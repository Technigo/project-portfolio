import Image from "next/image";
import data from "./data.json";
import ArticleButton from "./ArticleButton.jsx";

const Articles = () => {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen border-t-4 border-rose-400 bg-rose-100">
        <div className="flex-grow mt-16 justify-center mx-4 md:mx-36 flex flex-col">
          <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-rose-400">My words</h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {/* The articles in this section are mapped out from the json-file in the same folder with pictures in the public-folder, and the information is displayed in a simple grid. */}
            {data.articles.map((article, index) => (
              <div key={index} className="flex flex-col mb-16 items-center">
                <div className="w-full aspect-auto box-border border-l-20 border-b-20 border-rose-400">
                  <Image
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className="w-full text-center md:text-left">
                  <div className="bg-black text-white w-fit px-2 py-1 text-sm mr-1 my-4">
                    <p>{article.published}</p>
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{article.title}</h3>
                  <p className="mb-4">{article.excerpt}</p>
                  {/* The imported ArticleButton to view the article (which I must confess don't really exist, but since the (surprinsingly good) titles and descriptions are made upp by ChatGPT the links go there) */}
                  <div className="ml-0">
                    <ArticleButton url={article.articleUrl} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
