// Importing necessary components and icons
import { IconArticle } from "@tabler/icons-react";
import Button from "../button/Button";
import Photo from "../photo/Photo";
import Tag from "../tag/Tag";

// Creating a functional component named Article which takes props as input
const Article = ({
    title,
    preview,
    imageUrl,
    imageAlt,
    createdAt,
    articleUrl,
}) => {
    // This is the JSX code that will be rendered when this component is used

    return (
        <div>
            {/* Displaying an image with the provided URL and alternative text */}
            <Photo
                src={imageUrl}
                alt={imageAlt}
                color="border-technigo-pink"
                className="mb-6"
            />
            {/* Displaying the creation date of the article */}
            <Tag>{createdAt}</Tag>
            {/* Displaying the title of the article */}
            <h3 className="mt-2 mb-4 text-2xl font-semibold">{title}</h3>
            {/* Displaying a preview of the article */}
            <p className="mb-6">{preview}</p>
            <div className="flex">
                {/* Creating a button with a link to the full article */}
                <Button
                    href={articleUrl}
                    ariaLabel="Read more"
                    className="bg-white hover:bg-technigo-yellow"
                >
                    {/* Displaying an article icon */}
                    <IconArticle className="h-8 w-8 inline-block mr-2" />
                    {/* Displaying text next to the icon */}
                    <span className="font-semibold align-middle">Read more</span>
                </Button>
            </div>
        </div>
    )
}

// Exporting the Article component to be used in other files
export default Article;
