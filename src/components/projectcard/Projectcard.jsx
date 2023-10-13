import Button from "../button/Button"
import Photo from "../photo/Photo";
import Tag from "../tag/Tag"

const ProjectCard = ({
    children,
    button,
    photo,
    tag,
    className = ""
}) => {
    return (
        <>
            <div>
                <Photo />
                <h2>{children}</h2>
                <p>{children}</p>
                <Tag />
                <Button />
                <Button />

            </div>
        </>
    )
}

export default ProjectCard;