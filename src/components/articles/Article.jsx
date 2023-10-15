import { IconArticle } from "@tabler/icons-react";
import Button from "../button/Button";
import Photo from "../photo/Photo";
import Tag from "../tag/Tag";

const Article = ({
    title,
    preview,
    imageUrl,
    imageAlt,
    createdAt,
    articleUrl,
}) => {
    return (
        <div>
            <Photo
                src={imageUrl}
                alt={imageAlt}
                color="border-technigo-pink"
                className="mb-6"
            />
            <Tag>{createdAt}</Tag>
            <h3 className="mt-2 mb-4 text-2xl font-semibold">{title}</h3>
            <p className="mb-6">{preview}</p>
            <div className="flex">
                <Button
                    href={articleUrl}
                    ariaLabel="Read more"
                    className="bg-white hover:bg-technigo-yellow"
                >
                    <IconArticle className="h-8 w-8 inline-block mr-2" />
                    <span className="font-semibold align-middle">Read more</span>
                </Button>
            </div>
        </div>
    )
}

export default Article;