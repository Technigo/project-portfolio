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
                color="#FF4575"
                className="mb-6"
            />
            <Tag>{createdAt}</Tag>
            <h3 className="mt-2 mb-4 text-2xl font-semibold">{title}</h3>
            <p className="mb-6">{preview}</p>
            <Button href={articleUrl} className="bg-gray-100 hover:bg-gray-300">Read more</Button>
        </div>
    )
}

export default Article;