import projectImages from "../../../projectImage.json"
// import "./image.css"

export const ProjectImage = ({repo, url, alt, className}) => {
    const repoImage = projectImages.find(img => img.repoName === repo)

    return (
        repoImage && (
            <a href={url} className="image-wrapper" aria-label="Link to project site">
                <img className={`${className}`}
                src={repoImage?.imageUrl}
                alt={alt}
                />
            </a>
        )
    )
}