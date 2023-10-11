import { BodyText } from "./Typo/BodyText"

export const SkillsList = ({ list }) => {

    return (
        <div>
            {list.map((item) => {
                return(
                <BodyText text={item} />
                )
            })}
        </div>
    )
}