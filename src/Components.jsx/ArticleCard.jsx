// import { Photo } from "./components/Photo"
import { LinkButton } from "./LinkButton";
import { Photo } from "./Photo"; // Import the 'Photo' component

export const ArticleCard = () => {
  const publishedDate = "Oct 2023";
  const articleTitle = "From Healthcare Worker to Frontend Developer";
  const articleText = `"That's why I like tech as a community. Because it's helpful and inviting, especially to newbies."`;
  const url =
    "https://www.technigo.io/stories/antonia-from-healthcare-to-development";

  return (
    <div className="article-card">
      <Photo />
      <h2>{articleTitle}</h2>
      <p>{articleText}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
      <LinkButton
        buttonText=""
        url={url}
        icon="./src/Icons/Read-On-Medium.png"
      />
    </div>
  );
};
